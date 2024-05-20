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
        title: "좋은 개발자가 알아야하는 9가지 포인트들 - 사고 대처 능력 키우",
        link: "https://careerly.co.kr/comments/104778",
      },
      {
        rank: 2,
        title: "API의 응답을 프론트에서 손쉽게 변경하기",
        link: "https://careerly.co.kr/comments/104760",
      },
      {
        rank: 3,
        title: "직장에서 나르시스트를 상대하는 방법",
        link: "https://careerly.co.kr/comments/104561",
      },
      {
        rank: 4,
        title: "반려생활에 합류하기 위한 여정",
        link: "https://careerly.co.kr/comments/104720",
      },
      {
        rank: 5,
        title: "Next.js 개발 시 자주 마주치는 Hydration 에러 이해",
        link: "https://careerly.co.kr/comments/104691",
      },
      {
        rank: 6,
        title: "“컴퓨터 세계를 완전히 변화시킨 25개의 논문”",
        link: "https://careerly.co.kr/comments/104598",
      },
      {
        rank: 7,
        title: "아는 사람, 하는 사람",
        link: "https://careerly.co.kr/comments/104523",
      },
      {
        rank: 8,
        title: "⟪문제정의가 일머리의 90%입니다⟫",
        link: "https://careerly.co.kr/comments/104801",
      },
      {
        rank: 9,
        title: "20가지 작업 대체를 위한 100가지 AI 도구",
        link: "https://careerly.co.kr/comments/104595",
      },
      {
        rank: 10,
        title: "🕊️ [Medium] 자바 개발자가 피해야 하는 11가지 실수 (1)",
        link: "https://careerly.co.kr/comments/104918",
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
        title: "개발조직은 왜 ‘돈 먹는 하마’로 보일까?",
        link: "https://yozm.wishket.com/magazine/detail/2587/",
      },
      {
        rank: 2,
        title: "챗GPT-4o, 완전 럭키비키잖아",
        link: "https://yozm.wishket.com/magazine/detail/2588/",
      },
      {
        rank: 3,
        title: "기획자가 알아야 할 결제 시스템 구조",
        link: "https://yozm.wishket.com/magazine/detail/2585/",
      },
      {
        rank: 4,
        title: "AI와 협업하기: AI 페어 프로그래밍이란?",
        link: "https://yozm.wishket.com/magazine/detail/2583/",
      },
      {
        rank: 5,
        title: "AI 활용한 개발 방법과 프롬프트 팁 정리",
        link: "https://yozm.wishket.com/magazine/detail/2575/",
      },
      {
        rank: 6,
        title: "[SI Q&A 세션 ①] ‘네카라쿠배’ 아니어도 개발자로 성장하고 싶어요",
        link: "https://yozm.wishket.com/magazine/detail/2572/",
      },
      {
        rank: 7,
        title: "윈도우 프로그램은 정말로 사라질까?",
        link: "https://yozm.wishket.com/magazine/detail/2569/",
      },
      {
        rank: 8,
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 9,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 10,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 11,
        title: "‘친절한’ 서비스 가이드를 만드는 3가지 요소",
        link: "https://yozm.wishket.com/magazine/detail/2553/",
      },
      {
        rank: 12,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 13,
        title: "가상의 퍼소나 만들고 인터뷰하는 ‘PersonaChat’",
        link: "https://yozm.wishket.com/magazine/detail/2546/",
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
          "Anthropic: Reflections on Our Responsible Scaling Policy (anthropic.com)",
        link: "https://www.anthropic.com/news/reflections-on-our-responsible-scaling-policy",
      },
      {
        rank: 2,
        title: "Llama3 implemented from scratch (github.com/naklecha)",
        link: "https://github.com/naklecha/llama3-from-scratch",
      },
      {
        rank: 3,
        title:
          "Why Fact Checking of Claims About Nuclear Power Projects Is Important (neutronbytes.com)",
        link: "https://neutronbytes.com/2024/05/12/why-fact-checking-of-audacious-claims-about-nuclear-power-projects-is-important/",
      },
      {
        rank: 4,
        title: "The Lunacy of Artemis (idlewords.com)",
        link: "https://idlewords.com/2024/5/the_lunacy_of_artemis.htm",
      },
      {
        rank: 5,
        title: "Operation CHARM: Car repair manuals for everyone (charm.li)",
        link: "https://charm.li/",
      },
      {
        rank: 6,
        title: "Coding My Handwriting (amygoodchild.com)",
        link: "https://www.amygoodchild.com/blog/cursive-handwriting-in-javascript",
      },
      {
        rank: 7,
        title: "What Is Generative Art? (amygoodchild.com)",
        link: "https://www.amygoodchild.com/blog/what-is-generative-art",
      },
      {
        rank: 8,
        title: "The Myth of Medieval Small Beer (2017) (ianvisits.co.uk)",
        link: "https://www.ianvisits.co.uk/articles/the-myth-of-medieval-small-beer-19763/",
      },
      {
        rank: 9,
        title:
          'Show HN: ffmpeg-english "capture from /dev/video0 every 1 second to jpg files" (github.com/dheera)',
        link: "https://github.com/dheera/scripts/blob/master/ffmpeg-english",
      },
      {
        rank: 10,
        title: "Beating Jeff's 3.14 Ghz Raspberry Pi 5 (jonatron.github.io)",
        link: "https://jonatron.github.io/randomstuff/pivolt/",
      },
      {
        rank: 11,
        title:
          "Steve Wozniak: When I die these are the moments I want to remember (cnbc.com)",
        link: "https://www.cnbc.com/2024/05/18/apple-co-founder-steve-wozniak-happiness-matters-more-than-accomplishment.html",
      },
      {
        rank: 12,
        title: "Swift Tooling: Windows Edition (speakinginswift.substack.com)",
        link: "https://speakinginswift.substack.com/p/swift-tooling-windows-edition",
      },
      {
        rank: 13,
        title: "Unprojecting Text with Ellipses (2016) (mzucker.github.io)",
        link: "https://mzucker.github.io/2016/10/11/unprojecting-text-with-ellipses.html",
      },
      {
        rank: 14,
        title: "DB-19: Resurrecting an Obsolete Connector (bigmessowires.com)",
        link: "https://www.bigmessowires.com/2016/06/04/db-19-resurrecting-an-obsolete-connector/",
      },
      {
        rank: 15,
        title:
          "Hertz Charging a Tesla Renter for Gas Was Not an Isolated Incident (thedrive.com)",
        link: "https://www.thedrive.com/news/hertz-charging-a-tesla-renter-for-gas-was-not-an-isolated-incident",
      },
      {
        rank: 16,
        title:
          "Avoidance of sun exposure as a risk factor for major causes of death (nih.gov)",
        link: "https://pubmed.ncbi.nlm.nih.gov/26992108/",
      },
      {
        rank: 17,
        title:
          "Swarming Proxima Centauri: Picospacecraft Swarms over Interstellar Distances (astrobiology.com)",
        link: "https://astrobiology.com/2024/05/swarming-proxima-centauri-coherent-picospacecraft-swarms-over-interstellar-distances.html",
      },
      {
        rank: 18,
        title: "Teaching Algorithm Design: A Literature Review (arxiv.org)",
        link: "https://arxiv.org/abs/2405.00832",
      },
      {
        rank: 19,
        title: "Meteor Just Seen in Portugal (reddit.com)",
        link: "https://old.reddit.com/r/interestingasfuck/comments/1cva6j6/meteor_just_seen_in_portugal_23h45/",
      },
      {
        rank: 20,
        title:
          "AI doppelgänger experiment – Part 1: The training (julienposture.substack.com)",
        link: "https://julienposture.substack.com/p/the-ai-doppelganger-experiment-part",
      },
      {
        rank: 21,
        title: "A floppy disk MIDI boombox: The Yamaha MDP-10 (nicole.express)",
        link: "https://nicole.express/2024/elementary-midi-watson.html",
      },
      {
        rank: 22,
        title: "Compilers for free with weval (bernsteinbear.com)",
        link: "https://bernsteinbear.com/blog/weval/",
      },
      {
        rank: 23,
        title:
          'Ask HN: Video streaming is expensive yet YouTube "seems" to do it for free. How?',
        link: "https://news.ycombinator.com/item?id=40408515",
      },
      {
        rank: 24,
        title: "Meringue Philosophy (meringue.readthedocs.io)",
        link: "https://meringue.readthedocs.io/en/latest/meringue_philosophy.html",
      },
      {
        rank: 25,
        title:
          "Devon: An open-source pair programmer (github.com/entropy-research)",
        link: "https://github.com/entropy-research/Devon",
      },
      {
        rank: 26,
        title:
          "Tutorial: Metacompilers Part 1 (2016) (bayfronttechnologies.com)",
        link: "http://www.bayfronttechnologies.com/mc_tutorial.html",
      },
      {
        rank: 27,
        title: "The Bel Language (2019) (turbifycdn.com)",
        link: "https://sep.turbifycdn.com/ty/cdn/paulgraham/bellanguage.txt",
      },
      {
        rank: 28,
        title: "Make timelapses easily using FFmpeg",
        link: "https://news.ycombinator.com/item?id=40407526",
      },
      {
        rank: 29,
        title: "I couldn't escape poison oak, so I started eating it (wsj.com)",
        link: "https://www.wsj.com/style/eat-poison-ivy-oak-immunity-3207ec3c",
      },
      {
        rank: 30,
        title: "Sorry, wrong number (roads.org.uk)",
        link: "https://www.roads.org.uk/blog/sorry-wrong-number",
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
        title: "PostgreSQL로 RAG 시스템 구축하기 (pgdash.io)",
        link: "https://pgdash.io/blog/rag-with-postgresql.html",
      },
      {
        rank: 2,
        title: "VC는 당신의 친구가 아니에요 (openvc.app)",
        link: "https://www.openvc.app/blog/vcs-arent-your-friends",
      },
      {
        rank: 3,
        title: "GN⁺: Llama3를 처음부터 구현하기 (github.com/naklecha)",
        link: "https://github.com/naklecha/llama3-from-scratch",
      },
      {
        rank: 4,
        title:
          "같은 앱을 Flutter, React Native, Ionic 으로 개발해 봤어요 (medium.com/@fmmagalhaes)",
        link: "https://medium.com/@fmmagalhaes/i-built-the-same-app-with-flutter-react-native-and-ionic-33ff8b358562",
      },
      {
        rank: 5,
        title: 'GN⁺: 빅 테크의 EU에 대한 경고: "Drop Dead" (eff.org)',
        link: "https://www.eff.org/deeplinks/2024/05/big-tech-eu-drop-dead",
      },
      {
        rank: 6,
        title: "PaliGemma - 구글의 오픈 멀티모달 모델 (blog.roboflow.com)",
        link: "https://blog.roboflow.com/paligemma-multimodal-vision/",
      },
      {
        rank: 7,
        title: "GN⁺: Rust 학습을 위한 100가지 연습 문제 (rust-exercises.com)",
        link: "https://rust-exercises.com/",
      },
      {
        rank: 8,
        title: "kafka는 왜 빠를까? (frogred8.github.io)",
        link: "https://frogred8.github.io/docs/034_why_is_kafka_fast",
      },
      {
        rank: 9,
        title: "GN⁺: 2세대 이메일에 대한 공개적 고찰 (gabrielsieben.tech)",
        link: "https://gabrielsieben.tech/2024/05/17/thinking-out-loud-2nd-gen-email/",
      },
      {
        rank: 10,
        title:
          "Chrome 개발자 콘솔, 이제 Gemini로 자바스크립트 오류 및 경고 이해하기 지원 (developer.chrome.com)",
        link: "https://developer.chrome.com/docs/devtools/console/understand-messages?hl=ko",
      },
      {
        rank: 11,
        title: "GN⁺: Rate Limit 알고리듬을 시각화해서 알아보기 (smudge.ai)",
        link: "https://smudge.ai/blog/ratelimit-algorithms",
      },
      {
        rank: 12,
        title: "ChatGPT, 데이터 분석 기능 개선 (openai.com)",
        link: "https://openai.com/index/improvements-to-data-analysis-in-chatgpt/",
      },
      {
        rank: 13,
        title: "Piko - Ngrok의 오픈소스 대체제 (github.com/andydunstall)",
        link: "https://github.com/andydunstall/piko",
      },
      {
        rank: 14,
        title:
          "직장에서 인정 받기 위한 5가지 팁 (하버드 비즈니스 스쿨) (youtube.com)",
        link: "https://www.youtube.com/watch?v=7AS94R-7YCs",
      },
      {
        rank: 15,
        title:
          "풀타임 근무하는 6자녀 어머니가 취미로 만든 스위치 게임 (bbs.ruliweb.com)",
        link: "https://bbs.ruliweb.com/community/board/300143/read/66062611",
      },
      {
        rank: 16,
        title:
          "스타트업 성공 전략의 80%는 실수를 피하는 것 (longform.asmartbear.com)",
        link: "https://longform.asmartbear.com/avoid-blundering/",
      },
      {
        rank: 17,
        title: "GN⁺: 순수 NumPy로 구현하는 라마 3 모델 (docs.likejazz.com)",
        link: "https://docs.likejazz.com/llama3.np-ko/",
      },
      {
        rank: 18,
        title: "GN⁺: OpenAI 퇴사자들: 전 직원들이 말할 수 없는 이유 (vox.com)",
        link: "https://www.vox.com/future-perfect/2024/5/17/24158478/openai-departures-sam-altman-employees-chatgpt-release",
      },
      {
        rank: 19,
        title:
          "Project Gameface의 Android 버전 출시 (developers.googleblog.com)",
        link: "https://developers.googleblog.com/en/project-gameface-launches-on-android/",
      },
      {
        rank: 20,
        title:
          "URLhaus - 멀웨어 배포에 사용되는 악성 URL 데이터베이스 (urlhaus.abuse.ch)",
        link: "https://urlhaus.abuse.ch/",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/60f32dca10124b8642c81f6511da9f9a106061721dd9c00d18c3c41e17c52ab1?w=64&f=webp")',
        title: "invector",
        link: "https://disquiet.io/product/invector",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/22341703450670bc57347cbf7cc94cec1ccbedad2bede56016f8860a1a808794?w=64&f=webp")',
        title: "플라멜 Flamel v0.9",
        link: "https://disquiet.io/product/%ED%94%8C%EB%9D%BC%EB%A9%9C-flamel-v0-9",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/86202cf3d789a3f06035095d1340a0ef7140973c2d9f7e8f2a499b35352e869f?w=64&f=webp")',
        title: "트레이스",
        link: "https://disquiet.io/product/%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%8A%A4",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/3416b5a3c86c01d9218af410ef29d937f3373932a27f1f1c2b92ee24209e826d?w=64&f=webp")',
        title: "Aiary",
        link: "https://disquiet.io/product/aiary",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/dba5233869e5caee2c4b1b4981d99a49f13409b714775419ee0d9560a71bb72f?w=64&f=webp")',
        title: "SCIAN Link Service",
        link: "https://disquiet.io/product/scina-link-service",
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
        icon: "https://ph-files.imgix.net/1c0c7ed4-fbcc-4e32-aba2-450cd204e1da.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "BlissCompass",
        link: "https://www.producthunt.com/posts/blisscompass",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/44111959-462f-46a0-9d50-d9223f277dbd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ChatPlayground AI",
        link: "https://www.producthunt.com/posts/chatplayground-ai",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/81553e76-7caf-4271-bb67-8d76bf800291.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Clicks.so",
        link: "https://www.producthunt.com/posts/clicks-so",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/e618624c-b1e9-4f4b-b047-1189ac74f262.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "User Evaluation AI",
        link: "https://www.producthunt.com/posts/user-evaluation-ai",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/775ea980-cfa0-4e0d-bc93-76b86027e923.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Free Resume Review!",
        link: "https://www.producthunt.com/posts/free-resume-review",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/0008f23f-0369-4e61-8d30-2282479a39ca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Magicam",
        link: "https://www.producthunt.com/posts/magicam-2",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/dfde35ac-3ea6-4933-be6e-33994fa16e4f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hepl",
        link: "https://www.producthunt.com/posts/hepl",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/01726b1c-a668-42cd-84ae-e0534d415bee.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ANDRE",
        link: "https://www.producthunt.com/posts/andre",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/51622915-76db-4255-b3c0-d341f95ee47f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "OmniJobs",
        link: "https://www.producthunt.com/posts/omnijobs",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/c92b50ca-9b4a-4d5a-bc49-363f00a4c4bc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PodPrep",
        link: "https://www.producthunt.com/posts/podprep",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/a70282fd-1cf2-42e3-b712-d1d39e7c7d1c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Magic Bookshelf - AI Stories",
        link: "https://www.producthunt.com/posts/magic-bookshelf-ai-stories",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/b6cc6289-1a93-4633-9ec5-47ca8d1deaff.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Extra Blu",
        link: "https://www.producthunt.com/posts/extra-blu",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/eea319cf-c8c2-46d9-9911-5237eb1ba761.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Features.Vote",
        link: "https://www.producthunt.com/posts/features-vote",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/53df052a-8934-4167-a532-d68572d5ea7d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Buffup.AI",
        link: "https://www.producthunt.com/posts/buffup-ai-3",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/1b6fcd0b-ddf6-4382-8a1b-f31945086171.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Interviews Chat",
        link: "https://www.producthunt.com/posts/interviews-chat",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/8a099fd9-89a6-4f20-9adb-a3ea682c8432.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Sixelf",
        link: "https://www.producthunt.com/posts/sixelf",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/90b2b03b-9259-4552-ac71-5c678790b95f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Walking Games: Explora",
        link: "https://www.producthunt.com/posts/walking-games-explora",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/ce7a4c38-9757-4286-8a54-7f074653f4db.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Eraser AI",
        link: "https://www.producthunt.com/posts/eraser-ai",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/3fa5b9f3-8ad8-4266-88c2-2f6b2615ea6a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AFFiNE AI",
        link: "https://www.producthunt.com/posts/affine-ai",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/9cd4811c-e4b8-4bf4-8e32-e55861231658.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Public Commenting by Commented",
        link: "https://www.producthunt.com/posts/public-commenting-by-commented",
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
        title: "Querydsl에서 Kotlin JDSL 으로",
        link: "https://spoqa.github.io/2024/05/03/transfer-jdsl.html?utm_source=oneoneone",
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
        title: "(번역) 자바스크립트를 이용한 재시도 로직 구현하기",
        link: "https://velog.io/@tap_kim/implement-retry-logic-using-javascript",
      },
      {
        title: "Next.js 캐싱으로 웹 서버 성능 최적화",
        link: "https://fe-developers.kakaoent.com/2024/240418-optimizing-nextjs-cache/?utm_source=oneoneone",
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
