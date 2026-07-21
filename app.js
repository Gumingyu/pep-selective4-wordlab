const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const STORAGE_KEY = "pep-selective4-wordlab-v1";

const state = {
  progress: {},
  mistakes: {},
  sessions: [],
  selectedUnits: new Set(UNIT_META.map(unit => unit.id)),
  count: 10,
  mode: "mixed",
  queue: [],
  currentIndex: 0,
  correct: 0,
  combo: 0,
  maxCombo: 0,
  sessionMistakes: [],
  answerLocked: false
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) Object.assign(state, { progress: saved.progress || {}, mistakes: saved.mistakes || {}, sessions: saved.sessions || [] });
  } catch (_) {}
  const theme = localStorage.getItem(`${STORAGE_KEY}-theme`);
  if (theme) document.documentElement.dataset.theme = theme;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress: state.progress, mistakes: state.mistakes, sessions: state.sessions.slice(-50) }));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function unitMeta(id) { return UNIT_META.find(unit => unit.id === id); }
function coreVocabulary() { return VOCABULARY.filter(item => item.type !== "proper"); }
function masteryFor(item) { return state.progress[item.id]?.level || 0; }
function phoneticFor(word) { return PHONETICS[word.toLowerCase()] || ""; }

function navigate(view) {
  $$(".view").forEach(el => el.classList.toggle("active", el.id === `${view}-view`));
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  const titles = { dashboard: "浠婃棩瀛︿範鍙?, practice: "鍗曡瘝妫€娴?, vocabulary: "鍏ㄥ唽鍗曡瘝琛?, mistakes: "閿欒瘝澶嶄範" };
  $("#page-title").textContent = titles[view];
  if (view === "vocabulary") renderVocabulary();
  if (view === "mistakes") renderMistakes();
  if (view === "dashboard") renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDashboard() {
  const all = coreVocabulary();
  const seen = all.filter(item => state.progress[item.id]);
  const mastered = all.filter(item => masteryFor(item) >= 3);
  const review = Object.keys(state.mistakes).length;
  const rate = all.length ? Math.round(mastered.length / all.length * 100) : 0;
  $("#seen-count").textContent = seen.length;
  $("#mastered-count").textContent = mastered.length;
  $("#review-count").textContent = review;
  $("#mastery-rate").textContent = `${rate}%`;
  $("#mastery-bar").style.width = `${rate}%`;
  $("#streak-days").textContent = `${calculateStreak()} 澶ー;
  if (review) {
    $("#daily-title").textContent = `澶嶄範 ${Math.min(review, 10)} 涓敊璇峘;
    $("#daily-copy").textContent = "鍏堜慨澶嶆渶杩戠殑璁板繂鏂偣锛屽啀杩涘叆鏂拌瘝璁粌锛屼繚鎸佹纭洖蹇嗙殑杩炵画鎬с€?;
    $("#daily-action").textContent = "杩涘叆閿欒瘝澶嶄範 鈫?;
    $("#daily-action").onclick = () => navigate("mistakes");
  } else {
    $("#daily-title").textContent = seen.length ? "缁х画宸╁浐宸插鍐呭" : "鍏堝仛涓€娆¤瘖鏂?;
    $("#daily-copy").textContent = seen.length ? "娣峰悎棰樺瀷浼氫紭鍏堟娊鍙栧皻鏈ǔ瀹氭帉鎻＄殑璇嶃€? : "10 閬撴贩鍚堥浼氬揩閫熸壘鍒版湰鍐屾渶闇€瑕佸涔犵殑璇嶃€?;
    $("#daily-action").textContent = "杩涘叆浠婃棩璁粌 鈫?;
    $("#daily-action").onclick = () => quickStart();
  }
  $("#unit-grid").innerHTML = UNIT_META.map(unit => {
    const words = coreVocabulary().filter(item => item.unit === unit.id);
    const masteredCount = words.filter(item => masteryFor(item) >= 3).length;
    const rate = words.length ? Math.round(masteredCount / words.length * 100) : 0;
    return `<article class="unit-card" data-unit="${unit.id}" style="--unit:${unit.color}">
      <div class="unit-card-top"><span class="unit-number">${unit.short}</span><span class="unit-status">${rate ? `${rate}% 鎺屾彙` : "灏氭湭寮€濮?}</span></div>
      <h3>${unit.title}</h3><p>${words.length} 涓牳蹇冭瘝鏉?/p><div class="mini-track"><i style="width:${rate}%"></i></div>
    </article>`;
  }).join("");
  $$(".unit-card").forEach(card => card.onclick = () => openUnit(card.dataset.unit));
}

function calculateStreak() {
  const days = new Set(state.sessions.map(s => s.date));
  let streak = 0;
  const date = new Date();
  while (days.has(date.toISOString().slice(0, 10))) {
    streak++;
    date.setDate(date.getDate() - 1);
  }
  return streak;
}

function renderSetup() {
  $("#unit-selector").innerHTML = UNIT_META.map(unit => {
    const count = coreVocabulary().filter(item => item.unit === unit.id).length;
    return `<button class="unit-choice ${state.selectedUnits.has(unit.id) ? "selected" : ""}" data-unit="${unit.id}" style="--unit:${unit.color}"><strong>${unit.label}</strong><span>${unit.title} 路 ${count} 璇?/span></button>`;
  }).join("");
  $$(".unit-choice").forEach(button => button.onclick = () => {
    const id = button.dataset.unit;
    if (state.selectedUnits.has(id) && state.selectedUnits.size > 1) state.selectedUnits.delete(id); else state.selectedUnits.add(id);
    renderSetup();
  });
  const pool = coreVocabulary().filter(item => state.selectedUnits.has(item.unit));
  $("#pool-count").textContent = pool.length;
}

function openUnit(unitId) {
  state.selectedUnits = new Set([unitId]);
  renderSetup();
  resetPracticePanels();
  navigate("practice");
}

function quickStart() {
  state.selectedUnits = new Set(UNIT_META.map(unit => unit.id));
  state.count = 10;
  state.mode = "mixed";
  renderSetup();
  startSession();
  navigate("practice");
}

function weightedQueue(pool, count) {
  const weighted = pool.flatMap(item => {
    const level = masteryFor(item);
    const weight = state.mistakes[item.id] ? 4 : Math.max(1, 4 - level);
    return Array(weight).fill(item);
  });
  const chosen = [];
  const used = new Set();
  for (const item of shuffle(weighted)) {
    if (!used.has(item.id)) { chosen.push(item); used.add(item.id); }
    if (chosen.length >= Math.min(count, pool.length)) break;
  }
  return chosen;
}

function startSession(customPool = null) {
  const pool = customPool || coreVocabulary().filter(item => state.selectedUnits.has(item.unit));
  if (!pool.length) return;
  state.queue = weightedQueue(pool, state.count);
  state.currentIndex = 0; state.correct = 0; state.combo = 0; state.maxCombo = 0; state.sessionMistakes = []; state.answerLocked = false;
  $("#setup-panel").classList.add("hidden");
  $("#result-panel").classList.add("hidden");
  $("#quiz-panel").classList.remove("hidden");
  showQuestion();
}

function resetPracticePanels() {
  $("#setup-panel").classList.remove("hidden");
  $("#quiz-panel").classList.add("hidden");
  $("#result-panel").classList.add("hidden");
}

function currentMode() {
  if (state.mode !== "mixed") return state.mode;
  return Math.random() < .55 ? "en-zh" : "zh-en";
}

function showQuestion() {
  state.answerLocked = false;
  const item = state.queue[state.currentIndex];
  const mode = currentMode();
  item._mode = mode;
  const meta = unitMeta(item.unit);
  $("#quiz-position").textContent = `${state.currentIndex + 1} / ${state.queue.length}`;
  $("#quiz-progress-bar").style.width = `${state.currentIndex / state.queue.length * 100}%`;
  $("#quiz-unit").textContent = `${meta.label} 路 ${meta.title}`;
  $("#combo-label").textContent = `杩炲嚮 ${state.combo}`;
  $("#question-label").textContent = mode === "en-zh" ? "璇烽€夋嫨鏈€鍑嗙‘鐨勪腑鏂囬噴涔? : "鏍规嵁閲婁箟鍐欏嚭鑻辨枃鍗曡瘝鎴栫煭璇?;
  $("#question-word").textContent = mode === "en-zh" ? item.word : item.meaning;
  $("#question-extra").textContent = mode === "en-zh" ? ([phoneticFor(item.word), item.type === "extra" ? "鎷撳睍璇? : "鏁欐潗鏍稿績璇?].filter(Boolean).join(" 路 ")) : `${meta.label} 路 娉ㄦ剰鎷煎啓`;
  $("#speak-word").classList.toggle("hidden", mode !== "en-zh");
  $("#speak-word").onclick = () => speak(item.word);
  $("#feedback").classList.add("hidden");
  $("#next-question").classList.add("hidden");
  if (mode === "en-zh") renderChoices(item); else renderTextAnswer(item);
}

function renderChoices(item) {
  const candidates = VOCABULARY.filter(other => other.id !== item.id && other.unit === item.unit && other.type !== "proper");
  const options = shuffle([item, ...shuffle(candidates).slice(0, 3)]);
  $("#answer-area").innerHTML = options.map((option, index) => `<button class="answer-option" data-id="${option.id}"><b>${String.fromCharCode(65 + index)}.</b> ${option.meaning}</button>`).join("");
  $$(".answer-option").forEach(button => button.onclick = () => submitChoice(button, item));
}

function renderTextAnswer(item) {
  $("#answer-area").innerHTML = `<div class="text-answer-wrap"><input class="text-answer" id="text-answer" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="杈撳叆鑻辨枃绛旀"><button class="primary-button submit-answer" id="submit-text">鎻愪氦绛旀</button></div>`;
  const input = $("#text-answer");
  input.focus();
  $("#submit-text").onclick = () => submitText(input.value, item);
  input.onkeydown = event => { if (event.key === "Enter") submitText(input.value, item); };
}

function normalise(text) {
  return text.toLowerCase().replace(/[.鈥?)]/g, "").replace(/sth/g, "").replace(/\s+/g, " ").trim();
}

