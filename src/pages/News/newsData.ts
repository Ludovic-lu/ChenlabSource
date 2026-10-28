import recentPublications from '../AcademicPaper/recentPublications';

export interface NewsItem {
  id: string;
  link: string;
  title: string;
  desc: string;
  time: string;
  summary?: string;
  isTest?: boolean;
}

// Fixed DOI references keep each editorial paired with its paper when the paper list changes.
const paperNews = [
  {
    id: 'test-autism-sentence-recognition-2026',
    doi: 'https://doi.org/10.1044/2026_jslhr-25-01007',
    title: '基频与噪声如何影响普通话自闭症儿童的句子识别',
    summary:
      '陈飞、董龙杰的研究考察自然与平坦基频、安静与噪声条件下的句子识别，关注韵律线索与认知能力的作用。',
    body: '研究比较了30名普通话自闭症儿童与31名同龄典型发展儿童在不同基频和听觉条件下的句子识别表现。两组在平坦基频和噪声条件下的识别准确率均下降，自闭症儿童在基频被拉平时下降更明显。在保留自然基频的条件下，工作记忆与安静条件下的表现相关，言语智力和工作记忆与噪声条件下的表现相关；这些相关性在平坦基频条件下未出现。研究提示，理解句子识别表现需要同时关注韵律线索与认知能力。',
  },
  {
    id: 'test-autism-contrastive-focus-2026',
    doi: 'https://doi.org/10.3389/fpsyg.2026.1898035',
    title: '普通话自闭症儿童如何用韵律表达对比焦点',
    summary: '研究团队关注普通话自闭症儿童对比焦点的韵律表达，为理解其口语交流特征提供证据。',
    body: '在口语交流中，说话人可以通过韵律突出与其他信息形成对比的内容，即对比焦点。该研究以普通话自闭症儿童为对象，考察他们如何通过韵律标记对比焦点，关注语言形式与交流功能之间的联系。论文从声调语言的角度，为理解自闭症儿童的韵律表达特征提供了研究材料。具体实验设计、结果与讨论请参阅论文原文。',
  },
];

const testNews: NewsItem[] = paperNews.map((entry) => {
  const paper = recentPublications.find((item) => item.link === entry.doi);
  if (!paper) {
    throw new Error('Missing AcademicPaper source: ' + entry.doi);
  }
  return {
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    desc:
      entry.body +
      ' 论文题目：' +
      paper.title +
      '。作者：' +
      paper.author +
      ' 发表期刊：' +
      paper.journal +
      ' 本条为新闻展示测试稿，新闻日期为测试稿创建日期。',
    link: paper.link,
    time: '2026-10-28',
    isTest: true,
  };
});

// Maintain news here only. Home reads the latest seven entries from this same source.
const historicalNews = [
  {
    link: '',
    title: '硕士生张高德以第一作者在《外语教学与研究》发表论文',
    desc: '陈飞课题组的硕士生张高德同学（第一作者）在2023年第1期《外语教学与研究》发表学术论文《不同二语水平中国英语学习者情绪词汇的语义-韵律加工研究》。《外语教学与研究》由北京外国语大学主办，获评“中国国际影响力优秀学术期刊”，系我国外语类唯一A2期刊。',
    time: '2023-01-06',
  },
  {
    link: '',
    title: '课题组博士后获批中国博士后科学基金面上项目资助2项',
    desc: '6月22日，中国博士后科学基金会公示了第71批面上项目拟资助名单，陈飞课题组郭承禹博士申报的《汉藏濒危语言的词汇韵律数据库建设与研究》和阎锦婷博士申报的《汉语自闭症儿童言语韵律产出特征研究》获得第71批面上项目二等资助。',
    time: '2022-06-22',
  },
  {
    link: '',
    title: '陈飞课题组（Chen Lab）网页上线',
    desc: '陈飞课题组网页正式上线，分为首页、研究方向、学术论文、实验室成员、实验室照片、新闻动态等板块，欢迎访问。',
    time: '2022-04-09',
  },
  {
    link: '',
    title: '欢迎四位硕士研究生加入课题组',
    desc: '欢迎硕士研究生王瑾（外国语言学及应用语言学）、陈子龙（外国语言学及应用语言学）、杨宇（外国语言学及应用语言学）、艾雁（学科教学-英语）加入ChenLab，预祝四位新生在未来的学习和研究中取得进步。',
    time: '2022-04-01',
  },
  {
    link: '',
    title: '欢迎四位客座学生访问课题组',
    desc: '欢迎四位客座学生访问实验室：邓凯方（湖南师范大学外国语学院 博士生）、陈禹风（山东大学文学院 博士生）、张雪颖（爱丁堡大学 硕士生）、季玮程（湖南大学文学院 本科生）访问ChenLab，预祝学有所成。',
    time: '2022-03-26',
  },
  {
    link: 'https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
    title: '走进通道侗族自治县，传承与保护侗族语言文化',
    desc: '2021年7月22日至28日，为助力乡村振兴，推进少数民族语言开发保护，Chen Lab带领湖南大学外国语学院旧“语”新知实践队来到湖南省怀化市通道侗族自治县，对当地侗语文化保护现状进行走访调查，包括陈飞、郭承禹、范浩坡三位指导教师、7位本科生、2位研究生。依托不同学院的丰富资源及专业知识对少数民族语言开发保护情况进行调研，深入了解现存问题，提出解决策略。 得到了中国青年网的报道。视频地址：https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
    time: '2021-07-28',
  },
  {
    link: '',
    title: '陈飞课题组参加第十四届中国语音学学术会议',
    desc: '陈飞课题组郭承禹、张瑜、朱敏等成员于2021年7月18号-7月20号前往甘肃兰州参加第十四届中国语音学学术会议（PCC2021），报告了实验室的最新学术成果：Fei CHEN,  Yu ZHANG, Kexuan LI, Feng XU. (2021). "Suprasegmental similarities and differences between infant- and foreigner-directed speech". 第十四届中国语音学学术会议(PCC2021). July 18-20, 2021, Lanzhou, China.',
    time: '2021-07-20',
  },
].map((item, index) => ({ ...item, id: 'archive-' + (index + 1) }));

export const newsItems: NewsItem[] = [...testNews, ...historicalNews].sort((a, b) =>
  b.time.localeCompare(a.time)
);

export const latestNews = newsItems.slice(0, 7);
