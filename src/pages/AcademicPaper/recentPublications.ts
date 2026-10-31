// Updated 2026-10-24 from https://www.researchgate.net/profile/Fei-Chen-77#publications
// DOI metadata checked against Crossref, publisher pages, and PubMed.
// Group by first publication year, including online-first publication.
// Empty journal fields reflect missing metadata in the three ResearchGate records;
// their verified titles, authors, record dates, and source links are retained.
// Supplemental datasets are excluded; the Autism article dated online 2022
// already exists in the historical list and is not duplicated under print year 2023.
const recentPublications = [
  // Source: https://www.ovid.com/jnls/ear-hearing/abstract/10.1097/aud.0000000000001909~emotion-word-processing-in-mandarin-speaking-adults-with?redirectionsource=fulltextview
  {
    title: 'Emotion Word Processing in Mandarin-Speaking Adults With Hearing Aids and Cochlear Implants: The Interplay of Semantics, Prosody, and Facial Cues',
    author: 'Gaode ZHANG, Jiyang HU, Peng GANG, Fei CHEN.',
    journal: 'Ear & Hearing. Publish Ahead of Print, October 29, 2026.',
    time: '2026',
    link: 'https://doi.org/10.1097/AUD.0000000000001909',
    linkLabel: 'DOI',
    img:'paper-gaodezhang-2026'
},
  // Source: https://api.crossref.org/works/10.1044%2F2026_JSLHR-25-01007
  {
    title:
      'Fundamental Frequency and Noise Effects on Sentence Recognition in Mandarin-Speaking Autistic Children: The Role of Cognitive Abilities',
    author: 'Fei CHEN, Longjie DONG.',
    journal: 'Journal of Speech, Language, and Hearing Research. 69(9): 4132–4147.',
    time: '2026',
    link: 'https://doi.org/10.1044/2026_jslhr-25-01007',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Prosodic+marking+of+contrastive+focus+in+Mandarin-speaking+children+with+autism+spectrum+disorder&rows=3
  {
    title:
      'Prosodic marking of contrastive focus in Mandarin-speaking children with autism spectrum disorder',
    author: 'Jinting YAN, Chen KUANG, Xiao LIANG, Xinquan SUN, Fei CHEN.',
    journal: 'Frontiers in Psychology. 17: 1898035.',
    time: '2026',
    link: 'https://doi.org/10.3389/fpsyg.2026.1898035',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Unstable+or+Stable%3F+Prosodic+Features+and+Voice+Quality+in+Autism+Spectrum+Disorder%3A+A+Systematic+Review+and+Meta-analysis&rows=3
  {
    title:
      'Unstable or Stable? Prosodic Features and Voice Quality in Autism Spectrum Disorder: A Systematic Review and Meta-analysis',
    author: 'Yang SONG, Chen KUANG, Fei CHEN.',
    journal: 'Journal of Autism and Developmental Disorders. Advance online publication.',
    time: '2026',
    link: 'https://doi.org/10.1007/s10803-026-07385-2',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Divergent+Cognitive-Linguistic+Mechanisms+in+Mandarin+Sentence+Recognition%3A+The+Impact+of+F0+Contour+and+Noise+in+Children+With+and+Without+Developmental+Language+Disorder&rows=3
  {
    title:
      'Divergent Cognitive-Linguistic Mechanisms in Mandarin Sentence Recognition: The Impact of F0 Contour and Noise in Children With and Without Developmental Language Disorder',
    author: 'Longjie DONG, Li SHENG, Ning MAO, Mengjie HE, Qi LIU, Rumi WANG, Fei CHEN.',
    journal: 'Journal of Communication Disorders. 122: 106660.',
    time: '2026',
    link: 'https://doi.org/10.1016/j.jcomdis.2026.106660',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1044%2F2026_JSLHR-25-00625
  {
    title:
      'Investigating Prosodic Focus Perception and Production in Autism Spectrum Disorder: A Systematic Review and Meta-Analysis',
    author: 'Chen KUANG, Fei CHEN, Yuyan NIE, Zengqiang GOU, Jinting YAN, Guanglei LIU.',
    journal: 'Journal of Speech, Language, and Hearing Research. 69(5): 2092–2111.',
    time: '2026',
    link: 'https://doi.org/10.1044/2026_jslhr-25-00625',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Exploring+the+Attention+Distribution+Around+Perceptual+Boundaries+of+English+Continuous+Speech&rows=3
  {
    title:
      'Exploring the Attention Distribution Around Perceptual Boundaries of English Continuous Speech',
    author: 'Yunhao MEI, Fei CHEN, Xiaoxiang CHEN.',
    journal: 'Journal of Speech, Language, and Hearing Research. 69(4): 1584–1594.',
    time: '2026',
    link: 'https://doi.org/10.1044/2025_jslhr-25-00461',
    linkLabel: 'DOI',
  },
  // Source: https://www.researchgate.net/publication/399960461_fangyanduiyingyuyuyinxidedeyingxiang--zhangshahuabeijingzheyingyul-ndeganzhiyuchanchuyanjiu_Effects_of_Chinese_Dialects_on_English_Phonetic_Acquisition_Evidence_from_Changsha_Dialect_Speakers'_Percept
  {
    title: '方言对英语语音习得的影响——长沙话背景者英语/l-n/的感知与产出研究',
    author: 'Yuyan NIE, Fei CHEN, Yuxiao YANG.',
    journal: '',
    time: '2026',
    link: 'https://www.researchgate.net/publication/399960461_fangyanduiyingyuyuyinxidedeyingxiang--zhangshahuabeijingzheyingyul-ndeganzhiyuchanchuyanjiu_Effects_of_Chinese_Dialects_on_English_Phonetic_Acquisition_Evidence_from_Changsha_Dialect_Speakers\'_Percept',
    linkLabel: 'ResearchGate',
  },
  // Source: https://api.crossref.org/works?query.title=Cross-linguistic+similarity+in+L2+suprasegmental+learning%3A+evidence+from+Chinese+learners%27+perception+of+Japanese+pitch+accents&rows=3
  {
    title:
      'Cross-linguistic similarity in L2 suprasegmental learning: evidence from Chinese learners’ perception of Japanese pitch accents',
    author: 'Yu YANG, Longjie DONG, Quansheng XIA, Yuxiao YANG, Fei CHEN.',
    journal: 'Journal of Phonetics. 113: 101458.',
    time: '2025',
    link: 'https://doi.org/10.1016/j.wocn.2025.101458',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Cross-Linguistic+Influences+on+L2+Prosody+Perception%3A+Evidence+from+English+Interrogative+Focus+Perception+by+Mandarin+Listeners&rows=3
  {
    title:
      'Cross-Linguistic Influences on L2 Prosody Perception: Evidence from English Interrogative Focus Perception by Mandarin Listeners',
    author: 'Xing LIU, Xiaoxiang CHEN, Chen KUANG, Fei CHEN.',
    journal: 'Brain Sciences. 15(9): 1000.',
    time: '2025',
    link: 'https://doi.org/10.3390/brainsci15091000',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Neuromodulation+Interventions+for+Language+Deficits+in+Alzheimer%27s+Disease%3A+Update+on+Current+Practice+and+Future+Developments&rows=3
  {
    title:
      'Neuromodulation Interventions for Language Deficits in Alzheimer’s Disease: Update on Current Practice and Future Developments',
    author: 'Fei CHEN, Yuyan NIE, Chen KUANG.',
    journal: 'Brain Sciences. 15(7): 754.',
    time: '2025',
    link: 'https://doi.org/10.3390/brainsci15070754',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1016%2Fj.learninstruc.2025.102183
  {
    title:
      'From cradle to classroom: Infant-directed speech facilitates word learning in adults learning English as a foreign language',
    author: 'Min ZHU, Fei CHEN, Longjie DONG, Yuxiao YANG.',
    journal: 'Learning and Instruction. 99: 102183.',
    time: '2025',
    link: 'https://doi.org/10.1016/j.learninstruc.2025.102183',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Auditory+Global-Local+Processing+in+Autism+Spectrum+Disorder%3A+A+Systematic+Review+and+Meta-Analysis&rows=3
  {
    title:
      'Auditory Global-Local Processing in Autism Spectrum Disorder: A Systematic Review and Meta-Analysis',
    author: 'Min ZHU, Fei CHEN, Yu ZHANG, Zhongzheng ZHANG, Chengyu GUO.',
    journal: 'Journal of Autism and Developmental Disorders. Advance online publication (2025).',
    time: '2025',
    link: 'https://doi.org/10.1007/s10803-025-06901-0',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1007%2Fs10803-025-06833-9
  {
    title:
      'Emotional Prosody Recognition in Autism Spectrum Disorder Without Intellectual Disability: A Systematic Review and Meta-Analysis',
    author: 'Qiyun LUO, Xiaoyan ZENG, Fei CHEN, Chen KUANG.',
    journal:
      'Journal of Autism and Developmental Disorders. 56(9): 3489–3502 (2026; first published online 2025).',
    time: '2025',
    link: 'https://doi.org/10.1007/s10803-025-06833-9',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1353%2Fjcl.2017.a959428
  {
    title: 'Report of the International Conferences in Evolutionary Linguistics',
    author: 'Min ZHU, Yicheng RONG, Yi WENG, Yanyuan YE, Fei CHEN, Lihai TAN, Gang PENG.',
    journal: 'Journal of Chinese Linguistics. 53(2): 499–500.',
    time: '2025',
    link: 'https://doi.org/10.1353/jcl.2017.a959428',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1044%2F2024_JSLHR-24-00432
  {
    title:
      'A Meta-Analysis of Second Language Phonetic Training: Exploring Overall Effect and Moderating Factors',
    author: 'Yao YAO, Mengjie HE, Fei CHEN, Jiaqiang ZHU.',
    journal: 'Journal of Speech, Language, and Hearing Research. 68(4): 1784–1802.',
    time: '2025',
    link: 'https://doi.org/10.1044/2024_jslhr-24-00432',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1007%2Fs10803-025-06775-2
  {
    title:
      'Reduced Context Effect on Lexical Tone Normalization in Children with Autism Spectrum Disorder: A Speech-Specific Mechanism',
    author: 'Chen KUANG, Fei CHEN, Jinting YAN, Gang PENG.',
    journal:
      'Journal of Autism and Developmental Disorders. 56(8): 2934–2949 (2026; first published online 2025).',
    time: '2025',
    link: 'https://doi.org/10.1007/s10803-025-06775-2',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Context+effects+on+lexical+tone+categorization+in+quiet+and+noisy+conditions+by+young%2C+middle-aged%2C+and+older+individuals&rows=3
  {
    title:
      'Context effects on lexical tone categorization in quiet and noisy conditions by young, middle-aged, and older individuals',
    author: 'Fei CHEN, Chen KUANG, Liping WANG, Xiaoxiang CHEN.',
    journal: 'The Journal of the Acoustical Society of America. 157(3): 1795–1806.',
    time: '2025',
    link: 'https://doi.org/10.1121/10.0036146',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1080%2F14992027.2025.2456003
  {
    title: 'Meta-analysis on lexical tone recognition in cochlear implant users',
    author: 'Yufeng CHEN, Yu YANG, Xueying ZHANG, Fei CHEN.',
    journal: 'International Journal of Audiology. 64(6): 557–569.',
    time: '2025',
    link: 'https://doi.org/10.1080/14992027.2025.2456003',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1186%2Fs40359-025-03507-0
  {
    title:
      'Capability well-being in mothers and fathers of autistic children: a cross-sectional study from China',
    author: 'Huanyu ZHANG, Shanquan CHEN, Jiazhou YU, Fei CHEN, Jinting YAN, Li WANG.',
    journal: 'BMC Psychology. 13(1): 1204.',
    time: '2025',
    link: 'https://doi.org/10.1186/s40359-025-03507-0',
    linkLabel: 'DOI',
  },
  // Source: https://english.hnu.edu.cn/__local/0/33/12/22C8F0328F485374D0135FC9961_697D1936_A8CF0.pdf
  {
    title: '孤独特质对二语情绪词汇语义-韵律加工的影响',
    author: '张高德、陈飞、王国宇、朱敏。',
    journal: '现代外语. 2026(1): 73–85（网络首发：2025）。',
    time: '2025',
    link: 'https://doi.org/10.20071/j.cnki.xdwy.20251022.007',
    linkLabel: 'DOI',
  },
  // Source: https://psybeh.tjnu.edu.cn/CN/10.12139/j.1672-0628.2025.03.002
  {
    title: '二语水平与音乐经验对抑制控制能力的影响研究',
    author: '朱敏、陈飞、张中正、张高德。',
    journal: '心理与行为研究. 23(3): 297–303.',
    time: '2025',
    link: 'https://doi.org/10.12139/j.1672-0628.2025.03.002',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=The+Impact+of+Executive+Functions+and+Musicality+on+Speech+Auditory-Motor+Synchronization+in+Adults+Who+Stutter&rows=3
  {
    title:
      'The Impact of Executive Functions and Musicality on Speech Auditory-Motor Synchronization in Adults Who Stutter',
    author: 'Min ZHU, Fei CHEN, Weiping CHEN, Yang ZHANG.',
    journal:
      'Journal of Speech, Language, and Hearing Research. 68(1): 54–68 (2025; first published online 2024).',
    time: '2024',
    link: 'https://doi.org/10.1044/2024_jslhr-24-00141',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.3390%2Fbrainsci14121204
  {
    title:
      'Effects of Language Proficiency on Selective Attention Patterns at Segmenting Boundaries in English Audio Sentences',
    author: 'Yunhao MEI, Fei CHEN, Xiaoxiang CHEN.',
    journal: 'Brain Sciences. 14(12): 1204.',
    time: '2024',
    link: 'https://doi.org/10.3390/brainsci14121204',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1007%2Fs10936-024-10108-2
  {
    title:
      'Recognition of Emotional Prosody in Mandarin-Speaking Children: Effects of Age, Noise, and Working Memory',
    author: 'Chen KUANG, Xiaoxiang CHEN, Fei CHEN.',
    journal: 'Journal of Psycholinguistic Research. 53: 68.',
    time: '2024',
    link: 'https://doi.org/10.1007/s10936-024-10108-2',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1121%2F10.0028009
  {
    title: 'An investigation of acoustic cues to tonal registers and voicing in Donglei Kam',
    author: 'Chengyu GUO, Fei CHEN, Chen KUANG, Longjie DONG.',
    journal: 'The Journal of the Acoustical Society of America. 156(1): 655–671.',
    time: '2024',
    link: 'https://doi.org/10.1121/10.0028009',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1121%2F10.0026359
  {
    title:
      'Acoustic characteristics of infant- and foreigner-directed speech with Mandarin as the target language',
    author: 'Yu ZHANG, Fei CHEN, Feng XU, Chengyu GUO, Kexuan LI.',
    journal: 'The Journal of the Acoustical Society of America. 155(6): 3877–3888.',
    time: '2024',
    link: 'https://doi.org/10.1121/10.0026359',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Amplitude+envelope+onset+characteristics+modulate+phase+locking+for+speech+auditory-motor+synchronization&rows=3
  {
    title:
      'Amplitude envelope onset characteristics modulate phase locking for speech auditory-motor synchronization',
    author: 'Min ZHU, Fei CHEN, Chenxin SHI, Yang ZHANG.',
    journal: 'Psychonomic Bulletin & Review. 31(4): 1661–1669.',
    time: '2024',
    link: 'https://doi.org/10.3758/s13423-023-02446-4',
    linkLabel: 'DOI',
  },
  // Source: https://www.researchgate.net/publication/392269891_feimuyuqueshixingduilixide--zhongguoxuexizheeyusaiyinganzhijichanchuyanjiu
  {
    title: '非母语缺失性对立习得——中国学习者俄语塞音感知及产出研究',
    author: 'Yuxiao YANG, Xiaoxiang CHEN, Fei CHEN.',
    journal: '',
    time: '2024',
    link: 'https://www.researchgate.net/publication/392269891_feimuyuqueshixingduilixide--zhongguoxuexizheeyusaiyinganzhijichanchuyanjiu',
    linkLabel: 'ResearchGate',
  },
  // Source: https://mzyw.ajcass.com/Admin/UploadFile/Issue/201810160001/2024/9//20240912095603WU_FILE_0.pdf
  {
    title: '洞雷侗语单音节词声调的语音描写——兼论侗语次阴调的声学性质',
    author: '郭承禹、陈飞。',
    journal: '民族语文. 2024(1).',
    time: '2024',
    link: 'https://mzyw.ajcass.com/Admin/UploadFile/Issue/201810160001/2024/9//20240912095603WU_FILE_0.pdf',
    linkLabel: 'PDF',
  },
  // Source: https://api.crossref.org/works/10.1044%2F2023_JSLHR-23-00356
  {
    title: 'Roles of Phonation Types and Decoders\' Gender in Recognizing Mandarin Emotional Speech',
    author: 'Yajie CHANG, Xiaoxiang CHEN, Fei CHEN, Manhong LI.',
    journal: 'Journal of Speech, Language, and Hearing Research. 66(11): 4363–4379.',
    time: '2023',
    link: 'https://doi.org/10.1044/2023_jslhr-23-00356',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1371%2Fjournal.pone.0291828
  {
    title:
      'The more the better? Effects of L1 tonal density and typology on the perception of non-native tones',
    author: 'Min ZHU, Fei CHEN, Xiaoxiang CHEN, Yuxiao YANG.',
    journal: 'PLOS ONE. 18(9): e0291828.',
    time: '2023',
    link: 'https://doi.org/10.1371/journal.pone.0291828',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1044%2F2023_JSLHR-22-00457
  {
    title:
      'Development of Mandarin Lexical Tone Identification in Noise and Its Relation With Working Memory',
    author: 'Fei CHEN, Qingqing GUO, Yunhua DENG, Jiaqiang ZHU, Hao ZHANG.',
    journal: 'Journal of Speech, Language, and Hearing Research. 66(10): 4100–4116.',
    time: '2023',
    link: 'https://doi.org/10.1044/2023_jslhr-22-00457',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Statistical+Information+Affects+Spoken+Word+Recognition+of+Tone+Languages+in+Stutterers%3A+Evidence+From+an+Auditory-Perceptual+Gating+Study&rows=3
  {
    title:
      'Statistical Information Affects Spoken Word Recognition of Tone Languages in Stutterers: Evidence From an Auditory-Perceptual Gating Study',
    author: 'Jiaqiang ZHU, Jing SHAO, Caicai ZHANG, Fei CHEN, Seth WIENER.',
    journal: 'Journal of Speech, Language, and Hearing Research. 66(9): 3382–3398.',
    time: '2023',
    link: 'https://doi.org/10.1044/2023_jslhr-23-00123',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.3233%2FJAD-230373
  {
    title:
      'Automatic Detection of Putative Mild Cognitive Impairment from Speech Acoustic Features in Mandarin-Speaking Elders',
    author:
      'Rumi WANG, Chen KUANG, Chengyu GUO, Yong CHEN, Canyang LI, Yoshihiro MATSUMURA, Masashi ISHIMARU, Alice J. VAN PELT, Fei CHEN.',
    journal: 'Journal of Alzheimer’s Disease. 95(3): 901–914.',
    time: '2023',
    link: 'https://doi.org/10.3233/jad-230373',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1044%2F2023_JSLHR-22-00572
  {
    title:
      'Tone Deafness in Music Does Not Preclude Distributional Learning of Nonnative Tonal Languages in Individuals With Congenital Amusia',
    author: 'Jiaqiang ZHU, Xiaoxiang CHEN, Fei CHEN, Caicai ZHANG, Jing SHAO, Seth WIENER.',
    journal: 'Journal of Speech, Language, and Hearing Research. 66(7): 2461–2477.',
    time: '2023',
    link: 'https://doi.org/10.1044/2023_jslhr-22-00572',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Development+of+perceptual+similarity+and+discriminability%3A+the+perception+of+Russian+phonemes+by+Chinese+learners&rows=3
  {
    title:
      'Development of perceptual similarity and discriminability: the perception of Russian phonemes by Chinese learners',
    author: 'Yuxiao YANG, Sunfu CHEN, Fei CHEN, Junzhou MA.',
    journal: 'Phonetica. 80(1-2): 117–152.',
    time: '2023',
    link: 'https://doi.org/10.1515/phon-2022-0023',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works/10.1121%2F10.0019472
  {
    title:
      'Distributional learning of musical pitch despite tone deafness in individuals with congenital amusia',
    author: 'Jiaqiang ZHU, Xiaoxiang CHEN, Fei CHEN, Caicai ZHANG, Jing SHAO, Seth WIENER.',
    journal: 'The Journal of the Acoustical Society of America. 153(5): 3117–3129.',
    time: '2023',
    link: 'https://doi.org/10.1121/10.0019472',
    linkLabel: 'DOI',
  },
  // Source: https://api.crossref.org/works?query.title=Development+of+Achieving+Constancy+in+Lexical+Tone+Identification+With+Contextual+Cues&rows=3
  {
    title: 'Development of Achieving Constancy in Lexical Tone Identification With Contextual Cues',
    author: 'Fei CHEN, Kaile ZHANG, Qingqing GUO, Jia LV.',
    journal: 'Journal of Speech, Language, and Hearing Research. 66(4): 1148–1164.',
    time: '2023',
    link: 'https://doi.org/10.1044/2022_jslhr-22-00257',
    linkLabel: 'DOI',
  },
  // Source: https://doi.org/10.1007/978-981-99-2401-1_17
  {
    title:
      'Interplay Between Prosody and Syntax-Semantics: Evidence from the Prosodic Features of Mandarin Tag Questions',
    author: 'Jinting YAN, Yuxiao YANG, Fei CHEN.',
    journal:
      'In: Man-Machine Speech Communication. Communications in Computer and Information Science, 185–195.',
    time: '2023',
    link: 'https://doi.org/10.1007/978-981-99-2401-1_17',
    linkLabel: 'DOI',
  },
  // Source: https://www.researchgate.net/publication/373679945_putonghuabeijingertongshengyunjueshinenglifazhanjiyingxiangyinsuyanjiu
  {
    title: '普通话背景儿童声韵觉识能力发展及影响因素研究',
    author: '陈飞、张高德。',
    journal: '',
    time: '2023',
    link: 'https://www.researchgate.net/publication/373679945_putonghuabeijingertongshengyunjueshinenglifazhanjiyingxiangyinsuyanjiu',
    linkLabel: 'ResearchGate',
  },
  // Source: https://wjyy.publish.founderss.cn/zh/article/68634966/
  {
    title: '不同二语水平中国英语学习者情绪词汇的语义-韵律加工研究',
    author: '张高德、陈飞。',
    journal: '外语教学与研究. 55(1): 79–90.',
    time: '2023',
    link: 'https://doi.org/10.19923/j.cnki.fltr.2023.01.009',
    linkLabel: 'DOI',
  },
];

export default recentPublications;
