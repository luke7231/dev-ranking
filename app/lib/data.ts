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
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 2,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 3,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 4,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 5,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 6,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 7,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 8,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 9,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 10,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 11,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 12,
        title: "‘친절한’ 서비스 가이드를 만드는 3가지 요소",
        link: "https://yozm.wishket.com/magazine/detail/2553/",
      },
      {
        rank: 13,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
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
          "PyPy has been working for me for several years now (utcc.utoronto.ca)",
        link: "https://utcc.utoronto.ca/~cks/space/blog/python/PyPyQuietlyWorking",
      },
      {
        rank: 2,
        title: "I love my wife. My wife is dead (1946) (lettersofnote.com)",
        link: "https://lettersofnote.com/2012/02/15/i-love-my-wife-my-wife-is-dead/",
      },
      {
        rank: 3,
        title:
          "I got tired of hearing that YC fired Sam, so here's what actually happened (twitter.com/paulg)",
        link: "https://twitter.com/paulg/status/1796107666265108940",
      },
      {
        rank: 4,
        title: "How Actors Remember Their Lines (mitpress.mit.edu)",
        link: "https://thereader.mitpress.mit.edu/how-actors-remember-their-lines/",
      },
      {
        rank: 5,
        title: "Infections Correlate with Entrepreneurship (researchgate.net)",
        link: "https://www.researchgate.net/publication/326608642_Risky_business_Linking_Toxoplasma_gondii_infection_and_entrepreneurship_behaviours_across_individuals_and_countries",
      },
      {
        rank: 6,
        title: "FrankenPHP: Modern PHP App Server (frankenphp.dev)",
        link: "https://frankenphp.dev/",
      },
      {
        rank: 7,
        title: "Kino: Pro Video Camera (lux.camera)",
        link: "https://www.lux.camera/introducing-kino-pro-video-camera/",
      },
      {
        rank: 8,
        title:
          "SVG Gobbler – Find, optimize, edit, and export SVGs (github.com/rossmoody)",
        link: "https://github.com/rossmoody/svg-gobbler",
      },
      {
        rank: 9,
        title:
          "Meaningful Nonsense: How I generate sentences (amygoodchild.com)",
        link: "https://www.amygoodchild.com/blog/meaningful-nonsense-sentences",
      },
      {
        rank: 10,
        title: "Donating forks to the dining hall (ben.page)",
        link: "https://1.coc0o44.preview.ben.page/forks",
      },
      {
        rank: 11,
        title:
          "Show HN: I made a pixel art editor for Windows desktop (lightcube.art)",
        link: "https://www.lightcube.art/",
      },
      {
        rank: 12,
        title:
          "A seventh-grader student found a beautiful proof to Thales' Theorem (cut-the-knot.org)",
        link: "https://www.cut-the-knot.org/pythagoras/ThalesTheorem.shtml",
      },
      {
        rank: 13,
        title: "Ultrasonic Coffee (theguardian.com)",
        link: "https://www.theguardian.com/food/article/2024/may/29/ultrasonic-coffee-australia-scientists-unsw",
      },
      {
        rank: 14,
        title:
          "How Running a Business Changes the Way You Think (2011) (kalzumeus.com)",
        link: "https://www.kalzumeus.com/2011/07/08/business-psychology/",
      },
      {
        rank: 15,
        title: "Why, after 6 years, I'm over GraphQL (bessey.dev)",
        link: "https://bessey.dev/blog/2024/05/24/why-im-over-graphql/",
      },
      {
        rank: 16,
        title: "Vector indexing all of Wikipedia on a laptop (foojay.io)",
        link: "https://foojay.io/today/indexing-all-of-wikipedia-on-a-laptop/",
      },
      {
        rank: 17,
        title: "Fast Shadow Stacks for Go (felixge.de)",
        link: "https://blog.felixge.de/blazingly-fast-shadow-stacks-for-go/",
      },
      {
        rank: 18,
        title:
          "Starlink's disruption of the space industry (thespacereview.com)",
        link: "https://www.thespacereview.com/article/4801/1",
      },
      {
        rank: 19,
        title: "DuckDB Doesn't Need Data to Be a Database (nikolasgoebel.com)",
        link: "https://www.nikolasgoebel.com/2024/05/28/duckdb-doesnt-need-data.html",
      },
      {
        rank: 20,
        title:
          "The Pen Hospital in Kolkata will nurse your broken fountain pen back (vogue.in)",
        link: "https://www.vogue.in/content/pen-hospital-in-kolkata-will-nurse-your-broken-fountain-pen-back-to-health",
      },
      {
        rank: 21,
        title:
          "New attention mechanisms that outperform standard multi-head attention (arxiv.org)",
        link: "https://arxiv.org/abs/2403.01643",
      },
      {
        rank: 22,
        title: "SBCL: New in Version 2.4.5 (sbcl.org)",
        link: "http://sbcl.org/all-news.html?2.4.5#2.4.5",
      },
      {
        rank: 23,
        title: "Lisbon, a city dying from its own success (elpais.com)",
        link: "https://english.elpais.com/international/2024-05-29/lisbon-a-city-dying-from-its-own-success.html",
      },
      {
        rank: 24,
        title: "Google releases smart watch for kids (store.google.com)",
        link: "https://store.google.com/US/product/fitbit_ace_lte?hl=en-US",
      },
      {
        rank: 25,
        title:
          "How Waymo outlasted the competition and made robo-taxis a real business (fortune.com)",
        link: "https://fortune.com/2024/05/29/waymo-self-driving-robo-taxi-uber-tesla-alphabet/",
      },
      {
        rank: 26,
        title: "IBDNS: Intentionally Broken DNS server (afnic.fr)",
        link: "https://www.afnic.fr/en/observatory-and-resources/news/afnic-launches-ibdns-the-intentionally-broken-dns-server/",
      },
      {
        rank: 27,
        title:
          'Cybercriminals pose as "helpful" Stack Overflow users to push malware (bleepingcomputer.com)',
        link: "https://www.bleepingcomputer.com/news/security/cybercriminals-pose-as-helpful-stack-overflow-users-to-push-malware/",
      },
      {
        rank: 28,
        title: "Bootstrapping a Forth in 40 lines of Lua code (twu.net)",
        link: "http://angg.twu.net/miniforth-article.html",
      },
      {
        rank: 29,
        title: "Tesorio (YC S15) Is Hiring – 100% Remote (tesorio.com)",
        link: "https://www.tesorio.com/careers#job-openings",
      },
      {
        rank: 30,
        title: "I sold TinyPilot, my first successful business (mtlynch.io)",
        link: "https://mtlynch.io/i-sold-tinypilot/",
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
        title: "Email.ML - 미니멀한 임시 이메일 서비스 (email.ml)",
        link: "https://email.ml/",
      },
      {
        rank: 2,
        title: "GN⁺: Codestral - Mistral의 코드 생성 AI 모델 (mistral.ai)",
        link: "https://mistral.ai/news/codestral/",
      },
      {
        rank: 3,
        title: "Mobifree 프로젝트 - 오픈소스 모바일 생태계 (mobifree.org)",
        link: "https://mobifree.org/",
      },
      {
        rank: 4,
        title:
          "당신의 ChatGPT 커스텀 프롬프트는 뭔가요 ? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40474716",
      },
      {
        rank: 5,
        title: "프롬프트 하나로 풀스택 웹앱을 만드는 Marblism (dis.qa)",
        link: "https://dis.qa/Uqxz6OS",
      },
      {
        rank: 6,
        title: "유출된 Google Search API 문서 분석 (sparktoro.com)",
        link: "https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/",
      },
      {
        rank: 7,
        title: "GN⁺: API의 HTTP를 HTTPS로 리디렉션하지 마세요 (jviide.iki.fi)",
        link: "https://jviide.iki.fi/http-redirects",
      },
      {
        rank: 8,
        title:
          "최고의 서비스를 만들고 싶다면 비합리적이어야 합니다. (youtube.com)",
        link: "https://www.youtube.com/watch?v=wIRuMJj_igE",
      },
      {
        rank: 9,
        title: "Mobifree 오픈소스 모바일 생태계와 f-Droid의 역할 (f-droid.org)",
        link: "https://f-droid.org/2024/05/24/mobifree.html",
      },
      {
        rank: 10,
        title: "GN⁺: JWT를 인증 토큰으로 사용해야 할까? (blog.ploetzli.ch)",
        link: "https://blog.ploetzli.ch/2024/should-i-use-jwt-for-authentication/",
      },
      {
        rank: 11,
        title:
          "GN⁺: TerminalTextEffects (TTE) - 터미널 텍스트 효과 엔진 (chrisbuilds.github.io)",
        link: "https://chrisbuilds.github.io/terminaltexteffects/showroom/",
      },
      {
        rank: 12,
        title:
          "GN⁺: llm.c를 사용하여 GPT-2 모델을 저렴하게 재구현하기 (github.com/karpathy)",
        link: "https://github.com/karpathy/llm.c/discussions/481",
      },
      {
        rank: 13,
        title:
          "Show GN: 알로록달로록 오픈소스 모바일 청첩장 (github.com/heejin-hwang)",
        link: "https://news.hada.io/topic?id=15054",
      },
      {
        rank: 14,
        title:
          "GN⁺: Llama 3-V - GPT4-V와 동등한 성능을 100배 작은 모델과 500달러로 구현하기 (aksh-garg.medium.com)",
        link: "https://aksh-garg.medium.com/llama-3v-building-an-open-source-gpt-4v-competitor-in-under-500-7dd8f1f6c9ee",
      },
      {
        rank: 15,
        title:
          "AI 파트너쉽 트래커 : AI회사들과 미디어들의 계약 추적 (petebrown.quarto.pub)",
        link: "https://petebrown.quarto.pub/pnp-ai-partnerships/",
      },
      {
        rank: 16,
        title:
          'GN⁺: "auth" 대신 "permissions"와 "login"을 사용합시다 (ntietz.com)',
        link: "https://ntietz.com/blog/lets-say-instead-of-auth/",
      },
      {
        rank: 17,
        title: "한국 서비스와 미국 서비스의 감성 차이 (dis.qa)",
        link: "https://dis.qa/wHPUP5",
      },
      {
        rank: 18,
        title: "AI & SaaS로 해결해볼 수 있는 문제들 (dis.qa)",
        link: "https://dis.qa/sG1W",
      },
      {
        rank: 19,
        title:
          "GraphQL Yoga - 모든 기능을 갖춘 GraphQL 서버 (github.com/dotansimha)",
        link: "https://github.com/dotansimha/graphql-yoga",
      },
      {
        rank: 20,
        title:
          "채용 협상에서 원하는 것을 얻으려면? (하버드 비즈니스 스쿨) (youtube.com)",
        link: "https://www.youtube.com/watch?v=km2Hd_xgo9Q",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/0c96cf861da3332ad4d6ab1b5df38445534b0442669a122c4c880832fc83ec3a?w=64&f=webp")',
        title: "KB건강체크",
        link: "https://disquiet.io/product/kb%EA%B1%B4%EA%B0%95%EC%B2%B4%ED%81%AC",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/6ab615d4d3435fb2dc47588db6d7dfe3e5b9482b595814286dbcb48887ec5e59?w=64&f=webp")',
        title: "우리의교회",
        link: "https://disquiet.io/product/%EC%9A%B0%EB%A6%AC%EC%9D%98%EA%B5%90%ED%9A%8C",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ba49b98eeb12679f9950075513f9c999b6b69a5521186f1ece579398a38c9bc1?w=64&f=webp")',
        title: "보끼",
        link: "https://disquiet.io/product/%EB%B3%B4%EB%81%BC",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/d8f8d27b756d1cec12c1ce69f8871ee6ef5aefe59b4f852482b7dde072243558?w=64&f=webp")',
        title: "moonshot 문샷",
        link: "https://disquiet.io/product/moonshot-%EB%AC%B8%EC%83%B7",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/5d297d5997e0c216292120fa568c1ce729623b66e93c910d57186b4d8465edb4?w=64&f=webp")',
        title: "오늘등산",
        link: "https://disquiet.io/product/%EC%98%A4%EB%8A%98%EB%93%B1%EC%82%B0",
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
        icon: "https://ph-files.imgix.net/c9be456a-7fd5-480e-9a9c-f4d064e66afb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BypassAI.io",
        link: "https://www.producthunt.com/posts/bypassai-io",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/50692a18-1e70-4c82-a130-9a96ff3a1fca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AR2R powered by SESSIONS",
        link: "https://www.producthunt.com/posts/ar2r-powered-by-sessions",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/c8dd0cb9-8f45-4c93-af1a-093d34eaaff6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hyperswitch - Control Centre",
        link: "https://www.producthunt.com/posts/hyperswitch-control-centre",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/cb579b99-04c7-487f-bdce-bcfd63123183.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Graphite AI SEO Platform",
        link: "https://www.producthunt.com/posts/graphite-ai-seo-platform",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/d81028ec-db98-4c7c-a69a-d1a43f28d9d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Private Company Database 2.0",
        link: "https://www.producthunt.com/posts/private-company-database-2-0",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/7c730041-9cb7-4f9e-95c6-9749de8ac883.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Notebook App",
        link: "https://www.producthunt.com/posts/ai-notebook-app",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/032e4fdd-e496-47ee-a795-fa931d469df4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Unipile LinkedIn API",
        link: "https://www.producthunt.com/posts/unipile-linkedin-api",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/063d7fc4-d741-4ff7-9805-d9b7e4e9c095.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Meme Depot",
        link: "https://www.producthunt.com/posts/meme-depot",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/026e7e60-433d-4d86-93c7-c09aa75c0aae.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Linkrunner.io",
        link: "https://www.producthunt.com/posts/linkrunner-io",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/d02c7672-5210-4d6b-8f37-09fdeffc9951.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Dailies",
        link: "https://www.producthunt.com/posts/dailies",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/1b6062a9-e943-40ef-b94b-87111656df38.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Wingtap",
        link: "https://www.producthunt.com/posts/wingtap",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/365a0ac4-ee85-494a-8b0e-680fa313f518.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SukuPay",
        link: "https://www.producthunt.com/posts/sukupay",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/3f9285ab-e2be-448c-b8fa-f4fa5b84edb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Super Comments AI",
        link: "https://www.producthunt.com/posts/super-comments-ai",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/0d0db70b-5a16-41fd-b2a7-c74d38f213f5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AyiConnect",
        link: "https://www.producthunt.com/posts/ayiconnect",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/0e0e1791-398f-4ce6-aabd-50d683eba68e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NotionPower",
        link: "https://www.producthunt.com/posts/notionpower",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/ea7eeb58-ed5e-416f-a474-a7fa84551c0b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ezy-Newz",
        link: "https://www.producthunt.com/posts/ezy-newz",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/7ac86c7f-8c2b-4f1a-92f4-893f1bc3c292.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PayFill Auto",
        link: "https://www.producthunt.com/posts/payfill-auto",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/22c177dc-2658-4bbb-a804-d8a3f7358be7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Milvus Lite",
        link: "https://www.producthunt.com/posts/milvus-lite",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/5685d47c-4f4e-491c-af83-5b4d02ddec32.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "InboxAlly",
        link: "https://www.producthunt.com/posts/inboxally-2",
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