function submitChoice(button, item) {
  if (state.answerLocked) return;
  const correct = button.dataset.id === item.id;
  $$(".answer-option").forEach(option => {
    option.disabled = true;
    if (option.dataset.id === item.id) option.classList.add("correct");
  });
  if (!correct) button.classList.add("wrong");
  finishAnswer(correct, item);
}

function submitText(value, item) {
  if (state.answerLocked || !value.trim()) return;
  const correct = normalise(value) === normalise(item.word);
  const input = $("#text-answer");
  input.disabled = true;
  input.style.borderColor = correct ? "#278570" : "#c34c55";
  $("#submit-text").disabled = true;
  finishAnswer(correct, item, value);
}

function finishAnswer(correct, item, given = "") {
  state.answerLocked = true;
  const progress = state.progress[item.id] || { level: 0, correct: 0, wrong: 0 };
  if (correct) {
    state.correct++; state.combo++; state.maxCombo = Math.max(state.maxCombo, state.combo);
    progress.correct++; progress.level = Math.min(4, progress.level + 1);
    delete state.mistakes[item.id];
  } else {
    state.combo = 0; progress.wrong++; progress.level = Math.max(0, progress.level - 1);
    state.mistakes[item.id] = { count: (state.mistakes[item.id]?.count || 0) + 1, last: Date.now() };
    state.sessionMistakes.push(item.id);
  }
  progress.last = Date.now(); state.progress[item.id] = progress; saveState();
  const feedback = $("#feedback");
  feedback.innerHTML = correct
    ? `<strong>鍥炵瓟姝ｇ‘</strong>${item.word}锛?{item.meaning}`
    : `<strong>${given ? `浣犵殑绛旀锛?{given}` : "杩欓闇€瑕佸啀鐪嬩竴娆?}</strong>姝ｇ‘绛旀鏄?<b>${item.word}</b>锛?{item.meaning}`;
  feedback.classList.remove("hidden");
  $("#combo-label").textContent = `杩炲嚮 ${state.combo}`;
  $("#next-question").textContent = state.currentIndex === state.queue.length - 1 ? "鏌ョ湅缁撴灉" : "涓嬩竴棰?;
  $("#next-question").classList.remove("hidden");
}

