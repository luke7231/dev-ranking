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
        title: "신입 개발자의 한 달",
        link: "https://careerly.co.kr/comments/103929",
      },
      {
        rank: 7,
        title: "코딩하다가 막혔을때 극복하는 5가지 방법",
        link: "https://careerly.co.kr/comments/103985",
      },
      {
        rank: 8,
        title: "비쥬얼 스튜디오 코드에서 Llama 3 실행하기",
        link: "https://careerly.co.kr/comments/103969",
      },
      {
        rank: 9,
        title: "⟪성숙한 사람이 되기 위한 10가지 노력⟫",
        link: "https://careerly.co.kr/comments/103955",
      },
      {
        rank: 10,
        title: "집에서 서버를 운영하는 게 가능한가요?",
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
        title: "XLSTM: Extended Long Short-Term Memory (arxiv.org)",
        link: "https://arxiv.org/abs/2405.04517",
      },
      {
        rank: 2,
        title: "Apple introduces M4 chip (apple.com)",
        link: "https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/",
      },
      {
        rank: 3,
        title: "The C++ Iceberg (fouronnes.github.io)",
        link: "https://fouronnes.github.io/cppiceberg/",
      },
      {
        rank: 4,
        title:
          "U.S. Rules Apple Illegally Interrogated Staff and Confiscated Union Flyers (forbes.com/sites/antoniopequenoiv)",
        link: "https://www.forbes.com/sites/antoniopequenoiv/2024/05/06/us-labor-board-rules-apple-illegally-interrogated-staff-and-confiscated-union-flyers/",
      },
      {
        rank: 5,
        title: "Why use ECC? (2015) (danluu.com)",
        link: "https://danluu.com/why-ecc/",
      },
      {
        rank: 6,
        title:
          "Decker: A reincarnation of HyperCard with 1-bit graphics (beyondloom.com)",
        link: "https://www.beyondloom.com/decker/index.html",
      },
      {
        rank: 7,
        title:
          "Road resurfacing during the daytime without stopping traffic [video] (youtube.com)",
        link: "https://www.youtube.com/watch?v=ymyIEGRw4-U",
      },
      {
        rank: 8,
        title: "Common Google XSS (matan-h.com)",
        link: "https://matan-h.com/common-google-xss",
      },
      {
        rank: 9,
        title:
          "Needle: A DFA Based Regex Library That Compiles to JVM ByteCode (justinblank.com)",
        link: "https://justinblank.com/experiments/needle.html",
      },
      {
        rank: 10,
        title: "Arena-based parsers (iliabylich.github.io)",
        link: "https://iliabylich.github.io/arena-based-parsers/",
      },
      {
        rank: 11,
        title:
          "IBM Granite: A Family of Open Foundation Models for Code Intelligence (github.com/ibm-granite)",
        link: "https://github.com/ibm-granite/granite-code-models",
      },
      {
        rank: 12,
        title:
          "Defense Against AI-Guided Traffic Analysis (Daita) (mullvad.net)",
        link: "https://mullvad.net/en/blog/introducing-defense-against-ai-guided-traffic-analysis-daita",
      },
      {
        rank: 13,
        title:
          "Show HN: Serverless collaborative notion-level note editor using CRDT in GO (github.com/notebox)",
        link: "https://github.com/notebox/nbfm",
      },
      {
        rank: 14,
        title:
          "LPCAMM2 is a modular, repairable, upgradeable memory standard for laptops (ifixit.com)",
        link: "https://www.ifixit.com/News/95078/lpcamm2-memory-is-finally-here",
      },
      {
        rank: 15,
        title: "The Grateful Dead's Wall of Sound (audioacademy.in)",
        link: "https://audioacademy.in/the-grateful-deads-wall-of-sound/",
      },
      {
        rank: 16,
        title: "Object Linking and Embedding (wikipedia.org)",
        link: "https://en.wikipedia.org/wiki/Object_Linking_and_Embedding",
      },
      {
        rank: 17,
        title:
          "Can turning office towers into apartments save downtowns? (newyorker.com)",
        link: "https://www.newyorker.com/magazine/2024/05/06/can-turning-office-towers-into-apartments-save-downtowns",
      },
      {
        rank: 18,
        title: "SecureDrop Protocol (securedrop.org)",
        link: "https://securedrop.org/news/introducing-securedrop-protocol/",
      },
      {
        rank: 19,
        title:
          "Cold brew coffee in 3 minutes using acoustic cavitation (unsw.edu.au)",
        link: "https://www.unsw.edu.au/newsroom/news/2024/05/Ultrasonic_cold_brew_coffee_ready_under_three_minutes",
      },
      {
        rank: 20,
        title:
          "ScrapeGraphAI: Web scraping using LLM and direct graph logic (onrender.com)",
        link: "https://scrapegraph-doc.onrender.com/",
      },
      {
        rank: 21,
        title:
          "Hackers discover how to reprogram NES Tetris from within the game (arstechnica.com)",
        link: "https://arstechnica.com/gaming/2024/05/hackers-discover-how-to-reprogram-nes-tetris-from-within-the-game/",
      },
      {
        rank: 22,
        title: "Gradient descent visualization (github.com/lilipads)",
        link: "https://github.com/lilipads/gradient_descent_viz",
      },
      {
        rank: 23,
        title:
          "Show HN: Convert your Containerfile to a bootable OS (github.com/containers)",
        link: "https://github.com/containers/podman-desktop-extension-bootc",
      },
      {
        rank: 24,
        title:
          "The Antisocial Network: How the 90s Internet Died Like Diaryland (2014) (vice.com)",
        link: "https://www.vice.com/en/article/jp5vdg/the-antisocial-network-how-the-90s-internet-died-like-diaryland",
      },
      {
        rank: 25,
        title:
          "Conical Slicing: A different angle of 3D printing (cnckitchen.com)",
        link: "https://www.cnckitchen.com/blog/conical-slicing-a-different-angle-of-3d-printing",
      },
      {
        rank: 26,
        title: "Pyspread – Pythonic Spreadsheet (pyspread.gitlab.io)",
        link: "https://pyspread.gitlab.io/",
      },
      {
        rank: 27,
        title:
          "Jolie, the service-oriented programming language (jolie-lang.org)",
        link: "https://www.jolie-lang.org/index.html",
      },
      {
        rank: 28,
        title: "Coding interviews are stupid (ish) (darrenkopp.com)",
        link: "https://darrenkopp.com/posts/2024/05/01/coding-interviews-are-stupid",
      },
      {
        rank: 29,
        title:
          "Book people think they know why 9-year-olds stop reading for fun (slate.com)",
        link: "https://slate.com/culture/2024/05/kids-reading-fun-books-decline-by-nine-crisis.html",
      },
      {
        rank: 30,
        title:
          "US Revokes Intel, Qualcomm Licenses to Sell Chips to Huawei (bloomberg.com)",
        link: "https://www.bloomberg.com/news/articles/2024-05-07/us-revokes-intel-qualcomm-licenses-to-sell-chips-to-huawei",
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
        title: "Distribution Is King : 유통이 왕이다 (every.to)",
        link: "https://every.to/napkin-math/distribution-is-king",
      },
      {
        rank: 2,
        title: "Pyspread - 파이썬 스프레드시트 (pyspread.gitlab.io)",
        link: "https://pyspread.gitlab.io/",
      },
      {
        rank: 3,
        title: "GN⁺: PHP는 더 이상 형편없지(Suck) 않아요 (developerjoy.co)",
        link: "https://developerjoy.co/blog/php-doesnt-suck-anymore",
      },
      {
        rank: 4,
        title: "ASCII 3D 렌더러 만들기 (kciter.so)",
        link: "https://kciter.so/posts/ascii-3d-renderer/",
      },
      {
        rank: 5,
        title:
          "GN⁺: 기업들이 GPU에 대한 저렴한 접근을 요구하면서 대체 클라우드가 급성장중 (techcrunch.com)",
        link: "https://techcrunch.com/2024/05/05/coreweaves-1-1b-raise-shows-the-market-for-alternative-clouds-is-booming/",
      },
      {
        rank: 6,
        title:
          "Secret Llama - WebGPU로 구동되는 인브라우저 Llama 3 챗봇 구현체 (github.com/abi)",
        link: "https://github.com/abi/secret-llama",
      },
      {
        rank: 7,
        title:
          "eSpeak NG - 100개 이상의 언어와 악센트를 지원하는 음성 합성기 오픈소스 (github.com/espeak-ng)",
        link: "https://github.com/espeak-ng/espeak-ng",
      },
      {
        rank: 8,
        title:
          "제로부터 시작하는… 월순익 1,000만 원 만드는 슬로우 라이프 하기로 했습니다. 1화 (jianyang.co.kr)",
        link: "https://www.jianyang.co.kr/p/1000-1",
      },
      {
        rank: 9,
        title:
          "Apple, M4칩을 탑재한 신규 iPad Pro 및 Apple Pencil Pro 공개 (apple.com)",
        link: "https://www.apple.com/kr/newsroom/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/",
      },
      {
        rank: 10,
        title: "Apple, M4 칩 공개 (apple.com)",
        link: "https://www.apple.com/kr/newsroom/2024/05/apple-introduces-m4-chip/",
      },
      {
        rank: 11,
        title: "GN⁺: 14일 무료 평가판으로는 충분하지 않아요 (keygen.sh)",
        link: "https://keygen.sh/blog/your-14-day-free-trial-aint-gonna-cut-it/",
      },
      {
        rank: 12,
        title: "GN⁺: 2024년의 Machine Unlearning (ai.stanford.edu)",
        link: "https://ai.stanford.edu/~kzliu/blog/unlearning",
      },
      {
        rank: 13,
        title:
          "Ask HN: 멋져 보이는 스타트업 데모는 어떻게 만드나요? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40231790",
      },
      {
        rank: 14,
        title: "Show GN: 데이터로 확인하는 나의 평판 (pstch.io)",
        link: "https://news.hada.io/topic?id=14678",
      },
      {
        rank: 15,
        title:
          "Convex - 풀스택 앱 개발을 위한 BaaS 오픈소스 (github.com/get-convex)",
        link: "https://github.com/get-convex/convex-backend",
      },
      {
        rank: 16,
        title:
          "llm.c, 이제 멀티GPU 트레이닝을 지원하며 PyTorch보다 ~7% 빠름 (twitter.com/karpathy)",
        link: "https://twitter.com/karpathy/status/1786461447654125625",
      },
      {
        rank: 17,
        title: "GN⁺: JSON Path 사용법 (bump.sh)",
        link: "https://bump.sh/blog/how-to-use-json-path",
      },
      {
        rank: 18,
        title: "GN⁺: Stack Overflow와 OpenAI, 파트너십 체결 (stackoverflow.co)",
        link: "https://stackoverflow.co/company/press/archive/openai-partnership/",
      },
      {
        rank: 19,
        title:
          "GN⁺: BlackHole: macOS용 오디오 루프백 드라이버 (github.com/ExistentialAudio)",
        link: "https://github.com/ExistentialAudio/BlackHole",
      },
      {
        rank: 20,
        title:
          "GN⁺: AI Copilot이 코딩 교육의 패러다임을 변화시키고 있음 (spectrum.ieee.org)",
        link: "https://spectrum.ieee.org/ai-coding",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/4ed0750442816dd5dba753c4adb51cc47115c0889df231ecd45abb72fe8c1598?w=64&f=webp")',
        title: "phase",
        link: "https://disquiet.io/product/phase",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/6417a841ee8c432e6712316f0de23c4cc72e6a13bd5b97122f0642b636046268?w=64&f=webp")',
        title: "Desktop Dday",
        link: "https://disquiet.io/product/desktop-dday-%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4-%EB%94%94%EB%8D%B0%EC%9D%B4-%EC%9C%84%EC%A0%AF",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/27462dac40746aa4c264c15e8cec0b9d398c85f6764893e31e7baae4249ac32f?w=64&f=webp")',
        title: "LookOver",
        link: "https://disquiet.io/product/look-over",
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
        title:
          "서류전형은 통과할만한 신입 or 주니어 경력 개발자 이력서 스타일에 대해",
        link: "https://careerly.co.kr/comments/103412",
      },
      {
        rank: 2,
        title: "회사 테크 블로그 모음 👨🏻‍💻",
        link: "https://careerly.co.kr/comments/103945",
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
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
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
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 9,
        title: "🧨 개발자를 잠 못 들게 만드는 코드",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 10,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 2. 학습 능력 키우기",
        link: "https://careerly.co.kr/comments/102838",
      },
      {
        rank: 11,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 12,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 13,
        title: "📝 메타의 스레드, 모놀리틱 아키텍처 사용",
        link: "https://careerly.co.kr/comments/102928",
      },
      {
        rank: 14,
        title: "🥟 Bun v1.1 출시 소식",
        link: "https://careerly.co.kr/comments/102544",
      },
      {
        rank: 15,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (3)",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 16,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
      {
        rank: 17,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (1)",
        link: "https://careerly.co.kr/comments/102333",
      },
      {
        rank: 18,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (2)",
        link: "https://careerly.co.kr/comments/102481",
      },
      {
        rank: 19,
        title: "작년부터 베타 테스트를 진행하다가",
        link: "https://careerly.co.kr/comments/103463",
      },
      {
        rank: 20,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
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
        icon: "https://ph-files.imgix.net/6ae67f69-d864-40df-9afe-b0bb456e8378.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BeeBetter Habit Tracker",
        link: "https://www.producthunt.com/posts/beebetter-habit-tracker",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/8a099fd9-89a6-4f20-9adb-a3ea682c8432.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "SocialBu 2.0",
        link: "https://www.producthunt.com/posts/socialbu-2-0",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/69c0649b-74e0-4685-b652-2514ef759d60.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "VoiceCheap",
        link: "https://www.producthunt.com/posts/voicecheap",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/0a98f3c5-96e9-4913-b985-c2d646ae7f48.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Abstra Workflows",
        link: "https://www.producthunt.com/posts/abstra-workflows",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/7bd4fada-9cc0-4f0e-a3f6-1b0c269fe04f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sketch 100",
        link: "https://www.producthunt.com/posts/sketch-100-2",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/29e85f9e-472a-4c15-87be-ec45e22ab208.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Datalab",
        link: "https://www.producthunt.com/posts/datalab-2",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/9d1b74a6-4a70-473b-8fd4-60b38bcb80e4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "evo",
        link: "https://www.producthunt.com/posts/evo-2",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/011da410-a03f-4a03-b08f-0df7c1ef775a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AFFiNE AI",
        link: "https://www.producthunt.com/posts/affine-ai",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/6488a68c-6831-41f9-a11f-799776e4c246.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Studio Neiro AI x Adobe Express",
        link: "https://www.producthunt.com/posts/studio-neiro-ai-x-adobe-express",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Guardey",
        link: "https://www.producthunt.com/posts/guardey",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/da69a2e9-67c6-40d1-9962-b3426fa04cd4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Flownote",
        link: "https://www.producthunt.com/posts/flownote-4",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Alpaca Options API",
        link: "https://www.producthunt.com/posts/alpaca-options-api",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Waxwing",
        link: "https://www.producthunt.com/posts/waxwing",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Expressive AI Avatars by Synthesia",
        link: "https://www.producthunt.com/posts/expressive-ai-avatars-by-synthesia",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/3fa5b9f3-8ad8-4266-88c2-2f6b2615ea6a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "My-legacy.ai",
        link: "https://www.producthunt.com/posts/my-legacy-ai",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/9cd4811c-e4b8-4bf4-8e32-e55861231658.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stackradar",
        link: "https://www.producthunt.com/posts/stackradar",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/fc83ba48-f3f9-4b10-8f6f-f185756fda7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Loom AI Workflows",
        link: "https://www.producthunt.com/posts/loom-ai-workflows",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/92bfe57d-a153-4f41-98ab-966732d8fd4c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Supabase",
        link: "https://www.producthunt.com/products/supabase#supabase-b37accde-66c0-4c60-bc5c-2634afa7cfe2",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/8a099fd9-89a6-4f20-9adb-a3ea682c8432.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=30&h=30&fit=crop",
        title: "Cal.com Platform",
        link: "https://www.producthunt.com/products/cal-com#cal-com-platform",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/29e85f9e-472a-4c15-87be-ec45e22ab208.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=30&h=30&fit=crop",
        title: "deco.cx 2.0",
        link: "https://www.producthunt.com/products/deco-cx-2-0#deco-cx-2-0",
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
        title: "이커머스 플랫폼의 주문 DB 마이그레이션 경험기",
        link: "https://techblog.lycorp.co.jp/ko/experience-in-migrating-order-db-on-ecommerce-platform",
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
        title:
          "FE 개발자가 가져야 할 방향성과 이를 위한 프로젝트 경험 소개 (ex. FE 성능 최적화)",
        link: "https://velog.io/@sean2337/FE%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EA%B0%80%EC%A0%B8%EC%95%BC-%ED%95%A0-%EB%B0%A9%ED%96%A5%EC%84%B1%EA%B3%BC-%EC%9D%B4%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B2%BD%ED%97%98-%EC%86%8C%EA%B0%9C-ex.-FE-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94",
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
