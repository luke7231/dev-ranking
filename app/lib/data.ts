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
        title: "당신은 개발자가 아니라 Frameworker 입니다.",
        link: "https://careerly.co.kr/comments/104988",
      },
      {
        rank: 2,
        title: "🕊️ [Medium] 자바 개발자가 피해야 하는 11가지 실수 (",
        link: "https://careerly.co.kr/comments/105211",
      },
      {
        rank: 3,
        title: "🎊 드디어 출간 완료! 🎊",
        link: "https://careerly.co.kr/comments/105204",
      },
      {
        rank: 4,
        title:
          "그로스 해킹의 시대는 끝났고, 앞으로는 콘텐츠가 훨씬 더 중요해질",
        link: "https://careerly.co.kr/comments/105139",
      },
      {
        rank: 5,
        title: "[JavaScript] 배열과 커스텀 큐 성능 차이",
        link: "https://careerly.co.kr/comments/104980",
      },
      {
        rank: 6,
        title: "개발 조직을 만들기 어렵다",
        link: "https://careerly.co.kr/comments/105036",
      },
      {
        rank: 7,
        title: "디자인 패턴을 배웁시다 Java Design Patterns",
        link: "https://careerly.co.kr/comments/105256",
      },
      {
        rank: 8,
        title: "< 이력서를 쓸 때 3가지를 생각하라 >",
        link: "https://careerly.co.kr/comments/105007",
      },
      {
        rank: 9,
        title: "노션으로 웹사이트를 만들수 있는 서비스",
        link: "https://careerly.co.kr/comments/105012",
      },
      {
        rank: 10,
        title: "리뮬레이션(Reality+Simulation)과 '굳이?'의 상관관계",
        link: "https://careerly.co.kr/comments/105061",
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
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 3,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 4,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 5,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 6,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 7,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 8,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 9,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 10,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 11,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 12,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 13,
        title: "‘친절한’ 서비스 가이드를 만드는 3가지 요소",
        link: "https://yozm.wishket.com/magazine/detail/2553/",
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
        title: "Engineering for Slow Internet (brr.fyi)",
        link: "https://brr.fyi/posts/engineering-for-slow-internet",
      },
      {
        rank: 2,
        title: "Things you wish you didn't need to know about S3 (plerion.com)",
        link: "https://blog.plerion.com/things-you-wish-you-didnt-need-to-know-about-s3/",
      },
      {
        rank: 3,
        title:
          "“Imprecise” language models are smaller, speedier, and nearly as accurate (ieee.org)",
        link: "https://spectrum.ieee.org/1-bit-llm",
      },
      {
        rank: 4,
        title: "Don't DRY Your Code Prematurely (googleblog.com)",
        link: "https://testing.googleblog.com/2024/05/dont-dry-your-code-prematurely.html",
      },
      {
        rank: 5,
        title: "The Pumpkin Eclipse (lumen.com)",
        link: "https://blog.lumen.com/the-pumpkin-eclipse/",
      },
      {
        rank: 6,
        title: "Japan's push to make all research open access (nature.com)",
        link: "https://www.nature.com/articles/d41586-024-01493-8",
      },
      {
        rank: 7,
        title: "Show HN: ChatGPT UI for rabbit holes (a9.io)",
        link: "https://delve.a9.io/",
      },
      {
        rank: 8,
        title:
          "YOLOv5 on FPGA with Hailo-8 and 4 Pi Cameras (fpgadeveloper.com)",
        link: "https://www.fpgadeveloper.com/multi-camera-yolov5-on-zynq-ultrascale-with-hailo-8-ai-acceleration/",
      },
      {
        rank: 9,
        title: "Steam's Last Stand (technicshistory.com)",
        link: "https://technicshistory.com/2024/05/30/coda-steams-last-stand/",
      },
      {
        rank: 10,
        title:
          "Unexpected anti-patterns for engineering leaders (firstround.com)",
        link: "https://review.firstround.com/unexpected-anti-patterns-for-engineering-leaders-lessons-from-stripe-uber-carta/",
      },
      {
        rank: 11,
        title: "I run a software book club (eatonphil.com)",
        link: "https://notes.eatonphil.com/2025-05-30-how-i-run-book-clubs.html",
      },
      {
        rank: 12,
        title:
          "Myths about platform engineering: what it is and what it isn't (cloud.google.com)",
        link: "https://cloud.google.com/blog/products/application-development/common-myths-about-platform-engineering/",
      },
      {
        rank: 13,
        title: "Geometry for Entertainment (1950) (archive.org)",
        link: "https://archive.org/details/yakov-perelman-geometry-for-entertainment-mir-titles-2024",
      },
      {
        rank: 14,
        title:
          "Better RAG Results with Reciprocal Rank Fusion and Hybrid Search (assembled.com)",
        link: "https://www.assembled.com/blog/better-rag-results-with-reciprocal-rank-fusion-and-hybrid-search",
      },
      {
        rank: 15,
        title:
          "MP944: The First Microprocessor (2014) (firstmicroprocessor.com)",
        link: "https://firstmicroprocessor.com/",
      },
      {
        rank: 16,
        title:
          "Asqi: A codebase explorer designed to help navigate and understand Git projects (asqi.io)",
        link: "https://dev.asqi.io/",
      },
      {
        rank: 17,
        title: "Testing a 1912-style Radio [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=U6ZVqr0fPo4",
      },
      {
        rank: 18,
        title: "The Scully Effect (theastoundinganalogcompanion.com)",
        link: "https://theastoundinganalogcompanion.com/2018/08/21/the-scully-effect/",
      },
      {
        rank: 19,
        title:
          "The Special Challenges of Attempting a New Translation of Kafka (lithub.com)",
        link: "https://lithub.com/the-special-challenges-of-attempting-a-new-translation-of-kafka/",
      },
      {
        rank: 20,
        title:
          "Skio (YC S20) – Subscriptions for Shopify, ReCharge Migrations Is Hiring (skio.com)",
        link: "https://skio.com/careers/",
      },
      {
        rank: 21,
        title: "Thoughts on Skymont Slides (chipsandcheese.com)",
        link: "https://chipsandcheese.com/2024/05/30/thoughts-on-skymont-slides/",
      },
      {
        rank: 22,
        title:
          "'It's better for humans in general': The 4-day workweek is closer than you think (marketwatch.com)",
        link: "https://www.marketwatch.com/amp/story/its-better-for-humans-in-general-the-four-day-workweek-is-closer-than-you-think-b85cc39e",
      },
      {
        rank: 23,
        title:
          "What Is Telstar Logistics? (2006) (telstarlogistics.typepad.com)",
        link: "https://telstarlogistics.typepad.com/telstarlogistics/2006/09/what_is_telstar.html",
      },
      {
        rank: 24,
        title: "The Elusive Computer Monograph Number 11 (fogus.me)",
        link: "http://blog.fogus.me/2024/05/28/the-elusive-computer-monograph-number-11/",
      },
      {
        rank: 25,
        title: "Trinity keeps KDE 3 on life support (lwn.net)",
        link: "https://lwn.net/Articles/973130/",
      },
      {
        rank: 26,
        title:
          "Is Target selling its excess inventory on eBay and Poshmark? (modernretail.co)",
        link: "https://www.modernretail.co/technology/is-target-selling-its-excess-inventory-on-ebay-poshmark/",
      },
      {
        rank: 27,
        title:
          "NPGA: Neural Parametric Gaussian Avatars – high-fidelity digital faces (arxiv.org)",
        link: "https://arxiv.org/abs/2405.19331",
      },
      {
        rank: 28,
        title:
          "'Operation Endgame' Hits Malware Delivery Platforms (krebsonsecurity.com)",
        link: "https://krebsonsecurity.com/2024/05/operation-endgame-hits-malware-delivery-platforms/",
      },
      {
        rank: 29,
        title:
          "Show HN: I built a tiny-VPS friendly RSS aggregator and reader (github.com/0x2e)",
        link: "https://github.com/0x2E/fusion",
      },
      {
        rank: 30,
        title:
          "Ask HN: I have many PDFs – what is the best local way to leverage AI for search?",
        link: "https://news.ycombinator.com/item?id=40528192",
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
        title: "GN⁺: 6년 만에 GraphQL을 그만둔 이유 (bessey.dev)",
        link: "https://bessey.dev/blog/2024/05/24/why-im-over-graphql/",
      },
      {
        rank: 2,
        title:
          "Glance - 모든 Feed를 하나로 모아보는 셀프호스트 대시보드 (github.com/glanceapp)",
        link: "https://github.com/glanceapp/glance",
      },
      {
        rank: 3,
        title: "초보자를 위한 Vector Embeddings 가이드 (timescale.com)",
        link: "https://www.timescale.com/blog/a-beginners-guide-to-vector-embeddings/",
      },
      {
        rank: 4,
        title:
          "GN⁺: 데이터 없이도 데이터베이스가 되는 DuckDB (nikolasgoebel.com)",
        link: "https://www.nikolasgoebel.com/2024/05/28/duckdb-doesnt-need-data.html",
      },
      {
        rank: 5,
        title: "구글, 유출된 내부 검색 문서가 진짜임을 확인 (theverge.com)",
        link: "https://www.theverge.com/2024/5/29/24167407/google-search-algorithm-documents-leak-confirmation",
      },
      {
        rank: 6,
        title: "Email.ML - 미니멀한 임시 이메일 서비스 (email.ml)",
        link: "https://email.ml/",
      },
      {
        rank: 7,
        title: "2024년 5월, 구글 SEO 알고리즘 내부 문서 유출 정리 (inblog.ai)",
        link: "https://inblog.ai/welcome/google-algorithm-docs-leak",
      },
      {
        rank: 8,
        title:
          "당신의 ChatGPT 커스텀 프롬프트는 뭔가요 ? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40474716",
      },
      {
        rank: 9,
        title: "Ask GN: 이번 주말에 뭐 하시나요?",
        link: "https://news.hada.io/topic?id=15096",
      },
      {
        rank: 10,
        title: "유출된 Google Search API 문서 분석 (sparktoro.com)",
        link: "https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/",
      },
      {
        rank: 11,
        title: "프롬프트 하나로 풀스택 웹앱을 만드는 Marblism (dis.qa)",
        link: "https://dis.qa/Uqxz6OS",
      },
      {
        rank: 12,
        title: "GN⁺: Codestral - Mistral의 코드 생성 AI 모델 (mistral.ai)",
        link: "https://mistral.ai/news/codestral/",
      },
      {
        rank: 13,
        title: "GN⁺: API의 HTTP를 HTTPS로 리디렉션하지 마세요 (jviide.iki.fi)",
        link: "https://jviide.iki.fi/http-redirects",
      },
      {
        rank: 14,
        title: "GN⁺: JWT를 인증 토큰으로 사용해야 할까? (blog.ploetzli.ch)",
        link: "https://blog.ploetzli.ch/2024/should-i-use-jwt-for-authentication/",
      },
      {
        rank: 15,
        title:
          "GN⁺: TerminalTextEffects (TTE) - 터미널 텍스트 효과 엔진 (chrisbuilds.github.io)",
        link: "https://chrisbuilds.github.io/terminaltexteffects/showroom/",
      },
      {
        rank: 16,
        title:
          "최고의 서비스를 만들고 싶다면 비합리적이어야 합니다. (youtube.com)",
        link: "https://www.youtube.com/watch?v=wIRuMJj_igE",
      },
      {
        rank: 17,
        title: "Mobifree 프로젝트 - 오픈소스 모바일 생태계 (mobifree.org)",
        link: "https://mobifree.org/",
      },
      {
        rank: 18,
        title:
          "Show GN: 알로록달로록 오픈소스 모바일 청첩장 (github.com/heejin-hwang)",
        link: "https://news.hada.io/topic?id=15054",
      },
      {
        rank: 19,
        title:
          "GN⁺: Openkoda – 프라이빗한 Salesforce 오픈소스 대체제 (github.com/openkoda)",
        link: "https://github.com/openkoda/openkoda",
      },
      {
        rank: 20,
        title:
          'GN⁺: "auth" 대신 "permissions"와 "login"을 사용합시다 (ntietz.com)',
        link: "https://ntietz.com/blog/lets-say-instead-of-auth/",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/0c96cf861da3332ad4d6ab1b5df38445534b0442669a122c4c880832fc83ec3a?w=64&f=webp")',
        title: "KB건강체크 I 간편 증상 분석 서비스",
        link: "https://disquiet.io/product/kb%EA%B1%B4%EA%B0%95%EC%B2%B4%ED%81%AC",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/6ab615d4d3435fb2dc47588db6d7dfe3e5b9482b595814286dbcb48887ec5e59?w=64&f=webp")',
        title: "우리의교회",
        link: "https://disquiet.io/product/%EC%9A%B0%EB%A6%AC%EC%9D%98%EA%B5%90%ED%9A%8C",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ba49b98eeb12679f9950075513f9c999b6b69a5521186f1ece579398a38c9bc1?w=64&f=webp")',
        title: "보끼",
        link: "https://disquiet.io/product/%EB%B3%B4%EB%81%BC",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/d8f8d27b756d1cec12c1ce69f8871ee6ef5aefe59b4f852482b7dde072243558?w=64&f=webp")',
        title: "moonshot 문샷",
        link: "https://disquiet.io/product/moonshot-%EB%AC%B8%EC%83%B7",
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
        icon: "https://ph-files.imgix.net/b59bc198-5a53-4256-9503-46705021793f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OH, a potato!",
        link: "https://www.producthunt.com/posts/oh-a-potato",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/cb579b99-04c7-487f-bdce-bcfd63123183.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Private Company Database 2.0",
        link: "https://www.producthunt.com/posts/private-company-database-2-0",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/c8dd0cb9-8f45-4c93-af1a-093d34eaaff6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Graphite AI SEO Platform",
        link: "https://www.producthunt.com/posts/graphite-ai-seo-platform",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/3f9285ab-e2be-448c-b8fa-f4fa5b84edb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AyiConnect",
        link: "https://www.producthunt.com/posts/ayiconnect",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Notebook App",
        link: "https://www.producthunt.com/posts/ai-notebook-app",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/c9be456a-7fd5-480e-9a9c-f4d064e66afb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BypassAI.io",
        link: "https://www.producthunt.com/posts/bypassai-io",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/032e4fdd-e496-47ee-a795-fa931d469df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Control Centre by Hyperswitch",
        link: "https://www.producthunt.com/posts/control-centre-by-hyperswitch",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/01cacda3-0616-45d8-b85e-12804d099719.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Meme Depot",
        link: "https://www.producthunt.com/posts/meme-depot",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/063d7fc4-d741-4ff7-9805-d9b7e4e9c095.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Arbonum",
        link: "https://www.producthunt.com/posts/arbonum-2",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/7c730041-9cb7-4f9e-95c6-9749de8ac883.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Linkrunner.io",
        link: "https://www.producthunt.com/posts/linkrunner-io",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/1b6062a9-e943-40ef-b94b-87111656df38.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Unipile LinkedIn API",
        link: "https://www.producthunt.com/posts/unipile-linkedin-api",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/365a0ac4-ee85-494a-8b0e-680fa313f518.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SukuPay",
        link: "https://www.producthunt.com/posts/sukupay",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/026e7e60-433d-4d86-93c7-c09aa75c0aae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Super Comments AI",
        link: "https://www.producthunt.com/posts/super-comments-ai",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/d02c7672-5210-4d6b-8f37-09fdeffc9951.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Dailies",
        link: "https://www.producthunt.com/posts/dailies",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/7ac86c7f-8c2b-4f1a-92f4-893f1bc3c292.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Wingtap",
        link: "https://www.producthunt.com/posts/wingtap",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/5685d47c-4f4e-491c-af83-5b4d02ddec32.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Milvus Lite",
        link: "https://www.producthunt.com/posts/milvus-lite",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/0d0db70b-5a16-41fd-b2a7-c74d38f213f5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Kino",
        link: "https://www.producthunt.com/posts/kino-2",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/22c177dc-2658-4bbb-a804-d8a3f7358be7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NotionPower",
        link: "https://www.producthunt.com/posts/notionpower",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/ea7eeb58-ed5e-416f-a474-a7fa84551c0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "InboxAlly",
        link: "https://www.producthunt.com/posts/inboxally-2",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/f082a734-07ee-4cc9-b325-33fa5664dcf6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PayFill Auto",
        link: "https://www.producthunt.com/posts/payfill-auto",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "서버 증설 없이 처리하는 대규모 트래픽",
        link: "https://toss.tech/article/monitoring-traffic",
      },
      {
        title: "Postgres 쿼리를 1,000배 더 빠르게 만들기",
        link: "https://mattermost.com/blog/making-a-postgres-query-1000-times-faster",
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
        title: "동적 URL도 robots.txt에서 설정이 가능할까?",
        link: "https://www.ascentkorea.com/%EB%8F%99%EC%A0%81-url%EB%8F%84-robots-txt%EC%97%90%EC%84%9C-%EC%84%A4%EC%A0%95%EC%9D%B4-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C",
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
        title: "에어비앤비 자바스크립트 스타일 가이드",
        link: "https://github.com/airbnb/javascript",
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
