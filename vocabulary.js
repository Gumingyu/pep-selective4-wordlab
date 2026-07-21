const UNIT_META = {
  1: { title: 'Science Fiction' },
  2: { title: 'Iconic Attractions' },
  3: { title: 'Sea Exploration' },
  4: { title: 'Sharing' },
  5: { title: 'Launching Your Career' },
};

const RAW_VOCABULARY = {
  1: `
fiction|n. 小说；虚构的事|core
science fiction|科幻小说（或影片等）|core
test out|检验；测试|core
bonus|n. 意外收获；奖金；红利|core
more like|更像是；更接近|core
ridiculous|adj. 愚蠢的；荒谬的； 荒唐的|extra
integrity|n. 诚实正直；完整；完好|core
dignity|n. 庄重；庄严；尊严|core
salary|n. 薪水；薪金|core
absurd|adj. 荒谬的；荒唐的|extra
appointment|n. 预约；约会；委任|core
nail|n. 指甲；趾甲；钉子 vt.（用钉子）钉牢；固定|core
saleswoman|n. 女售货员；女推销员|core
guilty|adj. 内疚的；有罪的；有过失的|core
suspend|vt. 悬；挂；暂停；暂缓|core
ladder|n. 梯子；阶梯|extra
dismiss|vt. 让（某人）离开；解散； 解雇；消除|core
declare|vt. 表明；宣称；公布|core
whereas|conj. 然而；但是；尽管|extra
rumour|n. 谣言；传闻|extra
presume|vt. & vi. 假设；假定|extra
fare|n. 车费；船费；飞机票价|extra
weekly|adj. 每周的 n. 周刊|core
on a … basis|根据；以……的方式（基准）|core
calculate|vt. 计算；核算；预测|core
chairwoman|n. 女主席；女董事长；女委员长|core
gramme (NAmE gram)|n. 克（重量单位）|core
flour|n. 面粉；（谷物磨成的）粉|core
venue|n. 活动场地（如音乐厅、会场等）|core
salesman|n. 售货员；推销员|core
alien|n. 外星人（生物）；外国人 adj. 陌生的；外星的；外国的|extra
pros and cons|事物的利与弊；支持与反对|core
blurred|adj. 模糊不清的；难以区分的|extra
superior|adj. 更好的；占优势的；（在级别或重要性上）更高的|core
superior to|比……更好；更胜一筹|core
take over|占上风；取而代之；接管；接手|core
inaction|n. 无行动；不采取措施|extra
conflict with|与……冲突或抵触|core
labour|n. 劳动（者）；体力劳动 vi. 奋斗；努力工作|core
leather|n. 皮革；[pl.] 皮衣；皮外套|core
lever|n. 操纵杆；杠杆|extra
panel|n. 控制板；仪表盘；专家咨询组|core
inch|n. 英寸（长度单位，等于 2.54 厘米）|core
backwards (NAmE backward)|adv. 向后；倒着；往回|core
grip|vt. & vi. 紧握；抓紧|extra
hazy|adj. 模糊的；朦胧的；困惑的|extra
niece|n. 侄女；外甥女|core
fetch|vt.（去）拿来；（去）请来|core
handkerchief|n. 手帕；纸巾|core
lamp|n. 灯；台灯|core
turn out|关掉；熄灭；在场；使朝外；结果是|core
pace|n. 速度；步伐；节奏 vt. & vi. 确定速度；调整节奏|core
fall away|（逐渐）减少；消失|core
division|n. 分开；分隔；差异；除（法）|core
puff|n. （烟、气等的）一缕；少量；喘息|extra
urge|n. 强烈的欲望；冲动 vt. 催促；力劝；大力推荐|core
have an urge to|有强烈的欲望做某事|core
random|adj. 随机的；不可思议的|core
maximum|adj. 最大极限的 n. 最大量；最大限度|core
explode|vi. & vt. 爆炸；爆破|core
jolt|n. 震动；摇晃；颠簸 vt. & vi.（使）震动；摇晃|extra
flip|vt. & vi.（使）快速翻转；（用手指）轻抛|extra
stun|vt. 使震惊； 使昏迷|extra
mud|n. 泥；泥浆|core
overstatement|n. 夸大；夸张|extra
Isaac Asimov|艾萨克·阿西莫夫|proper
Larry Belmont|拉里·贝尔蒙特|proper
Claire|克莱尔|proper
Gladys Claffern|格拉迪丝·克拉芬|proper
Braille (also braille)|布拉耶盲文（凸点符号）|proper
The Three-Body Problem|《三体》|proper
Hugo Award|雨果奖|proper
`,
  2: `
iconic|adj. 符号的；图标的|extra
foundation|n. 创建；基础；地基|core
political|adj. 政治的|core
didgeridoo|n. 迪吉里杜管|extra
located|adj. 位于|extra
equator|n. 赤道|core
barbecue (abbr. BBQ)|n. (abbr. BBQ) 户外烧烤；烤架|core
bakery|n. 面包（糕饼）店；面包厂|core
joint|n. 公共场所（尤指价格低廉的饮食和娱乐场所）； 关节 adj. 联合的；共同的|core
butcher|n. 肉贩；屠夫；刽子手|core
premier|adj. 最著名的；第一的；首要的 n. 总理；首相|core
herb|n. 药草；香草；草本|core
dim sim|（特指澳大利亚的）点心|extra
hollow|adj. 中空的；空心的|extra
vibrate|vt. & vi.（使）振动|extra
horn|n.（乐器）号|extra
pitch|n. 音高|extra
straightforward|adj. 坦率的；简单的|core
slogan|n. 标语；口号|extra
minister|n. 部长；大臣；外交使节|core
prime minister|首相；总理|core
frog|n. 蛙；青蛙|core
arrow|n. 箭；箭头|core
entitle|vt. 给……命名（或题名）；使享有权利|core
getaway|n. 适合度假的地方|extra
dive|vi. & n.（dived/dove, dived） 潜水；跳水；俯冲|core
kayaking|n. 划皮艇|extra
peak season|高峰季节|core
freedom|n. 自由；不受……影响的状态|core
domain|n. 领域；领土；范围|core
sponsor|vt. 倡议；赞助；主办 n.（法案等的）倡议者；赞助者|core
liberty|n. 自由|core
golf|n. 高尔夫球运动|core
strait|n. 海峡|core
sample|n. 样本；样品|core
monument|n. 纪念碑（或馆、堂、像等）；历史遗迹|extra
kiwi|n. 几维（新西兰鸟）|extra
geyser|n. 间歇泉|extra
sulphuric pool|硫黄池|extra
manuka honey|麦卢卡蜂蜜|extra
bungee jumping|蹦极跳|extra
a flock of|一群（羊或鸟）|core
geothermal park|地热公园|extra
distribution|n. 分布；分配；分发|core
pouch|n. 育儿袋；小袋子；荷包|extra
temporary|adj. 暂时的；短暂的|core
phase|n. 阶段；时期|core
trunk|n. 树干|core
licensed|adj. 得到正式许可的|extra
license|vt. 批准；许可 n.（= licence）许可证；执照|core
session|n. 一场；一段时间；会议|core
frequency|n. 发生率；重复率； （声波或电磁波振动的）频率|core
violent|adj. 暴力的；猛烈的|extra
violence|n. 暴力；暴行|core
nest|n. 巢穴；鸟窝；秘密窝点|core
mammal|n. 哺乳动物|extra
biology|n. 生理；生物学|core
hatch|vi. 孵出；破壳 的 vt. 使孵出；策划；（尤指）密谋|core
capacity|n. 能力；容量|core
a handful of|少数人（或物）；一把（的量）|core
fence|n. 栅栏；围栏|core
prison|n. 监狱；监禁|core
grand|adj. 大；宏大的|core
Aborigine|澳大利亚土著|proper
Sydney|悉尼（澳大利亚城市）|proper
Bondi Beach|邦迪海滩|proper
Chiang Mai|清迈（泰国城市）|proper
the Bay of Islands|岛屿湾|proper
the haka|哈卡舞（传统毛利伴歌战舞）|proper
Edmonds|埃德蒙兹|proper
Felicity|费莉西蒂|proper
Tasmanian devil|塔斯马尼亚恶魔；袋獾|proper
Tasmania|塔斯马尼亚（澳大利亚州名）|proper
duck-billed platypus|鸭嘴兽|proper
`,
  3: `
tale|n. 故事；叙述|core
merchant|n. 商人；批发商 adj. 海上货运的|extra
set sail|起航；开航|core
extend|vt. 扩展；使伸长；延长|core
negotiate|vt. 商定；达成（协议） vi. 谈判；磋商；协商|core
fleet|n. 舰队；机群；车队|extra
behold|vt. （beheld, beheld） 看；看见|extra
league|n. 等级；水平；联合会；联赛|core
in a league of one’s own|独领风骚|core
royal|adj. 皇家的；王室的；高贵的|core
spice|n. （调味）香料|extra
withdraw|vi. & vt. （withdrew, withdrawn） （使）撤回；撤离|core
withdraw from|退出；撤回|core
channel|n. 航道；海峡；频道|core
maritime|adj. 海的；海运的；海事的|extra
bond|n. 纽带；关系 vt. & vi. 增强信任关系；使牢固结合|core
in hand|在手头；可供使用|core
politics|n. 政治；政治观点|core
profession|n. 职业；行业|core
tournament|n. 锦标赛；联赛|core
mixture|n. 混合；结合体；混合物|core
laptop|n. 笔记本电脑；便携式电脑|core
coverage|n. 新闻报道；覆盖范围|core
press conference|记者招待会；新闻发布会|core
applaud|vt. & vi. 鼓掌 vt. 称赞；赞赏|core
tax|vt. 对……征税；使纳税 n. 税；税款|core
manned|adj. 有人控制的；需人操纵的|extra
submersible|n. 潜水器；可潜船|extra
underwater|adv. 在水下 adj. 水下的|extra
capsule|n. 胶囊；太空舱|core
coral|n. 珊瑚|extra
migration|n. 迁移；迁徙；移居|extra
directory|n. 名录；电话号码簿； （计算机文件或程序的）目录|core
meanwhile|adv. 与此同时；（比较两方面）对比之下|extra
exploit|vt. 开发；利用；剥削|extra
gallon|n. 加仑（容积单位，1 英制加仑约等于 4.5 升）|extra
murder|vt. 谋杀；凶杀；毁坏 n. 谋杀；凶杀|core
mercy|n. 仁慈；宽恕；恩惠|core
possession|n. [usually pl.] 个人财产； 拥有；控制|core
opponent|n. 反对者；对手；竞争者|core
log|vt. 把……载入正式记录；记录 n. 正式记录；日志；原木|core
marine|adj. 海的；海产的；海生的|extra
arrest|n. 逮捕；拘留；中止 vt. 逮捕；拘留；阻止|core
Marco Polo|马可·波罗|proper
Columbus|哥伦布|proper
Ceylon|锡兰（斯里兰卡的旧称）|proper
Churchill|丘吉尔|proper
Ferdinand Magellan|费迪南德·麦哲伦|proper
Zac Sunderland|扎克·桑德兰|proper
Robin Lee Graham|罗宾·李·格雷厄姆|proper
`,
  4: `
parcel|n. 包裹 vt. 裹好；打包|core
jam|n. 果酱；堵塞|core
mail|n. 邮件；信件；邮政 vt. 邮寄；发电邮给|core
secondary|adj. 中学的；次要的|core
clay|n. 黏土；陶土|core
dust|n. 沙土；灰尘 vi. & vt. 擦灰|core
dusty|adj. 布满灰尘的|extra
weed|n. 杂草；野草 vt. & vi. 除杂草|core
chorus|n. 合唱曲；合唱团 vt. 合唱；齐声说|core
a chorus of|齐声；异口同声|core
cotton|n. 棉布；棉花|core
uniform|n. 校服；制服 adj. 一致的；统一的|core
not to mention|更不用说；且不说|core
tablet|n. 平板电脑；便笺本；药片|core
rubber|n. 橡皮；黑板擦；橡胶|core
washroom|n. 洗手间；厕所|core
rigid|adj. 死板的；固执的|core
bubble|vi. 起泡；沸腾|extra
tube|n. 管子；管状物|core
circus|n. 马戏团|core
chemist|n. 化学家；药剂师；药房|core
shade|vt. 给……遮挡（光线）；加灯罩；把……涂暗 n. 阴凉处；灯罩；阴影部分|core
jaw|n. 颌；下巴|core
wrinkle|vt. & vi.（使脸上）起皱纹；皱起 n. 皱纹|core
forehead|n. 额；前额|core
hut|n. 简陋的小房子（或棚、舍）|extra
housing|n. 住房；住宅|core
platform|n. 平台；站台；舞台|core
fireplace|n. 壁炉|extra
saucer|n. 茶碟；杯托|core
kettle|n.（烧水用的）壶；水壶|core
pan|n. 平底锅；烤盘|core
jar|n. 罐子；坛子|extra
ripe|adj. 成熟的；时机成熟的|core
grill|n. 烤架；烤肉餐馆|extra
doorway|n. 门口；出入口；门道|extra
leftover|adj. 吃剩的；残留的 n. 吃剩的食物；遗留物|extra
handshake|n. 握手|extra
drag|vt. 拖；拽 vt. & vi. 缓慢而费力地移动|core
privilege|n. 优惠待遇；特权|extra
plug|vt. 封堵；补足 n. 堵塞物；插头；插座|core
disabled|adj. 有残疾的；丧失能力的|core
resign|vi. & vt. 辞职；辞去|core
deserve|vt. 值得；应得；应受|core
lately|adv. 最近；不久前；近来|extra
input|n. 情况；信息；投入；输入 vt. 输入|core
tune|n. 曲调；曲子 vt. 调音；调节；调频道|core
contract|vt. 感染（疾病）；与……订立合 同（或契约） n. 合同；契约|core
grant|vt. 同意；准许 n. 拨款|extra
take (…) for granted|认为（……）是理所当然； 对（……）不予重视|core
cardiac|adj. 心脏病的；心脏的|extra
circuit|n. 巡回；环形线路|core
disability|n. 缺陷；障碍|core
consultation|n. 咨询；咨询会|core
relay|vt. 转发；转播 n. 接力赛；接班的人|core
relay to|转达给……；转发给……|core
criterion|n. （pl. criteria ） 标准；准则；原则|core
stability|n. 稳定（性）；稳固（性）|core
pray|vi. & vt. 企盼；祈祷|core
pray that|但愿|core
hypothetical|adj. 假设的；假定的|extra
Papua New Guinea|巴布亚新几内亚（国家名）|proper
Ghana|加纳（国家名）|proper
Congo|刚果（国家名）|proper
Panama|巴拿马（国家名）|proper
`,
  5: `
bounce|vi. & vt.（使）弹起；上下晃动 n. 弹性；弹跳；活力|core
bounce around|蹦来蹦去；弹来弹去|core
aptitude|n. 天资；天赋|extra
head start|起步前的优势|core
scenario|n. 设想；方案；预测|extra
lawyer|n. 律师|core
assemble|vt. 组装；装配 vi. & vt. 收集；聚集；集合|extra
drawer|n. 抽屉|core
a chest of drawers|抽屉柜|core
breast|n. 乳房；胸部|core
hydrogen|n. 氢；氢气|core
radium|n. 镭|core
wrist|n. 手腕；腕关节|core
bridegroom|n. 新郎|core
geometry|n. 几何学；几何图形|core
debt|n. 债务；欠款|core
categorise|vt. 把……分类（加以归类）|extra
profile|n. 简介；概述；侧面轮廓 vt. 扼要介绍；概述；写简介|core
participant|n. 参与者；参加者|extra
code|n. 代码；密码 vt. 编码；把……译成密码|extra
orient|vt. 使适应；使面对；确定方向|extra
detective|n. 侦探；警探|core
graphic|n. 图表；图形；图画 adj. 绘画的；图案的|extra
estate|n. 庄园；住宅区；工业区|core
(real) estate agent|（real）estate agent 房地产经纪人|core
accountant|n. 会计；会计师|extra
spy|n. 密探；间谍 vi. 从事间谍活动 vt. 突然看见；发现|core
justice|n. 公平；公正；合理|core
accuse|vt. 控告；控诉；谴责|core
come to a conclusion|得出结论|core
greedy|adj. 贪婪的；贪心的|core
entrepreneur|n. 创业者；企业家|extra
receptionist|n. 接待员|core
CV (NAmE résumé)|n. 履历；简历|extra
socialist|adj. 社会主义的 n. 社会主义者|core
communist|adj. 共产主义的 n. 共产主义者|core
dedicate|vt. 把……奉献给|extra
fox|n. 狐狸；狡猾的人|core
council|n. 委员会；市政服务机构|core
canal|n. 运河；灌溉渠|core
attend to|关怀；照料；处理|core
supervise|vt. & vi. 主管；指导；监督|extra
handwriting|n. 书法；书写；笔迹|core
disk (disc)|n. 磁盘；盘|core
parking|n. 停车位；停车|core
camel|n. 骆驼|core
fry|n. 油煎的食物 vt. & vi. 油炸；油炒；油煎|core
purse|n. 钱包；皮夹子（尤指女用）|core
sew|vi. & vt. （sewed, sewn/sewed）缝制；缝； 做针线活|core
knit|vt. & vi. 编织；针织；（使）紧密结合 n. 编织的衣服；针织衫|extra
wool|n. 毛；毛线；毛料|core
intermediate|adj. 中级的；中等的；中间的|extra
priority|n. 优先事项；首要的事；优先|core
proficiency|n. 熟练；娴熟；精通|extra
cage|n. 笼子 vt. 关在笼子里|core
collar|n. （动物）颈圈；衣领|core
flea collar|灭蚤颈圈|core
finance|n. 资金；财政；金融 vt. 提供资金|core
receipt|n. 收据；接收|core
certificate|n. 合格证书；证明|core
employer|n. 雇主；老板|extra
desert|n. 沙漠；荒漠|core
acquire|vt. 获得；购得|core
Marie Curie|玛丽·居里（居里夫人）|proper
The Communist Manifesto|《共产党宣言》|proper
Olivia|奥利维娅|proper
PETS (Public English Test System)|全国英语等级考试|proper
`,
};

const VOCABULARY = Object.entries(RAW_VOCABULARY).flatMap(([unit, raw]) =>
  raw.trim().split("\n").filter(Boolean).map((line, index) => {
    const [word, meaning, type = "core"] = line.split("|");
    return { id: `${unit}-${index + 1}`, unit: Number(unit), word: word.trim(), meaning: meaning.trim(), type: type.trim() };
  })
);
