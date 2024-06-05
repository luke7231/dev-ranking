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
        title:
          "[ '설득'에 관한 이야기 #3. ] 설득해야 할 문제와 대상을 분리하기",
        link: "https://careerly.co.kr/comments/105567",
      },
      {
        rank: 7,
        title: "금주 1주년 셀프 축하",
        link: "https://careerly.co.kr/comments/105410",
      },
      {
        rank: 8,
        title: "콘텐츠 비즈니스는 '채널 구축'에서부터 시작됩니다",
        link: "https://careerly.co.kr/comments/105566",
      },
      {
        rank: 9,
        title: "📝 Agent Hospital: 시뮬레이션으로 진화하는 의료 에이전트",
        link: "https://careerly.co.kr/comments/105508",
      },
      {
        rank: 10,
        title: "📝 애플 뮤직 개발자 채용 공고",
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
        title: "3달 만든 코드를 모두 엎고 배운 것",
        link: "https://yozm.wishket.com/magazine/detail/2613/",
      },
      {
        rank: 2,
        title: "스마트팩토리의 핵심, 미들웨어란 무엇일까?",
        link: "https://yozm.wishket.com/magazine/detail/2606/",
      },
      {
        rank: 3,
        title: "UI 디자인 돕는 간편한 AI 도구 ‘Creatie’",
        link: "https://yozm.wishket.com/magazine/detail/2605/",
      },
      {
        rank: 4,
        title: "테무의 구매 유도 다크패턴 4종 세트",
        link: "https://yozm.wishket.com/magazine/detail/2604/",
      },
      {
        rank: 5,
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 6,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 7,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 8,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 9,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 10,
        title: "[SI 산업 가이드북⑥] 1억 넘는 ‘진짜 프로젝트’는 어떻게 할까?",
        link: "https://yozm.wishket.com/magazine/detail/2578/",
      },
      {
        rank: 11,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 12,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 13,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
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
        title: "You'll regret using natural keys (ploeh.dk)",
        link: "https://blog.ploeh.dk/2024/06/03/youll-regret-using-natural-keys/",
      },
      {
        rank: 2,
        title: "An animated introduction to Fourier series (andreinc.net)",
        link: "https://www.andreinc.net/2024/04/24/from-the-circle-to-epicycles",
      },
      {
        rank: 3,
        title:
          "Why do electronic components have such odd values? (2021) (digilent.com)",
        link: "https://digilent.com/blog/why-do-electronic-components-have-such-odd-values/",
      },
      {
        rank: 4,
        title:
          "How to chop off bytes of an UTF-8 string to fit into a small slot and look nice (domm.plix.at)",
        link: "https://domm.plix.at/perl/2024_06_chopping_utf8.html",
      },
      {
        rank: 5,
        title:
          "Hacking millions of modems and investigating who hacked my modem (samcurry.net)",
        link: "https://samcurry.net/hacking-millions-of-modems",
      },
      {
        rank: 6,
        title:
          "Why camera calibration is so important in computer vision (opencv.ai)",
        link: "https://www.opencv.ai/blog/camera-calibration",
      },
      {
        rank: 7,
        title:
          "Rejecting GMOs hinders human progress and keeps the poor hungry (theupwing.com)",
        link: "https://www.theupwing.com/rejecting-gmos-hinders-human-progress-and-keeps-the-poor-hungry/",
      },
      {
        rank: 8,
        title: "Atash Behram – Types of Fire (wikipedia.org)",
        link: "https://en.wikipedia.org/wiki/Atash_Behram",
      },
      {
        rank: 9,
        title:
          "Use context-free grammars instead of parser combinators and PEG (safinaskar.writeas.com)",
        link: "https://safinaskar.writeas.com/",
      },
      {
        rank: 10,
        title:
          "Entropy, a CLI that scans files to find high entropy lines (might be secrets) (github.com/ewenquim)",
        link: "https://github.com/EwenQuim/entropy",
      },
      {
        rank: 11,
        title: "Sphere Rendering: Flat Planets (emildziewanowski.com)",
        link: "https://emildziewanowski.com/flat-planets/",
      },
      {
        rank: 12,
        title:
          "Show HN: Allocate poker chips optimally with mixed-integer nonlinear programming (github.com/jstrieb)",
        link: "https://github.com/jstrieb/poker-chipper",
      },
      {
        rank: 13,
        title:
          "Apple M4 iPad Pro Has a New Security Exclave for Camera and Microphone Activity (9to5mac.com)",
        link: "https://9to5mac.com/2024/06/03/m4-ipad-pro-security-feature-apple-hasnt-told-anyone-about/",
      },
      {
        rank: 14,
        title:
          "The state of the art in copter drones and flight control systems (mdpi.com)",
        link: "https://www.mdpi.com/1424-8220/24/11/3349",
      },
      {
        rank: 15,
        title: "Particle accelerators for the microchip era (moore.org)",
        link: "https://www.moore.org/article-detail?newsUrlName=particle-accelerators-for-the-microchip-era",
      },
      {
        rank: 16,
        title: "Herbie: Optimize Floating-Point Expressions (uwplse.org)",
        link: "https://herbie.uwplse.org/demo/",
      },
      {
        rank: 17,
        title: "Not Just Scale (brooker.co.za)",
        link: "https://brooker.co.za/blog/2024/06/04/scale.html",
      },
      {
        rank: 18,
        title:
          "Creating a Safari webarchive from the command line (alexwlchan.net)",
        link: "https://alexwlchan.net/2024/creating-a-safari-webarchive/",
      },
      {
        rank: 19,
        title: "Don't be terrified of Pale Fire (unherd.com)",
        link: "https://unherd.com/2024/05/dont-be-terrified-of-pale-fire/",
      },
      {
        rank: 20,
        title:
          "Continue (YC S23) is hiring a founding engineer in San Francisco (ycombinator.com)",
        link: "https://www.ycombinator.com/companies/continue/jobs/smcxRnM-founding-engineer",
      },
      {
        rank: 21,
        title:
          "Bit-twiddling abstract addition with unknown bits (dougallj.wordpress.com)",
        link: "https://dougallj.wordpress.com/2020/01/13/bit-twiddling-addition-with-unknown-bits/",
      },
      {
        rank: 22,
        title: "Some notes on influenceering (lcamtuf.substack.com)",
        link: "https://lcamtuf.substack.com/p/some-notes-on-influenceering",
      },
      {
        rank: 23,
        title:
          "Show HN: PlayBooks – Jupyter Notebooks style on-call investigation documents (github.com/drdroidlab)",
        link: "https://github.com/DrDroidLab/PlayBooks",
      },
      {
        rank: 24,
        title: "Toyota raided as safety testing scandal grows (bbc.com)",
        link: "https://www.bbc.com/news/articles/c1wwj1p2wdyo",
      },
      {
        rank: 25,
        title: "The Long-Lost Tarzan Atari Game, Preserved (gamehistory.org)",
        link: "https://gamehistory.org/atari-2600-tarzan/",
      },
      {
        rank: 26,
        title: "Attacking Android Binder (withgoogle.com)",
        link: "https://androidoffsec.withgoogle.com/posts/attacking-android-binder-analysis-and-exploitation-of-cve-2023-20938/",
      },
      {
        rank: 27,
        title: "A breakthrough towards the Riemann hypothesis (mathstodon.xyz)",
        link: "https://mathstodon.xyz/@tao/112557248794707738",
      },
      {
        rank: 28,
        title:
          "An intergenerational crime against humanity (theconversation.com)",
        link: "https://theconversation.com/an-intergenerational-crime-against-humanity-what-will-it-take-for-political-leaders-to-start-taking-climate-change-seriously-231383",
      },
      {
        rank: 29,
        title: "GitHub now provides Arm-based runners (github.blog)",
        link: "https://github.blog/2024-06-03-arm64-on-github-actions-powering-faster-more-efficient-build-systems/",
      },
      {
        rank: 30,
        title: "Show HN: Huewords, a Word and Logic Puzzle (snellman.net)",
        link: "https://huewords.snellman.net/",
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
          "Ask HN: 해커뉴스와 비슷한 사이트는 어떤게 있나요? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40478422",
      },
      {
        rank: 2,
        title: "파이썬의 다양한 코맨드라인 도구들 (pythonmorsels.com)",
        link: "https://www.pythonmorsels.com/cli-tools/",
      },
      {
        rank: 3,
        title: "GN⁺: 지적 비만 위기 (2022) (gurwinder.blog)",
        link: "https://www.gurwinder.blog/p/the-intellectual-obesity-crisis",
      },
      {
        rank: 4,
        title: "ht - 헤드리스 터미널 (github.com/andyk)",
        link: "https://github.com/andyk/ht",
      },
      {
        rank: 5,
        title:
          "GN⁺: Show HN: qStudio - 10년간 개발한 무료 SQL Editor (timestored.com)",
        link: "https://www.timestored.com/qstudio/release-version-3",
      },
      {
        rank: 6,
        title:
          "Koheesio - Nike의 데이터 파이프라인 구축용 프레임워크 오픈소스 (github.com/Nike-Inc)",
        link: "https://github.com/Nike-Inc/koheesio",
      },
      {
        rank: 7,
        title:
          "GN⁺: 마이크로소프트, 로컬 계정을 가능하게 한 Windows 11 우회 방법 차단 (pcworld.com)",
        link: "https://www.pcworld.com/article/2354686/microsoft-blocks-windows-11-workaround-local-accounts.html",
      },
      {
        rank: 8,
        title: "DuckDB 1.0.0 릴리즈 (duckdb.org)",
        link: "https://duckdb.org/2024/06/03/announcing-duckdb-100.html",
      },
      {
        rank: 9,
        title:
          "나의 첫 번째 성공적인 사업 TinyPilot을 매각 완료했어요 (mtlynch.io)",
        link: "https://mtlynch.io/i-sold-tinypilot/",
      },
      {
        rank: 10,
        title:
          "Show GN: OpenRouter (오픈라우터): 통일된 LLM 인터페이스와 마켓플레이스 (openrouter.ai)",
        link: "https://news.hada.io/topic?id=15171",
      },
      {
        rank: 11,
        title: "SB-OSC: 센드버드 온라인 스키마 변경 (sendbird.com)",
        link: "https://sendbird.com/ko/blog/sendbird-online-schema-change",
      },
      {
        rank: 12,
        title: "10년 넘게 쓴 AWS를 탈출하게 된 계기와 대안 (disquiet.io)",
        link: "https://disquiet.io/@bamchi/makerlog/%EB%8B%AC%EB%9F%AC-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%B9%84%EC%8B%B8%EC%A0%B8%EB%8F%84-%EB%90%98%EB%83%90-aws%EB%A5%BC-%ED%83%88%EC%B6%9C%ED%95%98%EA%B3%A0-%EB%B9%84%EC%9A%A9%EC%A0%88%EC%95%BD%ED%95%98%EC%9E%90",
      },
      {
        rank: 13,
        title:
          'GN⁺: LLM은 더 이상 "인터넷으로 학습"하지 않는다 (allenpike.com)',
        link: "https://allenpike.com/2024/llms-trained-on-internet",
      },
      {
        rank: 14,
        title:
          "서비스를 확장하고 싶다면, 확장할 수 없는 일부터 시작하세요. (Y Combinatior) (youtube.com)",
        link: "https://www.youtube.com/watch?v=IjPDIjge81o",
      },
      {
        rank: 15,
        title: "2024년부터 사용할 최신 Node.js 런타임 기능들 (snyk.io)",
        link: "https://snyk.io/blog/10-modern-node-js-runtime-features/",
      },
      {
        rank: 16,
        title:
          "slipshow - 슬라이드 기반이 아닌 기술 발표용 도구 (github.com/panglesd)",
        link: "https://github.com/panglesd/slipshow",
      },
      {
        rank: 17,
        title:
          "Show GN: DGM.js - 스마트 도형을 지원하는 오픈소스 무한 캔버스 React 컴포넌트 (dgmjs.dev)",
        link: "https://news.hada.io/topic?id=15154",
      },
      {
        rank: 18,
        title: "cuDF - GPU DataFrame 라이브러리 (github.com/rapidsai)",
        link: "https://github.com/rapidsai/cudf",
      },
      {
        rank: 19,
        title: "OpenAI, ChatGPT Edu 공개 (openai.com)",
        link: "https://openai.com/index/introducing-chatgpt-edu/",
      },
      {
        rank: 20,
        title:
          "GN⁺: Copilot+ Recall은 2줄의 코드만으로 윈도우의 모든 입력과 보고 있는 것을 훔치는게 가능 (doublepulsar.com)",
        link: "https://doublepulsar.com/recall-stealing-everything-youve-ever-typed-or-viewed-on-your-own-windows-pc-is-now-possible-da3e12e9465e",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/c703c850a7d724dabb70aadfd9f88dbbca07b493f96c5abde0d822f5906c9d0d?w=64&f=webp")',
        title: "Honeyary",
        link: "https://disquiet.io/product/honeyary",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/c78f60608e437d65277d247f4f8a2c70b4ddeeb50da5e2b85a4dcf661d6e32cc?w=64&f=webp")',
        title: "깃허브에서 키우는 펫",
        link: "https://disquiet.io/product/%EA%B9%83%ED%97%88%EB%B8%8C%EC%97%90%EC%84%9C-%ED%82%A4%EC%9A%B0%EB%8A%94-%ED%8E%AB",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/a146d2d53e025e5436de7fdf5ef557abe6f33894ec6b095c0b370e6d0f290b9b?w=64&f=webp")',
        title: "Dev.POST",
        link: "https://disquiet.io/product/dev-post",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/5e82fc2a7cb33296105383e53ef268549b6c7355c353315840780d91b75a7513?w=64&f=webp")',
        title: "버블로그",
        link: "https://disquiet.io/product/%EB%B2%84%EB%B8%94%EB%A1%9C%EA%B7%B8",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/1d6fec31e538218362ccb46a193aff2adc3c8a662902e7f1555e88f8108e136f?w=64&f=webp")',
        title: "리캐치 무료 UTM 빌더",
        link: "https://disquiet.io/product/%EB%A6%AC%EC%BA%90%EC%B9%98-utm-%EB%B9%8C%EB%8D%94",
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
        icon: "https://ph-files.imgix.net/16c2d2ce-50b4-47e0-bd4d-427374c14c52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OrgaNice",
        link: "https://www.producthunt.com/posts/organice",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/7bdeca7d-f9b3-43bd-afc8-10062e0c98dc.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Steer",
        link: "https://www.producthunt.com/posts/steer-6",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/f2e0233b-2722-42cd-a320-7fa4da3da59b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Mokibo Fusion Keyboard 2.0",
        link: "https://www.producthunt.com/posts/mokibo-fusion-keyboard-2-0",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/c61cec47-5995-4c96-ab76-8ca2f3f0fa64.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Formshare",
        link: "https://www.producthunt.com/posts/formshare",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/313b28d7-b938-4203-a767-531b20eea563.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Exante",
        link: "https://www.producthunt.com/posts/exante",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/f8f64ef3-c315-4934-9593-23a72d8cf0c8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Snowflake Native by Amplitude",
        link: "https://www.producthunt.com/posts/snowflake-native-by-amplitude",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/a557dcc1-97b7-4889-8c55-d07984e1ceea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Atmosfy",
        link: "https://www.producthunt.com/posts/atmosfy",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/3c42e31e-9262-4365-b05c-098e9e704533.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Fliki",
        link: "https://www.producthunt.com/posts/fliki-2",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/72d1deb3-49bf-4a34-a378-04a2e9a7ddb9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BiRead",
        link: "https://www.producthunt.com/posts/biread",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/9056e5ed-c8e7-4738-807e-71fc6636f8d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hillda",
        link: "https://www.producthunt.com/posts/hillda",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/4f0a8c75-46a6-4951-bf85-7d9092897af4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Huly.io",
        link: "https://www.producthunt.com/posts/huly-io",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/c4bcd713-66ee-4ef2-aad5-11da26e9182e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Second V2",
        link: "https://www.producthunt.com/posts/second-v2",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/79195ccc-3ab5-4180-ba80-c5d8820f0af8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "MagicPush - Web Push Done Right",
        link: "https://www.producthunt.com/posts/magicpush-web-push-done-right",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/d51bcf5d-cf98-476c-8537-70502974f741.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Bubble Time",
        link: "https://www.producthunt.com/posts/bubble-time",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/e0a2c3cc-acf4-4801-84ec-dc35bc0a2fbd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Fitness Calculator",
        link: "https://www.producthunt.com/posts/fitness-calculator",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/841b3aef-e135-4ef9-a5c8-48cc4d35a774.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "RikiGPT",
        link: "https://www.producthunt.com/posts/rikigpt",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/c9d24b73-a4fd-4bac-a098-3501abff34d0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ChatFlow",
        link: "https://www.producthunt.com/posts/chatflow-4",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/d63e9e33-e052-449d-86a5-6ff5bb3241ac.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Dockcase Studio: Smart USB-C Hub 8-in-1",
        link: "https://www.producthunt.com/posts/dockcase-studio-smart-usb-c-hub-8-in-1",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/b59bc198-5a53-4256-9503-46705021793f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Cello",
        link: "https://www.producthunt.com/posts/cello",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/85c231a7-477f-4cc9-b2b3-8fc5976cb916.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Fibery 2.0",
        link: "https://www.producthunt.com/posts/fibery-2-0",
      },
    ],
  },
  {
    key: "server",
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
    key: "web",
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
