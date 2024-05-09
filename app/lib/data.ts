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
        title: "회사 테크 블로그 모음 👨🏻‍💻",
        link: "https://careerly.co.kr/comments/103945",
      },
      {
        rank: 2,
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 3,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 4,
        title: "성장의 이유",
        link: "https://careerly.co.kr/comments/103875",
      },
      {
        rank: 5,
        title: "React 19 베타 출시: Actions의 도입과 새로운 비동기",
        link: "https://careerly.co.kr/comments/103907",
      },
      {
        rank: 6,
        title: "",
        link: "https://careerly.co.kr/comments/103929",
      },
      {
        rank: 7,
        title: "",
        link: "https://careerly.co.kr/comments/103985",
      },
      {
        rank: 8,
        title: "",
        link: "https://careerly.co.kr/comments/103969",
      },
      {
        rank: 9,
        title: "",
        link: "https://careerly.co.kr/comments/103955",
      },
      {
        rank: 10,
        title: "",
        link: "https://careerly.co.kr/comments/103919",
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
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 2,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 3,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 4,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 5,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 6,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 7,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 8,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 9,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 10,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 11,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
      },
      {
        rank: 12,
        title: "피드백을 통해 성장하는 법 6가지",
        link: "https://yozm.wishket.com/magazine/detail/2526/",
      },
      {
        rank: 13,
        title: "스마트팩토리는 어떻게 설비 데이터를 수집할까?",
        link: "https://yozm.wishket.com/magazine/detail/2522/",
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
          "AlphaFold 3 predicts the structure and interactions of life's molecules (blog.google)",
        link: "https://blog.google/technology/ai/google-deepmind-isomorphic-alphafold-3-ai-model/",
      },
      {
        rank: 2,
        title:
          "Consistency LLM: converting LLMs to parallel decoders accelerates inference 3.5x (hao-ai-lab.github.io)",
        link: "https://hao-ai-lab.github.io/blogs/cllm/",
      },
      {
        rank: 3,
        title:
          "A look inside illegal drone deliveries at B.C.'s prisons (vancouverisawesome.com)",
        link: "https://www.vancouverisawesome.com/highlights/watch-a-look-inside-illegal-drone-deliveries-at-bcs-prisons-8706734",
      },
      {
        rank: 4,
        title:
          "Opening Windows in Linux with sockets, bare hands and 200 lines of C (hereket.com)",
        link: "https://hereket.com/posts/from-scratch-x11-windowing/",
      },
      {
        rank: 5,
        title:
          "The Time I Lied to the CTO and Saved the Day (grumpyolddev.com)",
        link: "https://grumpyolddev.com/post/the-one-where-i-lie-to-the-cto/",
      },
      {
        rank: 6,
        title:
          'Industrial Design Student Work: "How Long Should Objects Last?" (core77.com)',
        link: "https://www.core77.com/posts/132088/Fantastic-Industrial-Design-Student-Work-How-Long-Should-Objects-Last",
      },
      {
        rank: 7,
        title: 'Development Notes from xkcd\'s "Machine" (chromakode.com)',
        link: "https://chromakode.com/post/xkcd-machine/",
      },
      {
        rank: 8,
        title:
          "How to Use the Foreign Function API in Java 22 to Call C Libraries (ifesunmola.com)",
        link: "https://ifesunmola.com/how-to-use-the-foreign-function-api-in-java-22-to-call-c-libraries/",
      },
      {
        rank: 9,
        title:
          "TimesFM: Time Series Foundation Model for time-series forecasting (github.com/google-research)",
        link: "https://github.com/google-research/timesfm",
      },
      {
        rank: 10,
        title:
          "Breathwork supports emergence of altered states of consciousness (researchsquare.com)",
        link: "https://www.researchsquare.com/article/rs-3976380/v1",
      },
      {
        rank: 11,
        title:
          "Show HN: AI climbing coach – visualize how to climb any route based on your body (climbing.ai)",
        link: "https://climbing.ai/",
      },
      {
        rank: 12,
        title: "Show HN: I built a non-linear UI for ChatGPT (grafychat.com)",
        link: "https://www.grafychat.com/",
      },
      {
        rank: 13,
        title:
          "Shell sold carbon credits for carbon that was never captured (cbc.ca)",
        link: "https://www.cbc.ca/news/climate/shell-greenpeace-quest-1.7196792",
      },
      {
        rank: 14,
        title: "Radius Full Page Display (32by32.com)",
        link: "https://32by32.com/radius-full-page-display/",
      },
      {
        rank: 15,
        title:
          "Show HN: SimBricks – Modular Full-System Simulation for HW-SW Systems (simbricks.github.io)",
        link: "https://simbricks.github.io/",
      },
      {
        rank: 16,
        title:
          "Stack Overflow users deleting answers after OpenAI partnership (build5nines.com)",
        link: "https://build5nines.com/stack-overflow-upset-over-users-deleting-answers-after-openai-partnership/",
      },
      {
        rank: 17,
        title: "Securing Git Repositories with Gittuf (lwn.net)",
        link: "https://lwn.net/SubscriberLink/972467/595a68b99f57a87d/",
      },
      {
        rank: 18,
        title: "The Waning Reign of the Muskrat (hakaimagazine.com)",
        link: "https://hakaimagazine.com/features/the-magnificent-lives-and-quiet-loss-of-muskrats/",
      },
      {
        rank: 19,
        title: "Temporal Fuzzing I: Memory Models (2021) (reitzen.com)",
        link: "https://www.reitzen.com/post/temporal-fuzzing-01/",
      },
      {
        rank: 20,
        title:
          "Pulley system composition – a systematic approach (2020) (kiipeilytuomas.fi)",
        link: "https://www.kiipeilytuomas.fi/articles-in-english/pulley-system-composition-a-systematic-approach/",
      },
      {
        rank: 21,
        title:
          "Empirical Health (YC S23) is hiring engineering leads in NYC (ycombinator.com)",
        link: "https://www.ycombinator.com/companies/empirical-health/jobs/1PW3OFe-engineering-lead",
      },
      {
        rank: 22,
        title:
          "Launch HN: Baselit (YC W23) – Automatically Reduce Snowflake Costs",
        link: "https://news.ycombinator.com/item?id=40299556",
      },
      {
        rank: 23,
        title: "Brain Worms: A Scientific Inquiry (theatlantic.com)",
        link: "https://www.theatlantic.com/health/archive/2024/05/robert-kennedy-brain-worms-neurocysticercosis/678331/",
      },
      {
        rank: 24,
        title:
          "Japanese Trade Publications Helped Japan Form a New Graphic Identity (2023) (collectorsweekly.com)",
        link: "https://www.collectorsweekly.com/articles/how-a-rare-set-of-japanese-trade-publications-helped-japan-form-a-new-graphic-identity/",
      },
      {
        rank: 25,
        title: "Using AirPods as a Morse Transmitter (github.com/etherdream)",
        link: "https://github.com/EtherDream/headphone-morse-transmitter",
      },
      {
        rank: 26,
        title:
          "Zimtohrli: A New Psychoacoustic Perceptual Metric for Audio Compression (github.com/google)",
        link: "https://github.com/google/zimtohrli",
      },
      {
        rank: 27,
        title:
          "Adumbra: A lightweight Java library for bitmap steganography (github.com/galliumdata)",
        link: "https://github.com/galliumdata/adumbra",
      },
      {
        rank: 28,
        title: "Steve Albini has died (pitchfork.com)",
        link: "https://pitchfork.com/news/steve-albini-storied-producer-and-icon-of-the-rock-underground-dies-at-61/",
      },
      {
        rank: 29,
        title:
          "'Underwater bicycle' propels swimmers forward at superhuman speed (newatlas.com)",
        link: "https://newatlas.com/marine/seabike-swimming-propeller/",
      },
      {
        rank: 30,
        title: "OpenAI: Model Spec (openai.com)",
        link: "https://openai.com/index/introducing-the-model-spec",
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
        title: "Can I Webview - 웹뷰를 위한 Can I Use (caniwebview.com)",
        link: "https://caniwebview.com/",
      },
      {
        rank: 2,
        title: "APPLE의 M4칩 공개, 이제 시작되었다 (youtube.com)",
        link: "https://www.youtube.com/watch?v=TsKHjFeonRE",
      },
      {
        rank: 3,
        title:
          "xmake - Lua 기반 크로스플랫폼 빌드 유틸리티 (github.com/xmake-io)",
        link: "https://github.com/xmake-io/xmake",
      },
      {
        rank: 4,
        title:
          "GN⁺: AlphaFold 3, 생명체 분자 구조 및 상호작용 예측 기술 (blog.google)",
        link: "https://blog.google/technology/ai/google-deepmind-isomorphic-alphafold-3-ai-model/",
      },
      {
        rank: 5,
        title:
          "Show GN: JavaScript에서 한글을 다루는 현대적인 라이브러리 (github.com/toss)",
        link: "https://news.hada.io/topic?id=14731",
      },
      {
        rank: 6,
        title:
          "TSDB를 활용하여 실시간 FFT(고속 푸리에 변환) 수행 사례 (machbase.com)",
        link: "https://www.machbase.com/post/machbase-neo-tsdb-fft-analytics",
      },
      {
        rank: 7,
        title: "구글 CEO Sundar Pichai가 말하는 AI의 미래 (youtube.com)",
        link: "https://www.youtube.com/watch?v=5puu3kN9l7c",
      },
      {
        rank: 8,
        title:
          "Peerdb Streams - 심플한 Postgres CDC(Change Data Capture) (blog.peerdb.io)",
        link: "https://blog.peerdb.io/peerdb-streams-simple-native-postgres-change-data-capture",
      },
      {
        rank: 9,
        title: "Distribution Is King : 유통이 왕이다 (every.to)",
        link: "https://every.to/napkin-math/distribution-is-king",
      },
      {
        rank: 10,
        title: "Pyspread - 파이썬 스프레드시트 (pyspread.gitlab.io)",
        link: "https://pyspread.gitlab.io/",
      },
      {
        rank: 11,
        title:
          "Show GN: 오픈 소스 데이터 익명화 및 Postgres 및 Mysql을 위한 합성 데이터 (github.com/nucleuscloud)",
        link: "https://news.hada.io/topic?id=14711",
      },
      {
        rank: 12,
        title: "ASCII 3D 렌더러 만들기 (kciter.so)",
        link: "https://kciter.so/posts/ascii-3d-renderer/",
      },
      {
        rank: 13,
        title: "GN⁺: PHP는 더 이상 형편없지(Suck) 않아요 (developerjoy.co)",
        link: "https://developerjoy.co/blog/php-doesnt-suck-anymore",
      },
      {
        rank: 14,
        title:
          "Secret Llama - WebGPU로 구동되는 인브라우저 Llama 3 챗봇 구현체 (github.com/abi)",
        link: "https://github.com/abi/secret-llama",
      },
      {
        rank: 15,
        title: "GN⁺: 14일 무료 평가판으로는 충분하지 않아요 (keygen.sh)",
        link: "https://keygen.sh/blog/your-14-day-free-trial-aint-gonna-cut-it/",
      },
      {
        rank: 16,
        title:
          "eSpeak NG - 100개 이상의 언어와 악센트를 지원하는 음성 합성기 오픈소스 (github.com/espeak-ng)",
        link: "https://github.com/espeak-ng/espeak-ng",
      },
      {
        rank: 17,
        title:
          "GN⁺: 기업들이 GPU에 대한 저렴한 접근을 요구하면서 대체 클라우드가 급성장중 (techcrunch.com)",
        link: "https://techcrunch.com/2024/05/05/coreweaves-1-1b-raise-shows-the-market-for-alternative-clouds-is-booming/",
      },
      {
        rank: 18,
        title: "Apple, M4 칩 공개 (apple.com)",
        link: "https://www.apple.com/kr/newsroom/2024/05/apple-introduces-m4-chip/",
      },
      {
        rank: 19,
        title: "GN⁺: 2024년의 Machine Unlearning (ai.stanford.edu)",
        link: "https://ai.stanford.edu/~kzliu/blog/unlearning",
      },
      {
        rank: 20,
        title:
          "Ask HN: 멋져 보이는 스타트업 데모는 어떻게 만드나요? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40231790",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/cef95b3ec13d5f9e11238b9d2345baff523eb754fdde395f38beacb8070228f6?w=64&f=webp")',
        title: "유아이볼",
        link: "https://disquiet.io/product/%EC%9C%A0%EC%95%84%EC%9D%B4%EB%B3%BC",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/4aef5e76c97f5ec74b1d038ecffddffd77090fb2e8f7785595661fc3d529bc15?w=64&f=webp")',
        title: "COFFEE DB",
        link: "https://disquiet.io/product/coffee-db",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/6417a841ee8c432e6712316f0de23c4cc72e6a13bd5b97122f0642b636046268?w=64&f=webp")',
        title: "Desktop Dday",
        link: "https://disquiet.io/product/desktop-dday-%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4-%EB%94%94%EB%8D%B0%EC%9D%B4-%EC%9C%84%EC%A0%AF",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/4ed0750442816dd5dba753c4adb51cc47115c0889df231ecd45abb72fe8c1598?w=64&f=webp")',
        title: "phase",
        link: "https://disquiet.io/product/phase",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/3310ef149fe96ea3296884449592d888477d84c88cfc1379d80af8d5471b742b?w=64&f=webp")',
        title: "비어챗",
        link: "https://disquiet.io/product/%EB%B9%84%EC%96%B4%EC%B1%97",
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
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 5,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
      {
        rank: 6,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 7,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 8,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },

      {
        rank: 9,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 10,
        title: "🧨 개발자를 잠 못 들게 만드는 코드",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 11,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 12,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 13,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 14,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 15,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },

      {
        rank: 16,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (3)",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 17,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
      {
        rank: 18,
        title: "작년부터 베타 테스트를 진행하다가",
        link: "https://careerly.co.kr/comments/103463",
      },
      {
        rank: 19,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
      },
      {
        rank: 20,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 5. 태스크 완료 시간 추정",
        link: "https://careerly.co.kr/comments/103676",
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
        icon: "https://ph-files.imgix.net/8a099fd9-89a6-4f20-9adb-a3ea682c8432.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SocialBu 2.0",
        link: "https://www.producthunt.com/posts/socialbu-2-0",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/d2fc56c2-36cc-43f5-a52c-9c9b14fb5e43.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Dreamdata Audience Hub",
        link: "https://www.producthunt.com/posts/dreamdata-audience-hub",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/eaaeec42-9cab-4420-9c25-260e98bfb781.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Abstra Workflows",
        link: "https://www.producthunt.com/posts/abstra-workflows",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/0a98f3c5-96e9-4913-b985-c2d646ae7f48.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CapUp",
        link: "https://www.producthunt.com/posts/capup",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/7bd4fada-9cc0-4f0e-a3f6-1b0c269fe04f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ringly.io",
        link: "https://www.producthunt.com/posts/ringly-io",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/29e85f9e-472a-4c15-87be-ec45e22ab208.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sketch 100",
        link: "https://www.producthunt.com/posts/sketch-100-2",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/403dcc2f-6c4a-488a-8e92-ed7f8a9b1a02.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "DataLab",
        link: "https://www.producthunt.com/posts/datalab-3",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/69c0649b-74e0-4685-b652-2514ef759d60.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "evo",
        link: "https://www.producthunt.com/posts/evo-2",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/6ae67f69-d864-40df-9afe-b0bb456e8378.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "The New iPad Pro",
        link: "https://www.producthunt.com/posts/the-new-ipad-pro-3",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/05bd8f68-d7ce-4a49-9277-7455fd77460b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "VoiceCheap",
        link: "https://www.producthunt.com/posts/voicecheap",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/72463a7b-16da-410f-a0ae-293ffe2f19a6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BeeBetter",
        link: "https://www.producthunt.com/posts/beebetter",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/39ee0bdd-8ab5-4e6f-a14d-a221897fbf7e.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Apple Pencil Pro",
        link: "https://www.producthunt.com/posts/apple-pencil-pro",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/bea9658a-b08c-4daf-ba90-880b81da9d82.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Diseed",
        link: "https://www.producthunt.com/posts/diseed",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/9d1b74a6-4a70-473b-8fd4-60b38bcb80e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "iPad Air",
        link: "https://www.producthunt.com/posts/ipad-air-cfa54b3e-b6f6-49e3-9f57-90ea0a51da49",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/011da410-a03f-4a03-b08f-0df7c1ef775a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "LaunchBrightly",
        link: "https://www.producthunt.com/posts/launchbrightly",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/6488a68c-6831-41f9-a11f-799776e4c246.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AFFiNE AI",
        link: "https://www.producthunt.com/posts/affine-ai",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Studio Neiro AI x Adobe Express",
        link: "https://www.producthunt.com/posts/studio-neiro-ai-x-adobe-express",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/da69a2e9-67c6-40d1-9962-b3426fa04cd4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Guardey",
        link: "https://www.producthunt.com/posts/guardey",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Flownote",
        link: "https://www.producthunt.com/posts/flownote-4",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Alpaca Options API",
        link: "https://www.producthunt.com/posts/alpaca-options-api",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "레디스(Redis) 이슈로 보는 오픈소스 논쟁",
        link: "https://www.inflearn.com/pages/infmation-67-20240409",
      },
      {
        title: "최저가 항공 요금 수집을 위한 데이터 파이프라인 개발기",
        link: "https://squarelab.co/blog/how-to-build-flight-fare-data-pipeline-with-argo/",
      },
      {
        title: "TypeScript를 향한 Figma의 여정",
        link: "https://www.figma.com/blog/figmas-journey-to-typescript-compiling-away-our-custom-programming-language/",
      },
      {
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://www.integer.blog/evolution-of-java-usage-at-netflix",
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
        title: "개발자를 위한 '디자인 불패'의 법칙",
        link: "https://velog.io/@kyleryu/%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B6%88%ED%8C%A8%EC%9D%98-%EB%B2%95%EC%B9%99",
      },
      {
        title:
          "고위 개발자를 위한 10가지 고급 React 성능 최적화 기술 - Java Code Geeks",
        link: "https://www.javacodegeeks.com/2024/04/10-advanced-react-performance-optimization-techniques-for-senior-devs.html",
      },
      {
        title: "[실무용] TypeScript 10가지만 알면 됨",
        link: "https://velog.io/@nanotoly/TypeScript-10-point",
      },
      {
        title: "통합된 개발과 배포 : Monorepo와 GitOps의 매력적인 조합",
        link: "https://saramin.github.io/2024-04-08-monorepo-gitops/",
      },
      {
        title: "React의 유형 이해하기: Ref 유형",
        link: "https://dev.to/itswillt/demystifying-reacts-types-ref-types-28fj",
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