function nextQuestion() {
  if (state.currentIndex < state.queue.length - 1) { state.currentIndex++; showQuestion(); }
  else showResults();
}

function showResults() {
  $("#quiz-panel").classList.add("hidden"); $("#result-panel").classList.remove("hidden");
  const rate = Math.round(state.correct / state.queue.length * 100);
  state.sessions.push({ date: new Date().toISOString().slice(0, 10), score: rate, count: state.queue.length }); saveState();
  $("#result-score").textContent = `${rate}%`;
  $("#result-title").textContent = rate >= 90 ? "璁板繂鎻愬彇寰堢ǔ瀹? : rate >= 70 ? "鍩虹涓嶉敊锛岀户缁珐鍥? : "钖勫急璇嶅凡缁忓畾浣?;
  $("#result-copy").textContent = rate >= 90 ? "鍙互鍒囨崲鍗曞厓鎴栧鍔犱腑璇戣嫳棰橈紝缁х画鎻愰珮涓诲姩鎷煎啓鑳藉姏銆? : "鍏堝涔犳湰杞敊璇嶏紝鍐嶈繘琛屼笅涓€杞紝鏁堟灉姣旂珛鍗冲埛澶ч噺鏂伴鏇村ソ銆?;
  $("#result-stats").innerHTML = `<div><strong>${state.correct}</strong><span>绛斿</span></div><div><strong>${state.queue.length - state.correct}</strong><span>寰呭涔?/span></div><div><strong>${state.maxCombo}</strong><span>鏈€楂樿繛鍑?/span></div>`;
  $("#retry-mistakes").disabled = !state.sessionMistakes.length;
}

