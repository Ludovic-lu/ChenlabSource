export interface NewsItem {
  id: string;
  link: string;
  title: string;
  desc: string;
  time: string;
  summary?: string;
}
// Edit all news here. Keep IDs stable to preserve existing links.
const newsRecords: NewsItem[] = [
  {
    id: 'paper-emotion-processing-2026',
    title: '助听器与人工耳蜗使用者在多通道言语情绪加工中的表现及差异',
    summary:
      '研究者考察了助听器（HA）和人工耳蜗（CI）使用者在语义、情绪韵律和面部表情三个通道中的情绪信息加工表现，并探讨了不同听觉辅助设备使用者的跨通道干扰模式。',
    desc: '近日，湖南大学外国语学院陈飞课题组在国际知名的听力学期刊Ear and Hearing上发表了题为Emotion Word Processing in Mandarin-Speaking Adults With Hearing Aids and Cochlear Implants: The Interplay of Semantics, Prosody, and Facial Cues的研究成果。'
    +'Ear and Hearing 期刊在2025年JCR听力学与言语语言病理学领域排名第一（1/35），位列Q1区。'+
    '香港理工大学语言科学及技术学系博士生张高德（同时也是本课题组已毕业的硕士生）为第一作者，香港理工大学语言科学及技术学系彭刚教授与湖南大学外国语学院陈飞教授为共同通讯作者，马来西亚大学语言与读写能力教育系博士生胡吉阳为合作者。'
    + '湖南大学为本文的第一单位。',
    link: 'https://doi.org/10.1097/AUD.0000000000001909',
    time: '2026-10-31',
  },
  {
    link: '',
    title: '陈飞课题组参加第十七届中国演化语言学大会',
    desc: '陈飞课题组阳扬、毛宁、宋羊、可容希等成员于2026年10月23号-10月25号前往安徽合肥参加第十七届中国演化语言学大会（CCL2026）',
    time: '2026-10-28',
    id: 'archive-1',
  },
  {
    link: '',
    title: '硕士生张高德以第一作者在《外语教学与研究》发表论文',
    desc: '陈飞课题组的硕士生张高德同学（第一作者）在2023年第1期《外语教学与研究》发表学术论文《不同二语水平中国英语学习者情绪词汇的语义-韵律加工研究》。《外语教学与研究》由北京外国语大学主办，获评“中国国际影响力优秀学术期刊”，系我国外语类唯一A2期刊。',
    time: '2023-01-06',
    id: 'archive-2',
  },
  {
    link: '',
    title: '课题组博士后获批中国博士后科学基金面上项目资助2项',
    desc: '6月22日，中国博士后科学基金会公示了第71批面上项目拟资助名单，陈飞课题组郭承禹博士申报的《汉藏濒危语言的词汇韵律数据库建设与研究》和阎锦婷博士申报的《汉语自闭症儿童言语韵律产出特征研究》获得第71批面上项目二等资助。',
    time: '2022-06-22',
    id: 'archive-3',
  },
  {
    link: '',
    title: '陈飞课题组（Chen Lab）网页上线',
    desc: '陈飞课题组网页正式上线，分为首页、研究方向、学术论文、实验室成员、实验室照片、新闻动态等板块，欢迎访问。',
    time: '2022-04-09',
    id: 'archive-4',
  },
  {
    link: '',
    title: '欢迎四位硕士研究生加入课题组',
    desc: '欢迎硕士研究生王瑾（外国语言学及应用语言学）、陈子龙（外国语言学及应用语言学）、杨宇（外国语言学及应用语言学）、艾雁（学科教学-英语）加入ChenLab，预祝四位新生在未来的学习和研究中取得进步。',
    time: '2022-04-01',
    id: 'archive-5',
  },
  {
    link: '',
    title: '欢迎四位客座学生访问课题组',
    desc: '欢迎四位客座学生访问实验室：邓凯方（湖南师范大学外国语学院 博士生）、陈禹风（山东大学文学院 博士生）、张雪颖（爱丁堡大学 硕士生）、季玮程（湖南大学文学院 本科生）访问ChenLab，预祝学有所成。',
    time: '2022-03-26',
    id: 'archive-6',
  },
  {
    link: 'https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
    title: '走进通道侗族自治县，传承与保护侗族语言文化',
    desc: '2021年7月22日至28日，为助力乡村振兴，推进少数民族语言开发保护，Chen Lab带领湖南大学外国语学院旧“语”新知实践队来到湖南省怀化市通道侗族自治县，对当地侗语文化保护现状进行走访调查，包括陈飞、郭承禹、范浩坡三位指导教师、7位本科生、2位研究生。依托不同学院的丰富资源及专业知识对少数民族语言开发保护情况进行调研，深入了解现存问题，提出解决策略。 得到了中国青年网的报道。视频地址：https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
    time: '2021-07-28',
    id: 'archive-7',
  },
  {
    link: '',
    title: '陈飞课题组参加第十四届中国语音学学术会议',
    desc: '陈飞课题组郭承禹、张瑜、朱敏等成员于2021年7月18号-7月20号前往甘肃兰州参加第十四届中国语音学学术会议（PCC2021），报告了实验室的最新学术成果：Fei CHEN,  Yu ZHANG, Kexuan LI, Feng XU. (2021). "Suprasegmental similarities and differences between infant- and foreigner-directed speech". 第十四届中国语音学学术会议(PCC2021). July 18-20, 2021, Lanzhou, China.',
    time: '2021-07-20',
    id: 'archive-8',
  },
];
export const newsItems = [...newsRecords].sort((a, b) =>
  b.time.localeCompare(a.time)
);
export const latestNews = newsItems.slice(0, 7);
