const UNIT_META = {
  1: { title: 'Science Fiction' },
  2: { title: 'Iconic Attractions' },
  3: { title: 'Sea Exploration' },
  4: { title: 'Sharing' },
  5: { title: 'Launching Your Career' },
};

const RAW_VOCABULARY = {
  1: `
fiction|n. 灏忚锛涜櫄鏋勭殑浜媩core
science fiction|绉戝够灏忚锛堟垨褰辩墖绛夛級|core
test out|妫€楠岋紱娴嬭瘯|core
bonus|n. 鎰忓鏀惰幏锛涘閲戯紱绾㈠埄|core
more like|鏇村儚鏄紱鏇存帴杩憒core
ridiculous|adj. 鎰氳牏鐨勶紱鑽掕艾鐨勶紱 鑽掑攼鐨剕extra
integrity|n. 璇氬疄姝ｇ洿锛涘畬鏁达紱瀹屽ソ|core
dignity|n. 搴勯噸锛涘簞涓ワ紱灏婁弗|core
salary|n. 钖按锛涜柂閲憒core
absurd|adj. 鑽掕艾鐨勶紱鑽掑攼鐨剕extra
appointment|n. 棰勭害锛涚害浼氾紱濮斾换|core
nail|n. 鎸囩敳锛涜毒鐢诧紱閽夊瓙 vt.锛堢敤閽夊瓙锛夐拤鐗紱鍥哄畾|core
saleswoman|n. 濂冲敭璐у憳锛涘コ鎺ㄩ攢鍛榺core
guilty|adj. 鍐呯枤鐨勶紱鏈夌姜鐨勶紱鏈夎繃澶辩殑|core
suspend|vt. 鎮紱鎸傦紱鏆傚仠锛涙殏缂搢core
ladder|n. 姊瓙锛涢樁姊瘄extra
dismiss|vt. 璁╋紙鏌愪汉锛夌寮€锛涜В鏁ｏ紱 瑙ｉ泧锛涙秷闄core
declare|vt. 琛ㄦ槑锛涘绉帮紱鍏竷|core
whereas|conj. 鐒惰€岋紱浣嗘槸锛涘敖绠extra
rumour|n. 璋ｈ█锛涗紶闂粅extra
presume|vt. & vi. 鍋囪锛涘亣瀹殀extra
fare|n. 杞﹁垂锛涜埞璐癸紱椋炴満绁ㄤ环|extra
weekly|adj. 姣忓懆鐨?n. 鍛ㄥ垔|core
on a 鈥?basis|鏍规嵁锛涗互鈥︹€︾殑鏂瑰紡锛堝熀鍑嗭級|core
calculate|vt. 璁＄畻锛涙牳绠楋紱棰勬祴|core
chairwoman|n. 濂充富甯紱濂宠懀浜嬮暱锛涘コ濮斿憳闀縷core
gramme (NAmE gram)|n. 鍏嬶紙閲嶉噺鍗曚綅锛墊core
flour|n. 闈㈢矇锛涳紙璋风墿纾ㄦ垚鐨勶級绮墊core
venue|n. 娲诲姩鍦哄湴锛堝闊充箰鍘呫€佷細鍦虹瓑锛墊core
salesman|n. 鍞揣鍛橈紱鎺ㄩ攢鍛榺core
alien|n. 澶栨槦浜猴紙鐢熺墿锛夛紱澶栧浗浜?adj. 闄岀敓鐨勶紱澶栨槦鐨勶紱澶栧浗鐨剕extra
pros and cons|浜嬬墿鐨勫埄涓庡紛锛涙敮鎸佷笌鍙嶅|core
blurred|adj. 妯＄硦涓嶆竻鐨勶紱闅句互鍖哄垎鐨剕extra
superior|adj. 鏇村ソ鐨勶紱鍗犱紭鍔跨殑锛涳紙鍦ㄧ骇鍒垨閲嶈鎬т笂锛夋洿楂樼殑|core
superior to|姣斺€︹€︽洿濂斤紱鏇磋儨涓€绛箌core
take over|鍗犱笂椋庯紱鍙栬€屼唬涔嬶紱鎺ョ锛涙帴鎵媩core
inaction|n. 鏃犺鍔紱涓嶉噰鍙栨帾鏂絴extra
conflict with|涓庘€︹€﹀啿绐佹垨鎶佃Е|core
labour|n. 鍔冲姩锛堣€咃級锛涗綋鍔涘姵鍔?vi. 濂嬫枟锛涘姫鍔涘伐浣渱core
leather|n. 鐨潻锛沎pl.] 鐨。锛涚毊澶栧|core
lever|n. 鎿嶇旱鏉嗭紱鏉犳潌|extra
panel|n. 鎺у埗鏉匡紱浠〃鐩橈紱涓撳鍜ㄨ缁剕core
inch|n. 鑻卞锛堥暱搴﹀崟浣嶏紝绛変簬 2.54 鍘樼背锛墊core
backwards (NAmE backward)|adv. 鍚戝悗锛涘€掔潃锛涘線鍥瀨core
grip|vt. & vi. 绱ф彙锛涙姄绱extra
hazy|adj. 妯＄硦鐨勶紱鏈﹁儳鐨勶紱鍥版儜鐨剕extra
niece|n. 渚勫コ锛涘鐢ュコ|core
fetch|vt.锛堝幓锛夋嬁鏉ワ紱锛堝幓锛夎鏉core
handkerchief|n. 鎵嬪笗锛涚焊宸緗core
lamp|n. 鐏紱鍙扮伅|core
turn out|鍏虫帀锛涚唲鐏紱鍦ㄥ満锛涗娇鏈濆锛涚粨鏋滄槸|core
pace|n. 閫熷害锛涙浼愶紱鑺傚 vt. & vi. 纭畾閫熷害锛涜皟鏁磋妭濂弢core
fall away|锛堥€愭笎锛夊噺灏戯紱娑堝け|core
division|n. 鍒嗗紑锛涘垎闅旓紱宸紓锛涢櫎锛堟硶锛墊core
puff|n. 锛堢儫銆佹皵绛夌殑锛変竴缂曪紱灏戦噺锛涘枠鎭瘄extra
urge|n. 寮虹儓鐨勬鏈涳紱鍐插姩 vt. 鍌績锛涘姏鍔濓紱澶у姏鎺ㄨ崘|core
have an urge to|鏈夊己鐑堢殑娆叉湜鍋氭煇浜媩core
random|adj. 闅忔満鐨勶紱涓嶅彲鎬濊鐨剕core
maximum|adj. 鏈€澶ф瀬闄愮殑 n. 鏈€澶ч噺锛涙渶澶ч檺搴core
explode|vi. & vt. 鐖嗙偢锛涚垎鐮磡core
jolt|n. 闇囧姩锛涙憞鏅冿紱棰犵案 vt. & vi.锛堜娇锛夐渿鍔紱鎽囨檭|extra
flip|vt. & vi.锛堜娇锛夊揩閫熺炕杞紱锛堢敤鎵嬫寚锛夎交鎶泑extra
stun|vt. 浣块渿鎯婏紱 浣挎槒杩穦extra
mud|n. 娉ワ紱娉ユ祮|core
overstatement|n. 澶稿ぇ锛涘じ寮爘extra
Isaac Asimov|鑹捐惃鍏嬄烽樋瑗胯帿澶珅proper
Larry Belmont|鎷夐噷路璐濆皵钂欑壒|proper
Claire|鍏嬭幈灏攟proper
Gladys Claffern|鏍兼媺杩笣路鍏嬫媺鑺瑋proper
Braille (also braille)|甯冩媺鑰剁洸鏂囷紙鍑哥偣绗﹀彿锛墊proper
The Three-Body Problem|銆婁笁浣撱€媩proper
Hugo Award|闆ㄦ灉濂東proper
`,
  2: `
iconic|adj. 绗﹀彿鐨勶紱鍥炬爣鐨剕extra
foundation|n. 鍒涘缓锛涘熀纭€锛涘湴鍩簗core
political|adj. 鏀挎不鐨剕core
didgeridoo|n. 杩悏閲屾潨绠extra
located|adj. 浣嶄簬|extra
equator|n. 璧ら亾|core
barbecue (abbr. BBQ)|n. (abbr. BBQ) 鎴峰鐑х儰锛涚儰鏋秥core
bakery|n. 闈㈠寘锛堢硶楗硷級搴楋紱闈㈠寘鍘倈core
joint|n. 鍏叡鍦烘墍锛堝挨鎸囦环鏍间綆寤夌殑楗鍜屽ū涔愬満鎵€锛夛紱 鍏宠妭 adj. 鑱斿悎鐨勶紱鍏卞悓鐨剕core
butcher|n. 鑲夎穿锛涘睜澶紱鍒藉瓙鎵媩core
premier|adj. 鏈€钁楀悕鐨勶紱绗竴鐨勶紱棣栬鐨?n. 鎬荤悊锛涢鐩竱core
herb|n. 鑽崏锛涢鑽夛紱鑽夋湰|core
dim sim|锛堢壒鎸囨境澶у埄浜氱殑锛夌偣蹇億extra
hollow|adj. 涓┖鐨勶紱绌哄績鐨剕extra
vibrate|vt. & vi.锛堜娇锛夋尟鍔▅extra
horn|n.锛堜箰鍣級鍙穦extra
pitch|n. 闊抽珮|extra
straightforward|adj. 鍧︾巼鐨勶紱绠€鍗曠殑|core
slogan|n. 鏍囪锛涘彛鍙穦extra
minister|n. 閮ㄩ暱锛涘ぇ鑷ｏ紱澶栦氦浣胯妭|core
prime minister|棣栫浉锛涙€荤悊|core
frog|n. 铔欙紱闈掕洐|core
arrow|n. 绠紱绠ご|core
entitle|vt. 缁欌€︹€﹀懡鍚嶏紙鎴栭鍚嶏級锛涗娇浜湁鏉冨埄|core
getaway|n. 閫傚悎搴﹀亣鐨勫湴鏂箌extra
dive|vi. & n.锛坉ived/dove, dived锛?娼滄按锛涜烦姘达紱淇啿|core
kayaking|n. 鍒掔毊鑹噟extra
peak season|楂樺嘲瀛ｈ妭|core
freedom|n. 鑷敱锛涗笉鍙椻€︹€﹀奖鍝嶇殑鐘舵€亅core
domain|n. 棰嗗煙锛涢鍦燂紱鑼冨洿|core
sponsor|vt. 鍊¤锛涜禐鍔╋紱涓诲姙 n.锛堟硶妗堢瓑鐨勶級鍊¤鑰咃紱璧炲姪鑰厊core
liberty|n. 鑷敱|core
golf|n. 楂樺皵澶悆杩愬姩|core
strait|n. 娴峰场|core
sample|n. 鏍锋湰锛涙牱鍝亅core
monument|n. 绾康纰戯紙鎴栭銆佸爞銆佸儚绛夛級锛涘巻鍙查仐杩箌extra
kiwi|n. 鍑犵淮锛堟柊瑗垮叞楦燂級|extra
geyser|n. 闂存瓏娉墊extra
sulphuric pool|纭粍姹爘extra
manuka honey|楹﹀崲鍗¤渹铚渱extra
bungee jumping|韫︽瀬璺硘extra
a flock of|涓€缇わ紙缇婃垨楦燂級|core
geothermal park|鍦扮儹鍏洯|extra
distribution|n. 鍒嗗竷锛涘垎閰嶏紱鍒嗗彂|core
pouch|n. 鑲插効琚嬶紱灏忚瀛愶紱鑽峰寘|extra
temporary|adj. 鏆傛椂鐨勶紱鐭殏鐨剕core
phase|n. 闃舵锛涙椂鏈焲core
trunk|n. 鏍戝共|core
licensed|adj. 寰楀埌姝ｅ紡璁稿彲鐨剕extra
license|vt. 鎵瑰噯锛涜鍙?n.锛? licence锛夎鍙瘉锛涙墽鐓core
session|n. 涓€鍦猴紱涓€娈垫椂闂达紱浼氳|core
frequency|n. 鍙戠敓鐜囷紱閲嶅鐜囷紱 锛堝０娉㈡垨鐢电娉㈡尟鍔ㄧ殑锛夐鐜噟core
violent|adj. 鏆村姏鐨勶紱鐚涚儓鐨剕extra
violence|n. 鏆村姏锛涙毚琛寍core
nest|n. 宸㈢┐锛涢笩绐濓紱绉樺瘑绐濈偣|core
mammal|n. 鍝轰钩鍔ㄧ墿|extra
biology|n. 鐢熺悊锛涚敓鐗╁|core
hatch|vi. 瀛靛嚭锛涚牬澹?鐨?vt. 浣垮鍑猴紱绛栧垝锛涳紙灏ゆ寚锛夊瘑璋媩core
capacity|n. 鑳藉姏锛涘閲弢core
a handful of|灏戞暟浜猴紙鎴栫墿锛夛紱涓€鎶婏紙鐨勯噺锛墊core
fence|n. 鏍呮爮锛涘洿鏍弢core
prison|n. 鐩戠嫳锛涚洃绂亅core
grand|adj. 澶э紱瀹忓ぇ鐨剕core
Aborigine|婢冲ぇ鍒╀簹鍦熻憲|proper
Sydney|鎮夊凹锛堟境澶у埄浜氬煄甯傦級|proper
Bondi Beach|閭﹁开娴锋哗|proper
Chiang Mai|娓呰繄锛堟嘲鍥藉煄甯傦級|proper
the Bay of Islands|宀涘笨婀緗proper
the haka|鍝堝崱鑸烇紙浼犵粺姣涘埄浼存瓕鎴樿垶锛墊proper
Edmonds|鍩冨痉钂欏吂|proper
Felicity|璐硅帀瑗胯拏|proper
Tasmanian devil|濉旀柉椹凹浜氭伓榄旓紱琚嬬嵕|proper
Tasmania|濉旀柉椹凹浜氾紙婢冲ぇ鍒╀簹宸炲悕锛墊proper
duck-billed platypus|楦槾鍏絴proper
`,
  3: `
tale|n. 鏁呬簨锛涘彊杩皘core
merchant|n. 鍟嗕汉锛涙壒鍙戝晢 adj. 娴蜂笂璐ц繍鐨剕extra
set sail|璧疯埅锛涘紑鑸獆core
extend|vt. 鎵╁睍锛涗娇浼搁暱锛涘欢闀縷core
negotiate|vt. 鍟嗗畾锛涜揪鎴愶紙鍗忚锛?vi. 璋堝垽锛涚鍟嗭紱鍗忓晢|core
fleet|n. 鑸伴槦锛涙満缇わ紱杞﹂槦|extra
behold|vt. 锛坆eheld, beheld锛?鐪嬶紱鐪嬭|extra
league|n. 绛夌骇锛涙按骞筹紱鑱斿悎浼氾紱鑱旇禌|core
in a league of one鈥檚 own|鐙椋庨獨|core
royal|adj. 鐨囧鐨勶紱鐜嬪鐨勶紱楂樿吹鐨剕core
spice|n. 锛堣皟鍛筹級棣欐枡|extra
withdraw|vi. & vt. 锛坵ithdrew, withdrawn锛?锛堜娇锛夋挙鍥烇紱鎾ょ|core
withdraw from|閫€鍑猴紱鎾ゅ洖|core
channel|n. 鑸亾锛涙捣宄★紱棰戦亾|core
maritime|adj. 娴风殑锛涙捣杩愮殑锛涙捣浜嬬殑|extra
bond|n. 绾藉甫锛涘叧绯?vt. & vi. 澧炲己淇′换鍏崇郴锛涗娇鐗㈠浐缁撳悎|core
in hand|鍦ㄦ墜澶达紱鍙緵浣跨敤|core
politics|n. 鏀挎不锛涙斂娌昏鐐箌core
profession|n. 鑱屼笟锛涜涓殀core
tournament|n. 閿︽爣璧涳紱鑱旇禌|core
mixture|n. 娣峰悎锛涚粨鍚堜綋锛涙贩鍚堢墿|core
laptop|n. 绗旇鏈數鑴戯紱渚挎惡寮忕數鑴憒core
coverage|n. 鏂伴椈鎶ラ亾锛涜鐩栬寖鍥磡core
press conference|璁拌€呮嫑寰呬細锛涙柊闂诲彂甯冧細|core
applaud|vt. & vi. 榧撴帉 vt. 绉拌禐锛涜禐璧弢core
tax|vt. 瀵光€︹€﹀緛绋庯紱浣跨撼绋?n. 绋庯紱绋庢|core
manned|adj. 鏈変汉鎺у埗鐨勶紱闇€浜烘搷绾电殑|extra
submersible|n. 娼滄按鍣紱鍙綔鑸箌extra
underwater|adv. 鍦ㄦ按涓?adj. 姘翠笅鐨剕extra
capsule|n. 鑳跺泭锛涘お绌鸿埍|core
coral|n. 鐝婄憵|extra
migration|n. 杩佺Щ锛涜縼寰欙紱绉诲眳|extra
directory|n. 鍚嶅綍锛涚數璇濆彿鐮佺翱锛?锛堣绠楁満鏂囦欢鎴栫▼搴忕殑锛夌洰褰晐core
meanwhile|adv. 涓庢鍚屾椂锛涳紙姣旇緝涓ゆ柟闈級瀵规瘮涔嬩笅|extra
exploit|vt. 寮€鍙戯紱鍒╃敤锛涘墺鍓妡extra
gallon|n. 鍔犱粦锛堝绉崟浣嶏紝1 鑻卞埗鍔犱粦绾︾瓑浜?4.5 鍗囷級|extra
murder|vt. 璋嬫潃锛涘嚩鏉€锛涙瘉鍧?n. 璋嬫潃锛涘嚩鏉€|core
mercy|n. 浠佹厛锛涘鎭曪紱鎭╂儬|core
possession|n. [usually pl.] 涓汉璐骇锛?鎷ユ湁锛涙帶鍒秥core
opponent|n. 鍙嶅鑰咃紱瀵规墜锛涚珵浜夎€厊core
log|vt. 鎶娾€︹€﹁浇鍏ユ寮忚褰曪紱璁板綍 n. 姝ｅ紡璁板綍锛涙棩蹇楋紱鍘熸湪|core
marine|adj. 娴风殑锛涙捣浜х殑锛涙捣鐢熺殑|extra
arrest|n. 閫崟锛涙嫎鐣欙紱涓 vt. 閫崟锛涙嫎鐣欙紱闃绘|core
Marco Polo|椹彲路娉㈢綏|proper
Columbus|鍝ヤ鸡甯億proper
Ceylon|閿″叞锛堟柉閲屽叞鍗＄殑鏃хО锛墊proper
Churchill|涓樺悏灏攟proper
Ferdinand Magellan|璐硅开鍗楀痉路楹﹀摬浼proper
Zac Sunderland|鎵庡厠路妗戝痉鍏皘proper
Robin Lee Graham|缃楀路鏉幝锋牸闆峰巹濮唡proper
`,
  4: `
parcel|n. 鍖呰９ vt. 瑁瑰ソ锛涙墦鍖厊core
jam|n. 鏋滈叡锛涘牭濉瀨core
mail|n. 閭欢锛涗俊浠讹紱閭斂 vt. 閭瘎锛涘彂鐢甸偖缁檤core
secondary|adj. 涓鐨勶紱娆¤鐨剕core
clay|n. 榛忓湡锛涢櫠鍦焲core
dust|n. 娌欏湡锛涚伆灏?vi. & vt. 鎿︾伆|core
dusty|adj. 甯冩弧鐏板皹鐨剕extra
weed|n. 鏉傝崏锛涢噹鑽?vt. & vi. 闄ゆ潅鑽墊core
chorus|n. 鍚堝敱鏇诧紱鍚堝敱鍥?vt. 鍚堝敱锛涢綈澹拌|core
a chorus of|榻愬０锛涘紓鍙ｅ悓澹皘core
cotton|n. 妫夊竷锛涙鑺眧core
uniform|n. 鏍℃湇锛涘埗鏈?adj. 涓€鑷寸殑锛涚粺涓€鐨剕core
not to mention|鏇翠笉鐢ㄨ锛涗笖涓嶈|core
tablet|n. 骞虫澘鐢佃剳锛涗究绗烘湰锛涜嵂鐗噟core
rubber|n. 姗＄毊锛涢粦鏉挎摝锛涙鑳秥core
washroom|n. 娲楁墜闂达紱鍘曟墍|core
rigid|adj. 姝绘澘鐨勶紱鍥烘墽鐨剕core
bubble|vi. 璧锋场锛涙哺鑵緗extra
tube|n. 绠″瓙锛涚鐘剁墿|core
circus|n. 椹垙鍥core
chemist|n. 鍖栧瀹讹紱鑽墏甯堬紱鑽埧|core
shade|vt. 缁欌€︹€﹂伄鎸★紙鍏夌嚎锛夛紱鍔犵伅缃╋紱鎶娾€︹€︽秱鏆?n. 闃村噳澶勶紱鐏僵锛涢槾褰遍儴鍒唡core
jaw|n. 棰岋紱涓嬪反|core
wrinkle|vt. & vi.锛堜娇鑴镐笂锛夎捣鐨辩汗锛涚毐璧?n. 鐨辩汗|core
forehead|n. 棰濓紱鍓嶉|core
hut|n. 绠€闄嬬殑灏忔埧瀛愶紙鎴栨銆佽垗锛墊extra
housing|n. 浣忔埧锛涗綇瀹厊core
platform|n. 骞冲彴锛涚珯鍙帮紱鑸炲彴|core
fireplace|n. 澹佺倝|extra
saucer|n. 鑼剁锛涙澂鎵榺core
kettle|n.锛堢儳姘寸敤鐨勶級澹讹紱姘村６|core
pan|n. 骞冲簳閿咃紱鐑ょ洏|core
jar|n. 缃愬瓙锛涘潧瀛恷extra
ripe|adj. 鎴愮啛鐨勶紱鏃舵満鎴愮啛鐨剕core
grill|n. 鐑ゆ灦锛涚儰鑲夐棣唡extra
doorway|n. 闂ㄥ彛锛涘嚭鍏ュ彛锛涢棬閬搢extra
leftover|adj. 鍚冨墿鐨勶紱娈嬬暀鐨?n. 鍚冨墿鐨勯鐗╋紱閬楃暀鐗﹟extra
handshake|n. 鎻℃墜|extra
drag|vt. 鎷栵紱鎷?vt. & vi. 缂撴參鑰岃垂鍔涘湴绉诲姩|core
privilege|n. 浼樻儬寰呴亣锛涚壒鏉億extra
plug|vt. 灏佸牭锛涜ˉ瓒?n. 鍫靛鐗╋紱鎻掑ご锛涙彃搴core
disabled|adj. 鏈夋畫鐤剧殑锛涗抚澶辫兘鍔涚殑|core
resign|vi. & vt. 杈炶亴锛涜緸鍘粅core
deserve|vt. 鍊煎緱锛涘簲寰楋紱搴斿彈|core
lately|adv. 鏈€杩戯紱涓嶄箙鍓嶏紱杩戞潵|extra
input|n. 鎯呭喌锛涗俊鎭紱鎶曞叆锛涜緭鍏?vt. 杈撳叆|core
tune|n. 鏇茶皟锛涙洸瀛?vt. 璋冮煶锛涜皟鑺傦紱璋冮閬搢core
contract|vt. 鎰熸煋锛堢柧鐥咃級锛涗笌鈥︹€﹁绔嬪悎 鍚岋紙鎴栧绾︼級 n. 鍚堝悓锛涘绾core
grant|vt. 鍚屾剰锛涘噯璁?n. 鎷ㄦ|extra
take (鈥? for granted|璁や负锛堚€︹€︼級鏄悊鎵€褰撶劧锛?瀵癸紙鈥︹€︼級涓嶄簣閲嶈|core
cardiac|adj. 蹇冭剰鐥呯殑锛涘績鑴忕殑|extra
circuit|n. 宸″洖锛涚幆褰㈢嚎璺瘄core
disability|n. 缂洪櫡锛涢殰纰峾core
consultation|n. 鍜ㄨ锛涘挩璇細|core
relay|vt. 杞彂锛涜浆鎾?n. 鎺ュ姏璧涳紱鎺ョ彮鐨勪汉|core
relay to|杞揪缁欌€︹€︼紱杞彂缁欌€︹€core
criterion|n. 锛坧l. criteria 锛?鏍囧噯锛涘噯鍒欙紱鍘熷垯|core
stability|n. 绋冲畾锛堟€э級锛涚ǔ鍥猴紙鎬э級|core
pray|vi. & vt. 浼佺浖锛涚绁穦core
pray that|浣嗘効|core
hypothetical|adj. 鍋囪鐨勶紱鍋囧畾鐨剕extra
Papua New Guinea|宸村竷浜氭柊鍑犲唴浜氾紙鍥藉鍚嶏級|proper
Ghana|鍔犵撼锛堝浗瀹跺悕锛墊proper
Congo|鍒氭灉锛堝浗瀹跺悕锛墊proper
Panama|宸存嬁椹紙鍥藉鍚嶏級|proper
`,
  5: `
bounce|vi. & vt.锛堜娇锛夊脊璧凤紱涓婁笅鏅冨姩 n. 寮规€э紱寮硅烦锛涙椿鍔泑core
bounce around|韫︽潵韫﹀幓锛涘脊鏉ュ脊鍘粅core
aptitude|n. 澶╄祫锛涘ぉ璧媩extra
head start|璧锋鍓嶇殑浼樺娍|core
scenario|n. 璁炬兂锛涙柟妗堬紱棰勬祴|extra
lawyer|n. 寰嬪笀|core
assemble|vt. 缁勮锛涜閰?vi. & vt. 鏀堕泦锛涜仛闆嗭紱闆嗗悎|extra
drawer|n. 鎶藉眽|core
a chest of drawers|鎶藉眽鏌渱core
breast|n. 涔虫埧锛涜兏閮▅core
hydrogen|n. 姘紱姘㈡皵|core
radium|n. 闀瓅core
wrist|n. 鎵嬭厱锛涜厱鍏宠妭|core
bridegroom|n. 鏂伴儙|core
geometry|n. 鍑犱綍瀛︼紱鍑犱綍鍥惧舰|core
debt|n. 鍊哄姟锛涙瑺娆緗core
categorise|vt. 鎶娾€︹€﹀垎绫伙紙鍔犱互褰掔被锛墊extra
profile|n. 绠€浠嬶紱姒傝堪锛涗晶闈㈣疆寤?vt. 鎵艰浠嬬粛锛涙杩帮紱鍐欑畝浠媩core
participant|n. 鍙備笌鑰咃紱鍙傚姞鑰厊extra
code|n. 浠ｇ爜锛涘瘑鐮?vt. 缂栫爜锛涙妸鈥︹€﹁瘧鎴愬瘑鐮亅extra
orient|vt. 浣块€傚簲锛涗娇闈㈠锛涚‘瀹氭柟鍚憒extra
detective|n. 渚︽帰锛涜鎺core
graphic|n. 鍥捐〃锛涘浘褰紱鍥剧敾 adj. 缁樼敾鐨勶紱鍥炬鐨剕extra
estate|n. 搴勫洯锛涗綇瀹呭尯锛涘伐涓氬尯|core
(real) estate agent|锛坮eal锛塭state agent 鎴垮湴浜х粡绾汉|core
accountant|n. 浼氳锛涗細璁″笀|extra
spy|n. 瀵嗘帰锛涢棿璋?vi. 浠庝簨闂磋皪娲诲姩 vt. 绐佺劧鐪嬭锛涘彂鐜皘core
justice|n. 鍏钩锛涘叕姝ｏ紱鍚堢悊|core
accuse|vt. 鎺у憡锛涙帶璇夛紱璋磋矗|core
come to a conclusion|寰楀嚭缁撹|core
greedy|adj. 璐┆鐨勶紱璐績鐨剕core
entrepreneur|n. 鍒涗笟鑰咃紱浼佷笟瀹秥extra
receptionist|n. 鎺ュ緟鍛榺core
CV (NAmE r茅sum茅)|n. 灞ュ巻锛涚畝鍘唡extra
socialist|adj. 绀句細涓讳箟鐨?n. 绀句細涓讳箟鑰厊core
communist|adj. 鍏变骇涓讳箟鐨?n. 鍏变骇涓讳箟鑰厊core
dedicate|vt. 鎶娾€︹€﹀鐚粰|extra
fox|n. 鐙愮嫺锛涚嫛鐚剧殑浜簗core
council|n. 濮斿憳浼氾紱甯傛斂鏈嶅姟鏈烘瀯|core
canal|n. 杩愭渤锛涚亴婧夋笭|core
attend to|鍏虫€€锛涚収鏂欙紱澶勭悊|core
supervise|vt. & vi. 涓荤锛涙寚瀵硷紱鐩戠潱|extra
handwriting|n. 涔︽硶锛涗功鍐欙紱绗旇抗|core
disk (disc)|n. 纾佺洏锛涚洏|core
parking|n. 鍋滆溅浣嶏紱鍋滆溅|core
camel|n. 楠嗛┘|core
fry|n. 娌圭厧鐨勯鐗?vt. & vi. 娌圭偢锛涙补鐐掞紱娌圭厧|core
purse|n. 閽卞寘锛涚毊澶瑰瓙锛堝挨鎸囧コ鐢級|core
sew|vi. & vt. 锛坰ewed, sewn/sewed锛夌紳鍒讹紱缂濓紱 鍋氶拡绾挎椿|core
knit|vt. & vi. 缂栫粐锛涢拡缁囷紱锛堜娇锛夌揣瀵嗙粨鍚?n. 缂栫粐鐨勮。鏈嶏紱閽堢粐琛珅extra
wool|n. 姣涳紱姣涚嚎锛涙瘺鏂檤core
intermediate|adj. 涓骇鐨勶紱涓瓑鐨勶紱涓棿鐨剕extra
priority|n. 浼樺厛浜嬮」锛涢瑕佺殑浜嬶紱浼樺厛|core
proficiency|n. 鐔熺粌锛涘ù鐔燂紱绮鹃€殀extra
cage|n. 绗煎瓙 vt. 鍏冲湪绗煎瓙閲寍core
collar|n. 锛堝姩鐗╋級棰堝湀锛涜。棰唡core
flea collar|鐏殼棰堝湀|core
finance|n. 璧勯噾锛涜储鏀匡紱閲戣瀺 vt. 鎻愪緵璧勯噾|core
receipt|n. 鏀舵嵁锛涙帴鏀秥core
certificate|n. 鍚堟牸璇佷功锛涜瘉鏄巪core
employer|n. 闆囦富锛涜€佹澘|extra
desert|n. 娌欐紶锛涜崚婕爘core
acquire|vt. 鑾峰緱锛涜喘寰梶core
Marie Curie|鐜涗附路灞呴噷锛堝眳閲屽か浜猴級|proper
The Communist Manifesto|銆婂叡浜у厷瀹ｈ█銆媩proper
Olivia|濂ュ埄缁村▍|proper
PETS (Public English Test System)|鍏ㄥ浗鑻辫绛夌骇鑰冭瘯|proper
`,
};

const VOCABULARY = Object.entries(RAW_VOCABULARY).flatMap(([unit, raw]) =>
  raw.trim().split("\n").filter(Boolean).map((line, index) => {
    const [word, meaning, type = "core"] = line.split("|");
    return { id: `${unit}-${index + 1}`, unit: Number(unit), word: word.trim(), meaning: meaning.trim(), type: type.trim() };
  })
);

