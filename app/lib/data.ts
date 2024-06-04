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
        title: "스마트팩토리의 핵심, 미들웨어란 무엇일까?",
        link: "https://yozm.wishket.com/magazine/detail/2606/",
      },
      {
        rank: 2,
        title: "UI 디자인 돕는 간편한 AI 도구 ‘Creatie’",
        link: "https://yozm.wishket.com/magazine/detail/2605/",
      },
      {
        rank: 3,
        title: "테무의 구매 유도 다크패턴 4종 세트",
        link: "https://yozm.wishket.com/magazine/detail/2604/",
      },
      {
        rank: 4,
        title: "노코드 툴 ‘소프터’로 직접 웹사이트 만들어봤습니다",
        link: "https://yozm.wishket.com/magazine/detail/2591/",
      },
      {
        rank: 5,
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 6,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 7,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 8,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 9,
        title: "",
        link: "https://yozm.wishket.com/magazine/detail/2578/",
      },
      {
        rank: 10,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 11,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 12,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 13,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
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
          "Scientists should use AI as a tool, not an oracle (aisnakeoil.com)",
        link: "https://www.aisnakeoil.com/p/scientists-should-use-ai-as-a-tool",
      },
      {
        rank: 2,
        title:
          "How many photons are received per bit transmitted from Voyager 1? (physics.stackexchange.com)",
        link: "https://physics.stackexchange.com/questions/816698/how-many-photons-are-received-per-bit-transmitted-from-voyager-1",
      },
      {
        rank: 3,
        title: "If English was written like Chinese (1999) (zompist.com)",
        link: "https://zompist.com/yingzi/yingzi.htm",
      },
      {
        rank: 4,
        title: "Ask HN: Who is hiring? (June 2024)",
        link: "https://news.ycombinator.com/item?id=40563283",
      },
      {
        rank: 5,
        title:
          "Grokfast: Accelerated Grokking by Amplifying Slow Gradients (arxiv.org)",
        link: "https://arxiv.org/abs/2405.20233",
      },
      {
        rank: 6,
        title:
          "I'm forking Ladybird and stepping down as SerenityOS BDFL (awesomekling.substack.com)",
        link: "https://awesomekling.substack.com/p/forking-ladybird-and-stepping-down-serenityos",
      },
      {
        rank: 7,
        title: "Why YC went to DC (ycombinator.com)",
        link: "https://www.ycombinator.com/blog/why-yc-went-to-dc/",
      },
      {
        rank: 8,
        title: "Fusion tech finds geothermal energy application (ieee.org)",
        link: "https://spectrum.ieee.org/geothermal-energy-gyrotron-quaise",
      },
      {
        rank: 9,
        title: "Seeing Like a Data Structure (belfercenter.org)",
        link: "https://www.belfercenter.org/publication/seeing-data-structure",
      },
      {
        rank: 10,
        title: "Ask HN: Who wants to be hired? (June 2024)",
        link: "https://news.ycombinator.com/item?id=40563280",
      },
      {
        rank: 11,
        title:
          "Pigeon towers: The rise and fall of a 17th-century status symbol (2015) (atlasobscura.com)",
        link: "https://www.atlasobscura.com/articles/dovecotes",
      },
      {
        rank: 12,
        title:
          "Cirkoban: Sokoban meets cellular automata written in Scheme (spritely.institute)",
        link: "https://spritely.institute/news/cirkoban-sokoban-meets-cellular-automata-written-in-scheme.html",
      },
      {
        rank: 13,
        title: "Show HN: 10 Years to Build a Free SQL Editor (timestored.com)",
        link: "https://www.timestored.com/qstudio/release-version-3",
      },
      {
        rank: 14,
        title:
          "SnapMagic (YC S15), the AI copilot for electronics, is hiring a PM (snapmagic.com)",
        link: "https://careers.snapmagic.com/o/technical-project-manager",
      },
      {
        rank: 15,
        title: "How to Walk and Talk: Everything We Know [pdf] (kk.org)",
        link: "https://kk.org/thetechnium/files/2023/12/howtowalkandtalk.pdf",
      },
      {
        rank: 16,
        title:
          "What if they gave an Industrial Revolution and nobody came? (2023) (rootsofprogress.org)",
        link: "https://rootsofprogress.org/robert-allen-british-industrial-revolution",
      },
      {
        rank: 17,
        title: "Mamba-2 – State Space Duality (tridao.me)",
        link: "https://tridao.me/blog/2024/mamba2-part1-model/",
      },
      {
        rank: 18,
        title:
          "Scientists confirm that pasteurisation effectively inactivates influenza viruses (gla.ac.uk)",
        link: "https://www.gla.ac.uk/news/headline_1078447_en.html",
      },
      {
        rank: 19,
        title:
          "Hermann Grassmann and the nature of abstractions (github.com/dicklesworthstone)",
        link: "https://github.com/Dicklesworthstone/grassman_article",
      },
      {
        rank: 20,
        title:
          "Feynman Computer Science Lecture – Hardware, Software, Heuristics (1985) [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=EKWGGDXe5MA",
      },
      {
        rank: 21,
        title:
          "Show HN: I made a tiny camera with super long battery life (toaster.llc)",
        link: "https://toaster.llc/photon/",
      },
      {
        rank: 22,
        title: "Longitude and our neurons of navigation (forkingpaths.co)",
        link: "https://www.forkingpaths.co/p/the-thrilling-tale-of-longitude-and",
      },
      {
        rank: 23,
        title:
          "Show HN: Tunnelling TCP through a file (github.com/fiddyschmitt)",
        link: "https://github.com/fiddyschmitt/File-Tunnel",
      },
      {
        rank: 24,
        title:
          "The impossibility of translating Franz Kafka (1999) (newyorker.com)",
        link: "https://www.newyorker.com/magazine/1999/01/11/the-impossibility-of-being-kafka",
      },
      {
        rank: 25,
        title:
          "Shared Memory Versioning to improve slow interactions (chromium.org)",
        link: "https://blog.chromium.org/2024/06/introducing-shared-memory-versioning-to.html",
      },
      {
        rank: 26,
        title: "Consumer Electronics Control (computer.rip)",
        link: "https://computer.rip/2024-06-02-consumer-electronics-control.html",
      },
      {
        rank: 27,
        title:
          "Wind power and solar photovoltaics have higher energy returns than fossil fuels (nature.com)",
        link: "https://www.nature.com/articles/s41560-024-01520-y",
      },
      {
        rank: 28,
        title:
          "Show HN: Brioche – A new Nix-like package manager (brioche.dev)",
        link: "https://brioche.dev/blog/announcing-brioche/",
      },
      {
        rank: 29,
        title:
          "Here comes the Muybridge camera moment but for text (interconnected.org)",
        link: "https://interconnected.org/home/2024/05/31/camera",
      },
      {
        rank: 30,
        title:
          "Ogma: Interpretable Symbolic General Problem-Solving Model (framer.website)",
        link: "https://ogma.framer.website/",
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
          "나의 첫 번째 성공적인 사업 TinyPilot을 매각 완료했어요 (mtlynch.io)",
        link: "https://mtlynch.io/i-sold-tinypilot/",
      },
      {
        rank: 2,
        title:
          'GN⁺: LLM은 더 이상 "인터넷으로 학습"하지 않는다 (allenpike.com)',
        link: "https://allenpike.com/2024/llms-trained-on-internet",
      },
      {
        rank: 3,
        title:
          "서비스를 확장하고 싶다면, 확장할 수 없는 일부터 시작하세요. (Y Combinatior) (youtube.com)",
        link: "https://www.youtube.com/watch?v=IjPDIjge81o",
      },
      {
        rank: 4,
        title: "2024년부터 사용할 최신 Node.js 런타임 기능들 (snyk.io)",
        link: "https://snyk.io/blog/10-modern-node-js-runtime-features/",
      },
      {
        rank: 5,
        title: "DuckDB 1.0.0 릴리즈 (duckdb.org)",
        link: "https://duckdb.org/2024/06/03/announcing-duckdb-100.html",
      },
      {
        rank: 6,
        title: "OpenAI, ChatGPT Edu 공개 (openai.com)",
        link: "https://openai.com/index/introducing-chatgpt-edu/",
      },
      {
        rank: 7,
        title:
          "Show GN: DGM.js - 스마트 도형을 지원하는 오픈소스 무한 캔버스 React 컴포넌트 (dgmjs.dev)",
        link: "https://news.hada.io/topic?id=15154",
      },
      {
        rank: 8,
        title:
          "slipshow - 슬라이드 기반이 아닌 기술 발표용 도구 (github.com/panglesd)",
        link: "https://github.com/panglesd/slipshow",
      },
      {
        rank: 9,
        title:
          "GN⁺: Copilot+ Recall은 2줄의 코드만으로 윈도우의 모든 입력과 보고 있는 것을 훔치는게 가능 (doublepulsar.com)",
        link: "https://doublepulsar.com/recall-stealing-everything-youve-ever-typed-or-viewed-on-your-own-windows-pc-is-now-possible-da3e12e9465e",
      },
      {
        rank: 10,
        title:
          "1Password가 esbuild로 브라우저 확장 빌드 시간을 90% 단축한 방법 (blog.1password.com)",
        link: "https://blog.1password.com/new-extension-build-system/",
      },
      {
        rank: 11,
        title:
          "GN⁺: 시그널: 개인정보 보호 보장을 훼손하기보다는 EU 시장 철수 (twitter.com/mer__edith)",
        link: "https://twitter.com/mer__edith/status/1796508893822238881",
      },
      {
        rank: 12,
        title:
          "Glance - 모든 Feed를 하나로 모아보는 셀프호스트 대시보드 (github.com/glanceapp)",
        link: "https://github.com/glanceapp/glance",
      },
      {
        rank: 13,
        title: "초보자를 위한 Vector Embeddings 가이드 (timescale.com)",
        link: "https://www.timescale.com/blog/a-beginners-guide-to-vector-embeddings/",
      },
      {
        rank: 14,
        title: "GN⁺: 6년 만에 GraphQL을 그만둔 이유 (bessey.dev)",
        link: "https://bessey.dev/blog/2024/05/24/why-im-over-graphql/",
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
        title: "Next.js 15 RC (frontoverflow.com)",
        link: "https://www.frontoverflow.com/magazine/10/Next.js%2015%20RC",
      },
      {
        rank: 18,
        title: "프라이버시 악몽 같은 Windows Recall (techradar.com)",
        link: "https://www.techradar.com/computing/computing-security/windows-recall-sounds-like-a-privacy-nightmare-heres-why-im-worried",
      },
      {
        rank: 19,
        title:
          "GN⁺: 데이터 없이도 데이터베이스가 되는 DuckDB (nikolasgoebel.com)",
        link: "https://www.nikolasgoebel.com/2024/05/28/duckdb-doesnt-need-data.html",
      },
      {
        rank: 20,
        title:
          "Magic UI: 랜딩 페이지 내 마케팅을 위한 UI 컴포넌트 (github.com/magicuidesign)",
        link: "https://github.com/magicuidesign/magicui",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/c78f60608e437d65277d247f4f8a2c70b4ddeeb50da5e2b85a4dcf661d6e32cc?w=64&f=webp")',
        title: "깃허브에서 키우는 펫",
        link: "https://disquiet.io/product/%EA%B9%83%ED%97%88%EB%B8%8C%EC%97%90%EC%84%9C-%ED%82%A4%EC%9A%B0%EB%8A%94-%ED%8E%AB",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/62b07e50cbddf1aa70f584db62626f0c022075a1d74f44c0be64575ceb9b2165?w=64&f=webp")',
        title: "셀업 사이드 프로젝트 판매 플랫폼",
        link: "https://disquiet.io/product/%EC%85%80%EC%97%85",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/2bb20e927d233edd9332e1697efb8c021b3b1d626dd9702a2f9834dc9e37efe4?w=64&f=webp")',
        title: "AI 챗봇 메이커",
        link: "https://disquiet.io/product/ai-%EC%B1%97%EB%B4%87-%EB%A9%94%EC%9D%B4%EC%BB%A4",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/99087015dfb95c2797930f88931139e5604787f8cbdc3fefc906c423e08ab4d8?w=64&f=webp")',
        title: "그릿지",
        link: "https://disquiet.io/product/%EA%B7%B8%EB%A6%BF%EC%A7%80-1717377764844",
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
        icon: "https://ph-files.imgix.net/5f776ac5-f348-4e59-911f-57ca2f939066.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Atlas.co",
        link: "https://www.producthunt.com/posts/atlas-co-1",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/5e981135-9df0-42fd-89bb-078610157976.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Linkz.ai 3.0",
        link: "https://www.producthunt.com/posts/linkz-ai-3-0",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/76940eea-1ef6-42e8-85d3-bda0943258cd.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Guess World Flags",
        link: "https://www.producthunt.com/posts/guess-world-flags",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/e91ce42c-c258-4103-a44c-f03fb061d5c0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Marevo",
        link: "https://www.producthunt.com/posts/marevo",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/df125cf0-5ba6-4d11-92c1-ea59dd554a22.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Kerlig AI",
        link: "https://www.producthunt.com/posts/kerlig-ai",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/7561dfba-1f35-430b-b6fb-ea5eac776358.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Does It Exist",
        link: "https://www.producthunt.com/posts/does-it-exist",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/0c7f26ab-67f5-4e86-9a8c-b0dd4d4cc41b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Deepshot 2.0",
        link: "https://www.producthunt.com/posts/deepshot-2-0",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/e63b6949-ed27-4a0d-a5e6-cf65a3ddc794.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Advomate",
        link: "https://www.producthunt.com/posts/advomate",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/70332d6b-7173-4c3f-a6ce-1b02c400b086.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "human.software",
        link: "https://www.producthunt.com/posts/human-software",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/e3e6b72b-1987-44bc-9ec1-0b7cc36e6deb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Gojiberry for Shopify",
        link: "https://www.producthunt.com/posts/gojiberry-for-shopify",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/9a8738b7-7fdf-467c-9a4f-98e98c8c4aa0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "HexPay",
        link: "https://www.producthunt.com/posts/hexpay",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/82e463a7-3f00-45e1-a273-9ed17810b192.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Figgy",
        link: "https://www.producthunt.com/posts/figgy-2",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/11b4fe92-1e54-42b8-b2a3-8dc5995d52f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SplitHub.io",
        link: "https://www.producthunt.com/posts/splithub-io",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/1e340015-1d79-4127-93d5-25afc3c4881f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Space Blocks",
        link: "https://www.producthunt.com/posts/space-blocks",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/7cee5ecd-9ad4-486d-b6a3-4d2947bc7a0e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Menteno",
        link: "https://www.producthunt.com/posts/menteno",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/53ad5705-3005-463c-bf39-6168ccd9c2bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Creator Platform by Adaptiv",
        link: "https://www.producthunt.com/posts/creator-platform-by-adaptiv",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/7685660e-c09e-4c00-9d92-e074ee0c0eb0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ginix",
        link: "https://www.producthunt.com/posts/ginix",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/57e4acb4-1699-400d-86ab-19b0078a64df.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OpenNotas",
        link: "https://www.producthunt.com/posts/opennotas",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/e8c2dc71-6bd1-40e8-b083-75df0c5c5b0f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Nut Tree",
        link: "https://www.producthunt.com/posts/nut-tree",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/b59bc198-5a53-4256-9503-46705021793f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Validea",
        link: "https://www.producthunt.com/posts/validea-2",
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
