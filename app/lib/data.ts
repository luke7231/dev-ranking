type contents = {
  rank?: number;
  title: string;
  link: string;
  icon?: string;
};

interface Data {
  key: string;
  title: string;
  contents: contents[];
  img?: string;
  link?: string;
}

export const ContentsData: Data[] = [
  {
    key: "careerly-w",
    title: "Careerly TOP5 (Weekly)",
    img: "/careerly.png",
    link: "https://careerly.co.kr/",
    contents: [
      {
        rank: 1,
        title: "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 2,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 3,
        title: "명언 중독의 시대를 살아가는 법",
        link: "https://careerly.co.kr/comments/103475",
      },
      {
        rank: 4,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
      {
        rank: 5,
        title: "작년부터 베타 테스트를 진행하다가 지난 3월 GitHub Copi",
        link: "https://careerly.co.kr/comments/103463",
      },
      {
        rank: 6,
        title: "뽑지말아야할 CTO, 뽑아야할 CTO",
        link: "https://careerly.co.kr/comments/103552",
      },
      {
        rank: 7,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 4. 문제 정의 잘하기",
        link: "https://careerly.co.kr/comments/103501",
      },
      {
        rank: 8,
        title: "클린 코드와 비즈니스 임팩트",
        link: "https://careerly.co.kr/comments/103381",
      },
      {
        rank: 9,
        title: "현대적인 JavaScript 한글 라이브러리, es-hangul",
        link: "https://careerly.co.kr/comments/103361",
      },
      {
        rank: 10,
        title: "[다음 분기에 5개월 일하기 vs 지금 5시간 논의하기]",
        link: "https://careerly.co.kr/comments/103491",
      },
    ],
  },
  {
    key: "yozm-it",
    title: "요즘IT TOP5",
    img: "/yozm.jpeg",
    link: "https://yozm.wishket.com/magazine/list/popular/",
    contents: [
      {
        rank: 1,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 2,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 3,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 4,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 5,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 6,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 7,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 8,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 9,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
      },
      {
        rank: 9,
        title: "피드백을 통해 성장하는 법 6가지",
        link: "https://yozm.wishket.com/magazine/detail/2526/",
      },
      {
        rank: 10,
        title: "스마트팩토리는 어떻게 설비 데이터를 수집할까?",
        link: "https://yozm.wishket.com/magazine/detail/2522/",
      },
      {
        rank: 11,
        title: "영향력 있는 개발자 되기: '테오의 프론트엔드' 유용태 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2521/",
      },
      {
        rank: 12,
        title: "프론트엔드 개발자는 서비스 말고 '운영툴'도 만듭니다",
        link: "https://yozm.wishket.com/magazine/detail/2519/",
      },
    ],
  },
  {
    key: "hackerNews",
    title: "HackerNews TOP5",
    img: "/y-combinator.png",
    link: "https://news.ycombinator.com/",
    contents: [
      {
        rank: 1,
        title: "Making a 3D modeler in C in a week (danielchasehooper.com)",
        link: "https://danielchasehooper.com/posts/shapeup/",
      },
      {
        rank: 2,
        title: "An analysis of the rabbit R1 APK (emergetools.com)",
        link: "https://www.emergetools.com/deep-dives/rabbit-r1",
      },
      {
        rank: 3,
        title: "Building a rocket engine from scratch (ablspacesystems.com)",
        link: "https://blog.ablspacesystems.com/p/building-e2",
      },
      {
        rank: 4,
        title: "The world's loudest Lisp program to the rescue (funcall.org)",
        link: "https://blog.funcall.org//lisp%20psychoacoustics/2024/05/01/worlds-loudest-lisp-program/",
      },
      {
        rank: 5,
        title:
          "The life and times of an Abstract Syntax Tree (trailofbits.com)",
        link: "https://blog.trailofbits.com/2024/05/02/the-life-and-times-of-an-abstract-syntax-tree/",
      },
      {
        rank: 6,
        title:
          "Passkey Implementation: Misconceptions, pitfalls and unknown unknowns (corbado.com)",
        link: "https://www.corbado.com/blog/passkey-implementation-pitfalls-misconceptions-unknowns",
      },
      {
        rank: 7,
        title: "Google's Synonym Extraction Methods (2010) (mattcutts.com)",
        link: "https://www.mattcutts.com/blog/google-synonyms/",
      },
      {
        rank: 8,
        title:
          "Teranoptia – a typeface that allows you to imagine chimeric creatures (tunera.xyz)",
        link: "https://www.tunera.xyz/fonts/teranoptia/",
      },
      {
        rank: 9,
        title: "Piccolo – A Stackless Lua Interpreter (kyju.org)",
        link: "https://kyju.org/blog/piccolo-a-stackless-lua-interpreter/",
      },
      {
        rank: 10,
        title:
          "They thought they were joining an accelerator – instead they lost their startups (techcrunch.com)",
        link: "https://techcrunch.com/2024/05/02/they-thought-they-were-joining-an-accelerator-instead-they-lost-their-startups/",
      },
      {
        rank: 11,
        title:
          "Gene banks aren’t enough to save the world’s food (longnow.org)",
        link: "https://longnow.org/ideas/to-save-it-eat-it/",
      },
      {
        rank: 12,
        title: "How did Ancient Greek music sound? (youtube.com)",
        link: "https://www.youtube.com/watch?v=4hOK7bU0S1Y",
      },
      {
        rank: 13,
        title: "Every map of China is wrong (medium.com/anastasia.bizyayeva)",
        link: "https://medium.com/@anastasia.bizyayeva/every-map-of-china-is-wrong-bc2bce145db2",
      },
      {
        rank: 14,
        title:
          "Skio (YC S20) – Subscriptions for Shopify, ReCharge Migrations Is Hiring (skio.com)",
        link: "https://skio.com/careers/",
      },
      {
        rank: 15,
        title:
          "Got an old Raspberry Pi spare? Try RISC OS. It is, something else (theregister.com)",
        link: "https://www.theregister.com/2024/05/02/rool_530_is_here/",
      },
      {
        rank: 16,
        title:
          "Show HN: An extension to track your Wikipedia adventures (chromewebstore.google.com)",
        link: "https://chromewebstore.google.com/detail/wiki-journey/lehenbcbjcnkhkikgopniimobmmdcfog",
      },
      {
        rank: 17,
        title:
          "Pseudo Graceful Process Termination Through Code Injection (sigma-star.at)",
        link: "https://sigma-star.at/blog/2024/02/exit0-code-injection/",
      },
      {
        rank: 18,
        title: "Hobby's algorithm for aesthetic Bézier splines (jakelow.com)",
        link: "https://www.jakelow.com/blog/hobby-curves",
      },
      {
        rank: 19,
        title:
          "TSMC Jumps into Silicon Photonics, Lays Out Roadmap for 12.8 Tbps Interconnect (anandtech.com)",
        link: "https://www.anandtech.com/show/21373/tsmc-adds-silicon-photonics-coupe-roadmap-128tbps-on-package",
      },
      {
        rank: 20,
        title:
          "Pleasure or pain? He maps the neural circuits that decide (quantamagazine.org)",
        link: "https://www.quantamagazine.org/pleasure-or-pain-he-maps-the-neural-circuits-that-decide-20240416/",
      },
      {
        rank: 21,
        title: "Online Cryptography Course (2017) (stanford.edu)",
        link: "https://crypto.stanford.edu/~dabo/courses/OnlineCrypto/",
      },
      {
        rank: 22,
        title: "Wild orangutan seen healing his wound with a plant (bbc.co.uk)",
        link: "https://www.bbc.co.uk/news/science-environment-68942123",
      },
      {
        rank: 23,
        title: "YouTube's Legal Team sent me a letter [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=dqTYg6vnQvw",
      },
      {
        rank: 24,
        title: "A knight's tale (blogs.bl.uk)",
        link: "https://blogs.bl.uk/digitisedmanuscripts/2024/04/a-knights-tale.html",
      },
      {
        rank: 25,
        title: "Rust: Box Is a Unique Type (nilstrieb.dev)",
        link: "https://blog.nilstrieb.dev/posts/box-is-a-unique-type/",
      },
      {
        rank: 26,
        title: "Hacking on PostgreSQL is hard (rhaas.blogspot.com)",
        link: "http://rhaas.blogspot.com/2024/05/hacking-on-postgresql-is-really-hard.html",
      },
      {
        rank: 27,
        title:
          "The Most Decorated Battleship in U.S. History Gets an Overdue Face-Lift (nytimes.com)",
        link: "https://www.nytimes.com/2024/05/01/nyregion/battleship-new-jersey-repairs.html",
      },
      {
        rank: 28,
        title:
          "A blue mineral that grows on buried bodies and confuses archaeologists (2016) (atlasobscura.com)",
        link: "https://www.atlasobscura.com/articles/vivianite-blue-human-remains",
      },
      {
        rank: 29,
        title:
          "Umbra: A Disk-Based System with In-Memory Performance [pdf] (cidrdb.org)",
        link: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf",
      },
      {
        rank: 30,
        title:
          "Show HN: Hacker Search – A semantic search engine for Hacker News (hackersearch.net)",
        link: "https://hackersearch.net/",
      },
    ],
  },
  {
    key: "geekNews",
    title: "GeekNews TOP5",
    img: "/geeknews.png",
    link: "https://news.hada.io/",
    contents: [
      {
        rank: 1,
        title:
          "Y Combinator 없이 미국 진출하기 (feat. Techstars) (plugbear.io)",
        link: "https://plugbear.io/posts/ko/entering-us-market-without-yc",
      },
      {
        rank: 2,
        title: "Cria - Python으로 간단히 LLM 구동하기 (github.com/leftmove)",
        link: "https://github.com/leftmove/cria",
      },
      {
        rank: 3,
        title:
          "Fluent - 자연스러운 번역을 위한 로컬라이제이션 시스템 (projectfluent.org)",
        link: "https://projectfluent.org/",
      },
      {
        rank: 4,
        title: "당신이 바로, 당신이 찾던 기술 코파운더에요 (every.to)",
        link: "https://every.to/p/you-are-the-technical-cofounder-you-need",
      },
      {
        rank: 5,
        title: "Freeter - 모두를 위한 오거나이저 앱 오픈소스 (freeter.io)",
        link: "https://freeter.io/",
      },
      {
        rank: 6,
        title:
          "인증서 문제로 인한 cdn.jsdelivr.net 접속 불능 사태 (github.com/jsdelivr)",
        link: "https://github.com/jsdelivr/jsdelivr/issues/18565",
      },
      {
        rank: 7,
        title: 'GN⁺: 유럽에 드리는 당부의 말, "제발 깨어나시길" (klinger.io)',
        link: "https://klinger.io/posts/eu-acc",
      },
      {
        rank: 8,
        title:
          "GN⁺: SSH를 통해서 커피를 판매하는 새로운 스타트업 (terminal.shop)",
        link: "https://www.terminal.shop/",
      },
      {
        rank: 9,
        title:
          "Captable - 스타트업을 위한 지분 관리 플랫폼 오픈소스 (Carta/Pulley의 대체제) (github.com/captableinc)",
        link: "https://github.com/captableinc/captable",
      },
      {
        rank: 10,
        title:
          "Show GN: 서버 업로드 없이 HEIC/HEIF를 JPG/PNG로 변환해주는 웹 앱 (heif.pages.dev)",
        link: "https://news.hada.io/topic?id=14597",
      },
      {
        rank: 11,
        title: "GN⁺: Pyinfra: 파이썬을 활용한 인프라 자동화 도구 (pyinfra.com)",
        link: "https://pyinfra.com/",
      },
      {
        rank: 12,
        title:
          "GN⁺: Run0 - sudo를 대체하는 systemd 기반 도구 발표 (mastodon.social)",
        link: "https://mastodon.social/@pid_eins/112353324518585654",
      },
      {
        rank: 13,
        title:
          "Llama3-gradient - LLAMA의 컨텍스트 길이를 8k에서 1m으로 확장한 모델 (ollama.com)",
        link: "https://ollama.com/library/llama3-gradient",
      },
      {
        rank: 14,
        title: "GN⁺: CSS Grid로 악보 출력 하기 (cruncher.ch)",
        link: "https://cruncher.ch/blog/printing-music-with-css-grid/",
      },
      {
        rank: 15,
        title:
          "Show GN: 개발자라면 알고 있으면 좋을 사이트 (dev-ranking.vercel.app)",
        link: "https://news.hada.io/topic?id=14558",
      },
      {
        rank: 16,
        title: "Show GN: iPhone을 위한 다기능 계산기 (apps.apple.com)",
        link: "https://news.hada.io/topic?id=14610",
      },
      {
        rank: 17,
        title: 'GN⁺: "제2의 기회"라는 미신 (ft.pressreader.com)',
        link: "https://ft.pressreader.com/article/282557318242321",
      },
      {
        rank: 18,
        title:
          "OpenVoice v2 - 다재다능한 인스턴트 음성 복제 (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
      },
      {
        rank: 19,
        title: "좋아하는 Tech 유튜버가 있나요? (lobste.rs)",
        link: "https://lobste.rs/s/krkuc9/who_are_your_favorite_tech_youtubers",
      },
      {
        rank: 20,
        title:
          "2024년 AI 스타트업을 위한 데이터 수집 전략 (press.airstreet.com)",
        link: "https://press.airstreet.com/p/data-acquisition-strategies-for-ai",
      },
    ],
  },
  {
    key: "disquiet",
    title: "Trending product TOP5 (국내)",
    img: "/disquiet.jpeg",
    link: "https://disquiet.io/",
    contents: [
      {
        rank: 1,
        icon: 'https://media.disquiet.io/images/product/thumbnail/db397e06cd6259eb5b3303d40fe89ab9b87289b092fb8395fd200eb0f23af358?w=64&f=webp")',
        title: "반디부디",
        link: "https://disquiet.io/product/%EB%B0%98%EB%94%94%EB%B6%80%EB%94%94",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/b94144c29c079299a94b1c5477292b1438c39703c2013677d56d32855ef461b7?w=64&f=webp")',
        title: "CODI 코디",
        link: "https://disquiet.io/product/codi-%EC%BD%94%EB%94%94",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/8e9080eba0b0cf1af7456869d523d1ea6653a9cc2ffbff24ca4d9d849ec71d4c?w=64&f=webp")',
        title: "typeodd 불안보다 빠르게 타자연습",
        link: "https://disquiet.io/product/typeodd-%EB%B6%88%EC%95%88%EB%B3%B4%EB%8B%A4-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%ED%83%80%EC%9E%90%EC%97%B0%EC%8A%B5",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/51a2cfe8ce6380765712f323e988879da6e07edab057598d8d4be2ac6ee3dd75?w=64&f=webp")',
        title: "지하철톡",
        link: "https://disquiet.io/product/%EC%A7%80%ED%95%98%EC%B0%B0%ED%86%A1",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/5d8287d50d1309d75d25c644aff7911f3f79fcf79c31b16c67a7c611b5eec902?w=64&f=webp")',
        title: "위클리어드바이저",
        link: "https://disquiet.io/product/%EC%9C%84%ED%81%B4%EB%A6%AC%EC%96%B4%EB%93%9C%EB%B0%94%EC%9D%B4%EC%A0%80",
      },
    ],
  },
  {
    key: "careerly-m",
    title: "Careerly Top5 (Monthly)",
    img: "/careerly.png",
    link: "https://careerly.co.kr/",
    contents: [
      {
        rank: 1,
        title:
          "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일에 대해",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 2,
        title: "회사 테크 블로그 모음 👨🏻‍💻",
        link: "https://careerly.co.kr/comments/103945",
      },
      {
        rank: 3,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (1)",
        link: "https://careerly.co.kr/comments/102333",
      },
      {
        rank: 4,
        title: "개발자가 실생활에서 실천할 수 있는 스터디 방법 소개 🔑",
        link: "https://careerly.co.kr/comments/102794",
      },
      {
        rank: 5,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
      {
        rank: 6,
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 7,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 8,
        title: "개발자 성장에 대한 영상 정리",
        link: "https://careerly.co.kr/comments/102271",
      },
      {
        rank: 9,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 10,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 11,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 12,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 13,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 14,
        title: "🥟 Bun v1.1 출시 소식",
        link: "https://careerly.co.kr/comments/102544",
      },
      {
        rank: 15,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 16,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 17,
        title: "토스: React Native의 미래 💙",
        link: "https://careerly.co.kr/comments/102465",
      },
      {
        rank: 18,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (3)",
        link: "https://careerly.co.kr/comments/102872",
      },
      {
        rank: 19,
        title: "다시 한 번 영어 공부",
        link: "https://careerly.co.kr/comments/102379",
      },
      {
        rank: 20,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
    ],
  },
  {
    key: "productHunt",
    title: "Trending Product TOP5 (글로벌)",
    img: "/product-hunt.png",
    link: "https://www.producthunt.com/",
    contents: [
      {
        rank: 1,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Waxwing",
        link: "https://www.producthunt.com/posts/waxwing",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/2cd22331-88c6-4d4b-9d80-ff556676c843.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "QueryPal",
        link: "https://www.producthunt.com/posts/querypal-2",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/e546bd04-1e91-447b-940b-29a4a18244f6.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Monterey AI 2.0",
        link: "https://www.producthunt.com/posts/monterey-ai-2-0",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/d6c70512-2bb3-4767-bd2c-524d7a4aac25.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "fullwindcss",
        link: "https://www.producthunt.com/posts/fullwindcss",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/548c7936-a59d-470d-96e3-6be5e5df9855.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BlockSurvey",
        link: "https://www.producthunt.com/posts/blocksurvey-token-gated-forms-surveys",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/21b48e7d-8cba-44b4-ae01-b7cd18fe3c96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Autopilot for Slack",
        link: "https://www.producthunt.com/posts/autopilot-for-slack",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/c1a42f4a-e7d9-4cae-8c2c-a5d13f78445c.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "WIZPR RING",
        link: "https://www.producthunt.com/posts/wizpr-ring",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/aee41a54-e13a-427e-b25e-08cdb047e847.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Assistant and Bot Builder",
        link: "https://www.producthunt.com/posts/ai-assistant-and-bot-builder",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/66168ad9-0cae-4ffb-9b79-ff7147ed4551.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Playbook x GPT",
        link: "https://www.producthunt.com/posts/playbook-x-gpt",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/6ab84b01-c8a7-49fa-80b5-a8f6016067be.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Job Boardly",
        link: "https://www.producthunt.com/posts/job-boardly",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/5f138091-98f3-444c-92f5-b36837b29532.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Mockey AI Pro",
        link: "https://www.producthunt.com/posts/mockey-ai-pro",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/f676f2b1-6153-4fb5-895b-ed0dd1df493b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AaRead",
        link: "https://www.producthunt.com/posts/aaread",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/e15bed5b-ee94-4e3f-a888-54cb5307a42c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Y.GY",
        link: "https://www.producthunt.com/posts/y-gy",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/80dba955-77e2-4297-a919-05e641d8c2af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Airbnb Icons",
        link: "https://www.producthunt.com/posts/airbnb-icons",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/60a4e0e9-2c98-4699-81df-fecbbed312f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NextCommit",
        link: "https://www.producthunt.com/posts/nextcommit",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "1Flow",
        link: "https://www.producthunt.com/posts/1flow",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "FeaturePanel",
        link: "https://www.producthunt.com/posts/featurepanel",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/6bed0d5a-0f9e-44dd-a9d9-a98238c2f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Loom AI Workflows",
        link: "https://www.producthunt.com/posts/loom-ai-workflows",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/5476bfa0-846b-4296-a4c6-341430e307fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stackradar",
        link: "https://www.producthunt.com/posts/stackradar",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Arc for Windows",
        link: "https://www.producthunt.com/posts/arc-for-windows",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title:
          "업무에 손쉽게 Golang 적용하기: 로케이션 코어팀 백엔드 개발자가 일하는 방식",
        link: "https://medium.com/daangn/%EC%97%85%EB%AC%B4%EC%97%90-%EC%86%90%EC%89%BD%EA%B2%8C-golang-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-%EB%A1%9C%EC%BC%80%EC%9D%B4%EC%85%98-%EC%BD%94%EC%96%B4%ED%8C%80-%EB%B0%B1%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EC%9D%BC%ED%95%98%EB%8A%94-%EB%B0%A9%EC%8B%9D-d2201319212a",
      },
      {
        title: "Python 3.12 새로운 기능",
        link: "https://modulabs.co.kr/blog/python-3-12/",
      },
      {
        title:
          "AWS 비용 최적화 Part 1: 버즈빌은 어떻게 월 1억 이상의 AWS 비용을 절약할 수 있었을까",
        link: "https://tech.buzzvil.com/blog/2024/aws-cost-optimization-part-1",
      },
      {
        title: "언제 이직할 회사를 고르면 좋을까?",
        link: "https://jojoldu.tistory.com/778",
      },
      {
        title: "개발자가 손수 대규모 Cassandra를 신규 클러스터로 이전하기",
        link: "https://techblog.lycorp.co.jp/ko/moving-large-scale-cassandra-to-a-new-cluster",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "웹페이지 SEO, 성능, UX 최적화 한번에 하기",
        link: "https://baekkyoungjung.medium.com/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%84%B1%EB%8A%A5-seo-ux-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%9C%EB%B2%88%EC%97%90-%ED%95%98%EA%B8%B0-a529d233c521",
      },
      {
        title: "React 19 출시와 새로운 기능",
        link: "https://modulabs.co.kr/blog/react-19/",
      },
      {
        title: "언제 이직할 회사를 고르면 좋을까?",
        link: "https://jojoldu.tistory.com/778",
      },
      {
        title: "Goodbye next/image",
        link: "https://medium.com/@wj2kim/goodbye-next-image-f83c85378133",
      },
      {
        title: "상품 설명 영역 개선기",
        link: "https://oliveyoung.tech/blog/2024-04-01/goods-detail-description-improvement/",
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
