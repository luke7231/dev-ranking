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
        title: "개발자의 이름 짓는 법, 네이밍 컨벤션",
        link: "https://careerly.co.kr/comments/105436",
      },
      {
        rank: 2,
        title: "shadcn/ui: 2023년 깃허브 스타 1위 자바스크립트 프로",
        link: "https://careerly.co.kr/comments/105385",
      },
      {
        rank: 3,
        title: "🏎 카프카는 왜 빠를까?",
        link: "https://careerly.co.kr/comments/105492",
      },
      {
        rank: 4,
        title: "분위기가 확실히 달랐던 SpringCamp2024",
        link: "https://careerly.co.kr/comments/105412",
      },
      {
        rank: 5,
        title: "네이버 진짜 위기는 라인이 아니다.",
        link: "https://careerly.co.kr/comments/105296",
      },
      {
        rank: 6,
        title: "",
        link: "https://careerly.co.kr/comments/105567",
      },
      {
        rank: 7,
        title: "",
        link: "https://careerly.co.kr/comments/105410",
      },
      {
        rank: 8,
        title: "",
        link: "https://careerly.co.kr/comments/105566",
      },
      {
        rank: 9,
        title: "",
        link: "https://careerly.co.kr/comments/105508",
      },
      {
        rank: 10,
        title: "",
        link: "https://careerly.co.kr/comments/105349",
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
        title: "UI 디자인 돕는 간편한 AI 도구 ‘Creatie’",
        link: "https://yozm.wishket.com/magazine/detail/2605/",
      },
      {
        rank: 2,
        title: "테무의 구매 유도 다크패턴 4종 세트",
        link: "https://yozm.wishket.com/magazine/detail/2604/",
      },
      {
        rank: 3,
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 4,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 5,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 6,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 7,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 8,
        title: "[SI 산업 가이드북⑥] 1억 넘는 ‘진짜 프로젝트’는 어떻게 할까?",
        link: "https://yozm.wishket.com/magazine/detail/2578/",
      },
      {
        rank: 9,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 10,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 11,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 12,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 13,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
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
          "An intuitive guide to Maxwell's equations (2020) (photonlines.substack.com)",
        link: "https://photonlines.substack.com/p/an-intuitive-guide-to-maxwells-equations",
      },
      {
        rank: 2,
        title: "Lowering resource usage with foot and systemd (rgoswami.me)",
        link: "https://rgoswami.me/posts/lowering-resource-usage-foot-systemd/",
      },
      {
        rank: 3,
        title:
          "Everything I know about the fast inverse square root algorithm (github.com/francisrstokes)",
        link: "https://github.com/francisrstokes/githublog/blob/main/2024%2F5%2F29%2Ffast-inverse-sqrt.md",
      },
      {
        rank: 4,
        title: "Eight years of organizing tech meetups (2023) (eatonphil.com)",
        link: "https://notes.eatonphil.com/eight-years-of-tech-meetups.html",
      },
      {
        rank: 5,
        title:
          "HN-text: an easy-to-use, text-first Hacker News terminal client (github.com/piqoni)",
        link: "https://github.com/piqoni/hn-text",
      },
      {
        rank: 6,
        title:
          "Upgrading my Chumby 8 kernel part 10: RTC (downtowndougbrown.com)",
        link: "https://www.downtowndougbrown.com/2024/06/upgrading-my-chumby-8-kernel-part-10-rtc/",
      },
      {
        rank: 7,
        title:
          "Protecting sensitive data in Elixir GenServers (2023) (gabrielpereira.dev)",
        link: "https://gabrielpereira.dev/en/posts/protecting-sensitive-data-in-elixir-gen-servers/",
      },
      {
        rank: 8,
        title: "Ask HN: What was your most humbling learning moment?",
        link: "https://news.ycombinator.com/item?id=40555435",
      },
      {
        rank: 9,
        title:
          "L(O*62).ONG: Make your URL longer (looooooooooooooooooooooooooooooooooooooo...)",
        link: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong/",
      },
      {
        rank: 10,
        title: "SPI Flash (trmm.net)",
        link: "https://trmm.net/SPI_flash/",
      },
      {
        rank: 11,
        title:
          "Mesh Spreadsheet: A data and code editor that feels like a spreadsheet (github.com/chrispsn)",
        link: "https://github.com/chrispsn/mesh-spreadsheet",
      },
      {
        rank: 12,
        title: "cuDF – GPU DataFrame Library (github.com/rapidsai)",
        link: "https://github.com/rapidsai/cudf",
      },
      {
        rank: 13,
        title: "Homeschooling (teamten.com)",
        link: "https://www.teamten.com/lawrence/writings/homeschooling.html",
      },
      {
        rank: 14,
        title:
          "Here comes the Muybridge camera moment but for text (interconnected.org)",
        link: "https://interconnected.org/home/2024/05/31/camera",
      },
      {
        rank: 15,
        title:
          "Horseshoe crab counting with New York’s citizen scientists (thecity.nyc)",
        link: "https://www.thecity.nyc/2024/05/29/horseshoe-crab-jamaica-bay-festival/",
      },
      {
        rank: 16,
        title:
          "Copy-and-Patch: Fast compilation for high-level languages and bytecode (2020) (arxiv.org)",
        link: "https://arxiv.org/abs/2011.13127",
      },
      {
        rank: 17,
        title: "Lord Kelvin and his analog computer (ieee.org)",
        link: "https://spectrum.ieee.org/tide-predictions",
      },
      {
        rank: 18,
        title:
          "An accident of lighting uncovers origins of the astrolabe (nautil.us)",
        link: "https://nautil.us/the-smartphone-of-the-middle-ages-625924/",
      },
      {
        rank: 19,
        title: "David Hilbert's 1930 Radio Address [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=wuLFqgx2Pec",
      },
      {
        rank: 20,
        title:
          "Atomic polling intervals for highly concurrent workloads (byronwasti.com)",
        link: "https://www.byronwasti.com/polling-atomics/",
      },
      {
        rank: 21,
        title: "Call Your Local Wizard (slate.com)",
        link: "https://slate.com/culture/2024/05/witches-wizards-magic-middle-ages-cunning-folk-book.html",
      },
      {
        rank: 22,
        title:
          "Why is Snapshot Isolation not enough? (concurrencyfreaks.blogspot.com)",
        link: "http://concurrencyfreaks.blogspot.com/2023/12/why-is-snapshot-isolation-not-enough.html",
      },
      {
        rank: 23,
        title:
          "The Canon Cat, the forgotten 1987 alternate-reality Mac (2019) (fastcompany.com)",
        link: "https://www.fastcompany.com/90380553/meet-the-canon-cat-the-forgotten-1987-alternate-reality-mac",
      },
      {
        rank: 24,
        title:
          "New material looks like frosted glass but lets in more light than a window (popsci.com)",
        link: "https://www.popsci.com/technology/glass-coating-privacy/",
      },
      {
        rank: 25,
        title: "Circle C++ with memory safety (circle-lang.org)",
        link: "https://www.circle-lang.org/site/intro/",
      },
      {
        rank: 26,
        title:
          "The largest stegosaurus fossil ever found heads to auction (nytimes.com)",
        link: "https://www.nytimes.com/2024/05/29/science/stegosaurus-fossil-auction-sothebys.html",
      },
      {
        rank: 27,
        title: "Hotwire: HTML Over The Wire (hotwired.dev)",
        link: "https://hotwired.dev/",
      },
      {
        rank: 28,
        title:
          "Workmanship standard for crimping, interconnecting cables, harnesses, and wiring (nasa.gov)",
        link: "https://standards.nasa.gov/standard/NASA/NASA-STD-87394",
      },
      {
        rank: 29,
        title:
          "“You Are My Friend”: Early Androids and Artificial Speech (publicdomainreview.org)",
        link: "https://publicdomainreview.org/essay/early-androids-and-artificial-speech/?ref=thebrowser.com",
      },
      {
        rank: 30,
        title: "Why Did She Stop Writing? (texasmonthly.com)",
        link: "https://www.texasmonthly.com/arts-entertainment/why-did-colleen-hoover-stop-writing/",
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
          "slipshow - 슬라이드 기반이 아닌 기술 발표용 도구 (github.com/panglesd)",
        link: "https://github.com/panglesd/slipshow",
      },
      {
        rank: 2,
        title: "2024년부터 사용할 최신 Node.js 런타임 기능들 (snyk.io)",
        link: "https://snyk.io/blog/10-modern-node-js-runtime-features/",
      },
      {
        rank: 3,
        title:
          "나의 첫 번째 성공적인 사업 TinyPilot을 매각 완료했어요 (mtlynch.io)",
        link: "https://mtlynch.io/i-sold-tinypilot/",
      },
      {
        rank: 4,
        title:
          'GN⁺: LLM은 더 이상 "인터넷으로 학습"하지 않는다 (allenpike.com)',
        link: "https://allenpike.com/2024/llms-trained-on-internet",
      },
      {
        rank: 5,
        title:
          "GN⁺: 시그널: 개인정보 보호 보장을 훼손하기보다는 EU 시장 철수 (twitter.com/mer__edith)",
        link: "https://twitter.com/mer__edith/status/1796508893822238881",
      },
      {
        rank: 6,
        title: "Next.js 15 RC (frontoverflow.com)",
        link: "https://www.frontoverflow.com/magazine/10/Next.js%2015%20RC",
      },
      {
        rank: 7,
        title:
          "1Password가 esbuild로 브라우저 확장 빌드 시간을 90% 단축한 방법 (blog.1password.com)",
        link: "https://blog.1password.com/new-extension-build-system/",
      },
      {
        rank: 8,
        title:
          "GN⁺: Copilot+ Recall은 2줄의 코드만으로 윈도우의 모든 입력과 보고 있는 것을 훔치는게 가능 (doublepulsar.com)",
        link: "https://doublepulsar.com/recall-stealing-everything-youve-ever-typed-or-viewed-on-your-own-windows-pc-is-now-possible-da3e12e9465e",
      },
      {
        rank: 9,
        title:
          "Glance - 모든 Feed를 하나로 모아보는 셀프호스트 대시보드 (github.com/glanceapp)",
        link: "https://github.com/glanceapp/glance",
      },
      {
        rank: 10,
        title: "초보자를 위한 Vector Embeddings 가이드 (timescale.com)",
        link: "https://www.timescale.com/blog/a-beginners-guide-to-vector-embeddings/",
      },
      {
        rank: 11,
        title: "GN⁺: 6년 만에 GraphQL을 그만둔 이유 (bessey.dev)",
        link: "https://bessey.dev/blog/2024/05/24/why-im-over-graphql/",
      },
      {
        rank: 12,
        title: "수면이 뇌의 노폐물 제거에 도움이 될까요? (science.org)",
        link: "https://www.science.org/content/article/does-sleep-really-clean-brain-maybe-not-new-paper-argues",
      },
      {
        rank: 13,
        title: "프라이버시 악몽 같은 Windows Recall (techradar.com)",
        link: "https://www.techradar.com/computing/computing-security/windows-recall-sounds-like-a-privacy-nightmare-heres-why-im-worried",
      },
      {
        rank: 14,
        title:
          "Show GN: fieldenum: 파이썬에서의 러스트식 필드형 enum 지원 (github.com/ilotoki0804)",
        link: "https://news.hada.io/topic?id=15117",
      },
      {
        rank: 15,
        title: "GN⁺: 일본, 모든 연구를 오픈 액세스로 전환 추진 (nature.com)",
        link: "https://www.nature.com/articles/d41586-024-01493-8",
      },
      {
        rank: 16,
        title:
          "당신의 ChatGPT 커스텀 프롬프트는 뭔가요 ? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40474716",
      },
      {
        rank: 17,
        title: "Email.ML - 미니멀한 임시 이메일 서비스 (email.ml)",
        link: "https://email.ml/",
      },
      {
        rank: 18,
        title:
          "GN⁺: 데이터 없이도 데이터베이스가 되는 DuckDB (nikolasgoebel.com)",
        link: "https://www.nikolasgoebel.com/2024/05/28/duckdb-doesnt-need-data.html",
      },
      {
        rank: 19,
        title:
          "Magic UI: 랜딩 페이지 내 마케팅을 위한 UI 컴포넌트 (github.com/magicuidesign)",
        link: "https://github.com/magicuidesign/magicui",
      },
      {
        rank: 20,
        title: "유출된 Google Search API 문서 분석 (sparktoro.com)",
        link: "https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/1d6fec31e538218362ccb46a193aff2adc3c8a662902e7f1555e88f8108e136f?w=64&f=webp")',
        title: "리캐치 무료 UTM 빌더",
        link: "https://disquiet.io/product/%EB%A6%AC%EC%BA%90%EC%B9%98-utm-%EB%B9%8C%EB%8D%94",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/62b07e50cbddf1aa70f584db62626f0c022075a1d74f44c0be64575ceb9b2165?w=64&f=webp")',
        title: "셀업 사이드 프로젝트 판매 플랫폼",
        link: "https://disquiet.io/product/%EC%85%80%EC%97%85",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ea3ee8fc6de54ec472409bb18dfd51fdb68ef407fcb4e7ebcf69ad4d5988a412?w=64&f=webp")',
        title: "공작소",
        link: "https://disquiet.io/product/%EA%B3%B5%EC%9E%91%EC%86%8C",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/2bb20e927d233edd9332e1697efb8c021b3b1d626dd9702a2f9834dc9e37efe4?w=64&f=webp")',
        title: "AI 챗봇 메이커",
        link: "https://disquiet.io/product/ai-%EC%B1%97%EB%B4%87-%EB%A9%94%EC%9D%B4%EC%BB%A4",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ba49b98eeb12679f9950075513f9c999b6b69a5521186f1ece579398a38c9bc1?w=64&f=webp")',
        title: "보끼",
        link: "https://disquiet.io/product/%EB%B3%B4%EB%81%BC",
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
        title: "🕊️ [Medium] 자바 개발자가 피해야 하는 11가지 실수 (1)",
        link: "https://careerly.co.kr/comments/104918",
      },
      {
        rank: 3,
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 4,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 6. 운영 고려 코드 작성",
        link: "https://careerly.co.kr/comments/104266",
      },
      {
        rank: 5,
        title: "당신은 개발자가 아니라 Frameworker 입니다.",
        link: "https://careerly.co.kr/comments/104988",
      },
      {
        rank: 6,
        title: "SOLID 원칙의 이면",
        link: "https://careerly.co.kr/comments/104478",
      },
      {
        rank: 7,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 8,
        title: "🕊️ [Medium] 자바 개발자가 피해야 하는 11가지 실수 (2)",
        link: "https://careerly.co.kr/comments/105211",
      },
      {
        rank: 9,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 사고 대처 능력 키우기",
        link: "https://careerly.co.kr/comments/104778",
      },
      {
        rank: 10,
        title: "🧨 개발자를 잠 못 들게 만드는 코드",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 11,
        title:
          "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일에 대해",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 12,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 13,
        title: "API의 응답을 프론트에서 손쉽게 변경하기",
        link: "https://careerly.co.kr/comments/104760",
      },
      {
        rank: 14,
        title: "🎊 드디어 출간 완료! 🎊",
        link: "https://careerly.co.kr/comments/105204",
      },
      {
        rank: 15,
        title: "개발자의 이름 짓는 법, 네이밍 컨벤션",
        link: "https://careerly.co.kr/comments/105436",
      },
      {
        rank: 16,
        title: "shadcn/ui: 2023년 깃허브 스타 1위 자바스크립트 프로젝트",
        link: "https://careerly.co.kr/comments/105385",
      },
      {
        rank: 17,
        title: "분위기가 확실히 달랐던 SpringCamp2024",
        link: "https://careerly.co.kr/comments/105412",
      },
      {
        rank: 18,
        title: "“컴퓨터 세계를 완전히 변화시킨 25개의 논문”",
        link: "https://careerly.co.kr/comments/104598",
      },
      {
        rank: 19,
        title: "직장에서 나르시스트를 상대하는 방법",
        link: "https://careerly.co.kr/comments/104561",
      },
      {
        rank: 20,
        title: "개발자 팟캐스트",
        link: "https://careerly.co.kr/comments/104400",
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
        icon: "https://ph-files.imgix.net/7cee5ecd-9ad4-486d-b6a3-4d2947bc7a0e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ginix",
        link: "https://www.producthunt.com/posts/ginix",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/53ad5705-3005-463c-bf39-6168ccd9c2bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OpenNotas",
        link: "https://www.producthunt.com/posts/opennotas",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/7685660e-c09e-4c00-9d92-e074ee0c0eb0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Nut Tree",
        link: "https://www.producthunt.com/posts/nut-tree",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/57e4acb4-1699-400d-86ab-19b0078a64df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Validea",
        link: "https://www.producthunt.com/posts/validea-2",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/e8c2dc71-6bd1-40e8-b083-75df0c5c5b0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ZapCap",
        link: "https://www.producthunt.com/posts/zapcap",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/fc59a7f4-1763-4630-9de0-0348929a1220.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "LearnerOn",
        link: "https://www.producthunt.com/posts/learneron",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/cd3d4b79-53ec-48c9-aff2-a1d72c8c0a8f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Event Matcher: NY Tech Week by Onde",
        link: "https://www.producthunt.com/posts/ai-event-matcher-ny-tech-week-by-onde",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/8b9f0348-9a54-478e-b4f6-ea62e6d9d19d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Rated",
        link: "https://www.producthunt.com/posts/rated-1",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/b8f96f0e-b44f-48dd-a53f-1e846df827ce.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "GradFlow",
        link: "https://www.producthunt.com/posts/gradflow",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/5910999c-3f47-4c21-9d23-cb0894c58ce5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Vagabond - AI Trip Planner",
        link: "https://www.producthunt.com/posts/vagabond-ai-trip-planner",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/461fcd23-e08c-41d8-b228-611cc8f28efb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Artizyou",
        link: "https://www.producthunt.com/posts/artizyou",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/351b044d-8821-4887-be8d-43faf079e1ef.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "LinkedCRM AI",
        link: "https://www.producthunt.com/posts/linkedcrm-ai",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/f026ba4c-256c-4f98-9907-8b026b7dc97b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Supalogs",
        link: "https://www.producthunt.com/posts/supalogs",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/828ad04e-4b5e-4b0e-9cc9-f703ab5f7977.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Releem",
        link: "https://www.producthunt.com/posts/releem",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/8b6ee831-bae5-46e3-956c-4c418a43692a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Daygraph: Simple Daily Log",
        link: "https://www.producthunt.com/posts/daygraph-simple-daily-log-2",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/0e80b0f9-95db-41ee-825a-f2f5082e90fa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ivee",
        link: "https://www.producthunt.com/posts/ivee-3",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/011a4cd3-7f92-4eaf-9a51-7f9c4fa3c1ed.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Findr 2.0",
        link: "https://www.producthunt.com/posts/findr-2-0",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Octoverse",
        link: "https://www.producthunt.com/posts/octoverse",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/ce2445c3-1654-4340-9bab-a38ea1c95fcb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Nowadays",
        link: "https://www.producthunt.com/posts/nowadays",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/1075ee09-d11c-41c2-803d-be324b306814.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Maven",
        link: "https://www.producthunt.com/posts/maven-0f32d335-ea62-4654-b04c-b5cf058a4b6f",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "AWS Lambda를 활용한 짧은 주기 배치 구현",
        link: "https://www.lgcns.com/blog/cns-tech/aws-ambassador/55633/?utm_source=oneoneone",
      },
      {
        title: "Uber는 어떻게 Redis를 통해 초당 4천만 읽기를 제공하는가",
        link: "https://hides.tistory.com/1143?utm_source=oneoneone",
      },
      {
        title: "‘kubectl create pod’를 실행하면 발생하는 일 ",
        link: "https://medium.com/daangn/kubectl-create-pod%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%A9%B4-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%BC-kube-apiserver-%EA%B0%90%EC%82%AC-%EB%A1%9C%EA%B7%B8-audig-log-%EB%A1%9C-%EC%97%BF%EB%B3%B4%EA%B8%B0-6f01487abdda",
      },
      {
        title: "배달의민족 광고데이터 이관기",
        link: "https://techblog.woowahan.com/14041/",
      },
      {
        title: "[java] 카프카는 왜 빠를까?",
        link: "https://frogred8.github.io/docs/034_why_is_kafka_fast/",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "이제부터 이 컴포넌트는 제 겁니다",
        link: "https://fe-developers.kakaoent.com/2022/221110-ioc-pattern",
      },
      {
        title: "야, 너두 웹 테스트 자동화 할 수 있어!",
        link: "https://www.intelligencelabs.tech/7f88ea4f-93d2-4d05-91d0-2bfb91fd6381",
      },
      {
        title: "병아리 개발자의 첫 웹뷰 개발기: 파일럿 프로젝트",
        link: "https://techblog.woowahan.com/10774",
      },
      {
        title: "코드를 즉시 개선하는 4가지 React 팁",
        link: "https://medium.com/@pashkapag/4-react-tips-to-instantly-improve-your-code-7456e028cfa3",
      },
      {
        title: "웹 애플리케이션 페이지를 패키지로 개발해 본 경험 공유",
        link: "https://techblog.woowahan.com/16910/",
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
