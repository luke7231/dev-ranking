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
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 2,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 3,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 4,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 5,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 6,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 7,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 8,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 9,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 10,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 11,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 12,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
      },
      {
        rank: 13,
        title: "피드백을 통해 성장하는 법 6가지",
        link: "https://yozm.wishket.com/magazine/detail/2526/",
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
          "Most of Europe is glowing pink under the aurora (foto-webcam.eu)",
        link: "https://www.foto-webcam.eu/webcam/lucknerhaus/",
      },
      {
        rank: 2,
        title: "Jim Simons has died (simonsfoundation.org)",
        link: "https://www.simonsfoundation.org/2024/05/10/simons-foundation-co-founder-mathematician-and-investor-jim-simons-dies-at-86/",
      },
      {
        rank: 3,
        title:
          "Coronal mass ejection impact imminent, two more earth-directed CMEs (spaceweatherlive.com)",
        link: "https://www.spaceweatherlive.com/en/news/view/533/20240510-cme-impact-imminent-two-more-earth-directed-cmes.html",
      },
      {
        rank: 4,
        title:
          "Apple finalizing deal with OpenAI to bring ChatGPT features to iOS 18 (9to5mac.com)",
        link: "https://9to5mac.com/2024/05/10/ios-18-chatgpt-features-apple-openai/",
      },
      {
        rank: 5,
        title:
          "Show HN: A web debugger an ex-Cloudflare team has been working on for 4 years",
        link: "https://news.ycombinator.com/item?id=40318542",
      },
      {
        rank: 6,
        title:
          "Nasa’s Roman Mission Will Hunt for Primordial Black Holes (nasa.gov)",
        link: "https://www.nasa.gov/missions/roman-space-telescope/how-nasas-roman-mission-will-hunt-for-primordial-black-holes/",
      },
      {
        rank: 7,
        title: "100 Years of IBM (tikalon.com)",
        link: "http://www.tikalon.com/blog/blog.php?article=2024/IBM_100",
      },
      {
        rank: 8,
        title:
          "Superfile – A fancy, pretty terminal file manager (github.com/mhnightcat)",
        link: "https://github.com/MHNightCat/superfile",
      },
      {
        rank: 9,
        title:
          "Deno KV internals: building a database for the modern web (deno.com)",
        link: "https://deno.com/blog/building-deno-kv",
      },
      {
        rank: 10,
        title: "One Minute Park (oneminutepark.tv)",
        link: "https://oneminutepark.tv/",
      },
      {
        rank: 11,
        title: "Life-like particle system (ventrella.com)",
        link: "https://ventrella.com/Clusters/",
      },
      {
        rank: 12,
        title:
          "Show HN: Jacinda, a functional Awk (text stream processing on the comamnd-line) (haskell.org)",
        link: "https://hackage.haskell.org/package/jacinda",
      },
      {
        rank: 13,
        title:
          "Food labels and the lies they tell us about ‘best before’ expiration dates (2021) (vox.com)",
        link: "https://www.vox.com/22559293/food-waste-expiration-label-best-before",
      },
      {
        rank: 14,
        title:
          "New mirror that can be flexibly shaped improves X-ray microscopes (phys.org)",
        link: "https://phys.org/news/2024-05-mirror-flexibly-ray-microscopes.html",
      },
      {
        rank: 15,
        title:
          "Roman Tyrian purple snail dye found in UK for first time (bbc.com)",
        link: "https://www.bbc.com/news/articles/cjje132jvygo",
      },
      {
        rank: 16,
        title: "Laudatio Turiae (wikipedia.org)",
        link: "https://en.wikipedia.org/wiki/Laudatio_Turiae",
      },
      {
        rank: 17,
        title:
          "Is the largest root of a random real polynomial more likely real or complex? (mathoverflow.net)",
        link: "https://mathoverflow.net/questions/470951/is-the-largest-root-of-a-random-polynomial-more-likely-to-be-real-than-complex",
      },
      {
        rank: 18,
        title: "The poetic science of how cicadas sing (themarginalian.org)",
        link: "https://www.themarginalian.org/2024/05/05/cicadas/",
      },
      {
        rank: 19,
        title:
          "I was at the clapperboard for Orson Welles' drunk wine commercial (2021) (melmagazine.com)",
        link: "https://melmagazine.com/en-us/story/orson-welles-drunk-wine-commercial",
      },
      {
        rank: 20,
        title: "Cylindrical Slide Rules (si.edu)",
        link: "https://americanhistory.si.edu/collections/object-groups/slide-rules/cylindrical-slide-rules",
      },
      {
        rank: 21,
        title:
          "A skeptic's take on beaming power to Earth from space (ieee.org)",
        link: "https://spectrum.ieee.org/space-based-solar-power-2667878868",
      },
      {
        rank: 22,
        title:
          "Evaluating Eye Tracking Systems for Computer Input (2012) (yorku.ca)",
        link: "https://www.yorku.ca/mack/cogain.html",
      },
      {
        rank: 23,
        title:
          "Swipos-GIS/GEO, nationwide GNSS RTK correction for centimeter accurate location (admin.ch)",
        link: "https://www.swisstopo.admin.ch/en/swipos-gisgeo-for-rtk-and-postprocessing-applications",
      },
      {
        rank: 24,
        title:
          "Show HN: A simple 2D fluid and gravity simulation with WASM and WebGL (aestuans.github.io)",
        link: "https://aestuans.github.io/blob/",
      },
      {
        rank: 25,
        title:
          "Cubic millimetre of brain mapped at nanoscale resolution (nature.com)",
        link: "https://www.nature.com/articles/d41586-024-01387-9",
      },
      {
        rank: 26,
        title:
          "Verizon and T-Mobile are trying to gobble up US Cellular (theverge.com)",
        link: "https://www.theverge.com/business/2024/5/9/24153201/verizon-t-mobile-buy-us-cellular-spectrum",
      },
      {
        rank: 27,
        title:
          "Detroit Makes the Same Mistake on EVs It Did with Japan (bloomberg.com)",
        link: "https://www.bloomberg.com/opinion/articles/2024-02-19/chinese-evs-detroit-makes-the-same-mistake-it-did-with-japan-in-the-1970s",
      },
      {
        rank: 28,
        title: "Tine Text Editor (github.com/travisdoor)",
        link: "https://github.com/travisdoor/tine",
      },
      {
        rank: 29,
        title:
          "Writing C code in Java/Clojure: GraalVM specific programming (2021) (yyhh.org)",
        link: "https://yyhh.org/blog/2021/02/writing-c-code-in-javaclojure-graalvm-specific-programming/",
      },
      {
        rank: 30,
        title:
          "KeePassXC Debian maintainer has removed all network features (fosstodon.org)",
        link: "https://fosstodon.org/@keepassxc/112417353193348720",
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
          "kvql - 키-밸류 DB를 위한 SQL과 비슷한 쿼리 언어 (github.com/c4pt0r)",
        link: "https://github.com/c4pt0r/kvql",
      },
      {
        rank: 2,
        title:
          "Scrapegraph-ai - LLM과 직접 그래프 로직을 이용한 웹 스크래핑 (github.com/VinciGit00)",
        link: "https://github.com/VinciGit00/Scrapegraph-ai",
      },
      {
        rank: 3,
        title:
          "Show GN: JavaScript에서 한글을 다루는 현대적인 라이브러리 (github.com/toss)",
        link: "https://news.hada.io/topic?id=14731",
      },
      {
        rank: 4,
        title: "Raspberry Pi Connect 베타 발표 (raspberrypi.com)",
        link: "https://www.raspberrypi.com/news/raspberry-pi-connect/",
      },
      {
        rank: 5,
        title: "Can I Webview - 웹뷰를 위한 Can I Use (caniwebview.com)",
        link: "https://caniwebview.com/",
      },
      {
        rank: 6,
        title:
          "node-mlx - Node.js용 머신 러닝 프레임워크 (github.com/frost-beta)",
        link: "https://github.com/frost-beta/node-mlx",
      },
      {
        rank: 7,
        title:
          "IBM Granite - 코드 작성용 오픈 파운데이션 모델 패밀리 (github.com/ibm-granite)",
        link: "https://github.com/ibm-granite/granite-code-models",
      },
      {
        rank: 8,
        title: "Distribution Is King : 유통이 왕이다 (every.to)",
        link: "https://every.to/napkin-math/distribution-is-king",
      },
      {
        rank: 9,
        title:
          "KAIST 류석영 교수, 고려대와 자바스크립트 생태계의 안정성 보장할 수 있는 기술 개발 성공 (aitimes.kr)",
        link: "https://www.aitimes.kr/news/articleView.html?idxno=31089",
      },
      {
        rank: 10,
        title:
          "xmake - Lua 기반 크로스플랫폼 빌드 유틸리티 (github.com/xmake-io)",
        link: "https://github.com/xmake-io/xmake",
      },
      {
        rank: 11,
        title: "2024 프로그래밍 언어 순위 (tiobe.com)",
        link: "https://www.tiobe.com/tiobe-index/",
      },
      {
        rank: 12,
        title:
          "TSDB를 활용하여 실시간 FFT(고속 푸리에 변환) 수행 사례 (machbase.com)",
        link: "https://www.machbase.com/post/machbase-neo-tsdb-fft-analytics",
      },
      {
        rank: 13,
        title: "ASCII 3D 렌더러 만들기 (kciter.so)",
        link: "https://kciter.so/posts/ascii-3d-renderer/",
      },
      {
        rank: 14,
        title:
          "GN⁺: Google TimesFM - 시계열 예측을 위한 시계열 파운데이션 모델 (github.com/google-research)",
        link: "https://github.com/google-research/timesfm",
      },
      {
        rank: 15,
        title: "OpenAI, Model Spec 공개 (openai.com)",
        link: "https://openai.com/index/introducing-the-model-spec/",
      },
      {
        rank: 16,
        title:
          "Peerdb Streams - 심플한 Postgres CDC(Change Data Capture) (blog.peerdb.io)",
        link: "https://blog.peerdb.io/peerdb-streams-simple-native-postgres-change-data-capture",
      },
      {
        rank: 17,
        title:
          "GN⁺: Stack Overflow 사용자들, OpenAI 제휴 후 답변 삭제 잇따라 (build5nines.com)",
        link: "https://build5nines.com/stack-overflow-upset-over-users-deleting-answers-after-openai-partnership/",
      },
      {
        rank: 18,
        title: "Pyspread - 파이썬 스프레드시트 (pyspread.gitlab.io)",
        link: "https://pyspread.gitlab.io/",
      },
      {
        rank: 19,
        title: "APPLE의 M4칩 공개, 이제 시작되었다 (youtube.com)",
        link: "https://www.youtube.com/watch?v=TsKHjFeonRE",
      },
      {
        rank: 20,
        title: "구글 CEO Sundar Pichai가 말하는 AI의 미래 (youtube.com)",
        link: "https://www.youtube.com/watch?v=5puu3kN9l7c",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/04d89f693e622e95c106e46c69ef7145ea26e4a5ef91238fee8fba5a57c16ad5?w=64&f=webp")',
        title: "One Thing",
        link: "https://disquiet.io/product/one-thing",
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
        icon: "https://ph-files.imgix.net/90b2b03b-9259-4552-ac71-5c678790b95f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Clipwing",
        link: "https://www.producthunt.com/posts/clipwing",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/d6990cc9-6a8e-4871-8792-7c0c3c3b6476.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Otto",
        link: "https://www.producthunt.com/posts/otto-5aa2afc8-0483-413d-8ef7-9a4fb8947858",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/763569f4-51c5-4c58-b0c3-c3b7a2f559a2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "HyperURLs",
        link: "https://www.producthunt.com/posts/hyperurls",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/f7f8536e-5b1c-4cda-baae-d11f9e906a75.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Upp.Vote",
        link: "https://www.producthunt.com/posts/upp-vote",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/de358a3f-a53b-4887-8154-67e1fc3fd3cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Balance",
        link: "https://www.producthunt.com/posts/balance-3698d76d-dd09-46ee-83eb-9153e61e8bb2",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/92cea1b7-d4a1-4354-8492-1adbf628d0f7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ManyExcel",
        link: "https://www.producthunt.com/posts/manyexcel",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/db916953-3775-4f3b-99ad-4c0b98dffd4e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "504 English Vocabulary Dictionary",
        link: "https://www.producthunt.com/posts/504-english-vocabulary-dictionary",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/0ea89af7-a493-4447-a930-f90831d1a3cc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Meeting Reminders",
        link: "https://www.producthunt.com/posts/meeting-reminders",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/944c144b-0995-4306-90d5-574c7434a47a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Storiado",
        link: "https://www.producthunt.com/posts/storiado",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/2c369b99-9e49-45d5-a929-4ccc8ce51dd1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Photo Tape",
        link: "https://www.producthunt.com/posts/photo-tape",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/abd310e2-7d34-416d-a2a2-1fe8338e68f8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "JetSnaps",
        link: "https://www.producthunt.com/posts/jetsnaps",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/faca1d6f-c6f9-4e20-93c6-718ee71ae8a9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Jellyboard",
        link: "https://www.producthunt.com/posts/jellyboard",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/3926cd50-a18e-4c06-a963-93c23130614b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Itnk.app",
        link: "https://www.producthunt.com/posts/itnk-app",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/e85b9ac8-d21a-4c1d-816a-e5773ecbff04.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Ink Studio AI",
        link: "https://www.producthunt.com/posts/ink-studio-ai",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/5eafe1ff-2e81-454b-b00a-efb8ba3389c0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Public Commenting by Commented",
        link: "https://www.producthunt.com/posts/public-commenting-by-commented",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Bubbl Widget",
        link: "https://www.producthunt.com/posts/bubbl-widget",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/da69a2e9-67c6-40d1-9962-b3426fa04cd4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AlphaBot",
        link: "https://www.producthunt.com/posts/alphabot",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "RateMyJD by Dover",
        link: "https://www.producthunt.com/posts/ratemyjd-by-dover",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Voice Director by Replica Studios",
        link: "https://www.producthunt.com/posts/voice-director-by-replica-studios",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Waxwing",
        link: "https://www.producthunt.com/posts/waxwing",
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
