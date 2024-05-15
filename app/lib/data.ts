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
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 6. 운영 고려 코드",
        link: "https://careerly.co.kr/comments/104266",
      },
      {
        rank: 2,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 3,
        title: "개발자 팟캐스트",
        link: "https://careerly.co.kr/comments/104400",
      },
      {
        rank: 4,
        title: "프론트엔드 개발자 2명이 만든 명품 주얼리 거래 이커머스 앱",
        link: "https://careerly.co.kr/comments/104340",
      },
      {
        rank: 5,
        title: "완벽함과 거리두기",
        link: "https://careerly.co.kr/comments/104214",
      },
      {
        rank: 6,
        title: "나쁜 사람에 대한 최고의 복수는 '그 사람의 언어를 쓰지 않는 것",
        link: "https://careerly.co.kr/comments/104368",
      },
      {
        rank: 7,
        title: "대한민국 5대 IT회사 네카라쿠배 국적 네(이버) - 한국 회사",
        link: "https://careerly.co.kr/comments/104413",
      },
      {
        rank: 8,
        title: "작년에 예상한 올해 ’2024년 마케팅&시장 트렌드 TOP 10‘",
        link: "https://careerly.co.kr/comments/104326",
      },
      {
        rank: 9,
        title: "SOLID 원칙의 이면",
        link: "https://careerly.co.kr/comments/104478",
      },
      {
        rank: 10,
        title: "웹 표준 기술로 구현하는 웹 컴포넌트(Web Components)",
        link: "https://careerly.co.kr/comments/104439",
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
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 2,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 3,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 4,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 5,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 6,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 7,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 8,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 9,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 10,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 11,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 12,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 13,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
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
        title: "Veo (deepmind.google)",
        link: "https://deepmind.google/technologies/veo/",
      },
      {
        rank: 2,
        title: "The Most Talented Person in the World (matt.sh)",
        link: "https://matt.sh/the-most-talented-person",
      },
      {
        rank: 3,
        title: "Ilya Sutskever to leave OpenAI (twitter.com/ilyasut)",
        link: "https://twitter.com/ilyasut/status/1790517455628198322",
      },
      {
        rank: 4,
        title:
          "Glider – open-source eInk monitor with an emphasis on low latency (github.com/modos-labs)",
        link: "https://github.com/Modos-Labs/Glider",
      },
      {
        rank: 5,
        title:
          "U.S. Government Now Spends More on Debt Interest than National Defense (crfb.org)",
        link: "https://www.crfb.org/blogs/do-we-spend-more-interest-defense",
      },
      {
        rank: 6,
        title: "Gemini Flash (deepmind.google)",
        link: "https://deepmind.google/technologies/gemini/flash/",
      },
      {
        rank: 7,
        title:
          "GPT-4o's Memory Breakthrough – Needle in a Needlestack (llmonpy.ai)",
        link: "http://nian.llmonpy.ai/",
      },
      {
        rank: 8,
        title:
          "Sir, there's a cat in your mirror dimension (lcamtuf.substack.com)",
        link: "https://lcamtuf.substack.com/p/sir-theres-a-cat-in-your-mirror-dimension",
      },
      {
        rank: 9,
        title:
          "Model Explorer: intuitive and hierarchical visualization of model graphs (ai.google.dev)",
        link: "https://ai.google.dev/edge/model-explorer",
      },
      {
        rank: 10,
        title: "The new APT 3.0 solver (jak-linux.org)",
        link: "https://blog.jak-linux.org/2024/05/14/solver3/",
      },
      {
        rank: 11,
        title:
          "Contact of Containership Dali with the Key Bridge and Subsequent Bridge Collapse [pdf] (nyt.com)",
        link: "https://static01.nyt.com/newsgraphics/documenttools/6119296c8c79713a/0e214c46-full.pdf",
      },
      {
        rank: 12,
        title:
          "Femtosecond lasers create 3D midair plasma displays you can touch (ieee.org)",
        link: "https://spectrum.ieee.org/femtosecond-lasers-create-3d-midair-plasma-displays-you-can-touch",
      },
      {
        rank: 13,
        title:
          "Stone with ancient writing system unearthed in garden (bbc.co.uk)",
        link: "https://www.bbc.co.uk/news/articles/c14kywyk0vro",
      },
      {
        rank: 14,
        title:
          "Researchers find high levels of lead, mercury and arsenic in Beethoven's hair (smithsonianmag.com)",
        link: "https://www.smithsonianmag.com/smart-news/locks-of-beethovens-hair-are-unraveling-the-mysteries-of-his-deafness-and-illnesses-180984332/",
      },
      {
        rank: 15,
        title: "PaliGemma (ai.google.dev)",
        link: "https://ai.google.dev/gemma/docs/paligemma",
      },
      {
        rank: 16,
        title:
          "Optimizing ClickHouse: Tactics that worked for us (highlight.io)",
        link: "https://www.highlight.io/blog/lw5-clickhouse-performance-optimization",
      },
      {
        rank: 17,
        title:
          "The creator of 'Magic: The Gathering' knows where it all went wrong (defector.com)",
        link: "https://defector.com/the-creator-of-magic-the-gathering-knows-exactly-where-it-all-went-wrong",
      },
      {
        rank: 18,
        title: "Exploring GNU extensions in the Linux kernel (maskray.me)",
        link: "https://maskray.me/blog/2024-05-12-exploring-gnu-extensions-in-linux-kernel",
      },
      {
        rank: 19,
        title:
          "Show HN: Pico: An open-source Ngrok alternative built for production traffic (github.com/andydunstall)",
        link: "https://github.com/andydunstall/pico",
      },
      {
        rank: 20,
        title:
          "Higher RAII and the seven arcane uses of linear types (verdagon.dev)",
        link: "https://verdagon.dev/blog/higher-raii-uses-linear-types",
      },
      {
        rank: 21,
        title: "'Shake' Design Documents (digitalcomposting.wordpress.com)",
        link: "https://digitalcomposting.wordpress.com/2024/05/14/shake-design-documents/",
      },
      {
        rank: 22,
        title:
          "Linum (YC W23) is hiring a founding AI engineer to train text-to-video models (workatastartup.com)",
        link: "https://www.workatastartup.com/jobs/66397",
      },
      {
        rank: 23,
        title:
          "Glance: A self-hosted dashboard that puts all your feeds in one place (github.com/glanceapp)",
        link: "https://github.com/glanceapp/glance",
      },
      {
        rank: 24,
        title: "Timekeeping Before Clocks (worldhistory.substack.com)",
        link: "https://worldhistory.substack.com/p/to-cut-and-hack-my-days",
      },
      {
        rank: 25,
        title:
          "One malicious car could trick smart traffic control systems in the US (bleepingcomputer.com)",
        link: "https://www.bleepingcomputer.com/news/technology/one-single-malicious-vehicle-can-block-smart-street-intersections-in-the-us/",
      },
      {
        rank: 26,
        title:
          "IBM and the Transformation of Corporate Design (computerhistory.org)",
        link: "https://computerhistory.org/blog/ibm-and-the-transformation-of-corporate-design/",
      },
      {
        rank: 27,
        title: "Prolog and Natural-Language Analysis (1987) [pdf] (mtome.com)",
        link: "http://www.mtome.com/Publications/PNLA/prolog-digital.pdf",
      },
      {
        rank: 28,
        title:
          "Goldboot: Immutable infrastructure for the desktop (github.com/fossable)",
        link: "https://github.com/fossable/goldboot",
      },
      {
        rank: 29,
        title: "Most common PIN codes (2012) (datagenetics.com)",
        link: "http://www.datagenetics.com/blog/september32012/index.html",
      },
      {
        rank: 30,
        title: "New gel breaks down alcohol in the body (ethz.ch)",
        link: "https://ethz.ch/en/news-and-events/eth-news/news/2024/05/press-release-new-gel-breaks-down-alcohol-in-the-body.html",
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
        title: "Google I/O 2024에서 발표된 모든 것들 (theverge.com)",
        link: "https://www.theverge.com/24153841/google-io-2024-ai-gemini-android-chrome-photos",
      },
      {
        rank: 2,
        title:
          "GN⁺: iPad Pro 리뷰 아님: iPadOS가 여전히 기본을 제대로 못하는 이유 (macstories.net)",
        link: "https://www.macstories.net/stories/not-an-ipad-pro-review/",
      },
      {
        rank: 3,
        title:
          "스타트업 성공 전략의 80%는 실수를 피하는 것 (longform.asmartbear.com)",
        link: "https://longform.asmartbear.com/avoid-blundering/",
      },
      {
        rank: 4,
        title:
          "내가 StackOverflow에 시간과 전문 지식을 제공한 이유는 CC-BY-SA 라이선스 였기 때문 (aus.social)",
        link: "https://aus.social/@KathyReid/112413898118066645",
      },
      {
        rank: 5,
        title: "구글 I/O 2024 주요 발표 내용 정리 (haebom.dev)",
        link: "https://www.haebom.dev/ywk9j72955gzx2gpqvnd",
      },
      {
        rank: 6,
        title:
          "OpenAI, 텍스트, 오디오, 이미지 기능을 갖춘 멀티모달 AI 모델 GPT-4o 공개 (openai.com)",
        link: "https://openai.com/index/hello-gpt-4o/",
      },
      {
        rank: 7,
        title: "dufs - Rust로 작성된 경량 파일/웹 서버 (github.com/sigoden)",
        link: "https://github.com/sigoden/dufs",
      },
      {
        rank: 8,
        title: "스타트업 창업가가 직감을 믿어야 할 때 (youtube.com)",
        link: "https://www.youtube.com/watch?v=2ViqdR5E2wU&t=1s",
      },
      {
        rank: 9,
        title:
          "Node 버전 관리자 5종 비교 : NVM, N, FNM, Volta, PNPM (pavel-romanov.com)",
        link: "https://pavel-romanov.com/5-node-version-managers-compared-which-is-right-for-you",
      },
      {
        rank: 10,
        title: "Unitree G1 - 휴머노이드 에이전트 로봇 (unitree.com)",
        link: "https://www.unitree.com/g1/",
      },
      {
        rank: 11,
        title:
          "Sam Altman: GPTo와 OpenAI의 임무 및 GPT-4의 새로운 음성 모드 (blog.samaltman.com)",
        link: "https://blog.samaltman.com/gpt-4o",
      },
      {
        rank: 12,
        title:
          "에어팟을 암퇴치를 위한 피트니스 트래커로 만들기 (richarddas.com)",
        link: "https://richarddas.com/blog/turning-airpods-into-fitness-trackers-to-fight-cancer/",
      },
      {
        rank: 13,
        title: "PGMQ - Postgres 기반의 SQS 대체제 (github.com/tembo-io)",
        link: "https://github.com/tembo-io/pgmq",
      },
      {
        rank: 14,
        title:
          "OpenAI, GPT-4o 공개 및 ChatGPT Free User에 더 많은 도구 도입 (openai.com)",
        link: "https://openai.com/index/gpt-4o-and-more-tools-to-chatgpt-free/",
      },
      {
        rank: 15,
        title:
          "[번역] Claude-3로부터 더 나은 결과를 얻기 위한 프롬프트 엔지니어링 전략 (feat. Anthropic) (discuss.pytorch.kr)",
        link: "https://discuss.pytorch.kr/t/claude-3-feat-anthropic/4323?utm_source=geeknews",
      },
      {
        rank: 16,
        title: "GN⁺: Omniclip - 오픈소스 웹 비디오 편집기 (omniclip.app)",
        link: "https://omniclip.app/",
      },
      {
        rank: 17,
        title:
          "GN⁺: Cap - 화면 녹화&공유 도구 Loom 의 오픈소스 대체제 (github.com/CapSoftware)",
        link: "https://github.com/CapSoftware/Cap",
      },
      {
        rank: 18,
        title:
          "Show GN: JavaScript에서 한글을 다루는 현대적인 라이브러리 (github.com/toss)",
        link: "https://news.hada.io/topic?id=14731",
      },
      {
        rank: 19,
        title:
          "GN⁺: Superfile - 화려하고 멋진 터미널 파일 관리자 (github.com/MHNightCat)",
        link: "https://github.com/MHNightCat/superfile",
      },
      {
        rank: 20,
        title:
          "에어팟을 모스부호(Morse Code) 송신기로 사용하기 (github.com/EtherDream)",
        link: "https://github.com/EtherDream/headphone-morse-transmitter",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/6858fbf3cb9ebf2f7420a91b8160bfe63c6e1de78c122754aa9effc4119d2e52?w=64&f=webp")',
        title: "플라멜 Flamel v0.9",
        link: "https://disquiet.io/product/%ED%94%8C%EB%9D%BC%EB%A9%9C-flamel-v0-9",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/23509e6f92daa56dda88f63ccb7c2d85fd2fb5d6fcb7720ba06c3a8834f8c1ec?w=64&f=webp")',
        title: "MADII 마디",
        link: "https://disquiet.io/product/madii",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/04d89f693e622e95c106e46c69ef7145ea26e4a5ef91238fee8fba5a57c16ad5?w=64&f=webp")',
        title: "One Thing",
        link: "https://disquiet.io/product/one-thing",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/1d76e0c8fd141e75e8c2775dc3fa33ec45d2b9f0a4496e8c77b09999cb9ae250?w=64&f=webp")',
        title: "해시스크래퍼",
        link: "https://disquiet.io/product/%ED%95%B4%EC%8B%9C%EC%8A%A4%ED%81%AC%EB%9E%98%ED%8D%BC",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/5a494a87d9906e1e5bd50dda4c2ea40cc65b3f6cbe0def23aca3e706f9b2386b?w=64&f=webp")',
        title: "부처AI",
        link: "https://disquiet.io/product/%EB%B6%80%EC%B2%98ai",
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
        title: "회사 테크 블로그 모음 👨🏻‍💻",
        link: "https://careerly.co.kr/comments/103945",
      },
      {
        rank: 2,
        title:
          "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일에 대해",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 3,
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 4,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 5,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 6. 운영 고려 코드 작성",
        link: "https://careerly.co.kr/comments/104266",
      },

      {
        rank: 6,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 7,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 8,
        title: "🧨 개발자를 잠 못 들게 만드는 코드",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 9,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 10,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 11,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 12,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
      {
        rank: 13,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 5. 태스크 완료 시간 추정",
        link: "https://careerly.co.kr/comments/103676",
      },

      {
        rank: 14,
        title: "개발자 팟캐스트",
        link: "https://careerly.co.kr/comments/104400",
      },
      {
        rank: 15,
        title: "작년부터 베타 테스트를 진행하다가",
        link: "https://careerly.co.kr/comments/103463",
      },
      {
        rank: 16,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
      },
      {
        rank: 17,
        title: "현대적인 JavaScript 한글 라이브러리, es-hangul",
        link: "https://careerly.co.kr/comments/103361",
      },
      {
        rank: 18,
        title: "성장의 이유",
        link: "https://careerly.co.kr/comments/103875",
      },
      {
        rank: 19,
        title: "프론트엔드 개발의 필수 기술: 컴파일러와 번들러 이해하기",
        link: "https://careerly.co.kr/comments/104101",
      },
      {
        rank: 20,
        title: "🕊️ 자바의 기본 트랜잭션 매니저와 그 구현체들",
        link: "https://careerly.co.kr/comments/103026",
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
        icon: "https://ph-files.imgix.net/011a4cd3-7f92-4eaf-9a51-7f9c4fa3c1ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Wegic",
        link: "https://www.producthunt.com/posts/wegic",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/f4534a8d-8ed8-4e10-9974-b397b1407b0a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "fynk",
        link: "https://www.producthunt.com/posts/fynk",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/8ebc69b3-f4d1-49dc-b24d-8c59090d50f9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AIWatchfulCompanion",
        link: "https://www.producthunt.com/posts/aiwatchfulcompanion-2",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/de75983f-c5a8-4243-86eb-3c281f3caddc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SaveDay",
        link: "https://www.producthunt.com/posts/saveday-2",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/1d6f9deb-f744-4d3e-91cd-3ae4c16b4c4b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Lune AI",
        link: "https://www.producthunt.com/posts/lune-ai",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/dc344ac6-c9c0-4d7c-acc5-594381fbe5b9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Tourly Immersive Audio Guide",
        link: "https://www.producthunt.com/posts/tourly-immersive-audio-guide",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/70ac5efc-03f7-442d-8265-d5c827620f72.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "stoic.",
        link: "https://www.producthunt.com/posts/stoic-5",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/2ccb35f3-3a2e-4c54-a6b3-0942e20f5ba2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Canny Autopilot",
        link: "https://www.producthunt.com/posts/canny-autopilot",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/2abdf4f6-9bdc-40c6-8f2c-a70002662dcc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Neurture",
        link: "https://www.producthunt.com/posts/neurture",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/dc97b98d-ebed-48e9-a9bf-b384bfb330c0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Validate My SaaS",
        link: "https://www.producthunt.com/posts/validate-my-saas",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/476bf2b2-551b-4f7b-8e1d-6c6c127aaf31.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Arcade",
        link: "https://www.producthunt.com/posts/arcade-2c7db264-a375-4659-bc0c-2efe9f98f3b6",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/d0ad1e03-3548-4677-923b-216bd291ea01.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "LemmiLink",
        link: "https://www.producthunt.com/posts/lemmilink",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/b19d4227-ab25-42b6-8146-2bd6d48d08c2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ShortlistIQ",
        link: "https://www.producthunt.com/posts/shortlistiq",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/caf3496f-d17a-40a0-93c8-d49f25e55163.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Happyfolks",
        link: "https://www.producthunt.com/posts/happyfolks",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/50f77683-f241-4739-8dca-4d4a67aa959c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Pincone Inboxes",
        link: "https://www.producthunt.com/posts/pincone-inboxes",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/aabce8b5-e298-4d55-8fb1-b41139266d7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SafeName",
        link: "https://www.producthunt.com/posts/safename-2",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/2e8cf8a3-cdd4-47c9-81a0-2fd7f3ec9308.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CustomerIQ",
        link: "https://www.producthunt.com/posts/customeriq",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/948ff980-54cd-4e1c-b9fd-f79a8d7e8638.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Snapfit",
        link: "https://www.producthunt.com/posts/snapfit",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/29a6c1a8-67cc-4eaf-8a92-4d58409de25f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "EmailMe",
        link: "https://www.producthunt.com/posts/emailme-2",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/56605904-28fb-45dc-9d12-09659285e0a2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sentrya 2.0",
        link: "https://www.producthunt.com/posts/sentrya-2-0",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "읽기 전용 설정으로 MySQL 이전하기",
        link: "https://techblog.lycorp.co.jp/ko/migrate-mysql-with-read-only-mode",
      },
      {
        title: "Stateless REST API의 성능 최적화를 위한 캐싱",
        link: "https://www.javacodegeeks.com/2024/05/caching-for-performance-optimization-in-stateless-rest-apis.html",
      },
      {
        title: "Querydsl에서 Kotlin JDSL 으로",
        link: "https://spoqa.github.io/2024/05/03/transfer-jdsl.html?utm_source=oneoneone",
      },
      {
        title: "추천 시스템 개선을 위한 Feature Store 도입기",
        link: "https://ridicorp.com/story/ridi-personalization-system-feature-store",
      },
      {
        title: "베스트 속도 개선, 리팩토링만으로 이런 효과를?",
        link: "https://techblog.lotteon.com/%EC%B4%88%EC%95%88-%EC%9E%91%EC%84%B1-f572f5fc6f3a",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "(번역) 자바스크립트를 이용한 재시도 로직 구현하기",
        link: "https://velog.io/@tap_kim/implement-retry-logic-using-javascript",
      },
      {
        title: "Next.js 캐싱으로 웹 서버 성능 최적화",
        link: "https://fe-developers.kakaoent.com/2024/240418-optimizing-nextjs-cache/?utm_source=oneoneone",
      },
      {
        title: "당근페이 FE, 4개의 프로젝트를 하나로 합치며 나눈 대화들",
        link: "https://medium.com/daangn/%EB%8B%B9%EA%B7%BC%ED%8E%98%EC%9D%B4-fe-4%EA%B0%9C%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%ED%95%98%EB%82%98%EB%A1%9C-%ED%95%A9%EC%B9%98%EB%A9%B0-%EB%82%98%EB%88%88-%EB%8C%80%ED%99%94%EB%93%A4-b96f837230da",
      },
      {
        title:
          "[Korean FE Article] Next.js 앱 라우터 마이그레이션: 좋은 점, 나쁜 점, 그리고 최악인 점",
        link: "https://kofearticle.substack.com/p/korean-fe-article-nextjs-c0a?utm_source=oneoneone",
      },
      {
        title: "(번역) 기능 분할 설계 - 최고의 프런트엔드 아키텍처",
        link: "https://emewjin.github.io/feature-sliced-design/",
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
