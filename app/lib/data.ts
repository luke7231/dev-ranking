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
        title: "코딩 테스트를 준비하는 모두를 위한 조언",
        link: "https://yozm.wishket.com/magazine/detail/2612/",
      },
      {
        rank: 3,
        title: "스마트팩토리의 핵심, 미들웨어란 무엇일까?",
        link: "https://yozm.wishket.com/magazine/detail/2606/",
      },
      {
        rank: 4,
        title: "UI 디자인 돕는 간편한 AI 도구 ‘Creatie’",
        link: "https://yozm.wishket.com/magazine/detail/2605/",
      },
      {
        rank: 5,
        title: "테무의 구매 유도 다크패턴 4종 세트",
        link: "https://yozm.wishket.com/magazine/detail/2604/",
      },
      {
        rank: 6,
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 7,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 8,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 9,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 10,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 11,
        title: "[SI 산업 가이드북⑥] 1억 넘는 ‘진짜 프로젝트’는 어떻게 할까?",
        link: "https://yozm.wishket.com/magazine/detail/2578/",
      },
      {
        rank: 12,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 13,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
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
          "Apollo 8 astronaut William Anders ID'd in WA plane crash (fox13seattle.com)",
        link: "https://www.fox13seattle.com/news/william-anders-wa-plane-crash",
      },
      {
        rank: 2,
        title: "Content Injection Attack on GitHub (github.com/younesbram)",
        link: "https://github.com/younesbram/younesbram",
      },
      {
        rank: 3,
        title:
          "Critical Vulnerabilities in Package Manager Revealed by Secret Scanning Research (sockpuppets.medium.com)",
        link: "https://sockpuppets.medium.com/exposing-hidden-dangers-the-essential-guide-to-secret-scanning-in-package-repositories-c483dcf3b82f",
      },
      {
        rank: 4,
        title:
          "What happened to Captura? OSS maintainer burnout (2023) (mathewsachin.github.io)",
        link: "https://mathewsachin.github.io/blog/2023/04/09/captura-unmaintained.html",
      },
      {
        rank: 5,
        title: "Own a weather station? We want your data (weather.gov)",
        link: "https://www.weather.gov/iln/cwop",
      },
      {
        rank: 6,
        title: "What Is PID 0? (dave.tf)",
        link: "https://blog.dave.tf/post/linux-pid0/",
      },
      {
        rank: 7,
        title: "ASCII Silhouettify (meatfighter.com)",
        link: "https://meatfighter.com/ascii-silhouettify/",
      },
      {
        rank: 8,
        title: "Feynman’s Razor (defenderofthebasic.substack.com)",
        link: "https://defenderofthebasic.substack.com/p/feynmans-razor",
      },
      {
        rank: 9,
        title:
          "Xv6, a simple Unix-like teaching operating system (csail.mit.edu)",
        link: "https://pdos.csail.mit.edu/6.828/2023/xv6.html",
      },
      {
        rank: 10,
        title: "A pure NumPy implementation of Mamba (github.com/idoh)",
        link: "https://github.com/idoh/mamba.np",
      },
      {
        rank: 11,
        title: "South Pole Water Infrastructure (brr.fyi)",
        link: "https://brr.fyi/posts/south-pole-water-infrastructure",
      },
      {
        rank: 12,
        title:
          "LaTeX is the first PDF/UA-2 compliance accessible PDF producer (github.com/latex3)",
        link: "https://github.com/latex3/tagging-project/discussions/72",
      },
      {
        rank: 13,
        title: "3dfx Voodoo 4 video card in MXM format (2023) (vogons.org)",
        link: "https://www.vogons.org/viewtopic.php?t=100871",
      },
      {
        rank: 14,
        title:
          "Show HN: I created this land use visualisation for the Netherlands (koenvangilst.nl)",
        link: "https://koenvangilst.nl/labs/ons-land",
      },
      {
        rank: 15,
        title:
          "Yes, you can play Duck Hunt without a television (but I can't) (nicole.express)",
        link: "https://nicole.express/2024/no-screen-no-cpu-one-problem.html",
      },
      {
        rank: 16,
        title:
          "Show HN: Scipress.io – a Markdown writing platform like Notion Medium MkDocs (scipress.io)",
        link: "https://www.scipress.io/post/kehluzWG8Iq9y1Nu7IMP/docs",
      },
      {
        rank: 17,
        title:
          "Boeing Passenger Jet Nearly Crashes Because of Known Software Bug (independent.co.uk)",
        link: "https://www.independent.co.uk/travel/tui-boeing-flight-bristol-disaster-avoided-b2558536.html",
      },
      {
        rank: 18,
        title: "Secret Hand Gestures in Paintings (2019) (nih.gov)",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7233791/",
      },
      {
        rank: 19,
        title:
          "Chebyshev approximation and how it can help (2012) (embeddedrelated.com)",
        link: "https://www.embeddedrelated.com/showarticle/152.php",
      },
      {
        rank: 20,
        title:
          "Slow-spinning radio neutron star breaks all the rules (sydney.edu.au)",
        link: "https://www.sydney.edu.au/news-opinion/news/2024/06/05/slow-spinning-radio-neutron-star-breaks-all-the-rules.html",
      },
      {
        rank: 21,
        title:
          'Memory-safe, clean implementation of classic Posix "BC" calculator (github.com/rustcoreutils)',
        link: "https://github.com/rustcoreutils/posixutils-rs/tree/main/calc/src",
      },
      {
        rank: 22,
        title:
          "Replit used legal threats to kill my open-source project (2021) (intuitiveexplanations.com)",
        link: "https://intuitiveexplanations.com/tech/replit/",
      },
      {
        rank: 23,
        title: "Tom 7: Badness 0 (Three ways) (tom7.org)",
        link: "http://tom7.org/bovex/",
      },
      {
        rank: 24,
        title:
          "VGG Specs: Next-Gen Cross-Platform Vector Graphics with Advanced UI Effects (github.com/verygoodgraphics)",
        link: "https://github.com/verygoodgraphics",
      },
      {
        rank: 25,
        title: "Le vieux Paris n'est plus (davidabell.substack.com)",
        link: "https://davidabell.substack.com/p/le-vieux-paris-nest-plus",
      },
      {
        rank: 26,
        title:
          "OpenSSH introduces options to penalize undesirable behavior (undeadly.org)",
        link: "https://undeadly.org/cgi?action=article;sid=20240607042157",
      },
      {
        rank: 27,
        title: "LedgerStore Supports Trillions of Indexes at Uber (uber.com)",
        link: "https://www.uber.com/blog/how-ledgerstore-supports-trillions-of-indexes/?uclick_id=67d612cb-12f8-470a-98fd-e9f7144dfafb",
      },
      {
        rank: 28,
        title: "Why are debut novels failing to launch? (esquire.com)",
        link: "https://www.esquire.com/entertainment/books/a60924704/debut-fiction-challenges/",
      },
      {
        rank: 29,
        title: "Alarms in medical equipment (th.id.au)",
        link: "https://th.id.au/alarms/",
      },
      {
        rank: 30,
        title: "Ask HN: Machine learning engineers, what do you do at work?",
        link: "https://news.ycombinator.com/item?id=40610794",
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
          "패션플랫폼 무신사, PC버전 지원 종료…모바일에 올인 (musinsa.com)",
        link: "https://www.musinsa.com/app/cs/notice_list#no_15632",
      },
      {
        rank: 2,
        title: "Peazip - 오픈소스 파일 압축/해제 유틸리티 (peazip.github.io)",
        link: "https://peazip.github.io/",
      },
      {
        rank: 3,
        title:
          "Show GN: 간단한 이미지 하이라이터 (simplehighlighterpngjpg.com)",
        link: "https://news.hada.io/topic?id=15221",
      },
      {
        rank: 4,
        title: "GN⁺: 1인 개발자로서 동기 부여 관리하기 (mbuffett.com)",
        link: "https://mbuffett.com/posts/maintaining-motivation/",
      },
      {
        rank: 5,
        title:
          "Ask HN: 해커뉴스와 비슷한 사이트는 어떤게 있나요? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40478422",
      },
      {
        rank: 6,
        title:
          "미쯔비시 로봇, Rubik's Cube를 0.305초만에 풀어 (soranews24.com)",
        link: "https://soranews24.com/2024/05/28/mitsubishi-develops-robot-that-solves-rubiks-cube-style-puzzle-in-0-305-seconds%e3%80%90video%e3%80%91/",
      },
      {
        rank: 7,
        title: "Fusio - 오픈소스 API 관리 플랫폼 (fusio-project.org)",
        link: "https://www.fusio-project.org/",
      },
      {
        rank: 8,
        title:
          "Stable Audio Open 공개 - 오디오 샘플과 사운드 디자인을 위한 오픈 소스 모델 (stability.ai)",
        link: "https://stability.ai/news/introducing-stable-audio-open",
      },
      {
        rank: 9,
        title:
          "GN⁺: 마이크로소프트 AI 스파이 스캔들: 프라이버시 기준 재검토 필요 (spectrum.ieee.org)",
        link: "https://spectrum.ieee.org/online-privacy",
      },
      {
        rank: 10,
        title: "GN⁺: 지적 비만 위기 (2022) (gurwinder.blog)",
        link: "https://www.gurwinder.blog/p/the-intellectual-obesity-crisis",
      },
      {
        rank: 11,
        title: "Bento 발표, Benthos의 오픈소스 포크 버전 (warpstream.com)",
        link: "https://www.warpstream.com/blog/announcing-bento-the-open-source-fork-of-the-project-formerly-known-as-benthos",
      },
      {
        rank: 12,
        title: "llIlI.lI - I/l 만 사용하는 단축 URL 생성기 (llili.li)",
        link: "https://llili.li/",
      },
      {
        rank: 13,
        title:
          "GN⁺: Show HN: qStudio - 10년간 개발한 무료 SQL Editor (timestored.com)",
        link: "https://www.timestored.com/qstudio/release-version-3",
      },
      {
        rank: 14,
        title: "파이썬의 다양한 코맨드라인 도구들 (pythonmorsels.com)",
        link: "https://www.pythonmorsels.com/cli-tools/",
      },
      {
        rank: 15,
        title: "Alibaba, Qwen 2 모델 공개 (qwenlm.github.io)",
        link: "https://qwenlm.github.io/blog/qwen2/",
      },
      {
        rank: 16,
        title:
          "Show GN: Smart Spam Filter: 똑똑한 AI 기반 스팸문자 필터 앱 (apps.apple.com)",
        link: "https://news.hada.io/topic?id=15225",
      },
      {
        rank: 17,
        title:
          "OpenAI의 새로운 연구 성과: GPT-4의 내부 표현을 해석 가능한 패턴으로 분해 (openai.com)",
        link: "https://openai.com/index/extracting-concepts-from-gpt-4/",
      },
      {
        rank: 18,
        title:
          "나의 첫 번째 성공적인 사업 TinyPilot을 매각 완료했어요 (mtlynch.io)",
        link: "https://mtlynch.io/i-sold-tinypilot/",
      },
      {
        rank: 19,
        title:
          "클릭 한 번으로 이해하기 쉽게 AI가 데이터를 해석해주는 Graphy (dis.qa)",
        link: "https://dis.qa/JOKbE6t",
      },
      {
        rank: 20,
        title:
          "맥용 Bartender 앱의 소유자 변경과 투명성 부족에 대한 우려 (macrumors.com)",
        link: "https://www.macrumors.com/2024/06/04/bartender-mac-app-new-owner/",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/a146d2d53e025e5436de7fdf5ef557abe6f33894ec6b095c0b370e6d0f290b9b?w=64&f=webp")',
        title: "Dev.POST",
        link: "https://disquiet.io/product/dev-post",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/5e82fc2a7cb33296105383e53ef268549b6c7355c353315840780d91b75a7513?w=64&f=webp")',
        title: "버블로그",
        link: "https://disquiet.io/product/%EB%B2%84%EB%B8%94%EB%A1%9C%EA%B7%B8",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/c78f60608e437d65277d247f4f8a2c70b4ddeeb50da5e2b85a4dcf661d6e32cc?w=64&f=webp")',
        title: "깃허브에서 키우는 펫",
        link: "https://disquiet.io/product/%EA%B9%83%ED%97%88%EB%B8%8C%EC%97%90%EC%84%9C-%ED%82%A4%EC%9A%B0%EB%8A%94-%ED%8E%AB",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/c703c850a7d724dabb70aadfd9f88dbbca07b493f96c5abde0d822f5906c9d0d?w=64&f=webp")',
        title: "Honeyary",
        link: "https://disquiet.io/product/honeyary",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/cfa1ecbc58848a5b497ead94443f27bedfaa381a06b2c7b12463da29fb3c84f2?w=64&f=webp")',
        title: "ChatHub",
        link: "https://disquiet.io/product/chat-hub",
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
        icon: "https://ph-files.imgix.net/e48d88d3-9692-48a6-ba3f-8d858029b83e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Youtube Summarizer by ChatWithPDF",
        link: "https://www.producthunt.com/posts/youtube-summarizer-by-chatwithpdf",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/afbf6e57-3ac4-4ad2-b0a1-225e94beb269.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Surfoncode",
        link: "https://www.producthunt.com/posts/surfoncode",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/71409bbb-a3d4-4e09-81d1-f20b328a7385.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NotezAI",
        link: "https://www.producthunt.com/posts/notezai",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/375f7118-1a7e-4484-9d39-d4c68af84773.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Notify.pt",
        link: "https://www.producthunt.com/posts/notify-pt",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/514bcae9-e088-43da-bd9f-25b6a2e321bb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "QuickVid Autopilot",
        link: "https://www.producthunt.com/posts/quickvid-autopilot",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/ee5cc9de-6795-46f2-8d8a-2d7336f25295.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Gear Browser",
        link: "https://www.producthunt.com/posts/gear-browser-2",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/00ec2f91-c109-4828-ba19-3d49629e9f82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "VacayWiser",
        link: "https://www.producthunt.com/posts/vacaywiser",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/c08f3da7-b8d0-4cb9-98c8-7630d300cc7f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Simple Uptime",
        link: "https://www.producthunt.com/posts/simple-uptime",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/5e784251-7e77-4179-ad03-618132746fe5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Travel Echo",
        link: "https://www.producthunt.com/posts/travel-echo-2",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/799155c6-bd4d-4d1d-a941-52948ea948f1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SaladBowl v4",
        link: "https://www.producthunt.com/posts/saladbowl-v4",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/66861591-e98c-4a81-b634-cdcc1bde07cb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ColdHunt",
        link: "https://www.producthunt.com/posts/coldhunt",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/edc1ea16-1189-4777-b8f5-ff07ea609810.svg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Free Blog Post CTA Generator",
        link: "https://www.producthunt.com/posts/free-blog-post-cta-generator",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/d7dffacc-2327-4806-9674-76bf1fd95b3b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Trust Trials",
        link: "https://www.producthunt.com/posts/trust-trials",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/49019c1e-c774-48f3-9b1f-ba231c17c3ff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OnePublish",
        link: "https://www.producthunt.com/posts/onepublish",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/6b38ff8e-ae95-4607-a6ec-61d9c16240cd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CleanerPro Image Editor",
        link: "https://www.producthunt.com/posts/cleanerpro-image-editor",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/d1faf456-01bb-4f0c-97a8-cd288cab10db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NuraNote",
        link: "https://www.producthunt.com/posts/nuranote",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/ba64663f-d1e9-4e21-b9c1-78ca0ab8b284.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sorted Nomad",
        link: "https://www.producthunt.com/posts/sorted-nomad",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/3d807790-acb6-497d-aa7c-4368b9583703.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hashtag Guru: AI Assist for IG",
        link: "https://www.producthunt.com/posts/hashtag-guru-ai-assist-for-ig",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/6ebd77ee-02ef-4c84-9e1c-7b6fccd3414b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Storeez.app",
        link: "https://www.producthunt.com/posts/storeez-app-2",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/5bdfa8d4-869b-421d-998a-012218c346fc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OpinioAI",
        link: "https://www.producthunt.com/posts/opinioai",
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
