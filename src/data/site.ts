export const locales = ['en', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ja: '日本語',
  zh: '中文',
};

export const siteUrl = 'https://muxmxu.github.io';

export const copy = {
  en: {
    languageName: 'English',
    skip: 'Skip to content',
    nav: { home: 'Home', research: 'Research', publications: 'Publications', cv: 'CV' },
    hero: {
      eyebrow: 'Doctoral researcher · Speech & spatial audio',
      lead: 'I study how voices inhabit space.',
      bio: 'I am Xiaoyang Liu (Mux), a doctoral student at Keio University and a member of the Takamichi Lab. My research explores spatial voice conversion, spatial audio understanding and rendering, and machine learning methods for speech and audio. Alongside research, I build reusable tools and reproducible systems that connect experimental ideas with practical audio applications.',
      projects: 'Explore research',
      publications: 'View publications',
      scroll: 'Scroll to tune the signal',
    },
    sections: {
      researchKicker: 'Research signal',
      researchTitle: 'Working across representation, space, and sound.',
      researchIntro: 'My work connects audio modeling with the systems needed to test, reproduce, and experience research ideas.',
      projectsKicker: 'Selected work',
      projectsTitle: 'Research becomes clearer when it can be heard, seen, and used.',
      publicationsKicker: 'Publications',
      publicationsTitle: 'Selected papers and presentations.',
      allProjects: 'All research projects',
      allPublications: 'Complete publication list',
    },
    researchAreas: [
      { index: '01', title: 'Spatial voice conversion', text: 'Modeling and controlling the spatial characteristics of converted speech.' },
      { index: '02', title: 'Spatial audio intelligence', text: 'Understanding and rendering auditory space through data-driven methods.' },
      { index: '03', title: 'Research engineering', text: 'Reusable pipelines and reproducible systems for audio machine learning.' },
    ],
    pages: {
      projectsEyebrow: 'Research archive',
      projectsTitle: 'Projects & experiments',
      projectsIntro: 'Ongoing research, published systems, and the engineering tools that make experiments repeatable.',
      publicationsEyebrow: 'Research output',
      publicationsTitle: 'Publications & presentations',
      publicationsIntro: 'Conference papers and presentations in audio and acoustic machine learning.',
      cvEyebrow: 'Curriculum vitae',
      cvTitle: 'Research profile',
      cvIntro: 'A compact, public-facing record focused on my current research identity and practice.',
      profile: 'Profile',
      affiliation: 'Affiliation',
      affiliationValue: 'Doctoral student, Keio University · Takamichi Lab',
      interests: 'Research interests',
      interestsValue: ['Spatial voice conversion', 'Spatial audio understanding and rendering', 'Speech and audio machine learning'],
      practice: 'Research practice',
      practiceValue: 'I combine model development with reusable research software, data pipelines, evaluation tools, and reproducible experiment environments.',
      capabilities: 'Selected capabilities',
      capabilitiesValue: ['Python · Modern C++ · PyTorch', 'Audio data pipelines and augmentation', 'Docker · Linux · Git', 'Technical writing with LaTeX'],
      contact: 'Contact & profiles',
      contactValue: 'For code, open research tools, and current experiments, find me on GitHub.',
    },
    labels: { ongoing: 'Ongoing', published: 'Published', maintained: 'Maintained', archived: 'Archived', oral: 'Oral', poster: 'Poster', code: 'Code', paper: 'Paper', demo: 'Demo', read: 'Read project', back: 'All projects' },
    footer: 'Researching the space between a voice and where it is heard.',
  },
  ja: {
    languageName: '日本語',
    skip: '本文へ移動',
    nav: { home: 'ホーム', research: '研究', publications: '発表', cv: 'CV' },
    hero: {
      eyebrow: '博士課程 · 音声・空間オーディオ',
      lead: '声が空間に存在する仕組みを研究しています。',
      bio: '劉 笑陽（Mux）と申します。慶應義塾大学・高道研究室に所属する博士課程学生です。空間Voice Conversionを中心に、空間音響の理解・レンダリング、および音声・音響のための機械学習に取り組んでいます。また、研究アイデアを実際の音響応用につなげるため、再利用可能な研究ツールや再現性の高い実験基盤の開発も行っています。',
      projects: '研究を見る',
      publications: '発表一覧',
      scroll: 'スクロールで信号をチューニング',
    },
    sections: {
      researchKicker: 'Research signal',
      researchTitle: '表現・空間・音を横断する研究。',
      researchIntro: '音響モデリングと、研究アイデアを検証・再現・体験するためのシステムをつなぎます。',
      projectsKicker: 'Selected work',
      projectsTitle: '聴き、見て、使える形にすることで、研究はより明確になります。',
      publicationsKicker: 'Publications',
      publicationsTitle: '主な論文・学会発表。',
      allProjects: 'すべての研究プロジェクト',
      allPublications: 'すべての発表を見る',
    },
    researchAreas: [
      { index: '01', title: '空間Voice Conversion', text: '変換音声の空間的特徴をモデル化し、制御する手法。' },
      { index: '02', title: '空間オーディオ知能', text: 'データ駆動型手法による聴覚空間の理解とレンダリング。' },
      { index: '03', title: 'Research Engineering', text: '音響機械学習のための再利用可能なパイプラインと再現性の高い実験基盤。' },
    ],
    pages: {
      projectsEyebrow: 'Research archive', projectsTitle: 'プロジェクトと実験', projectsIntro: '進行中の研究、発表済みシステム、実験の再現性を支えるエンジニアリングツール。',
      publicationsEyebrow: 'Research output', publicationsTitle: '論文・学会発表', publicationsIntro: '音声・音響機械学習に関する論文と学会発表。',
      cvEyebrow: 'Curriculum vitae', cvTitle: '研究プロフィール', cvIntro: '現在の研究者としての活動に焦点を当てた公開プロフィールです。',
      profile: 'プロフィール', affiliation: '所属', affiliationValue: '慶應義塾大学 博士課程 · 高道研究室',
      interests: '研究分野', interestsValue: ['空間Voice Conversion', '空間音響の理解とレンダリング', '音声・音響機械学習'],
      practice: '研究スタイル', practiceValue: 'モデル開発に加え、再利用可能な研究ソフトウェア、データパイプライン、評価ツール、再現性の高い実験環境を構築しています。',
      capabilities: '主なスキル', capabilitiesValue: ['Python · Modern C++ · PyTorch', '音響データパイプラインとAugmentation', 'Docker · Linux · Git', 'LaTeXによるテクニカルライティング'],
      contact: 'Contact & profiles', contactValue: 'コード、公開研究ツール、現在の実験についてはGitHubをご覧ください。',
    },
    labels: { ongoing: '進行中', published: '発表済', maintained: '更新中', archived: 'アーカイブ', oral: '口頭発表', poster: 'ポスター', code: 'コード', paper: '論文', demo: 'デモ', read: 'プロジェクトを見る', back: 'プロジェクト一覧' },
    footer: '声と、その声が聴かれる場所のあいだを研究しています。',
  },
  zh: {
    languageName: '中文',
    skip: '跳到正文',
    nav: { home: '首页', research: '研究', publications: '发表', cv: '简历' },
    hero: {
      eyebrow: '博士研究生 · 语音与空间音频',
      lead: '我研究声音如何存在于空间之中。',
      bio: '我是刘笑阳（Mux），现为庆应义塾大学高道研究室博士生。我的研究主要围绕空间语音转换、空间音频理解与渲染，以及面向语音和音频的机器学习方法展开。同时，我也关注研究工程，希望通过可复用的工具和可复现的实验系统，将研究想法连接到实际的音频应用中。',
      projects: '查看研究',
      publications: '查看发表',
      scroll: '滚动以调谐信号',
    },
    sections: {
      researchKicker: 'Research signal', researchTitle: '在表征、空间与声音之间工作。', researchIntro: '我的工作将音频建模与检验、复现和体验研究想法所需的系统连接起来。',
      projectsKicker: 'Selected work', projectsTitle: '当研究可以被听见、看见和使用时，它会变得更加清晰。',
      publicationsKicker: 'Publications', publicationsTitle: '代表论文与学术报告。',
      allProjects: '全部研究项目', allPublications: '完整发表列表',
    },
    researchAreas: [
      { index: '01', title: '空间语音转换', text: '对转换语音的空间特征进行建模与控制。' },
      { index: '02', title: '空间音频智能', text: '使用数据驱动的方法理解和渲染听觉空间。' },
      { index: '03', title: '研究工程', text: '为音频机器学习构建可复用的流水线与可复现实验系统。' },
    ],
    pages: {
      projectsEyebrow: 'Research archive', projectsTitle: '项目与实验', projectsIntro: '进行中的研究、已发表的系统，以及让实验可复现的工程工具。',
      publicationsEyebrow: 'Research output', publicationsTitle: '论文与学术报告', publicationsIntro: '关于音频与声学机器学习的会议论文和学术报告。',
      cvEyebrow: 'Curriculum vitae', cvTitle: '研究简介', cvIntro: '聚焦当前研究身份与实践方式的公开简历。',
      profile: '个人简介', affiliation: '所属', affiliationValue: '庆应义塾大学博士生 · 高道研究室',
      interests: '研究兴趣', interestsValue: ['空间语音转换', '空间音频理解与渲染', '语音与音频机器学习'],
      practice: '研究实践', practiceValue: '我将模型开发与可复用研究软件、数据流水线、评估工具和可复现实验环境结合起来。',
      capabilities: '主要能力', capabilitiesValue: ['Python · Modern C++ · PyTorch', '音频数据流水线与数据增强', 'Docker · Linux · Git', '使用LaTeX进行技术写作'],
      contact: '联系与主页', contactValue: '代码、开源研究工具和近期实验可以在GitHub上查看。',
    },
    labels: { ongoing: '进行中', published: '已发表', maintained: '持续维护', archived: '已归档', oral: '口头报告', poster: '海报', code: '代码', paper: '论文', demo: '演示', read: '查看项目', back: '全部项目' },
    footer: '研究声音与它被听见的位置之间的空间。',
  },
} as const;

export function localePath(locale: Locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') return clean;
  return `/${locale}${clean === '/' ? '/' : clean}`;
}
