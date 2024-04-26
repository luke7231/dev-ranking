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
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 2,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 3,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 4,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
      },
      {
        rank: 5,
        title: "프런트엔드의 미래 탐색하기",
        link: "https://careerly.co.kr/comments/103192",
      },
      {
        rank: 6,
        title: "",
        link: "https://careerly.co.kr/comments/103237",
      },
      {
        rank: 7,
        title: "",
        link: "https://careerly.co.kr/comments/103186",
      },
      {
        rank: 8,
        title: "",
        link: "https://careerly.co.kr/comments/103023",
      },
      {
        rank: 9,
        title: "",
        link: "https://careerly.co.kr/comments/103180",
      },
      {
        rank: 10,
        title: "",
        link: "https://careerly.co.kr/comments/103039",
      },
    ],
  },
  {
    key: "hakerNews",
    title: "HakerNews TOP5",
    img: "/y-combinator.png",
    link: "https://news.ycombinator.com/",
    contents: [
      {
        rank: 1,
        title: "Open Sourcing DOS 4 (hanselman.com)",
        link: "https://www.hanselman.com/blog/open-sourcing-dos-4",
      },
      {
        rank: 2,
        title:
          "Radicle is an open source, peer-to-peer code collaboration stack built on Git (radicle.xyz)",
        link: "https://radicle.xyz/",
      },
      {
        rank: 3,
        title: "A BSD person tries Alpine Linux (rubenerd.com)",
        link: "https://rubenerd.com/a-bsd-pserson-trying-alpine-linux/",
      },
      {
        rank: 4,
        title: "OpenVoice: Instant Voice Cloning (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
      },
      {
        rank: 5,
        title:
          "The construction of the mafioso social capital and the Sack of Palermo (2023) (wiley.com)",
        link: "https://onlinelibrary.wiley.com/doi/full/10.1111/issj.12464",
      },
      {
        rank: 6,
        title: "Passkeys: A Shattered Dream (blackhats.net.au)",
        link: "https://fy.blackhats.net.au/blog/2024-04-26-passkeys-a-shattered-dream/",
      },
      {
        rank: 7,
        title: "Launch HN: Nango (YC W23) – Source-available unified API",
        link: "https://news.ycombinator.com/item?id=40158481",
      },
      {
        rank: 8,
        title: "DayLight Computer (in-silo.com)",
        link: "https://in-silo.com/daylight_computer",
      },
      {
        rank: 9,
        title:
          "Stripe de-couples payments from the rest of its stack (techcrunch.com)",
        link: "https://techcrunch.com/2024/04/24/stripe-doubling-down-on-embedded-finance-de-couples-payments-from-the-rest-of-its-stack/",
      },
      {
        rank: 10,
        title:
          "European privacy regulator will stop using its own social media platforms (europa.eu)",
        link: "https://www.edps.europa.eu/press-publications/press-news/press-releases/2024/edps-decentralised-social-media-pilot-end-successful-story_en",
      },
      {
        rank: 11,
        title: "Multiple Displays on a Mac Sucks (wadetregaskis.com)",
        link: "https://wadetregaskis.com/multiple-displays-on-a-mac-sucks/",
      },
      {
        rank: 12,
        title: "Philosophy Is an Art (aeon.co)",
        link: "https://aeon.co/essays/philosophical-theories-are-like-good-stories-margaret-macdonald",
      },
      {
        rank: 13,
        title:
          "Show HN: I made a programmable computer from NAND gates (github.com/arhanchaudhary)",
        link: "https://github.com/ArhanChaudhary/NAND",
      },
      {
        rank: 14,
        title:
          "Patching requests for fun and (concurrent) profit (borrego.dev)",
        link: "https://blog.borrego.dev/entries/patching-requests-for-fun-and-concurrent-profit.html",
      },
      {
        rank: 15,
        title: "No Abstractions: our API design principle (increase.com)",
        link: "https://increase.com/articles/no-abstractions",
      },
      {
        rank: 16,
        title:
          "The dire state of NixOS's moderation culture (github.com/nrdxp)",
        link: "https://github.com/nrdxp/rfc-evidence/blob/master/rfc_evidences_experiences.md",
      },
      {
        rank: 17,
        title: "A Logic Language for Distributed SQL Queries (osohq.com)",
        link: "https://www.osohq.com/post/logic-language-distributed-sql-queries",
      },
      {
        rank: 18,
        title:
          "GQL: A New ISO Standard in Graph Query Language (tigergraph.com)",
        link: "https://www.tigergraph.com/blogs/gsql/the-rise-of-gql-a-new-iso-standard-in-graph-query-language/",
      },
      {
        rank: 19,
        title: "Jeff Lawson buys The Onion (nytimes.com)",
        link: "https://www.nytimes.com/2024/04/25/business/media/the-onion-sold.html",
      },
      {
        rank: 20,
        title: "Discovering an antimalarial drug in Mao's China (asimov.press)",
        link: "https://www.asimov.press/p/antimalarial-drug",
      },
      {
        rank: 21,
        title: "FCC votes to restore net neutrality rules (nytimes.com)",
        link: "https://www.nytimes.com/2024/04/25/technology/fcc-net-neutrality-open-internet.html",
      },
      {
        rank: 22,
        title: "The Optimizations in Erlang/OTP 27 (erlang.org)",
        link: "https://www.erlang.org/blog/optimizations/",
      },
      {
        rank: 23,
        title: "Don’t bleed on the artwork (oxfordamerican.org)",
        link: "https://oxfordamerican.org/magazine/issue-124-spring-2024/don-t-bleed-on-the-artwork-notes-from-the-afterlife",
      },
      {
        rank: 24,
        title:
          "Judge acquits Backpage co-founder Michael Lacey on most counts (reason.com)",
        link: "https://reason.com/2024/04/25/judge-acquits-backpage-co-founder-michael-lacey-on-most-counts/",
      },
      {
        rank: 25,
        title:
          "How Penelope Fitzgerald became a late blooming novelist (commonreader.co.uk)",
        link: "https://www.commonreader.co.uk/p/how-penelope-fitzgerald-became-a",
      },
      {
        rank: 26,
        title: "Visualizing malicious IP addresses (romeov.github.io)",
        link: "https://romeov.github.io/malicious_ip_addresses/malicious_ip_analysis.html",
      },
      {
        rank: 27,
        title:
          "Apple releases eight small AI language models aimed at on-device use (arstechnica.com)",
        link: "https://arstechnica.com/information-technology/2024/04/apple-releases-eight-small-ai-language-models-aimed-at-on-device-use/",
      },
      {
        rank: 28,
        title:
          "Tribler: An attack-resilient micro-economy for media (github.com/tribler)",
        link: "https://github.com/Tribler/tribler/wiki",
      },
      {
        rank: 29,
        title:
          "Tesorio (YC S15) Is Hiring a Head of Cloud Infrastructure/Operations (Remote) (tesorio.com)",
        link: "https://www.tesorio.com/careers#job-openings",
      },
      {
        rank: 30,
        title:
          "Tor: From the Dark Web to the Future of Privacy (direct.mit.edu)",
        link: "https://direct.mit.edu/books/oa-monograph/5761/TorFrom-the-Dark-Web-to-the-Future-of-Privacy",
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
        title: "좋아하는 Tech 유튜버가 있나요? (lobste.rs)",
        link: "https://lobste.rs/s/krkuc9/who_are_your_favorite_tech_youtubers",
      },
      {
        rank: 2,
        title:
          "GN⁺: 읽은 내용이 당신을 만든다, 기억하지 못한다 해도 (blog.jim-nielsen.com)",
        link: "https://blog.jim-nielsen.com/2024/you-are-what-you-read/",
      },
      {
        rank: 3,
        title: "프론트엔드 개발자/엔지니어 핸드북 2024 (frontendmasters.com)",
        link: "https://frontendmasters.com/guides/front-end-handbook/2024/",
      },
      {
        rank: 4,
        title:
          "Pico.sh - 모든 것을 SSH를 이용해서 웹서비스를 관리하는 오픈소스 모음 (github.com/picosh)",
        link: "https://github.com/picosh/pico",
      },
      {
        rank: 5,
        title:
          "JSR은 또 다른 패키지 관리자가 아닌 새로운 도구입니다 (deno.com)",
        link: "https://deno.com/blog/jsr-is-not-another-package-manager",
      },
      {
        rank: 6,
        title:
          "Unsloth : Finetune Llama 3 with 2x 빠르고 6x 긴 Context, 68% 적은 VRAM (unsloth.ai)",
        link: "https://www.unsloth.ai/blog/llama3",
      },
      {
        rank: 7,
        title:
          "Jina AI Reader - URL을 LLM 친화적인 입력으로 바꿔주는 도구 (github.com/jina-ai)",
        link: "https://github.com/jina-ai/reader",
      },
      {
        rank: 8,
        title: "React 19 Beta (react.dev)",
        link: "https://react.dev/blog/2024/04/25/react-19",
      },
      {
        rank: 9,
        title:
          "Show GN: LogTape: 의존성 없는 Node.js/Deno/Bun/브라우저용 로깅 라이브러리 (github.com/dahlia)",
        link: "https://news.hada.io/topic?id=14483",
      },
      {
        rank: 10,
        title:
          "Show GN: Corely AI, 유튜브 영상을 10초 만에 핵심 정리해주는 익스텐션 출시 (크롬, 웨일) (chromewebstore.google.com)",
        link: "https://news.hada.io/topic?id=14466",
      },
      {
        rank: 11,
        title: "당신이 기술 코파운더를 찾을 수 없는 이유 (breakneck.dev)",
        link: "https://www.breakneck.dev/blog/no-tech-cofounder",
      },
      {
        rank: 12,
        title:
          "GN⁺: IBM, HashiCorp 인수 계약 체결, 인수가 64억 달러 (newsroom.ibm.com)",
        link: "https://newsroom.ibm.com/2024-04-24-IBM-to-Acquire-HashiCorp-Inc-Creating-a-Comprehensive-End-to-End-Hybrid-Cloud-Platform",
      },
      {
        rank: 13,
        title:
          "Python을 학습하기에 좋은 고품질 스크립트/작은 라이브러리는? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40085887",
      },
      {
        rank: 14,
        title:
          "xrem - 데스크탑에서 일어난 모든 일을 기록하고 검색하게 해주는 오픈소스 (github.com/jasonjmcghee)",
        link: "https://github.com/jasonjmcghee/xrem",
      },
      {
        rank: 15,
        title:
          "MuPDF.js - WASM을 이용한 브라우저/Node.js용 PDF 뷰어 (github.com/ArtifexSoftware)",
        link: "https://github.com/ArtifexSoftware/mupdf.js",
      },
      {
        rank: 16,
        title: "프론트엔드 개발자가 알아야 할 숫자들 (vercel.com)",
        link: "https://vercel.com/blog/latency-numbers-every-web-developer-should-know",
      },
      {
        rank: 17,
        title: "GN⁺: LLM 기술의 금융 시장 활용 (thegradient.pub)",
        link: "https://thegradient.pub/financial-market-applications-of-llms/",
      },
      {
        rank: 18,
        title: "GN⁺: 구글 검색을 죽인 남자 (wheresyoured.at)",
        link: "https://www.wheresyoured.at/the-men-who-killed-google/",
      },
      {
        rank: 19,
        title:
          "GN⁺: Apple의 CarPlay에 대한 위험한 도박 (theturnsignalblog.com)",
        link: "https://www.theturnsignalblog.com/apples-risky-bet-on-carplay/",
      },
      {
        rank: 20,
        title: "py2wasm - Python to WASM 컴파일러 공개 (wasmer.io)",
        link: "https://wasmer.io/posts/py2wasm-a-python-to-wasm-compiler",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/a7cedf337191c6af07b2d0e4e6879e26beb999b963c344c1f3d9006e896a6e69?w=64&f=webp")',
        title: "Data Plug",
        link: "https://disquiet.io/product/data-plug-1713926326590",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/f715463c177e2435e0af8e610c073796dd6cbe28818fc84909cfefc7a459a63b?w=64&f=webp")',
        title: "해치하이커",
        link: "https://disquiet.io/product/%ED%95%B4%EC%B9%98%ED%95%98%EC%9D%B4%EC%BB%A4",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/72155bdb0a7dde75f50ebead9050df44228f024b7f0679277830901069736ad8?w=64&f=webp")',
        title: "Companion Card Kit",
        link: "https://disquiet.io/product/companion-card-kit",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/2eba91d7cda3964b1ae0cb03f0ec9c2850e4b0d80c722514cd17c9d34b88d738?w=64&f=webp")',
        title: "GATCH",
        link: "https://disquiet.io/product/gatch",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/8e9080eba0b0cf1af7456869d523d1ea6653a9cc2ffbff24ca4d9d849ec71d4c?w=64&f=webp")',
        title: "typeodd 불안보다 빠르게 타자연습",
        link: "https://disquiet.io/product/typeodd-%EB%B6%88%EC%95%88%EB%B3%B4%EB%8B%A4-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%ED%83%80%EC%9E%90%EC%97%B0%EC%8A%B5",
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
        title: "아파치 톰캣 내부구조",
        link: "https://careerly.co.kr/comments/101977",
      },
      {
        rank: 4,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
      {
        rank: 5,
        title: "개발자가 실생활에서 실천할 수 있는 스터디 방법 소개 🔑",
        link: "https://careerly.co.kr/comments/102794",
      },
      {
        rank: 6,
        title: "개발자 성장에 대한 영상 정리",
        link: "https://careerly.co.kr/comments/102271",
      },
      {
        rank: 7,
        title: "🕊️ Kafka vs. RabbitMQ: 알맞은 메시지 브로커 찾기",
        link: "https://careerly.co.kr/comments/101903",
      },
      {
        rank: 8,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 9,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 10,
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
      },
      {
        rank: 11,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 12,
        title: "퀄리티 높은 REST API 작성하기 🎨",
        link: "https://careerly.co.kr/comments/102068",
      },
      {
        rank: 13,
        title: "📕 서버와 클라이언트의 통신방법 한번에 정리해 드림",
        link: "https://careerly.co.kr/comments/102167",
      },
      {
        rank: 14,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 15,
        title: "🥟 Bun v1.1 출시 소식",
        link: "https://careerly.co.kr/comments/102544",
      },
      {
        rank: 16,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 17,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 18,
        title: "🕊️ [강의] SpringBoot3 마스터하기! 수강 후기",
        link: "https://careerly.co.kr/comments/102241",
      },
      {
        rank: 19,
        title: "다시 한 번 영어 공부",
        link: "https://careerly.co.kr/comments/102379",
      },
      {
        rank: 20,
        title: "토스: React Native의 미래 💙",
        link: "https://careerly.co.kr/comments/102465",
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
        icon: "https://ph-files.imgix.net/f603620e-ed7b-4536-91dd-e6e889f41de5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Gems",
        link: "https://www.producthunt.com/posts/gems-3",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/e5fe3cce-366c-4e5f-984f-4938e6a4761f.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Zombie.io: Potato Shooting",
        link: "https://www.producthunt.com/posts/zombie-io-potato-shooting",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/655ea894-6fe1-4ff9-8c4d-c44b6241d7e9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Moodset",
        link: "https://www.producthunt.com/posts/moodset",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/a45bcf68-3e88-4c3c-95b5-2b856fdb16d1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Langfuse 2.0",
        link: "https://www.producthunt.com/posts/langfuse-2-0",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/911f1f91-2536-4db4-962f-c4bef095227e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ALIagents.ai",
        link: "https://www.producthunt.com/posts/aliagents-ai",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/a172caf6-c248-43b5-8aa6-74ddc6bf8e5f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hyra",
        link: "https://www.producthunt.com/posts/hyra",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/91d610e5-b432-473e-ad92-bd1288d2d5bd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CopyCopter",
        link: "https://www.producthunt.com/posts/copycopter",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/366f94d3-2548-4d0f-a1c7-fcce5326a8b4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Resume Photo AI",
        link: "https://www.producthunt.com/posts/resume-photo-ai",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/6ba7a9b8-49e4-4e5b-ba39-bdb86919a933.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Deepwander",
        link: "https://www.producthunt.com/posts/deepwander",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/d0974721-8b14-48f9-a56c-b6915ba0f92c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Blog Articles",
        link: "https://www.producthunt.com/posts/ai-blog-articles",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/d5d8a9b0-a000-4300-bbfa-fe16576e173f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Meeting Muse by beams",
        link: "https://www.producthunt.com/posts/meeting-muse-by-beams",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/f93aa00c-1d9c-4113-8844-43ce506bf8f4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "emojitell",
        link: "https://www.producthunt.com/posts/emojitell",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/5ac0732d-8afc-4444-9e57-6f34ebd51c8b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Highlights",
        link: "https://www.producthunt.com/posts/highlights-fa915501-9da2-49ca-8d10-e6391f1c7c4c",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/11fd45a3-ea22-4ca3-8ca4-0e56a1c45593.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Fillout Scheduling",
        link: "https://www.producthunt.com/posts/fillout-scheduling",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/fc83ba48-f3f9-4b10-8f6f-f185756fda7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PaddleBoat",
        link: "https://www.producthunt.com/posts/paddleboat",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/2e8527b5-5d7d-4d47-8348-961c9896c93d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Assista AI",
        link: "https://www.producthunt.com/posts/assista-ai",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/a7b84e05-af2b-4725-9bf8-00aa6355e449.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BePresent",
        link: "https://www.producthunt.com/posts/bepresent",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/ca63d958-71de-4a1f-aac9-54c475d86fb8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Langtail Public Beta",
        link: "https://www.producthunt.com/posts/langtail-public-beta",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/4098834b-39f4-4439-9d5d-ca09141f04f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Clips by Exemplary",
        link: "https://www.producthunt.com/posts/ai-clips-by-exemplary",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Supabase",
        link: "https://www.producthunt.com/posts/supabase-b37accde-66c0-4c60-bc5c-2634afa7cfe2",
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
