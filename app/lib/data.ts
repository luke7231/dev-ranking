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
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 9,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 10,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 11,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 12,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 13,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
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
        title: "60 kHz (2022) (ben.page)",
        link: "https://ben.page/wwvb",
      },
      {
        rank: 2,
        title: "UI elements with a hand-drawn, sketchy look (wiredjs.com)",
        link: "https://wiredjs.com/",
      },
      {
        rank: 3,
        title:
          "Show HN: Every mountain, building and tree shadow mapped for any date and time (shademap.app)",
        link: "https://shademap.app/",
      },
      {
        rank: 4,
        title:
          "Snowflake breach: Hacker confirms access through infostealer infection (hudsonrock.com)",
        link: "https://www.hudsonrock.com/blog/snowflake-massive-breach-access-through-infostealer-infection",
      },
      {
        rank: 5,
        title: "Heroku Postgres is now based on AWS Aurora (heroku.com)",
        link: "https://blog.heroku.com/heroku-postgres-essential-launch",
      },
      {
        rank: 6,
        title:
          '"Moveable Type" to end 17-year run in The New York Times\'s lobby (nytco.com)',
        link: "https://www.nytco.com/press/moveable-type-to-end-17-year-run-in-the-new-york-timess-lobby/",
      },
      {
        rank: 7,
        title:
          "Armor from Mycenaean Greece turns out to have been effective (arstechnica.com)",
        link: "https://arstechnica.com/science/2024/05/researchers-get-modern-marines-to-test-ancient-greek-armor/",
      },
      {
        rank: 8,
        title:
          "Engines of Sacrality: A Footnote on Randall Collins' Interaction Ritual Chains (2013) (abandonedfootnotes.blogspot.com)",
        link: "http://abandonedfootnotes.blogspot.com/2013/04/engines-of-sacrality-footnote-on.html",
      },
      {
        rank: 9,
        title:
          "Bento: Open-source fork of the project formerly known as Benthos (warpstream.com)",
        link: "https://www.warpstream.com/blog/announcing-bento-the-open-source-fork-of-the-project-formerly-known-as-benthos",
      },
      {
        rank: 10,
        title: "London's Evening Standard axes daily print edition (bbc.com)",
        link: "https://www.bbc.com/news/articles/cyrr0yex40yo",
      },
      {
        rank: 11,
        title:
          "Mathematicians Attempt to Glimpse Past the Big Bang (quantamagazine.org)",
        link: "https://www.quantamagazine.org/mathematicians-attempt-to-glimpse-past-the-big-bang-20240531/",
      },
      {
        rank: 12,
        title:
          "Go: Sentinel errors and errors.Is() slow your code down by 3000% (dolthub.com)",
        link: "https://www.dolthub.com/blog/2024-05-31-benchmarking-go-error-handling/",
      },
      {
        rank: 13,
        title:
          "Debian KDE: Right Linux distribution for professional digital painting in 2024 (davidrevoy.com)",
        link: "https://www.davidrevoy.com/article1030/debian-12-kde-plasma-2024-install-guide",
      },
      {
        rank: 14,
        title:
          "How to copy a file from a 30-year-old laptop (unterminated.com)",
        link: "https://www.unterminated.com/random-fun/how-to-copy-a-file-from-a-30-year-old-laptop",
      },
      {
        rank: 15,
        title: "DataFusion Comet: Apache Spark Accelerator (github.com/apache)",
        link: "https://github.com/apache/datafusion-comet",
      },
      {
        rank: 16,
        title:
          "Windrecorder – Personal Memory Search Engine (github.com/yuka-friends)",
        link: "https://github.com/yuka-friends/Windrecorder",
      },
      {
        rank: 17,
        title: "Moving Beyond Type Systems (vhyrro.github.io)",
        link: "https://vhyrro.github.io/posts/effect-systems/",
      },
      {
        rank: 18,
        title:
          "Carpenter's AirTags help uncover 'massive' case of stolen tools in Maryland (washingtonpost.com)",
        link: "https://www.washingtonpost.com/dc-md-va/2024/05/31/police-theft-thousands-power-tools/",
      },
      {
        rank: 19,
        title:
          "How many holes does the universe have? (scientificamerican.com)",
        link: "https://www.scientificamerican.com/article/how-many-holes-does-the-universe-have/",
      },
      {
        rank: 20,
        title:
          "Encountering Strangers in Public Places: Goffman and Civil Inattention (2011) (everydaysociologyblog.com)",
        link: "https://www.everydaysociologyblog.com/2011/12/encountering-strangers-in-public-places-goffman-and-civil-inattention.html",
      },
      {
        rank: 21,
        title:
          "(some) good corporate engineering blogs are written (danluu.com)",
        link: "https://danluu.com/corp-eng-blogs/",
      },
      {
        rank: 22,
        title: "Engineering for Slow Internet (brr.fyi)",
        link: "https://brr.fyi/posts/engineering-for-slow-internet",
      },
      {
        rank: 23,
        title:
          "OneText (YC W23) Is Hiring a Lead UX Engineer (gist.github.com)",
        link: "https://gist.github.com/bluepnume/33f2c4be93cc20215aafd55f803de19f",
      },
      {
        rank: 24,
        title:
          "Eye exercises for myopia prevention and control: comprehensive systematic review (nature.com)",
        link: "https://www.nature.com/articles/s41433-023-02739-x",
      },
      {
        rank: 25,
        title:
          "Superconducting Computer: Imec's plan to shrink datacenters (ieee.org)",
        link: "https://spectrum.ieee.org/superconducting-computer",
      },
      {
        rank: 26,
        title: "Show HN: Explore Websites by Chosen Color (themefinder.io)",
        link: "https://themefinder.io/",
      },
      {
        rank: 27,
        title:
          "Recall: Stealing everything you've ever typed or viewed on your own Windows PC (doublepulsar.com)",
        link: "https://doublepulsar.com/recall-stealing-everything-youve-ever-typed-or-viewed-on-your-own-windows-pc-is-now-possible-da3e12e9465e",
      },
      {
        rank: 28,
        title:
          "Vista Equity writes off PluralSight value, after $3.5B buyout (axios.com)",
        link: "https://www.axios.com/2024/05/31/vista-equity-pluralsight",
      },
      {
        rank: 29,
        title:
          "Trial results for new lung cancer drug are 'off the charts' (theguardian.com)",
        link: "https://www.theguardian.com/society/article/2024/may/31/trial-results-for-new-lung-cancer-drug-are-off-the-charts-say-doctors",
      },
      {
        rank: 30,
        title:
          "Cyber house of cards – Politicians' personal details exposed online (proton.me)",
        link: "https://proton.me/blog/politicians-exposed-dark-web",
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
          "Show GN: fieldenum: 파이썬에서의 러스트식 필드형 enum 지원 (github.com/ilotoki0804)",
        link: "https://news.hada.io/topic?id=15117",
      },
      {
        rank: 2,
        title: "초보자를 위한 Vector Embeddings 가이드 (timescale.com)",
        link: "https://www.timescale.com/blog/a-beginners-guide-to-vector-embeddings/",
      },
      {
        rank: 3,
        title: "GN⁺: 일본, 모든 연구를 오픈 액세스로 전환 추진 (nature.com)",
        link: "https://www.nature.com/articles/d41586-024-01493-8",
      },
      {
        rank: 4,
        title:
          "Glance - 모든 Feed를 하나로 모아보는 셀프호스트 대시보드 (github.com/glanceapp)",
        link: "https://github.com/glanceapp/glance",
      },
      {
        rank: 5,
        title: "GN⁺: 6년 만에 GraphQL을 그만둔 이유 (bessey.dev)",
        link: "https://bessey.dev/blog/2024/05/24/why-im-over-graphql/",
      },
      {
        rank: 6,
        title:
          "Polyfill.io, 중국 CDN 기업에 인수된 후 보안 및 안정성 문제 발생 (x.com)",
        link: "https://x.com/hmartapp/status/1796729141309673554",
      },
      {
        rank: 7,
        title:
          "GN⁺: 데이터 없이도 데이터베이스가 되는 DuckDB (nikolasgoebel.com)",
        link: "https://www.nikolasgoebel.com/2024/05/28/duckdb-doesnt-need-data.html",
      },
      {
        rank: 8,
        title: "Caddy 2.8.0 릴리즈 (github.com/caddyserver)",
        link: "https://github.com/caddyserver/caddy/releases/tag/v2.8.0",
      },
      {
        rank: 9,
        title: "구글, 유출된 내부 검색 문서가 진짜임을 확인 (theverge.com)",
        link: "https://www.theverge.com/2024/5/29/24167407/google-search-algorithm-documents-leak-confirmation",
      },
      {
        rank: 10,
        title:
          "스티브잡스처럼 파세요 (Sell Your Ideas the Steve Jobs Way) (youtube.com)",
        link: "https://www.youtube.com/watch?v=0q-wvAIeUgk",
      },
      {
        rank: 11,
        title: "Email.ML - 미니멀한 임시 이메일 서비스 (email.ml)",
        link: "https://email.ml/",
      },
      {
        rank: 12,
        title:
          "당신의 ChatGPT 커스텀 프롬프트는 뭔가요 ? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40474716",
      },
      {
        rank: 13,
        title: "유출된 Google Search API 문서 분석 (sparktoro.com)",
        link: "https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/",
      },
      {
        rank: 14,
        title: "2024년 5월, 구글 SEO 알고리즘 내부 문서 유출 정리 (inblog.ai)",
        link: "https://inblog.ai/welcome/google-algorithm-docs-leak",
      },
      {
        rank: 15,
        title: "GN⁺: Codestral - Mistral의 코드 생성 AI 모델 (mistral.ai)",
        link: "https://mistral.ai/news/codestral/",
      },
      {
        rank: 16,
        title: "GN⁺: JWT를 인증 토큰으로 사용해야 할까? (blog.ploetzli.ch)",
        link: "https://blog.ploetzli.ch/2024/should-i-use-jwt-for-authentication/",
      },
      {
        rank: 17,
        title: "GN⁺: API의 HTTP를 HTTPS로 리디렉션하지 마세요 (jviide.iki.fi)",
        link: "https://jviide.iki.fi/http-redirects",
      },
      {
        rank: 18,
        title:
          "GN⁺: TerminalTextEffects (TTE) - 터미널 텍스트 효과 엔진 (chrisbuilds.github.io)",
        link: "https://chrisbuilds.github.io/terminaltexteffects/showroom/",
      },
      {
        rank: 19,
        title: "GN⁺: 코드를 성급하게 DRY하지 마세요 (testing.googleblog.com)",
        link: "https://testing.googleblog.com/2024/05/dont-dry-your-code-prematurely.html",
      },
      {
        rank: 20,
        title: "프롬프트 하나로 풀스택 웹앱을 만드는 Marblism (dis.qa)",
        link: "https://dis.qa/Uqxz6OS",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/6ab615d4d3435fb2dc47588db6d7dfe3e5b9482b595814286dbcb48887ec5e59?w=64&f=webp")',
        title: "우리의교회",
        link: "https://disquiet.io/product/%EC%9A%B0%EB%A6%AC%EC%9D%98%EA%B5%90%ED%9A%8C",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/0c96cf861da3332ad4d6ab1b5df38445534b0442669a122c4c880832fc83ec3a?w=64&f=webp")',
        title: "KB건강체크 I 간편 증상 분석 서비스",
        link: "https://disquiet.io/product/kb%EA%B1%B4%EA%B0%95%EC%B2%B4%ED%81%AC",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ba49b98eeb12679f9950075513f9c999b6b69a5521186f1ece579398a38c9bc1?w=64&f=webp")',
        title: "보끼",
        link: "https://disquiet.io/product/%EB%B3%B4%EB%81%BC",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/ea3ee8fc6de54ec472409bb18dfd51fdb68ef407fcb4e7ebcf69ad4d5988a412?w=64&f=webp")',
        title: "공작소",
        link: "https://disquiet.io/product/%EA%B3%B5%EC%9E%91%EC%86%8C",
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
        icon: "https://ph-files.imgix.net/8483bc6a-0974-43e0-a188-41ff7214606b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Eve",
        link: "https://www.producthunt.com/posts/eve-9",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/2c72ec0c-fda4-46f5-8db4-a1dda001606d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "MaxFocus: Link Preview",
        link: "https://www.producthunt.com/posts/maxfocus-link-preview",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/e307c584-35c7-44a0-b073-c06ebf013531.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "DocentPro — Explore the world",
        link: "https://www.producthunt.com/posts/docentpro-explore-the-world",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/873d9c63-20e9-4e26-918e-4030ad8cb397.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Fairytrail Travel App",
        link: "https://www.producthunt.com/posts/fairytrail-travel-app",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/88214fcc-247b-4fc6-a08f-4bee7acc47bd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "planq",
        link: "https://www.producthunt.com/posts/planq-1",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/551e3a80-3bea-41d0-8c1e-8c2e7648d645.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BlogToPin",
        link: "https://www.producthunt.com/posts/blogtopin",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/bcc2a23b-23f1-4750-8ccd-299e3a55f57c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Buglab AI",
        link: "https://www.producthunt.com/posts/buglab-ai",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/79759926-0f1a-4788-9dd3-e3a512530583.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Share Brewfiles",
        link: "https://www.producthunt.com/posts/share-brewfiles",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/cfa37197-eccf-4911-9f24-48175fcf7b69.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Zest",
        link: "https://www.producthunt.com/posts/zest-2dbf1b37-b73e-4f92-a290-ffe003f4ab08",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/536c94b8-3fd5-48b5-a4ed-27643d0b8b5b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Invoya",
        link: "https://www.producthunt.com/posts/invoya-1",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/96b4b872-1c79-43ec-bef2-c7be799e4cb1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stackpointer",
        link: "https://www.producthunt.com/posts/stackpointer",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/86799b9f-3fa1-4305-827c-d283a71f0d10.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Self Therapy",
        link: "https://www.producthunt.com/posts/self-therapy",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/858b6881-1d45-4684-9fa3-2a455a3f9b40.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Caliper",
        link: "https://www.producthunt.com/posts/caliper-2",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/72700b07-c125-45f8-93e2-d8d4b27f5a7f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Invite.social",
        link: "https://www.producthunt.com/posts/invite-social",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/4ce93990-328e-4a6c-a9c9-c2faca0dab12.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "DailyDisco",
        link: "https://www.producthunt.com/posts/dailydisco",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/129ea496-a3bc-4183-ae7c-4b9d31d4c640.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Focus Firewall",
        link: "https://www.producthunt.com/posts/focus-firewall",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/b59bc198-5a53-4256-9503-46705021793f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "TabRizz",
        link: "https://www.producthunt.com/posts/tabrizz",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/cb579b99-04c7-487f-bdce-bcfd63123183.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "GOAT Slider",
        link: "https://www.producthunt.com/posts/goat-slider",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/c8dd0cb9-8f45-4c93-af1a-093d34eaaff6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PeacePulse",
        link: "https://www.producthunt.com/posts/peacepulse",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/3f9285ab-e2be-448c-b8fa-f4fa5b84edb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Totemancer",
        link: "https://www.producthunt.com/posts/totemancer",
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
