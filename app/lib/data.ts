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
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 6. 운영 고려 코드",
        link: "https://careerly.co.kr/comments/104266",
      },
      {
        rank: 2,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 3,
        title: "개발자 팟캐스트",
        link: "https://careerly.co.kr/comments/104400",
      },
      {
        rank: 4,
        title: "프론트엔드 개발자 2명이 만든 명품 주얼리 거래 이커머스 앱",
        link: "https://careerly.co.kr/comments/104340",
      },
      {
        rank: 5,
        title: "완벽함과 거리두기",
        link: "https://careerly.co.kr/comments/104214",
      },
      {
        rank: 6,
        title: "나쁜 사람에 대한 최고의 복수는 '그 사람의 언어를 쓰지 않는 것",
        link: "https://careerly.co.kr/comments/104368",
      },
      {
        rank: 7,
        title: "대한민국 5대 IT회사 네카라쿠배 국적 네(이버) - 한국 회사",
        link: "https://careerly.co.kr/comments/104413",
      },
      {
        rank: 8,
        title: "작년에 예상한 올해 ’2024년 마케팅&시장 트렌드 TOP 10‘",
        link: "https://careerly.co.kr/comments/104326",
      },
      {
        rank: 9,
        title: "SOLID 원칙의 이면",
        link: "https://careerly.co.kr/comments/104478",
      },
      {
        rank: 10,
        title: "웹 표준 기술로 구현하는 웹 컴포넌트(Web Components)",
        link: "https://careerly.co.kr/comments/104439",
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
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 3,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 4,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 5,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 6,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 7,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 8,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 9,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 10,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 11,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 12,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 13,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
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
        title: "GPUs Go Brrr (stanford.edu)",
        link: "https://hazyresearch.stanford.edu/blog/2024-05-12-tk",
      },
      {
        rank: 2,
        title: "Show HN: I made an open-source Loom alternative (cap.so)",
        link: "https://cap.so/",
      },
      {
        rank: 3,
        title: "A Slower Speed of Light – MIT Game Lab (gamelab.mit.edu)",
        link: "http://gamelab.mit.edu/games/a-slower-speed-of-light/",
      },
      {
        rank: 4,
        title: "Open Source YouTube to MP3 Downloader (github.com/packjc)",
        link: "https://github.com/PackJC/YoutubeToMP3",
      },
      {
        rank: 5,
        title:
          "MacRelix – Unix-like features for classic Mac OS (macrelix.org)",
        link: "https://www.macrelix.org/",
      },
      {
        rank: 6,
        title: "The Alternative Implementation Problem (pointersgonewild.com)",
        link: "https://pointersgonewild.com/2024/04/20/the-alternative-implementation-problem/",
      },
      {
        rank: 7,
        title:
          "Mindfulness interventions for teens decrease mindfulness, study finds (suchscience.net)",
        link: "https://suchscience.net/mindfulness-interventions-for-teens-actually-decrease-mindfulness-new-study-finds/",
      },
      {
        rank: 8,
        title:
          "I built an online PDF management platform using open-source software (pdfequips.com)",
        link: "https://www.pdfequips.com/",
      },
      {
        rank: 9,
        title:
          "Ordered back to the office, top tech talent left instead, study finds (washingtonpost.com)",
        link: "https://www.washingtonpost.com/business/2024/05/12/rto-microsoft-apple-spacex/",
      },
      {
        rank: 10,
        title: "Homoiconic Python (aljamal.substack.com)",
        link: "https://aljamal.substack.com/p/homoiconic-python",
      },
      {
        rank: 11,
        title: "Cost of Living Index by Country 2024 – Numbeo (numbeo.com)",
        link: "https://www.numbeo.com/cost-of-living/rankings_by_country.jsp",
      },
      {
        rank: 12,
        title: "Feynman Symbolic Regression Database (space.mit.edu)",
        link: "https://space.mit.edu/home/tegmark/aifeynman.html",
      },
      {
        rank: 13,
        title: "Page Dewarping (2016) (mzucker.github.io)",
        link: "https://mzucker.github.io/2016/08/15/page-dewarping.html",
      },
      {
        rank: 14,
        title: "Professional Corner-Cutting (2016) (ometer.com)",
        link: "https://blog.ometer.com/2016/05/04/professional-corner-cutting/",
      },
      {
        rank: 15,
        title:
          "Show HN: CarCheck – Car Buying Checklist App (usefulchecklists.com)",
        link: "https://usefulchecklists.com/",
      },
      {
        rank: 16,
        title: "Styles of Furniture (lostartpress.com)",
        link: "https://blog.lostartpress.com/2024/05/05/the-styles-of-furniture/",
      },
      {
        rank: 17,
        title:
          "Zero Feet: a proposal for a systems-free Lisp (applied-langua.ge)",
        link: "https://applied-langua.ge/posts/zero-feet.html",
      },
      {
        rank: 18,
        title: "Archie Search (serialport.org)",
        link: "https://archie.serialport.org/",
      },
      {
        rank: 19,
        title:
          "Fort Worth's tallest building sells for $12.3M, bought for $137.5M in 2021 (foxbusiness.com)",
        link: "https://www.foxbusiness.com/real-estate/fort-worths-tallest-building-sells-just-12-3m-auction-stunning-price-drop",
      },
      {
        rank: 20,
        title:
          "Whole-body magnetic resonance imaging at 0.05 Tesla (science.org)",
        link: "https://www.science.org/doi/10.1126/science.adm7168",
      },
      {
        rank: 21,
        title:
          "Eventual (YC W22) Is Hiring Software Engineers to Build a Query Engine in Rust (ashbyhq.com)",
        link: "https://jobs.ashbyhq.com/eventualcomputing?utm_source=Ox4R0k6rPN",
      },
      {
        rank: 22,
        title: "A Record of Old Kashgar (chinabooksreview.com)",
        link: "https://chinabooksreview.com/2024/05/09/a-record-of-old-kashgar/",
      },
      {
        rank: 23,
        title: "The Star Destroyer and Imperial Military Doctrine (acoup.blog)",
        link: "https://acoup.blog/2024/05/10/fireside-friday-may-10-2024/",
      },
      {
        rank: 24,
        title: "Solving Recurrence Relations (win-vector.com)",
        link: "https://win-vector.com/2024/05/09/solving-recurrence-relations/",
      },
      {
        rank: 25,
        title: "Pattern Forms (c2.com)",
        link: "https://wiki.c2.com/?PatternForms",
      },
      {
        rank: 26,
        title: "Scientists Find an 'Alphabet' in Whale Songs (nytimes.com)",
        link: "https://www.nytimes.com/2024/05/07/science/whale-song-alphabet.html",
      },
      {
        rank: 27,
        title: "Assembly (louve.systems)",
        link: "https://assembly.louve.systems/",
      },
      {
        rank: 28,
        title:
          "Roger Corman, Giant of Independent Filmmaking, Dies at 98 (hollywoodreporter.com)",
        link: "https://www.hollywoodreporter.com/movies/movie-news/roger-corman-dead-independent-director-producer-king-of-the-b-1235896846/",
      },
      {
        rank: 29,
        title:
          "Ultraviolet Superradiance from Networks of Tryptophan in Biological Systems (acs.org)",
        link: "https://pubs.acs.org/doi/10.1021/acs.jpcb.3c07936",
      },
      {
        rank: 30,
        title:
          "Peter Jackson on how Tolkien stopped a Beatles LOTR film (2021) (bbc.com)",
        link: "https://www.bbc.com/news/entertainment-arts-59387182",
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
          "스타트업 성공 전략의 80%는 실수를 피하는 것 (longform.asmartbear.com)",
        link: "https://longform.asmartbear.com/avoid-blundering/",
      },
      {
        rank: 2,
        title:
          "Node 버전 관리자 5종 비교 : NVM, N, FNM, Volta, PNPM (pavel-romanov.com)",
        link: "https://pavel-romanov.com/5-node-version-managers-compared-which-is-right-for-you",
      },
      {
        rank: 3,
        title:
          "에어팟을 암퇴치를 위한 피트니스 트래커로 만들기 (richarddas.com)",
        link: "https://richarddas.com/blog/turning-airpods-into-fitness-trackers-to-fight-cancer/",
      },
      {
        rank: 4,
        title: "PGMQ - Postgres 기반의 SQS 대체제 (github.com/tembo-io)",
        link: "https://github.com/tembo-io/pgmq",
      },
      {
        rank: 5,
        title:
          "에어팟을 모스부호(Morse Code) 송신기로 사용하기 (github.com/EtherDream)",
        link: "https://github.com/EtherDream/headphone-morse-transmitter",
      },
      {
        rank: 6,
        title:
          "[번역] Claude-3로부터 더 나은 결과를 얻기 위한 프롬프트 엔지니어링 전략 (feat. Anthropic) (discuss.pytorch.kr)",
        link: "https://discuss.pytorch.kr/t/claude-3-feat-anthropic/4323?utm_source=geeknews",
      },
      {
        rank: 7,
        title:
          "OpenAI, 구글 검색 경쟁자 5/13 오전 10시에 공개 예정 (twitter.com/sama)",
        link: "https://twitter.com/sama/status/1788989777452408943",
      },
      {
        rank: 8,
        title:
          "Show GN: JavaScript에서 한글을 다루는 현대적인 라이브러리 (github.com/toss)",
        link: "https://news.hada.io/topic?id=14731",
      },
      {
        rank: 9,
        title:
          "GN⁺: Superfile - 화려하고 멋진 터미널 파일 관리자 (github.com/MHNightCat)",
        link: "https://github.com/MHNightCat/superfile",
      },
      {
        rank: 10,
        title: "국내 DNS 에서 *.vercel.app 도메인 접근 불가 (github.com/orgs)",
        link: "https://github.com/orgs/vercel/discussions/6807",
      },
      {
        rank: 11,
        title:
          "Scrapegraph-ai - LLM과 직접 그래프 로직을 이용한 웹 스크래핑 (github.com/VinciGit00)",
        link: "https://github.com/VinciGit00/Scrapegraph-ai",
      },
      {
        rank: 12,
        title: "Distribution Is King : 유통이 왕이다 (every.to)",
        link: "https://every.to/napkin-math/distribution-is-king",
      },
      {
        rank: 13,
        title: "Can I Webview - 웹뷰를 위한 Can I Use (caniwebview.com)",
        link: "https://caniwebview.com/",
      },
      {
        rank: 14,
        title:
          "node-mlx - Node.js용 머신 러닝 프레임워크 (github.com/frost-beta)",
        link: "https://github.com/frost-beta/node-mlx",
      },
      {
        rank: 15,
        title: "Raspberry Pi Connect 베타 발표 (raspberrypi.com)",
        link: "https://www.raspberrypi.com/news/raspberry-pi-connect/",
      },
      {
        rank: 16,
        title:
          "kvql - 키-밸류 DB를 위한 SQL과 비슷한 쿼리 언어 (github.com/c4pt0r)",
        link: "https://github.com/c4pt0r/kvql",
      },
      {
        rank: 17,
        title:
          "IBM Granite - 코드 작성용 오픈 파운데이션 모델 패밀리 (github.com/ibm-granite)",
        link: "https://github.com/ibm-granite/granite-code-models",
      },
      {
        rank: 18,
        title: "ASCII 3D 렌더러 만들기 (kciter.so)",
        link: "https://kciter.so/posts/ascii-3d-renderer/",
      },
      {
        rank: 19,
        title:
          "GN⁺: 애플, iOS 18에 ChatGPT 기능 탑재 위해 OpenAI와 최종 계약 단계 (9to5mac.com)",
        link: "https://9to5mac.com/2024/05/10/ios-18-chatgpt-features-apple-openai/",
      },
      {
        rank: 20,
        title:
          "KAIST 류석영 교수, 고려대와 자바스크립트 생태계의 안정성 보장할 수 있는 기술 개발 성공 (aitimes.kr)",
        link: "https://www.aitimes.kr/news/articleView.html?idxno=31089",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/23509e6f92daa56dda88f63ccb7c2d85fd2fb5d6fcb7720ba06c3a8834f8c1ec?w=64&f=webp")',
        title: "MADII 마디",
        link: "https://disquiet.io/product/madii",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/04d89f693e622e95c106e46c69ef7145ea26e4a5ef91238fee8fba5a57c16ad5?w=64&f=webp")',
        title: "One Thing",
        link: "https://disquiet.io/product/one-thing",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/cef95b3ec13d5f9e11238b9d2345baff523eb754fdde395f38beacb8070228f6?w=64&f=webp")',
        title: "유아이볼",
        link: "https://disquiet.io/product/%EC%9C%A0%EC%95%84%EC%9D%B4%EB%B3%BC",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/6417a841ee8c432e6712316f0de23c4cc72e6a13bd5b97122f0642b636046268?w=64&f=webp")',
        title: "Desktop Dday",
        link: "https://disquiet.io/product/desktop-dday-%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4-%EB%94%94%EB%8D%B0%EC%9D%B4-%EC%9C%84%EC%A0%AF",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/4ed0750442816dd5dba753c4adb51cc47115c0889df231ecd45abb72fe8c1598?w=64&f=webp")',
        title: "phase",
        link: "https://disquiet.io/product/phase",
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
        title: "498개의 테스트 코드 (번역)",
        link: "https://careerly.co.kr/comments/103928",
      },
      {
        rank: 4,
        title: "🕊️ 개발 세계에서 인기 있는 API 아키텍처 스타일",
        link: "https://careerly.co.kr/comments/103275",
      },
      {
        rank: 5,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 6. 운영 고려 코드 작성",
        link: "https://careerly.co.kr/comments/104266",
      },

      {
        rank: 6,
        title: "🌐 개발자가 알고 있으면 좋은 사이트",
        link: "https://careerly.co.kr/comments/103947",
      },
      {
        rank: 7,
        title: "[책] 개발자 기술 면접 노트",
        link: "https://careerly.co.kr/comments/103098",
      },
      {
        rank: 8,
        title: "🧨 개발자를 잠 못 들게 만드는 코드",
        link: "https://careerly.co.kr/comments/104021",
      },
      {
        rank: 9,
        title: "Top 12 this For API Security",
        link: "https://careerly.co.kr/comments/104283",
      },
      {
        rank: 10,
        title: "🕊️ [Medium] 300개 이상의 리트코드 문제를 해결한 방법",
        link: "https://careerly.co.kr/comments/103670",
      },
      {
        rank: 11,
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 3. 의사 소통 잘하기",
        link: "https://careerly.co.kr/comments/103246",
      },
      {
        rank: 12,
        title: "ChatGPT 사용 시 유용한 3가지 팁",
        link: "https://careerly.co.kr/comments/103483",
      },
      {
        rank: 13,
        title:
          "좋은 개발자가 알아야하는 9가지 포인트들 - 5. 태스크 완료 시간 추정",
        link: "https://careerly.co.kr/comments/103676",
      },

      {
        rank: 14,
        title: "개발자 팟캐스트",
        link: "https://careerly.co.kr/comments/104400",
      },
      {
        rank: 15,
        title: "작년부터 베타 테스트를 진행하다가",
        link: "https://careerly.co.kr/comments/103463",
      },
      {
        rank: 16,
        title: "2024년도에 배우면 좋은 프로그래밍언어 Part 2",
        link: "https://careerly.co.kr/comments/103144",
      },
      {
        rank: 17,
        title: "현대적인 JavaScript 한글 라이브러리, es-hangul",
        link: "https://careerly.co.kr/comments/103361",
      },
      {
        rank: 18,
        title: "성장의 이유",
        link: "https://careerly.co.kr/comments/103875",
      },
      {
        rank: 19,
        title: "프론트엔드 개발의 필수 기술: 컴파일러와 번들러 이해하기",
        link: "https://careerly.co.kr/comments/104101",
      },
      {
        rank: 20,
        title: "🕊️ 자바의 기본 트랜잭션 매니저와 그 구현체들",
        link: "https://careerly.co.kr/comments/103026",
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
        icon: "https://ph-files.imgix.net/03fa9f64-1f52-4494-bd90-de26935e8cde.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Marvin",
        link: "https://www.producthunt.com/posts/marvin-2cd8781e-020b-4847-9569-62498d071e2a",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/8267d476-c2ac-4024-a3ca-75c5039a9b6a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AI Logo Design by Stylar",
        link: "https://www.producthunt.com/posts/ai-logo-design-by-stylar",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/b724fccd-fd3c-4cf7-bdb7-110910e0cc28.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Smartrazor",
        link: "https://www.producthunt.com/posts/smartrazor",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/8fef380f-b833-460a-83fc-11f3548682fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "TimeStamper",
        link: "https://www.producthunt.com/posts/timestamper",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/0b0258eb-69c0-476d-852e-f39391766147.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "flatx.",
        link: "https://www.producthunt.com/posts/flatx",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/e0762189-664c-4340-ba8d-ab96c6d459a4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Habitually 2.0 - Now with Extra SaaS!",
        link: "https://www.producthunt.com/posts/habitually-2-0-now-with-extra-saas",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/050c445a-278d-497d-a974-00df5ace97de.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "TodoPal",
        link: "https://www.producthunt.com/posts/todopal-2",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/0e4b525f-dd76-4c51-9ca8-74dcab28f58d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "RedotPay",
        link: "https://www.producthunt.com/posts/redotpay",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/96bf4359-8172-4992-bab8-4b826c82272f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PictoGraphic",
        link: "https://www.producthunt.com/posts/pictographic",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/359709f7-95e0-493c-a7c2-4c57be6aa8b6.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Phew AI Tab",
        link: "https://www.producthunt.com/posts/phew-ai-tab",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/e1deaf8f-8d1c-45f1-991f-6f4952ae5ba9.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "staarter.dev",
        link: "https://www.producthunt.com/posts/staarter-dev",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/cc242711-6a9d-42d6-a27a-5322d98f6a99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Checkout Plus",
        link: "https://www.producthunt.com/posts/checkout-plus",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/af5bcd01-1f2e-44a1-be3b-e661d7098283.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Invoice Builder App",
        link: "https://www.producthunt.com/posts/invoice-builder-app",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/b0ef2d09-348b-4de5-b4ee-7edcfa079a3e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Waxwing",
        link: "https://www.producthunt.com/posts/waxwing",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/da69a2e9-67c6-40d1-9962-b3426fa04cd4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Expressive AI Avatars by Synthesia",
        link: "https://www.producthunt.com/posts/expressive-ai-avatars-by-synthesia",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/9d59a5fd-b7a5-492f-9954-c0d7ddc56701.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "My-legacy.ai",
        link: "https://www.producthunt.com/posts/my-legacy-ai",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/7aba2286-e63d-419e-b993-48b779043d99.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Stackradar",
        link: "https://www.producthunt.com/posts/stackradar",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Loom AI Workflows",
        link: "https://www.producthunt.com/posts/loom-ai-workflows",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/3fa5b9f3-8ad8-4266-88c2-2f6b2615ea6a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Supabase",
        link: "https://www.producthunt.com/products/supabase#supabase-b37accde-66c0-4c60-bc5c-2634afa7cfe2",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/9cd4811c-e4b8-4bf4-8e32-e55861231658.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Cal.com Platform",
        link: "https://www.producthunt.com/products/cal-com#cal-com-platform",
      },
    ],
  },
  {
    key: "server",
    title: "오늘의 SERVER",
    contents: [
      {
        title: "읽기 전용 설정으로 MySQL 이전하기",
        link: "https://techblog.lycorp.co.jp/ko/migrate-mysql-with-read-only-mode",
      },
      {
        title: "Stateless REST API의 성능 최적화를 위한 캐싱",
        link: "https://www.javacodegeeks.com/2024/05/caching-for-performance-optimization-in-stateless-rest-apis.html",
      },
      {
        title: "AWS OpenSearch를 사용한 EFK Stack 구축하기",
        link: "https://oliveyoung.tech/blog/2024-04-02/opensearch-efk/",
      },
      {
        title: "추천 시스템 개선을 위한 Feature Store 도입기",
        link: "https://ridicorp.com/story/ridi-personalization-system-feature-store",
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
        title: "사내 디자인 시스템 실패기 Part 1",
        link: "https://blog.doctor-cha.com/reflections-on-the-failure-case-of-applying-inhouse-design-system-part1-design-retrospective",
      },
      {
        title: "리액트 프로젝트의 좋은 구조란?",
        link: "https://velog.io/@kennys/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A2%8B%EC%9D%80-%EA%B5%AC%EC%A1%B0%EB%9E%80?",
      },
      {
        title: "당근페이 FE, 4개의 프로젝트를 하나로 합치며 나눈 대화들",
        link: "https://medium.com/daangn/%EB%8B%B9%EA%B7%BC%ED%8E%98%EC%9D%B4-fe-4%EA%B0%9C%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%ED%95%98%EB%82%98%EB%A1%9C-%ED%95%A9%EC%B9%98%EB%A9%B0-%EB%82%98%EB%88%88-%EB%8C%80%ED%99%94%EB%93%A4-b96f837230da",
      },
      {
        title:
          "[Korean FE Article] Next.js 앱 라우터 마이그레이션: 좋은 점, 나쁜 점, 그리고 최악인 점",
        link: "https://kofearticle.substack.com/p/korean-fe-article-nextjs-c0a?utm_source=oneoneone",
      },
      {
        title: "(번역) 기능 분할 설계 - 최고의 프런트엔드 아키텍처",
        link: "https://emewjin.github.io/feature-sliced-design/",
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
