type contents = {
  rank?: number;
  title: string;
  link: string;
  icon?: string;
};

interface Data {
  title: string;
  contents: contents[];
  img?: string;
}

export const ContentsData: Data[] = [
  {
    title: "Careerly TOP5 (Weekly)",
    img: "/careerly.png",
    contents: [
      {
        rank: 1,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 2,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 3,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 4,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
      },
      {
        rank: 5,
        title: "프런트엔드의 미래 탐색하기",
        link: "https://careerly.co.kr/comments/103192",
      },
    ],
  },
  {
    title: "HakerNews TOP5",
    img: "/y-combinator.png",
    contents: [
      {
        rank: 1,
        title: "Ruby vs. Python comes down to the for loop (2021)",
        link: "https://softwaredoug.com/blog/2021/11/12/ruby-vs-python-for-loop.html",
      },
      {
        rank: 2,
        title: "I should have loved biology (2020)",
        link: "https://jsomers.net/i-should-have-loved-biology/",
      },
      {
        rank: 3,
        title: "Pico.sh – Hacker Labs",
        link: "https://github.com/picosh/pico",
      },
      {
        rank: 4,
        title:
          "Penzai: JAX research toolkit for building, editing, and visualizing neural nets",
        link: "https://github.com/google-deepmind/penzai",
      },
      {
        rank: 5,
        title: "The failure of the Domino's 30-minute delivery guarantee",
        link: "https://thehustle.co/originals/the-failure-of-the-dominos-30-minute-delivery-guarantee",
      },
    ],
  },
  {
    title: "GeekNews TOP5",
    img: "/geeknews.png",
    contents: [
      {
        rank: 1,
        title: "당신이 기술 코파운더를 찾을 수 없는 이유",
        link: "https://www.breakneck.dev/blog/no-tech-cofounder",
      },
      {
        rank: 2,
        title: "Python을 학습하기에 좋은 고품질 스크립트/작은 라이브러리는?",
        link: "https://news.ycombinator.com/item?id=40085887",
      },
      {
        rank: 3,
        title:
          "Pretzel - 데이터 탐색/시각화를 위한 오픈소스 오프라인 브라우저 기반 도구",
        link: "https://github.com/pretzelai/pretzelai",
      },
      {
        rank: 4,
        title: "GN⁺: 분산형 SQLite: 패러다임의 전환인가 과장된 선전인가?",
        link: "https://kerkour.com/distributed-sqlite",
      },
      {
        rank: 5,
        title: "GN⁺: Valkey가 빠르게 Redis를 대체하고 있음",
        link: "https://devops.com/valkey-is-rapidly-overtaking-redis/",
      },
    ],
  },
  {
    title: "Trending product TOP5 (국내)",
    img: "/disquiet.jpeg",
    contents: [
      {
        rank: 1,
        icon: 'https://media.disquiet.io/images/product/thumbnail/4064e84a117102df8bdae1814ab01e4ac933f964684292091fed0433770e86d4?w=64&f=webp")',
        title: "Reliv 릴리브 QA 자동화",
        link: "https://disquiet.io/product/reliv-%EB%A6%B4%EB%A6%AC%EB%B8%8C-qa-%EC%9E%90%EB%8F%99%ED%99%94",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/f2705ffc34b3005fc0c074ccd625b04ef27637b6753693edbdaa5c2472ede6be?w=64&f=webp")',
        title: "바퀴벌레 감별기",
        link: "https://disquiet.io/product/%EB%B0%94%ED%80%B4%EB%B2%8C%EB%A0%88-%EA%B0%90%EB%B3%84%EA%B8%B0",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/2f68446994c5b0e4b7608fd1d40068f38b42d0125cb0da6da6cae40cb3219bb7?w=64&f=webp")',
        title: "모티브",
        link: "https://disquiet.io/product/%EB%AA%A8%ED%8B%B0%EB%B8%8C",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/425ef6a2bd5e27017a674efae3e528cf7e27d3d513ca8f4a49cf5ab514ffca46?w=64&f=webp")',
        title: "플라이어",
        link: "https://disquiet.io/product/%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4-1713623995850",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/fe5dc950c46dd424abf42853e08dc114a4d8d87cf4b4077be55260212632588e?w=64&f=webp")',
        title: "datarichard",
        link: "https://disquiet.io/product/datarichard-1713574688648",
      },
    ],
  },
  {
    title: "Careerly Top5 (Monthly)",
    img: "/careerly.png",
    contents: [
      {
        rank: 1,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (1)",
        link: "https://careerly.co.kr/comments/102333",
      },
      {
        rank: 2,
        title: "개발자👨‍💻에게 기술 블로그는 필수일까?",
        link: "https://careerly.co.kr/comments/101712",
      },
      {
        rank: 3,
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
      },
      {
        rank: 4,
        title: "아파치 톰캣 내부구조",
        link: "https://careerly.co.kr/comments/101977",
      },
      {
        rank: 5,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
    ],
  },
  {
    title: "Trending Product TOP5 (글로벌)",
    img: "/product-hunt.png",
    contents: [
      {
        rank: 1,
        icon: "https://ph-files.imgix.net/100d1bba-ff8e-464f-b23f-f289f59c464e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Univi: Manage your ADHD",
        link: "https://www.producthunt.com/posts/univi-manage-your-adhd",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/1753c680-3256-4f46-9492-7377bf1611ab.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Design Sketch by Stylar",
        link: "https://www.producthunt.com/posts/ai-design-sketch-by-stylar",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/4e714067-5f2e-4c67-814f-d16886553a27.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sonnet",
        link: "https://www.producthunt.com/posts/sonnet-4",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/2495bade-0d4f-4962-96b1-c645ab10c586.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Notion Headers",
        link: "https://www.producthunt.com/posts/notion-headers-2",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/13d5ad0c-7bb9-462c-813c-437c089dba39.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AllMind AI: Your Personal Stock Analyst",
        link: "https://www.producthunt.com/posts/allmind-ai-your-personal-stock-analyst",
      },
    ],
  },
  {
    title: "오늘의 SERVER",
    contents: [
      {
        title: "[SaaS] 시간여행이 가능한 시스템 아키텍처",
        link: "https://blog.gangnamunni.com/post/saas-event-sourcing/",
      },
      {
        title: "[신청 시작] 4월 우아한테크세미나: Java의 미래, Virtual Thread",
        link: "https://techblog.woowahan.com/17163/?utm_source=oneoneone",
      },
      {
        title: "개발자를 잠 못 들게 만드는 코드",
        link: "https://dev.gmarket.com/103",
      },
      {
        title: "설계란 고민의 연속이다 1편",
        link: "https://dev.gmarket.com/104",
      },
      {
        title: "개발자가 손수 대규모 Cassandra를 신규 클러스터로 이전하기",
        link: "https://techblog.lycorp.co.jp/ko/moving-large-scale-cassandra-to-a-new-cluster",
      },
    ],
  },
  {
    title: "오늘의 WEB",
    contents: [
      {
        title: "크로스 플랫폼 디자인 시스템, 1.5년의 기록 (2)",
        link: "https://yozm.wishket.com/magazine/detail/2538/",
      },
      {
        title: "2024 프론트엔드 기술스택 이야기",
        link: "https://velog.io/@teo/2024-frontend-techstack",
      },
      {
        title: "[번역] 재미와 이익을 위한 자바스크립트 최적화",
        link: "https://velog.io/@surim014/optimizing-javascript-for-fun-and-for-profit",
      },
      {
        title: "(번역) 자바스크립트 시각화하기 : 프로미스 실행",
        link: "https://velog.io/@sehyunny/js-visualized-promise-execution",
      },
      {
        title: "지금 당장 pnpm으로 넘어가야 하는 이유",
        link: "https://lasbe.tistory.com/200?utm_source=oneoneone",
      },
    ],
  },
];

export const techBlogs = [
  {
    topic: "Search",
    list: [
      {
        title: "네이버",
        link: "https://d2.naver.com/home",
      },
      {
        title: "카카오",
        link: "https://tech.kakao.com/blog/",
      },
      {
        title: "네이버 플레이스",
        link: "https://medium.com/naver-place-dev",
      },
      {
        title: "구글",
        link: "https://developers.googleblog.com/",
      },
      {
        title: "Zum",
        link: "https://zuminternet.github.io/",
      },
      {
        title: "다나와",
        link: "https://danawalab.github.io/",
      },
    ],
  },
  {
    topic: "E-Commerce",
    list: [
      {
        title: "쿠팡",
        link: "https://medium.com/coupang-engineering/kr/home",
      },
      {
        title: "지마켓",
        link: "https://dev.gmarket.com/",
      },
      {
        title: "마켓컬리",
        link: "https://helloworld.kurly.com/",
      },
      {
        title: "롯데ON",
        link: "https://techblog.lotteon.com/",
      },
      {
        title: "당근",
        link: "https://medium.com/daangn",
      },
      {
        title: "중고나라",
        link: "https://blog.joongna.com/",
      },
      {
        title: "아마존",
        link: "https://developer.amazon.com/en-US/blogs/alexa",
      },
      {
        title: "이베이",
        link: "https://tech.ebayinc.com/",
      },
    ],
  },
  {
    topic: "SNS",
    list: [
      {
        title: "라인",
        link: "https://engineering.linecorp.com/ko",
      },
      {
        title: "페이스북",
        link: "https://engineering.fb.com/",
      },
      {
        title: "슬랙",
        link: "https://slack.engineering/",
      },
      {
        title: "트위터",
        link: "https://blog.twitter.com/engineering/en_us",
      },
    ],
  },
  {
    topic: "Fin Tech",
    list: [
      {
        title: "토스",
        link: "https://toss.tech/",
      },
      {
        title: "카카오페이",
        link: "https://tech.kakaopay.com/",
      },
      {
        title: "뱅크샐러드",
        link: "https://blog.banksalad.com/",
      },
      {
        title: "페이팔",
        link: "https://medium.com/paypal-tech",
      },
    ],
  },
  {
    topic: "모빌리티",
    list: [
      {
        title: "우아한형제들",
        link: "https://techblog.woowahan.com/",
      },
      {
        title: "쏘카",
        link: "https://tech.socarcorp.kr/",
      },
      {
        title: "요기요",
        link: "https://techblog.yogiyo.co.kr/",
      },
      {
        title: "현대자동차",
        link: "https://42dot.ai/blog",
      },
      {
        title: "그랩",
        link: "https://engineering.grab.com/",
      },
    ],
  },

  {
    topic: "숙박",
    list: [
      {
        title: "직방",
        link: "https://medium.com/zigbang",
      },
      {
        title: "여기어때",
        link: "https://techblog.gccompany.co.kr/",
      },
      {
        title: "에어비앤비",
        link: "https://medium.com/airbnb-engineering",
      },
    ],
  },
  {
    topic: "HR",
    list: [
      {
        title: "원티드",
        link: "https://medium.com/wantedjobs",
      },
      {
        title: "사람인",
        link: "https://saramin.github.io/",
      },
      {
        title: "크몽",
        link: "https://blog.kmong.com/tech/home",
      },
      {
        title: "링크드인",
        link: "https://www.linkedin.com/blog/engineering",
      },
    ],
  },
  {
    topic: "게임",
    list: [
      {
        title: "넷마블",
        link: "https://netmarble.engineering/",
      },
      {
        title: "넥슨",
        link: "https://www.intelligencelabs.tech/",
      },
      {
        title: "데브시스터즈",
        link: "https://tech.devsisters.com/",
      },
      {
        title: "구글플레이",
        link: "https://medium.com/googleplaydev",
      },
    ],
  },
  {
    topic: "뷰티-패션",
    list: [
      {
        title: "올리브영",
        link: "https://oliveyoung.tech/",
      },
      {
        title: "화해",
        link: "https://blog.hwahae.co.kr/category/all/tech",
      },
      {
        title: "무신사",
        link: "https://medium.com/musinsa-tech",
      },
      {
        title: "29CM",
        link: "https://medium.com/29cm",
      },
      {
        title: "카카오스타일",
        link: "https://devblog.kakaostyle.com/ko/",
      },
      {
        title: "브랜디",
        link: "https://labs.brandi.co.kr//",
      },
    ],
  },
  {
    topic: "미디어",
    list: [
      {
        title: "리디",
        link: "https://ridicorp.com/story-category/tech-blog/",
      },
      {
        title: "왓챠",
        link: "https://medium.com/watcha",
      },
      {
        title: "티빙",
        link: "https://medium.com/tving-team",
      },
      {
        title: "넷플릭스",
        link: "https://netflixtechblog.com/",
      },
      {
        title: "스포티파이",
        link: "https://engineering.atspotify.com/",
      },
      {
        title: "핀터레스트",
        link: "https://medium.com/@Pinterest_Engineering",
      },
    ],
  },
  {
    topic: "데이터-통신",
    list: [
      {
        title: "SK 데보션",
        link: "https://devocean.sk.com/blog/sub/index.do?ID=&searchData=&page=&subIndex=%EC%B5%9C%EC%8B%A0+%EA%B8%B0%EC%88%A0+%EB%B8%94%EB%A1%9C%EA%B7%B8",
      },
      {
        title: "카카오 엔터프라이즈",
        link: "https://tech.kakaoenterprise.com/",
      },
      {
        title: "NHN Cloud",
        link: "https://meetup.nhncloud.com/",
      },
      {
        title: "모두싸인",
        link: "https://team.modusign.co.kr/tagged/engineering",
      },
      {
        title: "마이크로소프트",
        link: "https://techcommunity.microsoft.com/",
      },
      {
        title: "드롭박스",
        link: "https://dropbox.tech/",
      },
      {
        title: "줌",
        link: "https://medium.com/zoom-developer-blog",
      },
      {
        title: "애플",
        link: "https://developer.apple.com/",
      },
      {
        title: "깃허브",
        link: "https://github.blog/",
      },
    ],
  },
];
