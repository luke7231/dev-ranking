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
    key: "hackerNews",
    title: "HackerNews TOP5",
    img: "/y-combinator.png",
    link: "https://news.ycombinator.com/",
    contents: [
      {
        rank: 1,
        title:
          "A small lathe built in a Japanese prison camp (1949) (lathes.co.uk)",
        link: "http://www.lathes.co.uk/bradley-pow-lathe/",
      },
      {
        rank: 2,
        title:
          "I found one of my first programs (Java, 2011) on the Wayback Machine and it runs (github.com/khiner)",
        link: "https://github.com/khiner/CrosswordFiller",
      },
      {
        rank: 3,
        title: "FreeBee: AT&T Unix PC emulator (philpem.me.uk)",
        link: "https://www.philpem.me.uk/code/3b1emu",
      },
      {
        rank: 4,
        title:
          "6502 – Guideline to Reverse Engineering (how to read die shots) [pdf] (reactivemicro.com)",
        link: "https://downloads.reactivemicro.com/Electronics/Reverse%20Engineering/6502%20-%20Guideline%20to%20Reverse%20Engineering%20v1.0.pdf",
      },
      {
        rank: 5,
        title: "Show HN: Dotenv, if it is a Unix utility (github.com/gyf304)",
        link: "https://github.com/gyf304/dotenv",
      },
      {
        rank: 6,
        title:
          "The Ivy League and other elite private colleges are losing esteem (natesilver.net)",
        link: "https://www.natesilver.net/p/go-to-a-state-school",
      },
      {
        rank: 7,
        title:
          "The Essence of Compiling with Continuations (1993) [pdf] (acm.org)",
        link: "https://dl.acm.org/doi/pdf/10.1145/173262.155113",
      },
      {
        rank: 8,
        title:
          "Personal computing paves the way for personal library science (bramadams.dev)",
        link: "https://www.bramadams.dev/issue-55/",
      },
      {
        rank: 9,
        title: "Reentry – An Orbital Simulator (reentrygame.com)",
        link: "https://reentrygame.com/",
      },
      {
        rank: 10,
        title: "Watch cars evolve using genetic algorithm (rednuht.org)",
        link: "https://rednuht.org/genetic_cars_2/",
      },
      {
        rank: 11,
        title: "Speeding up C++ build times (figma.com)",
        link: "https://www.figma.com/blog/speeding-up-build-times/",
      },
      {
        rank: 12,
        title: "The Myth of the Second Chance (pressreader.com)",
        link: "https://ft.pressreader.com/article/282557318242321",
      },
      {
        rank: 13,
        title: "The unstallable plane that stalled (fearoflanding.com)",
        link: "https://fearoflanding.com/accidents/accident-reports/the-unstallable-plane-that-stalled/",
      },
      {
        rank: 14,
        title: "Common DB schema change mistakes in Postgres (postgres.ai)",
        link: "https://postgres.ai/blog/20220525-common-db-schema-change-mistakes",
      },
      {
        rank: 15,
        title:
          "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computers (os-world.github.io)",
        link: "https://os-world.github.io/",
      },
      {
        rank: 16,
        title:
          "Talking to memory: Inside the Intel 8088 processor's bus interface state machine (righto.com)",
        link: "http://www.righto.com/2024/04/intel-8088-bus-state-machine.html",
      },
      {
        rank: 17,
        title: "Meticulous (YC S21) is hiring to eliminate E2E UI tests",
        link: "https://news.ycombinator.com/item?id=40191915",
      },
      {
        rank: 18,
        title:
          'DEC PDP-1 emulator running "Spacewar", the earliest known digital video game (masswerk.at)',
        link: "https://www.masswerk.at/spacewar/index.html",
      },
      {
        rank: 19,
        title:
          "Barley plants fine-tune root microbial communities through sugary secretions (phys.org)",
        link: "https://phys.org/news/2024-04-barley-fine-tune-root-microbial.html",
      },
      {
        rank: 20,
        title: "Apple MacBook Air 15-Inch M3 Review (thurrott.com)",
        link: "https://www.thurrott.com/mobile/mac-and-macos/301371/apple-macbook-air-15-inch-m3-review",
      },
      {
        rank: 21,
        title: "What if null was an Object in Java? (donraab.medium.com)",
        link: "https://donraab.medium.com/what-if-null-was-an-object-in-java-3f1974954be2",
      },
      {
        rank: 22,
        title:
          "Trial of the effects of kefir on behaviour, sleep and the microbiome in ADHD (nih.gov)",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10711914/",
      },
      {
        rank: 23,
        title:
          "Show HN: OpenLIT – Open-Source LLM Observability with OpenTelemetry (github.com/openlit)",
        link: "https://github.com/openlit/openlit",
      },
      {
        rank: 24,
        title:
          "Did we lose our way in making efficient software? (rufatmammadli.medium.com)",
        link: "https://rufatmammadli.medium.com/did-we-lose-our-way-in-making-efficient-software-30-mb-doc-file-vs-browser-fed12dd866a4",
      },
      {
        rank: 25,
        title:
          "My mouse climbed a wall and now it doesn't work right (theregister.com)",
        link: "https://www.theregister.com/2024/04/26/on_call/",
      },
      {
        rank: 26,
        title: "Building MS-DOS 4.00 on FreeDOS [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=X7r76V_gWQ8",
      },
      {
        rank: 27,
        title:
          "Ollama v0.1.33 with Llama 3, Phi 3, and Qwen 110B (github.com/ollama)",
        link: "https://github.com/ollama/ollama/releases/tag/v0.1.33-rc5",
      },
      {
        rank: 28,
        title:
          "Haystack DB – 10x faster than FAISS with binary embeddings by default (github.com/carsonpo)",
        link: "https://github.com/carsonpo/haystackdb",
      },
      {
        rank: 29,
        title:
          "Zilog Z80 CPU – Modern, free and open source silicon clone (github.com/rejunity)",
        link: "https://github.com/rejunity/z80-open-silicon",
      },
      {
        rank: 30,
        title:
          "Show HN: Docker-phobia: Analyze Docker image size with a treemap (github.com/remorses)",
        link: "https://github.com/remorses/docker-phobia",
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
          "2024년 AI 스타트업을 위한 데이터 수집 전략 (press.airstreet.com)",
        link: "https://press.airstreet.com/p/data-acquisition-strategies-for-ai",
      },
      {
        rank: 2,
        title:
          "OpenVoice v2 - 다재다능한 인스턴트 음성 복제 (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
      },
      {
        rank: 3,
        title: "Meta Llama 3 발표후, 첫 일주일간 생긴 일 (ai.meta.com)",
        link: "https://ai.meta.com/blog/meta-llama-3-update/",
      },
      {
        rank: 4,
        title:
          "Apple, 기기 내 사용을 목표로 하는 8개의 소형 AI 언어 모델 릴리즈 (arstechnica.com)",
        link: "https://arstechnica.com/information-technology/2024/04/apple-releases-eight-small-ai-language-models-aimed-at-on-device-use/",
      },
      {
        rank: 5,
        title: "Ubuntu 24.04 Noble Numbat 출시 (releases.ubuntu.com)",
        link: "https://releases.ubuntu.com/noble/",
      },
      {
        rank: 6,
        title: "좋아하는 Tech 유튜버가 있나요? (lobste.rs)",
        link: "https://lobste.rs/s/krkuc9/who_are_your_favorite_tech_youtubers",
      },
      {
        rank: 7,
        title: "GN⁺: LLM이 결코 할 수 없는 것 (strangeloopcanon.com)",
        link: "https://www.strangeloopcanon.com/p/what-can-llms-never-do",
      },
      {
        rank: 8,
        title: "GN⁺: Rust로 게임 개발을 한 3년 후에 떠나며 (loglog.games)",
        link: "https://loglog.games/blog/leaving-rust-gamedev/",
      },
      {
        rank: 9,
        title:
          "GN⁺: 읽은 내용이 당신을 만든다, 기억하지 못한다 해도 (blog.jim-nielsen.com)",
        link: "https://blog.jim-nielsen.com/2024/you-are-what-you-read/",
      },
      {
        rank: 10,
        title: "프론트엔드 개발자/엔지니어 핸드북 2024 (frontendmasters.com)",
        link: "https://frontendmasters.com/guides/front-end-handbook/2024/",
      },
      {
        rank: 11,
        title:
          "Kamal - 모든 곳에 웹앱을 쉽게 배포하고 관리해주는 도구 (github.com/basecamp)",
        link: "https://github.com/basecamp/kamal",
      },
      {
        rank: 12,
        title:
          "GN⁺: 애플의 폐쇄적 생태계(walled garden) 붕괴 조짐 (theverge.com)",
        link: "https://www.theverge.com/24141929/apple-iphone-imessage-antitrust-dma-lock-in",
      },
      {
        rank: 13,
        title:
          "Pico.sh - 모든 것을 SSH를 이용해서 웹서비스를 관리하는 오픈소스 모음 (github.com/picosh)",
        link: "https://github.com/picosh/pico",
      },
      {
        rank: 14,
        title:
          "하이퍼클로바X, 속도 높이고 비용 낮춘 ‘대시(DASH)’ 모델 출시 (navercloudcorp.com)",
        link: "https://navercloudcorp.com/lang/ko/media/pressrelease/view/index.html?seq=252&contents=pressrelease",
      },
      {
        rank: 15,
        title:
          "Qwen1.5-110B : 알리바바의 오픈소스 LLM Qwen1.5 시리즈의 첫번째 100B+ 모델 (qwenlm.github.io)",
        link: "https://qwenlm.github.io/blog/qwen1.5-110b/",
      },
      {
        rank: 16,
        title: "당신이 기술 코파운더를 찾을 수 없는 이유 (breakneck.dev)",
        link: "https://www.breakneck.dev/blog/no-tech-cofounder",
      },
      {
        rank: 17,
        title:
          "Python을 학습하기에 좋은 고품질 스크립트/작은 라이브러리는? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40085887",
      },
      {
        rank: 18,
        title:
          "Show GN: Corely AI, 유튜브 영상을 10초 만에 핵심 정리해주는 익스텐션 출시 (크롬, 웨일) (chromewebstore.google.com)",
        link: "https://news.hada.io/topic?id=14466",
      },
      {
        rank: 19,
        title: "GN⁺: DOS 4 오픈 소스화 (hanselman.com)",
        link: "https://www.hanselman.com/blog/open-sourcing-dos-4",
      },
      {
        rank: 20,
        title:
          "Show GN: LogTape: 의존성 없는 Node.js/Deno/Bun/브라우저용 로깅 라이브러리 (github.com/dahlia)",
        link: "https://news.hada.io/topic?id=14483",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/dab91a94d5545f597b3233d9d6b562c7dad3229c44b236978447c0e7cab805b7?w=64&f=webp")',
        title: "여깄장학",
        link: "https://disquiet.io/product/%EC%97%AC%EA%B9%84%EC%9E%A5%ED%95%99",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/a7df620425f994ff952006be21bce837d2220dcce0e222897076fc5a1e4e2810?w=64&f=webp")',
        title: "트립플레이트",
        link: "https://disquiet.io/product/%ED%8A%B8%EB%A6%BD%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/a7cedf337191c6af07b2d0e4e6879e26beb999b963c344c1f3d9006e896a6e69?w=64&f=webp")',
        title: "Data Plug",
        link: "https://disquiet.io/product/data-plug-1713926326590",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/db397e06cd6259eb5b3303d40fe89ab9b87289b092fb8395fd200eb0f23af358?w=64&f=webp")',
        title: "반디부디",
        link: "https://disquiet.io/product/%EB%B0%98%EB%94%94%EB%B6%80%EB%94%94",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/21d3924c49d055c4dab5183358489c521938dbdcd7a8a5249b74ef2803e20563?w=64&f=webp")',
        title: "번핏",
        link: "https://disquiet.io/product/%EB%B2%88%ED%95%8F-1714114784884",
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
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
      {
        rank: 4,
        title: "개발자가 실생활에서 실천할 수 있는 스터디 방법 소개 🔑",
        link: "https://careerly.co.kr/comments/102794",
      },
      {
        rank: 5,
        title: "개발자 성장에 대한 영상 정리",
        link: "https://careerly.co.kr/comments/102271",
      },
      {
        rank: 6,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 7,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 8,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 9,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 10,
        title: "📕 서버와 클라이언트의 통신방법 한번에 정리해 드림",
        link: "https://careerly.co.kr/comments/102167",
      },
      {
        rank: 11,
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
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
        title: "퀄리티 높은 REST API 작성하기 🎨",
        link: "https://careerly.co.kr/comments/102068",
      },
      {
        rank: 15,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 16,
        title: "🕊️ [강의] SpringBoot3 마스터하기! 수강 후기",
        link: "https://careerly.co.kr/comments/102241",
      },
      {
        rank: 17,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 18,
        title: "다시 한 번 영어 공부",
        link: "https://careerly.co.kr/comments/102379",
      },
      {
        rank: 19,
        title: "토스: React Native의 미래 💙",
        link: "https://careerly.co.kr/comments/102465",
      },
      {
        rank: 20,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (3)",
        link: "https://careerly.co.kr/comments/102872",
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
        icon: "https://ph-files.imgix.net/3370145f-a105-4bf4-9999-22449df02632.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Truva",
        link: "https://www.producthunt.com/posts/truva",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/abf1c324-acbe-4d74-a5f9-4750d58b6c45.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Wondershare EdrawMax",
        link: "https://www.producthunt.com/posts/wondershare-edrawmax-2",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/ac9fad8d-1e25-496d-b3c1-0e18ab157512.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Notta Showcase",
        link: "https://www.producthunt.com/posts/notta-showcase",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/17418a4f-103b-4873-b420-476b992c46c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "[ai] CrawlSpider Links Builder",
        link: "https://www.producthunt.com/posts/ai-crawlspider-links-builder",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/a3ffdc2e-9ede-48b2-bb42-97ec9048b010.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BrickCenter",
        link: "https://www.producthunt.com/posts/brickcenter",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/76729e8b-2050-4947-bb76-8f6e94cee8e3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "FAQ Generator",
        link: "https://www.producthunt.com/posts/faq-generator",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/a0ace203-6914-4b54-8e0a-5c39293544c8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Boardroom",
        link: "https://www.producthunt.com/posts/boardroom-2",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/d1b8c505-0086-47d6-97b1-7b74bd8b7394.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Payout",
        link: "https://www.producthunt.com/posts/payout",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/d5ea78ca-69cb-483d-b3b5-096ecda0207f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Curiosity Quench",
        link: "https://www.producthunt.com/posts/curiosity-quench",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/2aaf99db-25d7-4b00-9ac2-e0b7ecf20e52.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "quickticks",
        link: "https://www.producthunt.com/posts/quickticks",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/50d1b3ed-9dfb-443c-b3cc-81a485089ba1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Genai",
        link: "https://www.producthunt.com/posts/genai",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/fa89f1d5-97b8-4879-b9e6-15d971d01ae3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CloneMyTrips",
        link: "https://www.producthunt.com/posts/clonemytrips",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/e5d12f9b-b28f-47a1-b9fb-849c0959371a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Invoice Generator",
        link: "https://www.producthunt.com/posts/invoice-generator-9bce3e1b-dab2-4a7a-ba7e-e315be868119",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/2b66b751-4a00-494f-a98b-4fddc0257179.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Dashcam",
        link: "https://www.producthunt.com/posts/dashcam",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Animated Statistics Maker",
        link: "https://www.producthunt.com/posts/animated-statistics-maker",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/3fa5b9f3-8ad8-4266-88c2-2f6b2615ea6a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Usage-based Spaghetti",
        link: "https://www.producthunt.com/posts/usage-based-spaghetti",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/422300fb-57c6-4736-9ef5-f327664d1db2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Supabase",
        link: "https://www.producthunt.com/posts/supabase-b37accde-66c0-4c60-bc5c-2634afa7cfe2",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/15107ab8-daa9-486f-8dbb-00b5829c7f46.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Cal.com Platform",
        link: "https://www.producthunt.com/posts/cal-com-platform",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/9cc4d7a4-a24e-4d0e-8a3f-6afd051b6e19.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Reflex",
        link: "https://www.producthunt.com/posts/reflex-6",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/ff9bd8a4-039d-427a-872e-7e0a5dce27aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SpeedLegal",
        link: "https://www.producthunt.com/posts/speedlegal",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "여러 제휴사와 연동하는 신규 프로젝트 개발기 1편",
        link: "https://tech.kakaopay.com/post/katfun-joy-multiple-biz-partner-01",
      },
      {
        title: "Uber 아키텍처와 시스템 디자인",
        link: "https://blog.imqa.io/uber-architecture-system-design/",
      },
      {
        title: "운영 로그와 디버그 로그 분리하기",
        link: "https://jojoldu.tistory.com/773",
      },
      {
        title:
          "상품데이터 Pipeline을 위한 Debezium MSK Connect | 올리브영 테크블로그",
        link: "https://oliveyoung.tech/blog/2024-03-11/msk-cdc-debezium",
      },
      {
        title: "Spring Boot Actuator로 메모리 이슈 모니터링하기",
        link: "https://pearlluck.tistory.com/801",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "우아한형제들 디자인 시스템에 시각적 회귀 테스트 적용하기",
        link: "https://techblog.woowahan.com/17081",
      },
      {
        title: "2024 프론트엔드 기술스택 이야기",
        link: "https://velog.io/@teo/2024-frontend-techstack",
      },
      {
        title:
          "[React] 리액트 차트 라이브러리 추천 비교 분석 (무료, 유료) 19 + 6 종",
        link: "https://ravenkim97.tistory.com/402",
      },
      {
        title: "Next.js 14.2",
        link: "https://nextjs.org/blog/next-14-2",
      },
      {
        title: "103 Stories To Learn About Saas Startups",
        link: "https://hackernoon.com/103-stories-to-learn-about-saas-startups",
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