function speak(word) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word.replace(/\.\.\./g, "something"));
  utterance.lang = "en-US"; utterance.rate = .82;
  speechSynthesis.speak(utterance);
}

function renderVocabulary() {
  const query = $("#vocab-search").value.trim().toLowerCase();
  const unit = $("#vocab-unit-filter").value;
  const type = $("#vocab-type-filter").value;
  const filtered = VOCABULARY.filter(item =>
    (unit === "all" || item.unit === unit) &&
    (type === "all" || item.type === type) &&
    (!query || item.word.toLowerCase().includes(query) || item.meaning.includes(query))
  );
  $("#vocab-result-count").textContent = filtered.length;
  $("#vocab-list").innerHTML = filtered.map(item => {
    const meta = unitMeta(item.unit);
    const label = item.type === "proper" ? "涓撴湁鍚嶈瘝" : item.type === "extra" ? "鎷撳睍璇? : "璇炬爣鏍稿績";
    const phonetic = phoneticFor(item.word);
    return `<div class="vocab-row" style="--unit:${meta.color}"><span class="unit-tag">${meta.label}</span><div class="vocab-word">${item.word}<small>${phonetic || label}${phonetic ? ` 路 ${label}` : ""}</small></div><div class="vocab-meaning">${item.meaning}</div><button class="speak-button" data-speak="${item.id}" title="鏈楄 ${item.word}">鈼?)</button></div>`;
  }).join("");
  $$('[data-speak]').forEach(button => button.onclick = () => speak(VOCABULARY.find(item => item.id === button.dataset.speak).word));
}

function renderMistakes() {
  const items = Object.entries(state.mistakes).sort((a, b) => b[1].last - a[1].last).map(([id, stats]) => ({ item: VOCABULARY.find(v => v.id === id), stats })).filter(x => x.item);
  $("#mistake-empty").classList.toggle("hidden", items.length > 0);
  $("#mistake-content").classList.toggle("hidden", items.length === 0);
  $("#mistake-list").innerHTML = items.map(({ item, stats }) => `<article class="mistake-card"><small>${unitMeta(item.unit).label} 路 閿欒 ${stats.count} 娆?/small><strong>${item.word}</strong><span>${item.meaning}</span></article>`).join("");
}

function initControls() {
  $$(".nav-item").forEach(button => button.onclick = () => navigate(button.dataset.view));
  $("#quick-start").onclick = quickStart; $("#daily-action").onclick = quickStart;
  $("#all-units").onclick = quickStart;
  $$('[data-go-practice]').forEach(button => button.onclick = () => navigate("practice"));
  $("#start-session").onclick = () => startSession();
  $("#next-question").onclick = nextQuestion;
  $("#quit-quiz").onclick = resetPracticePanels;
  $("#back-dashboard").onclick = () => { resetPracticePanels(); navigate("dashboard"); };
  $("#retry-mistakes").onclick = () => { const pool = [...new Set(state.sessionMistakes)].map(id => VOCABULARY.find(item => item.id === id)).filter(Boolean); state.count = pool.length; startSession(pool); };
  $("#practice-mistakes").onclick = () => { const pool = Object.keys(state.mistakes).map(id => VOCABULARY.find(item => item.id === id)).filter(Boolean); state.count = Math.min(20, pool.length); startSession(pool); navigate("practice"); };
  $$("#count-selector button").forEach(button => button.onclick = () => { state.count = Number(button.dataset.count); $$("#count-selector button").forEach(b => b.classList.toggle("active", b === button)); });
  $$("#mode-selector button").forEach(button => button.onclick = () => { state.mode = button.dataset.mode; $$("#mode-selector button").forEach(b => b.classList.toggle("active", b === button)); });
  $("#vocab-search").oninput = renderVocabulary; $("#vocab-unit-filter").onchange = renderVocabulary; $("#vocab-type-filter").onchange = renderVocabulary;
  $("#print-list").onclick = () => window.print();
  $("#theme-toggle").onclick = () => { const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = next; localStorage.setItem(`${STORAGE_KEY}-theme`, next); };
  document.addEventListener("keydown", event => {
    if (!$("#quiz-panel").classList.contains("hidden") && state.answerLocked && event.key === "Enter") nextQuestion();
    if (!state.answerLocked && event.key >= "1" && event.key <= "4") $$(".answer-option")[Number(event.key) - 1]?.click();
  });
}

function init() {
  loadState();
  $("#vocab-unit-filter").innerHTML = `<option value="all">鍏ㄩ儴鍗曞厓</option>` + UNIT_META.map(unit => `<option value="${unit.id}">${unit.label}</option>`).join("");
  initControls(); renderSetup(); renderDashboard(); renderVocabulary(); renderMistakes();
}

init();

