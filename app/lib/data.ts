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
        title: "",
        link: "https://careerly.co.kr/comments/103552",
      },
      {
        rank: 7,
        title: "",
        link: "https://careerly.co.kr/comments/103501",
      },
      {
        rank: 8,
        title: "",
        link: "https://careerly.co.kr/comments/103381",
      },
      {
        rank: 9,
        title: "",
        link: "https://careerly.co.kr/comments/103361",
      },
      {
        rank: 10,
        title: "",
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
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
      },
      {
        rank: 8,
        title: "피드백을 통해 성장하는 법 6가지",
        link: "https://yozm.wishket.com/magazine/detail/2526/",
      },
      {
        rank: 9,
        title: "스마트팩토리는 어떻게 설비 데이터를 수집할까?",
        link: "https://yozm.wishket.com/magazine/detail/2522/",
      },
      {
        rank: 10,
        title: "",
        link: "https://yozm.wishket.com/magazine/detail/2521/",
      },
      {
        rank: 11,
        title: "",
        link: "https://yozm.wishket.com/magazine/detail/2519/",
      },
      {
        rank: 12,
        title: "",
        link: "https://yozm.wishket.com/magazine/detail/2518/",
      },
      {
        rank: 13,
        title: "",
        link: "https://yozm.wishket.com/magazine/detail/2517/",
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
        title: "Printing Music with CSS Grid (cruncher.ch)",
        link: "https://cruncher.ch/blog/printing-music-with-css-grid/",
      },
      {
        rank: 2,
        title: "Pyinfra: Automate Infrastructure Using Python (pyinfra.com)",
        link: "https://pyinfra.com/",
      },
      {
        rank: 3,
        title: "The File Filesystem (2021) (mgree.github.io)",
        link: "https://mgree.github.io/ffs/",
      },
      {
        rank: 4,
        title:
          "Level of Gaussians: Real-Time View Synthesis for Millions of Square Meters (zju3dv.github.io)",
        link: "https://zju3dv.github.io/LoG_webpage/",
      },
      {
        rank: 5,
        title:
          "Borgo is a statically typed language that compiles to Go (github.com/borgo-lang)",
        link: "https://github.com/borgo-lang/borgo",
      },
      {
        rank: 6,
        title:
          "Run0, a systemd based alternative to sudo, announced (mastodon.social)",
        link: "https://mastodon.social/@pid_eins/112353324518585654",
      },
      {
        rank: 7,
        title:
          "Show HN: I made a CLI tool to create web extensions with no build configuration (github.com/cezaraugusto)",
        link: "https://github.com/cezaraugusto/extension.js",
      },
      {
        rank: 8,
        title:
          "Alice's adventures in a differentiable wonderland (sscardapane.it)",
        link: "https://www.sscardapane.it/alice-book",
      },
      {
        rank: 9,
        title:
          "Google workers fired for protesting Israeli contract file NLRB complaint (theverge.com)",
        link: "https://www.theverge.com/2024/4/30/24145680/google-workers-fired-project-nimbus-protest-nlrb-complaint",
      },
      {
        rank: 10,
        title: "Arti: A Tor Implementation in Rust (torproject.net)",
        link: "https://tpo.pages.torproject.net/core/arti/",
      },
      {
        rank: 11,
        title: "The IMEI Code: Your phone’s other number (tedium.co)",
        link: "https://tedium.co/2024/04/27/mobile-phone-imei-number-history/",
      },
      {
        rank: 12,
        title:
          "FridgeLock: Preventing Data Theft on Suspended Linux with Memory Encryption (tum.de)",
        link: "https://www.sec.in.tum.de/i20/publications/fridgelock-preventing-data-theft-on-suspended-linux-with-usable-memory-encryption",
      },
      {
        rank: 13,
        title:
          "RankScience (YC W17) is hiring to supercharge SEO for startups (remotejobs.org)",
        link: "https://remotejobs.org/companies/rankscience-remote-jobs",
      },
      {
        rank: 14,
        title: "Show HN: I Built a Java IDE for iPad (apps.apple.com)",
        link: "https://apps.apple.com/de/app/codebrew-ide-for-java/id6475267297?l=en-GB",
      },
      {
        rank: 15,
        title:
          "Rama is a testament to the power of Clojure (redplanetlabs.com)",
        link: "https://blog.redplanetlabs.com/2024/04/30/rama-is-a-testament-to-the-power-of-clojure/",
      },
      {
        rank: 16,
        title: "Pydantic Logfire (pydantic.dev)",
        link: "https://pydantic.dev/logfire",
      },
      {
        rank: 17,
        title:
          "US drug control agency will move to reclassify marijuana (apnews.com)",
        link: "https://apnews.com/article/marijuana-biden-dea-criminal-justice-pot-f833a8dae6ceb31a8658a5d65832a3b8",
      },
      {
        rank: 18,
        title: "Quacker News (quackernews.com)",
        link: "http://quackernews.com/",
      },
      {
        rank: 19,
        title: "Enzymes open new path to universal donor blood (dtu.dk)",
        link: "https://www.dtu.dk/english/newsarchive/2024/04/enzymes-open-new-path-to-universal-donor-blood",
      },
      {
        rank: 20,
        title: "Calendar types in watches (arslan.io)",
        link: "https://arslan.io/2024/04/29/calendar-types-in-watches/",
      },
      {
        rank: 21,
        title: "How ECMO is redefining death (newyorker.com)",
        link: "https://www.newyorker.com/science/annals-of-medicine/how-ecmo-is-redefining-death",
      },
      {
        rank: 22,
        title:
          "Show HN: Polytomic Connect – API for two-way ETL and data syncs with customers",
        link: "https://news.ycombinator.com/item?id=40213570",
      },
      {
        rank: 23,
        title:
          "Xbox 360 marketplace will stop accepting purchases per July 29th (xbox.com)",
        link: "https://support.xbox.com/help/xbox-360/store/xbox-360-marketplace-update",
      },
      {
        rank: 24,
        title: "General Motors Streetcar Conspiracy (wikipedia.org)",
        link: "https://en.wikipedia.org/wiki/General_Motors_streetcar_conspiracy",
      },
      {
        rank: 25,
        title: "Tour of CLIPS (2022) (ryjo.codes)",
        link: "https://ryjo.codes/tour-of-clips.html",
      },
      {
        rank: 26,
        title:
          "Starbucks shares sink 8% as same-store sales fall, quarterly results miss (cnbc.com)",
        link: "https://www.cnbc.com/2024/04/30/starbucks-sbux-earnings-q2-2024.html",
      },
      {
        rank: 27,
        title: "Good enough is good enough (2013) (europython.eu)",
        link: "https://ep2013.europython.eu/conference/talks/good-enough-is-good-enough",
      },
      {
        rank: 28,
        title: "Crash-only software: More than meets the eye (2006) (lwn.net)",
        link: "https://lwn.net/Articles/191059/",
      },
      {
        rank: 29,
        title: "Run llama3 locally with 1M token context (ollama.com)",
        link: "https://ollama.com/library/llama3-gradient",
      },
      {
        rank: 30,
        title:
          "Rabbit R1, a thing that should just be an app, is just an Android app (androidauthority.com)",
        link: "https://www.androidauthority.com/rabbit-r1-is-an-android-app-3438805/",
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
        title: 'GN⁺: "제2의 기회"라는 미신 (ft.pressreader.com)',
        link: "https://ft.pressreader.com/article/282557318242321",
      },
      {
        rank: 2,
        title: "GitHub Copilot Workspace 기술 시험판 공개 (github.blog)",
        link: "https://github.blog/2024-04-29-github-copilot-workspace/",
      },
      {
        rank: 3,
        title:
          "OpenVoice v2 - 다재다능한 인스턴트 음성 복제 (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
      },
      {
        rank: 4,
        title: "기술 문서 번역용 GPT 프롬프트 작성 방법 (insight.infograb.net)",
        link: "https://insight.infograb.net/blog/2024/03/27/gpt-gitlabdocs",
      },
      {
        rank: 5,
        title:
          "2024년 AI 스타트업을 위한 데이터 수집 전략 (press.airstreet.com)",
        link: "https://press.airstreet.com/p/data-acquisition-strategies-for-ai",
      },
      {
        rank: 6,
        title:
          "Show GN: 개발자라면 알고 있으면 좋을 사이트 (dev-ranking.vercel.app)",
        link: "https://news.hada.io/topic?id=14558",
      },
      {
        rank: 7,
        title: "GN⁺: 실수로 아이슬란드 대통령 출마 사태 (uxdesign.cc)",
        link: "https://uxdesign.cc/how-do-you-accidentally-run-for-president-of-iceland-0d71a4785a1e",
      },
      {
        rank: 8,
        title: "GN⁺: LLM이 결코 할 수 없는 것 (strangeloopcanon.com)",
        link: "https://www.strangeloopcanon.com/p/what-can-llms-never-do",
      },
      {
        rank: 9,
        title:
          "GN⁺: Ozempic, 담배ㆍ제과ㆍ주류 산업 위협하는 게임 체인저 (curingaddiction.substack.com)",
        link: "https://curingaddiction.substack.com/p/growing-concerns-that-ozempic-will",
      },
      {
        rank: 10,
        title: "좋아하는 Tech 유튜버가 있나요? (lobste.rs)",
        link: "https://lobste.rs/s/krkuc9/who_are_your_favorite_tech_youtubers",
      },
      {
        rank: 11,
        title:
          "GN⁺: 읽은 내용이 당신을 만든다, 기억하지 못한다 해도 (blog.jim-nielsen.com)",
        link: "https://blog.jim-nielsen.com/2024/you-are-what-you-read/",
      },
      {
        rank: 12,
        title: "Meta Llama 3 발표후, 첫 일주일간 생긴 일 (ai.meta.com)",
        link: "https://ai.meta.com/blog/meta-llama-3-update/",
      },
      {
        rank: 13,
        title:
          "구글이 더 저렴한 인건비를 위해 자체 파이썬 팀을 해고 (reddit.com)",
        link: "https://www.reddit.com/r/cscareerquestions/comments/1cf7kgo/google_just_laid_off_its_entire_python_team/",
      },
      {
        rank: 14,
        title:
          "MSA 환경의 수많은 API 문서 자동으로 통합하기 (techblog.lycorp.co.jp)",
        link: "https://techblog.lycorp.co.jp/ko/api-document-integration-and-documentation-automation?fbclid=IwZXh0bgNhZW0CMTEAAR0nLx9TFzkSXTPOfnps8GvLRxdYX8jwrf9Vqx0R0HrwhFiiVRTlMjIbHUw_aem_Aaep4HI4dEWDyB-j_hUVrKD3vxoZjVMio-fzb3S_bam56zaoQX45HwwJFpvLyCz7T8sIrZjXaxIDqf163EZP8RIa",
      },
      {
        rank: 15,
        title:
          "Ollama v0.1.33 - Llama 3 + Phi 3 + Qwen 110B 지원 (github.com/ollama)",
        link: "https://github.com/ollama/ollama/releases/tag/v0.1.33-rc5",
      },
      {
        rank: 16,
        title: "GN⁺: Rust로 게임 개발을 한 3년 후에 떠나며 (loglog.games)",
        link: "https://loglog.games/blog/leaving-rust-gamedev/",
      },
      {
        rank: 17,
        title: "프론트엔드 개발자/엔지니어 핸드북 2024 (frontendmasters.com)",
        link: "https://frontendmasters.com/guides/front-end-handbook/2024/",
      },
      {
        rank: 18,
        title: "Ubuntu 24.04 Noble Numbat 출시 (releases.ubuntu.com)",
        link: "https://releases.ubuntu.com/noble/",
      },
      {
        rank: 19,
        title: "Mise - 다중언어(Polyglot) 버전 관리자 (mise.jdx.dev)",
        link: "https://mise.jdx.dev/",
      },
      {
        rank: 20,
        title:
          "[2024/04/22 ~ 04/28] 이번 주의 주요 ML 논문 (Top ML Papers of the Week) (discuss.pytorch.kr)",
        link: "https://discuss.pytorch.kr/t/2024-04-22-04-28-ml-top-ml-papers-of-the-week/4237?utm_source=geeknews",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/dab91a94d5545f597b3233d9d6b562c7dad3229c44b236978447c0e7cab805b7?w=64&f=webp")',
        title: "여깄장학",
        link: "https://disquiet.io/product/%EC%97%AC%EA%B9%84%EC%9E%A5%ED%95%99",
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
        title: "지하찰톡",
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
        title: "개발자가 실생활에서 실천할 수 있는 스터디 방법 소개 🔑",
        link: "https://careerly.co.kr/comments/102794",
      },
      {
        rank: 4,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
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
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 8,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 9,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 10,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 11,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 12,
        title: "🥟 Bun v1.1 출시 소식",
        link: "https://careerly.co.kr/comments/102544",
      },
      {
        rank: 13,
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
      },
      {
        rank: 14,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 15,
        title: "📕 서버와 클라이언트의 통신방법 한번에 정리해 드림",
        link: "https://careerly.co.kr/comments/102167",
      },
      {
        rank: 16,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 17,
        title: "🕊️ [강의] SpringBoot3 마스터하기! 수강 후기",
        link: "https://careerly.co.kr/comments/102241",
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
        icon: "https://ph-files.imgix.net/35669f76-9195-40e3-b202-8ebd5e0d4e7a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Microns v2",
        link: "https://www.producthunt.com/posts/microns-v2",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/e6132ffc-4ba0-47b2-9ed8-0653f8a8d5f1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Otterly.ai",
        link: "https://www.producthunt.com/posts/otterly-ai",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/0f96aaec-d178-4b46-a689-2065c977cf7c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Outerbase 2.0",
        link: "https://www.producthunt.com/posts/outerbase-2-0",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/ce65d516-8539-4c8d-9558-ae5bae064fcc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Meeting Recorder for Product Teams",
        link: "https://www.producthunt.com/posts/meeting-recorder-for-product-teams",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/b49048bb-6c9a-43b0-8880-25c4fcb7dfd5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sofa 4.0",
        link: "https://www.producthunt.com/posts/sofa-4-0",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/dda3dbcd-a996-4e47-a1a9-9be58dd2687a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Turnip",
        link: "https://www.producthunt.com/posts/turnip",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/1758ac06-82cc-43a9-8fc6-42956bc8de07.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Survei",
        link: "https://www.producthunt.com/posts/survei",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/8fbd4713-1f51-4cff-9610-f33baaa187aa.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Braudit",
        link: "https://www.producthunt.com/posts/braudit",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/274bccdd-c71a-46c0-a815-8b251f1a58af.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Credible",
        link: "https://www.producthunt.com/posts/credible-3986ea0e-b2b5-4dd8-b910-b949366c3a09",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/e396c412-b7e5-4013-8724-5a4f6120b34a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Linckr",
        link: "https://www.producthunt.com/posts/linckr",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/7b53bee0-6b95-4afa-b968-e94dfc2ad6d4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "VidGenesis",
        link: "https://www.producthunt.com/posts/vidgenesis",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/89b2f0e1-1840-427a-8a52-93635ec25024.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Bigma",
        link: "https://www.producthunt.com/posts/bigma",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/5ccba64d-f300-4d34-a814-d27ccbcd450a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Bright",
        link: "https://www.producthunt.com/posts/bright-60b17cda-fede-4d2f-8759-3f27988db55d",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/da69a2e9-67c6-40d1-9962-b3426fa04cd4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "My-legacy.ai",
        link: "https://www.producthunt.com/posts/my-legacy-ai",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/fc69f8fc-b40d-40a3-a5ed-558d8f41f58f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Play AI",
        link: "https://www.producthunt.com/posts/play-ai",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/fc83ba48-f3f9-4b10-8f6f-f185756fda7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SaaSykit",
        link: "https://www.producthunt.com/posts/saasykit",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/2e8527b5-5d7d-4d47-8348-961c9896c93d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ProfessorAI",
        link: "https://www.producthunt.com/posts/professorai-2",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/d95fa22d-1597-4ebe-8a22-c28fc63be449.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PaddleBoat",
        link: "https://www.producthunt.com/posts/paddleboat",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/c94ed075-ade9-4312-a851-d8ac54319247.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Boom",
        link: "https://www.producthunt.com/posts/boom-6",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/9cc4d7a4-a24e-4d0e-8a3f-6afd051b6e19.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Assista AI",
        link: "https://www.producthunt.com/posts/assista-ai",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "배달의민족에서 금칙어를 관리하는 방법",
        link: "https://techblog.woowahan.com/15764",
      },
      {
        title: "이거 어디까지 올라가는 거예요? - 성능 테스트 환경 구축기",
        link: "https://blog.lemonbase.team/%EB%B0%B1%EC%97%94%EB%93%9C-%EA%B8%B0%EC%88%A0%EA%B3%BC%EC%A0%9C-%EC%84%B1%EB%8A%A5-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95-2f0dfd5ce9c3",
      },
      {
        title: "CDN 서버 구축일지",
        link: "https://marshallku.com/dev/cdn-server-with-rust",
      },
      {
        title: "정규식 함부로 쓰지 말자",
        link: "https://velog.io/@skynet/%EC%A0%95%EA%B7%9C%EC%8B%9D-%ED%95%A8%EB%B6%80%EB%A1%9C-%EC%93%B0%EC%A7%80-%EB%A7%90%EC%9E%90",
      },
      {
        title: "상품데이터 Pipeline을 위한 Debezium MSK Connect",
        link: "https://oliveyoung.tech/blog/2024-03-11/msk-cdc-debezium/",
      },
    ],
  },
  {
    key: "web",
    title: "오늘의 WEB",
    contents: [
      {
        title: "react 공용 컴포넌트 설계하는법(feat.네비게이션바)",
        link: "https://velog.io/@yesbb/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98%EB%B0%94%EB%A5%BC-%EC%84%A4%EA%B3%84%ED%95%98%EB%8A%94-%EB%8D%94-%EB%82%98%EC%9D%80-%EB%B0%A9%EB%B2%95",
      },
      {
        title: "개발 파트 소개 - 2. 웹 프론트엔드 파트",
        link: "https://tech.inflab.com/20240423-fe-part/",
      },
      {
        title: "통합된 개발과 배포 : Monorepo와 GitOps의 매력적인 조합",
        link: "https://saramin.github.io/2024-04-08-monorepo-gitops",
      },
      {
        title: "[웹 성능 최적화] #1 브라우저는 어떻게 렌더링을 할까",
        link: "https://anneslab.tistory.com/",
      },
      {
        title: "Why don’t we talk about minifying CSS anymore?",
        link: "https://blog.sentry.io/why-dont-we-talk-about-minifying-css/",
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
