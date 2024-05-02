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
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 2,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 3,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 4,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 5,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 6,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 7,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 8,
        title: "SI vs SM 개발자, 뭘 해야 할까요?",
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
      {
        rank: 13,
        title: "메모 앱 시장 뒤흔든 '옵시디언' 장단점 파헤치기",
        link: "https://yozm.wishket.com/magazine/detail/2518/",
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
        title:
          "Horizontal running inside circular walls of Moon settlements (royalsocietypublishing.org)",
        link: "https://royalsocietypublishing.org/doi/10.1098/rsos.231906",
      },
      {
        rank: 2,
        title: "Ask HN: Who is hiring? (May 2024)",
        link: "https://news.ycombinator.com/item?id=40224213",
      },
      {
        rank: 3,
        title: "César Aira's Magic (thedial.world)",
        link: "https://www.thedial.world/issue-15/cesar-aira-profile",
      },
      {
        rank: 4,
        title: "New startup sells coffee through SSH (terminal.shop)",
        link: "https://www.terminal.shop/",
      },
      {
        rank: 5,
        title:
          "A pivot point in Maya history: fire-burning event at Ucanal (cambridge.org)",
        link: "https://www.cambridge.org/core/journals/antiquity/article/pivot-point-in-maya-history-fireburning-event-at-kanwitznal-ucanal-and-the-making-of-a-new-era-of-political-rule/564F837E84443D408CD844424B7F6952",
      },
      {
        rank: 6,
        title:
          "How A NASA Probe Solved a Scorching Solar Mystery (quantamagazine.org)",
        link: "https://www.quantamagazine.org/how-a-nasa-probe-solved-a-scorching-solar-mystery-20240429/",
      },
      {
        rank: 7,
        title: "An alternative to cursor pagination (medium.com/ramsi.candra)",
        link: "https://medium.com/@ramsi.candra/an-alternative-to-cursor-pagination-147074287ca4",
      },
      {
        rank: 8,
        title:
          "New findings point to an Earth-like environment on ancient Mars (lanl.gov)",
        link: "https://discover.lanl.gov/news/0501-ancient-mars/",
      },
      {
        rank: 9,
        title: "Not all Graphs are Trees (buttondown.email/jaffray)",
        link: "https://buttondown.email/jaffray/archive/not-all-graphs-are-trees/",
      },
      {
        rank: 10,
        title:
          "Show HN: Maps and Splats – Mashup of 3D tile maps with Gaussian Splats (maps-and-splats.glitch.me)",
        link: "https://maps-and-splats.glitch.me/",
      },
      {
        rank: 11,
        title:
          "Show HN: FileKitty – Combine and label text files for LLM prompt contexts (github.com/banagale)",
        link: "https://github.com/banagale/FileKitty",
      },
      {
        rank: 12,
        title:
          "Mux (YC W16) is hiring a Senior Product Designer that's excited about devtools (mux.com)",
        link: "https://mux.com/jobs?j=product-designer",
      },
      {
        rank: 13,
        title: "Ask HN: Modern Day Equivalent to HyperCard?",
        link: "https://news.ycombinator.com/item?id=40229549",
      },
      {
        rank: 14,
        title:
          "Meter-scale distance manipulation of diverse objects with jet-induced airflow (wiley.com)",
        link: "https://onlinelibrary.wiley.com/doi/10.1002/aisy.202400174",
      },
      {
        rank: 15,
        title: "Kolmogorov-Arnold Networks (github.com/kindxiaoming)",
        link: "https://github.com/KindXiaoming/pykan",
      },
      {
        rank: 16,
        title: "Ask HN: Who wants to be hired? (May 2024)",
        link: "https://news.ycombinator.com/item?id=40224210",
      },
      {
        rank: 17,
        title: "Printing Music with CSS Grid (cruncher.ch)",
        link: "https://cruncher.ch/blog/printing-music-with-css-grid/",
      },
      {
        rank: 18,
        title:
          "500 Byte Images: The Haiku Vector Icon Format (2016) (leahhanson.us)",
        link: "http://blog.leahhanson.us/post/recursecenter2016/haiku_icons.html",
      },
      {
        rank: 19,
        title:
          "Show HN: I'm 16 and building an AI based startup called Factful with friends (factful.io)",
        link: "https://factful.io/",
      },
      {
        rank: 20,
        title:
          "2024 Verizon Data Breach Investigation Report [pdf] (verizon.com)",
        link: "https://www.verizon.com/business/resources/T5be/reports/2024-dbir-data-breach-investigations-report.pdf",
      },
      {
        rank: 21,
        title: "Evolving the Go Standard Library with math/rand/v2 (go.dev)",
        link: "https://go.dev/blog/randv2",
      },
      {
        rank: 22,
        title:
          "Invisible Stitch: Generating Smooth 3D Scenes with Depth Inpainting (paulengstler.com)",
        link: "https://research.paulengstler.com/invisible-stitch/",
      },
      {
        rank: 23,
        title: "Paul Auster has died (nytimes.com)",
        link: "https://www.nytimes.com/2024/04/30/books/paul-auster-dead.html",
      },
      {
        rank: 24,
        title: "The LaserDisc (abortretry.fail)",
        link: "https://www.abortretry.fail/p/the-laserdisc",
      },
      {
        rank: 25,
        title: "Pyinfra: Automate Infrastructure Using Python (pyinfra.com)",
        link: "https://pyinfra.com/",
      },
      {
        rank: 26,
        title: "Eight Feet Jolted a $180M Real Estate Deal (nytimes.com)",
        link: "https://www.nytimes.com/interactive/2024/04/19/realestate/st-francis-college-brooklyn.html",
      },
      {
        rank: 27,
        title:
          "The Rabbit R1 is probably running Android and is powered by an Android app (androidauthority.com)",
        link: "https://www.androidauthority.com/rabbit-r1-is-an-android-app-3438805/",
      },
      {
        rank: 28,
        title: "Ask HN: Guidelines for making clear architecture diagrams",
        link: "https://news.ycombinator.com/item?id=40226897",
      },
      {
        rank: 29,
        title: "The File Filesystem (2021) (mgree.github.io)",
        link: "https://mgree.github.io/ffs/",
      },
      {
        rank: 30,
        title:
          "Show HN: I made a CLI tool to create web extensions with no build configuration (github.com/cezaraugusto)",
        link: "https://github.com/cezaraugusto/extension.js",
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
        title: "Freeter - 모두를 위한 오거나이저 앱 오픈소스 (freeter.io)",
        link: "https://freeter.io/",
      },
      {
        rank: 2,
        title:
          "Captable - 스타트업을 위한 지분 관리 플랫폼 오픈소스 (Carta/Pulley의 대체제) (github.com/captableinc)",
        link: "https://github.com/captableinc/captable",
      },
      {
        rank: 3,
        title:
          "Show GN: HEIC/HEIF를 JPG/PNG로 변환해주는 웹 앱 (heif.pages.dev)",
        link: "https://news.hada.io/topic?id=14597",
      },
      {
        rank: 4,
        title: "GN⁺: Pyinfra: 파이썬을 활용한 인프라 자동화 도구 (pyinfra.com)",
        link: "https://pyinfra.com/",
      },
      {
        rank: 5,
        title:
          "GN⁺: Run0 - sudo를 대체하는 systemd 기반 도구 발표 (mastodon.social)",
        link: "https://mastodon.social/@pid_eins/112353324518585654",
      },
      {
        rank: 6,
        title: 'GN⁺: "제2의 기회"라는 미신 (ft.pressreader.com)',
        link: "https://ft.pressreader.com/article/282557318242321",
      },
      {
        rank: 7,
        title: "GN⁺: CSS Grid로 악보 출력 하기 (cruncher.ch)",
        link: "https://cruncher.ch/blog/printing-music-with-css-grid/",
      },
      {
        rank: 8,
        title:
          "Show GN: 개발자라면 알고 있으면 좋을 사이트 (dev-ranking.vercel.app)",
        link: "https://news.hada.io/topic?id=14558",
      },
      {
        rank: 9,
        title:
          'GN⁺: EU, "애플은 6개월 내에 iPadOS에 사이드로딩 허용하라" 요구 (arstechnica.com)',
        link: "https://arstechnica.com/apple/2024/04/apple-must-open-ipados-to-sideloading-within-6-months-eu-says/",
      },
      {
        rank: 10,
        title:
          "Memary - 자동화 에이전트를 위한 롱텀 메모리 (github.com/kingjulio8238)",
        link: "https://github.com/kingjulio8238/memary",
      },
      {
        rank: 11,
        title: "기술 문서 번역용 GPT 프롬프트 작성 방법 (insight.infograb.net)",
        link: "https://insight.infograb.net/blog/2024/03/27/gpt-gitlabdocs",
      },
      {
        rank: 12,
        title:
          "OpenVoice v2 - 다재다능한 인스턴트 음성 복제 (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
      },
      {
        rank: 13,
        title:
          "2024년 AI 스타트업을 위한 데이터 수집 전략 (press.airstreet.com)",
        link: "https://press.airstreet.com/p/data-acquisition-strategies-for-ai",
      },
      {
        rank: 14,
        title: "좋아하는 Tech 유튜버가 있나요? (lobste.rs)",
        link: "https://lobste.rs/s/krkuc9/who_are_your_favorite_tech_youtubers",
      },
      {
        rank: 15,
        title: "GN⁺: LLM이 결코 할 수 없는 것 (strangeloopcanon.com)",
        link: "https://www.strangeloopcanon.com/p/what-can-llms-never-do",
      },
      {
        rank: 16,
        title: "GitHub Copilot Workspace 기술 시험판 공개 (github.blog)",
        link: "https://github.blog/2024-04-29-github-copilot-workspace/",
      },
      {
        rank: 17,
        title:
          "GN⁺: 읽은 내용이 당신을 만든다, 기억하지 못한다 해도 (blog.jim-nielsen.com)",
        link: "https://blog.jim-nielsen.com/2024/you-are-what-you-read/",
      },
      {
        rank: 18,
        title: "GN⁺: 실수로 아이슬란드 대통령 출마 사태 (uxdesign.cc)",
        link: "https://uxdesign.cc/how-do-you-accidentally-run-for-president-of-iceland-0d71a4785a1e",
      },
      {
        rank: 19,
        title:
          "다중 토큰 예측은 대규모 언어 모델의 샘플 효율성과 성능을 향상시킵니다. (arxiv.org)",
        link: "https://arxiv.org/abs/2404.19737",
      },
      {
        rank: 20,
        title: "GN⁺: Rust로 게임 개발을 한 3년 후에 떠나며 (loglog.games)",
        link: "https://loglog.games/blog/leaving-rust-gamedev/",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/a7df620425f994ff952006be21bce837d2220dcce0e222897076fc5a1e4e2810?w=64&f=webp")',
        title: "트립플레이트",
        link: "https://disquiet.io/product/%ED%8A%B8%EB%A6%BD%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/8e9080eba0b0cf1af7456869d523d1ea6653a9cc2ffbff24ca4d9d849ec71d4c?w=64&f=webp")',
        title: "typeodd 불안보다 빠르게 타자연습",
        link: "https://disquiet.io/product/typeodd-%EB%B6%88%EC%95%88%EB%B3%B4%EB%8B%A4-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%ED%83%80%EC%9E%90%EC%97%B0%EC%8A%B5",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/51a2cfe8ce6380765712f323e988879da6e07edab057598d8d4be2ac6ee3dd75?w=64&f=webp")',
        title: "지하철톡",
        link: "https://disquiet.io/product/%EC%A7%80%ED%95%98%EC%B0%B0%ED%86%A1",
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
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (1)",
        link: "https://careerly.co.kr/comments/102333",
      },
      {
        rank: 2,
        title:
          "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일에 대해",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 3,
        title: "회사 테크 블로그 모음 👨🏻‍💻",
        link: "https://careerly.co.kr/comments/103945",
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
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 7,
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
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
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 11,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 12,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 13,
        title: "🥟 Bun v1.1 출시 소식",
        link: "https://careerly.co.kr/comments/102544",
      },
      {
        rank: 14,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 15,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 16,
        title: "다시 한 번 영어 공부",
        link: "https://careerly.co.kr/comments/102379",
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
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
      },
      {
        rank: 20,
        title: "📕 서버와 클라이언트의 통신방법 한번에 정리해 드림",
        link: "https://careerly.co.kr/comments/102167",
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
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Loom AI Workflows",
        link: "https://www.producthunt.com/posts/loom-ai-workflows",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stackradar",
        link: "https://www.producthunt.com/posts/stackradar",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/6bed0d5a-0f9e-44dd-a9d9-a98238c2f1cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Arc for Windows",
        link: "https://www.producthunt.com/posts/arc-for-windows",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/6dbc7f5c-4f27-4549-8145-7156b174488a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Mindtrip",
        link: "https://www.producthunt.com/posts/mindtrip",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/5476bfa0-846b-4296-a4c6-341430e307fe.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Claude for iOS",
        link: "https://www.producthunt.com/posts/claude-for-ios",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/38454285-1f4e-41cb-b9c2-fc39a4989a00.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Idea Spark",
        link: "https://www.producthunt.com/posts/idea-spark-4",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/0a535b4f-1154-4106-807a-f104a8c5c490.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Journable",
        link: "https://www.producthunt.com/posts/journable",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/93c8f9b5-15a2-4038-bb65-fd4f61510ef4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Rankify",
        link: "https://www.producthunt.com/posts/rankify",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/16301514-1daf-46ac-be1b-ada02d9b3cfb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Noodle4 AI",
        link: "https://www.producthunt.com/posts/noodle4-ai",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/133e2611-8a0d-41bb-9ac3-2b28b86d7a08.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sprig Feedback",
        link: "https://www.producthunt.com/posts/sprig-feedback",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/ec58fef4-ae48-4a10-9387-4aea0d2b7ead.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Datashake Hub",
        link: "https://www.producthunt.com/posts/datashake-hub",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/e026fe5f-34e7-4bac-af94-ee311e014726.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stables Money",
        link: "https://www.producthunt.com/posts/stables-money",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/ed598600-b15b-4559-b53a-4b8015e44cdc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "GridLite",
        link: "https://www.producthunt.com/posts/gridlite",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/897211d0-ce25-41d5-9b15-64ab3a35c8ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Channels by Dovetail",
        link: "https://www.producthunt.com/posts/channels-by-dovetail",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/242f6749-b374-4afa-8e6c-150e20217f23.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Talevideo",
        link: "https://www.producthunt.com/posts/talevideo-2",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/9811980a-3b5d-47d2-8019-a8296a66ee64.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "JSLog",
        link: "https://www.producthunt.com/posts/jslog",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/35669f76-9195-40e3-b202-8ebd5e0d4e7a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Mano",
        link: "https://www.producthunt.com/posts/mano",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/e6132ffc-4ba0-47b2-9ed8-0653f8a8d5f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Microns v2",
        link: "https://www.producthunt.com/posts/microns-v2",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/0f96aaec-d178-4b46-a689-2065c977cf7c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Otterly.ai",
        link: "https://www.producthunt.com/posts/otterly-ai",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/ce65d516-8539-4c8d-9558-ae5bae064fcc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Outerbase 2.0",
        link: "https://www.producthunt.com/posts/outerbase-2-0",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "다사다난한 AWS 최종 합격",
        link: "https://velog.io/@ryann3/job-7",
      },
      {
        title: "컴공 4학년, AWS로부터 오퍼를 받다",
        link: "https://velog.io/@ryann3/job-1",
      },
      {
        title: "DataSource 헬스 체크와 동적 라우팅으로 DB 서버 다운 대비하기",
        link: "https://www.blog.ecsimsw.com/entry/Dynamic-DataSource-%EB%9D%BC%EC%9A%B0%ED%8C%85%EC%9C%BC%EB%A1%9C-DB-%EC%84%9C%EB%B2%84-%EB%8B%A4%EC%9A%B4%EC%8B%9C-%EC%B2%98%EB%A6%AC",
      },
      {
        title: "설계란 고민의 연속이다 1편",
        link: "https://dev.gmarket.com/104",
      },
      {
        title: "마케터도 쉽게 이해하는 '클린 아키텍처'",
        link: "https://yozm.wishket.com/magazine/detail/2532",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "리액트 컴파일러의 타입 시스템",
        link: "https://junghan92.medium.com/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC%EC%9D%98-%ED%83%80%EC%9E%85-%EC%8B%9C%EC%8A%A4%ED%85%9C-177486489096",
      },
      {
        title: "네이버 통합 검색의 웹 성능 - 모니터링과 성능 개선",
        link: "https://d2.naver.com/helloworld/8113611",
      },
      {
        title: "레딧(Reddit)의 아키텍처 진화의 여정",
        link: "https://giljae.com/2024/04/18/%EB%A0%88%EB%94%A7(Reddit)%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%A7%84%ED%99%94%EC%9D%98-%EC%97%AC%EC%A0%95.html",
      },
      {
        title:
          "우리 팀을 위한 ESLint, Prettier 공유 컨피그 만들어보기 | 우아한형제들 기술블로그",
        link: "https://techblog.woowahan.com/15903",
      },
      {
        title: "4년차 FE 이직기",
        link: "https://velog.io/@career_log/4%EB%85%84%EC%B0%A8-FE-%EC%9D%B4%EC%A7%81%EA%B8%B0",
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
