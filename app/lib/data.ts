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
        title: "쿠팡, 그때는 맞고 지금은 틀리다",
        link: "https://yozm.wishket.com/magazine/detail/2568/",
      },
      {
        rank: 2,
        title: "새로운 데이터 직군, 데이터 애널리틱스 엔지니어란?",
        link: "https://yozm.wishket.com/magazine/detail/2563/",
      },
      {
        rank: 3,
        title: "‘API Versioning’은 반드시 필요할까?",
        link: "https://yozm.wishket.com/magazine/detail/2554/",
      },
      {
        rank: 4,
        title: "개발자를 위한 영어 12시제 활용 가이드",
        link: "https://yozm.wishket.com/magazine/detail/2548/",
      },
      {
        rank: 5,
        title: "팀장님에게 칭찬받기 좋은 Git 꿀팁 2가지",
        link: "https://yozm.wishket.com/magazine/detail/2545/",
      },
      {
        rank: 6,
        title:
          "[SI에서 성장하기] ④ 24년 차 대기업 개발자 출신이 말하는 요즘 SI 현장의 변화와 과제",
        link: "https://yozm.wishket.com/magazine/detail/2544/",
      },
      {
        rank: 7,
        title: "어제보다 1cm 더 성장하기: 네이버 권태관 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2539/",
      },
      {
        rank: 8,
        title: "[SI에서 성장하기] ③ 스타트업만 알던 내가 SI 취업하고 생긴 일",
        link: "https://yozm.wishket.com/magazine/detail/2535/",
      },
      {
        rank: 9,
        title: "‘위임’하는 월마트가 ‘통제’하는 아마존을 추격합니다",
        link: "https://yozm.wishket.com/magazine/detail/2534/",
      },
      {
        rank: 10,
        title: "SI vs. SM 개발자, 뭘 해야 할까요?",
        link: "https://yozm.wishket.com/magazine/detail/2533/",
      },
      {
        rank: 11,
        title: "피드백을 통해 성장하는 법 6가지",
        link: "https://yozm.wishket.com/magazine/detail/2526/",
      },
      {
        rank: 12,
        title: "스마트팩토리는 어떻게 설비 데이터를 수집할까?",
        link: "https://yozm.wishket.com/magazine/detail/2522/",
      },
      {
        rank: 13,
        title: "영향력 있는 개발자 되기: '테오의 프론트엔드' 유용태 개발자",
        link: "https://yozm.wishket.com/magazine/detail/2521/",
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
          "Social engineering takeovers of open source projects (openssf.org)",
        link: "https://openssf.org/blog/2024/04/15/open-source-security-openssf-and-openjs-foundations-issue-alert-for-social-engineering-takeovers-of-open-source-projects/",
      },
      {
        rank: 2,
        title:
          "Deep Reinforcement Learning: Zero to Hero (github.com/alessiodm)",
        link: "https://github.com/alessiodm/drl-zh",
      },
      {
        rank: 3,
        title:
          "Remnants of a Legendary Typeface Have Been Rescued from the River Thames (artnet.com)",
        link: "https://news.artnet.com/art-world/doves-typeface-2454807",
      },
      {
        rank: 4,
        title: "X.org on NetBSD – The State of Things (netbsd.org)",
        link: "https://blog.netbsd.org/tnf/entry/x_org_on_netbsd_the",
      },
      {
        rank: 5,
        title:
          "Monitoring energy usage with smart plugs, Prometheus and Grafana (ounapuu.ee)",
        link: "https://ounapuu.ee/posts/2024/05/02/smartplugs/",
      },
      {
        rank: 6,
        title: "Bollards: Why and What (josh.works)",
        link: "https://josh.works/bollards",
      },
      {
        rank: 7,
        title:
          "Why Choose ULIDs over Traditional UUIDs or IDs for Database Identification? (sotergreco.com)",
        link: "https://sotergreco.com/why-choose-ulids-over-traditional-uuids-or-ids-for-database-identification",
      },
      {
        rank: 8,
        title:
          "Flying planes in Microsoft Flight Simulator with a JavaScript autopilot (2023) (pomax.github.io)",
        link: "https://pomax.github.io/are-we-flying/",
      },
      {
        rank: 9,
        title:
          "Drug resistant bacteria found on ISS mutating to become functionally distinct (nasa.gov)",
        link: "https://www.nasa.gov/centers-and-facilities/ames/ames-science/ames-space-biosciences/multi-drug-resistant-bacteria-found-on-iss-mutating-to-become-functionally-distinct/",
      },
      {
        rank: 10,
        title:
          "A High-Level Technical Overview of Homomorphic Encryption (jeremykun.com)",
        link: "https://www.jeremykun.com/2024/05/04/fhe-overview/",
      },
      {
        rank: 11,
        title:
          "Infini-Gram: Scaling unbounded n-gram language models to a trillion tokens (arxiv.org)",
        link: "https://arxiv.org/abs/2401.17377",
      },
      {
        rank: 12,
        title:
          "Designing furniture using the CSS grid (2023) (alnvdl.github.io)",
        link: "https://alnvdl.github.io/2023/01/07/designing-furniture-using-the-css-grid.html",
      },
      {
        rank: 13,
        title:
          "Show HN: CodeCopilot AI – Local Llama3,Optimize Your Dev Workflows,Happy Coding (codecopilotai.com)",
        link: "https://codecopilotai.com/",
      },
      {
        rank: 14,
        title: "TheDesk desktop environment (github.com/thecheeseboard)",
        link: "https://github.com/theCheeseboard/thedesk",
      },
      {
        rank: 15,
        title: "Machine Unlearning in 2024 (stanford.edu)",
        link: "https://ai.stanford.edu/~kzliu/blog/unlearning",
      },
      {
        rank: 16,
        title:
          "ESP32-S3 has a few SIMD instructions (bitbanksoftware.blogspot.com)",
        link: "https://bitbanksoftware.blogspot.com/2024/01/surprise-esp32-s3-has-few-simd.html",
      },
      {
        rank: 17,
        title:
          "MIT abandons requirement of DEI statements for hiring and promotions (whyevolutionistrue.com)",
        link: "https://whyevolutionistrue.com/2024/05/04/mit-abandons-use-of-dei-statements/",
      },
      {
        rank: 18,
        title:
          "Interview with Marian Rejewski, the first person to crack Enigma (1974) [video] (flyingpenguin.com)",
        link: "https://www.flyingpenguin.com/?p=56989",
      },
      {
        rank: 19,
        title:
          "Helldivers 2 PSN account linking update will not be moving forward (twitter.com/playstation)",
        link: "https://twitter.com/PlayStation/status/1787331667616829929",
      },
      {
        rank: 20,
        title:
          "Take a look at Traefik, even if you don't use containers (j6b72.de)",
        link: "https://j6b72.de/article/why-you-should-take-a-look-at-traefik/",
      },
      {
        rank: 21,
        title:
          "A mostly complete guide to React rendering behavior (2020) (isquaredsoftware.com)",
        link: "https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/",
      },
      {
        rank: 22,
        title: "Turning AirPods into a fitness tracker (richarddas.com)",
        link: "https://richarddas.com/blog/turning-airpods-into-fitness-trackers-to-fight-cancer/",
      },
      {
        rank: 23,
        title:
          "A History of C Compilers – Part 1: Performance, Portability and Freedom (thechipletter.substack.com)",
        link: "https://thechipletter.substack.com/p/a-history-of-c-compilers-part-1-performance",
      },
      {
        rank: 24,
        title:
          "Microsoft CTO: Thoughts on OpenAI (2019) (twitter.com/techemails)",
        link: "https://twitter.com/techemails/status/1787176471146156193",
      },
      {
        rank: 25,
        title:
          "Simplicity is an advantage but sadly complexity sells better (2022) (eugeneyan.com)",
        link: "https://eugeneyan.com/writing/simplicity/",
      },
      {
        rank: 26,
        title:
          "Data Science at the Command Line, 2nd Edition (2021) (jeroenjanssens.com)",
        link: "https://jeroenjanssens.com/dsatcl/",
      },
      {
        rank: 27,
        title: "Israel shuts down local Al Jazeera offices (theguardian.com)",
        link: "https://www.theguardian.com/world/article/2024/may/05/israel-shuts-down-local-al-jazeera-offices-in-dark-day-for-the-media",
      },
      {
        rank: 28,
        title:
          "“Meta spent almost as much as the Manhattan Project on GPUs in today's dollars” (twitter.com/emollick)",
        link: "https://twitter.com/emollick/status/1786213463456448900",
      },
      {
        rank: 29,
        title:
          "North Yorkshire Council to phase out apostrophe use on street signs (bbc.co.uk)",
        link: "https://www.bbc.co.uk/news/uk-england-york-north-yorkshire-68942321",
      },
      {
        rank: 30,
        title: "Decoding UTF8 with parallel extract (nrk.neocities.org)",
        link: "https://nrk.neocities.org/articles/utf8-pext",
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
          "Convex - 풀스택 앱 개발을 위한 BaaS 오픈소스 (github.com/get-convex)",
        link: "https://github.com/get-convex/convex-backend",
      },
      {
        rank: 2,
        title:
          "llm.c, 이제 멀티GPU 트레이닝을 지원하며 PyTorch보다 ~7% 빠름 (twitter.com/karpathy)",
        link: "https://twitter.com/karpathy/status/1786461447654125625",
      },
      {
        rank: 3,
        title: "GN⁺: JSON Path 사용법 (bump.sh)",
        link: "https://bump.sh/blog/how-to-use-json-path",
      },
      {
        rank: 4,
        title:
          "Ask HN: 멋져 보이는 스타트업 데모는 어떻게 만드나요? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40231790",
      },
      {
        rank: 5,
        title:
          "GN⁺: AI Copilot이 코딩 교육의 패러다임을 변화시키고 있음 (spectrum.ieee.org)",
        link: "https://spectrum.ieee.org/ai-coding",
      },
      {
        rank: 6,
        title:
          "Lunatik - Lua로 리눅스 커널을 스크립팅하는 프레임워크 (github.com/luainkernel)",
        link: "https://github.com/luainkernel/lunatik",
      },
      {
        rank: 7,
        title:
          "GN⁺: 닌텐도, GitHub에 에뮬레이터 관련으로 8,000건 이상의 DMCA 삭제 요청 보내 (engadget.com)",
        link: "https://www.engadget.com/nintendo-blitzes-github-with-over-8000-emulator-related-dmca-takedowns-200021877.html",
      },
      {
        rank: 8,
        title:
          "Y Combinator 없이 미국 진출하기 (feat. Techstars) (plugbear.io)",
        link: "https://plugbear.io/posts/ko/entering-us-market-without-yc",
      },
      {
        rank: 9,
        title: "당신이 바로, 당신이 찾던 기술 코파운더에요 (every.to)",
        link: "https://every.to/p/you-are-the-technical-cofounder-you-need",
      },
      {
        rank: 10,
        title: "Cria - Python으로 간단히 LLM 구동하기 (github.com/leftmove)",
        link: "https://github.com/leftmove/cria",
      },
      {
        rank: 11,
        title:
          "Fluent - 자연스러운 번역을 위한 로컬라이제이션 시스템 (projectfluent.org)",
        link: "https://projectfluent.org/",
      },
      {
        rank: 12,
        title: "Freeter - 모두를 위한 오거나이저 앱 오픈소스 (freeter.io)",
        link: "https://freeter.io/",
      },
      {
        rank: 13,
        title: "Claude, iOS용 앱 공개 (apps.apple.com)",
        link: "https://apps.apple.com/us/app/claude/id6473753684",
      },
      {
        rank: 14,
        title: "GN⁺: 모든 중국 지도의 오류 (medium.com/@anastasia.bizyayeva)",
        link: "https://medium.com/@anastasia.bizyayeva/every-map-of-china-is-wrong-bc2bce145db2",
      },
      {
        rank: 15,
        title:
          "인증서 문제로 인한 cdn.jsdelivr.net 접속 불능 사태 (github.com/jsdelivr)",
        link: "https://github.com/jsdelivr/jsdelivr/issues/18565",
      },
      {
        rank: 16,
        title:
          "GN⁺: SSH를 통해서 커피를 판매하는 새로운 스타트업 (terminal.shop)",
        link: "https://www.terminal.shop/",
      },
      {
        rank: 17,
        title:
          "Show GN: 개발자라면 알고 있으면 좋을 사이트 (dev-ranking.vercel.app)",
        link: "https://news.hada.io/topic?id=14558",
      },
      {
        rank: 18,
        title: "GN⁺: BASIC 프로그래밍 언어 60주년 (arstechnica.com)",
        link: "https://arstechnica.com/gadgets/2024/05/the-basic-programming-language-turns-60/",
      },
      {
        rank: 19,
        title:
          "Show GN: 서버 업로드 없이 HEIC/HEIF를 JPG/PNG로 변환해주는 웹 앱 (heif.pages.dev)",
        link: "https://news.hada.io/topic?id=14597",
      },
      {
        rank: 20,
        title:
          "OpenVoice v2 - 다재다능한 인스턴트 음성 복제 (github.com/myshell-ai)",
        link: "https://github.com/myshell-ai/OpenVoice",
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
        icon: 'https://media.disquiet.io/images/product/thumbnail/b94144c29c079299a94b1c5477292b1438c39703c2013677d56d32855ef461b7?w=64&f=webp")',
        title: "CODI 코디",
        link: "https://disquiet.io/product/codi-%EC%BD%94%EB%94%94",
      },
      {
        rank: 2,
        icon: 'https://media.disquiet.io/images/product/thumbnail/4ed0750442816dd5dba753c4adb51cc47115c0889df231ecd45abb72fe8c1598?w=64&f=webp")',
        title: "phase",
        link: "https://disquiet.io/product/phase",
      },
      {
        rank: 3,
        icon: 'https://media.disquiet.io/images/product/thumbnail/968b73ba296569f1e076ac83128a4e0ff5103c5c08f6d139fa48b3b973eafa99?w=64&f=webp")',
        title: "짤뮤니티",
        link: "https://disquiet.io/product/%EC%A7%A4%EB%AE%A4%EB%8B%88%ED%8B%B0",
      },
      {
        rank: 4,
        icon: 'https://media.disquiet.io/images/product/thumbnail/51a2cfe8ce6380765712f323e988879da6e07edab057598d8d4be2ac6ee3dd75?w=64&f=webp")',
        title: "지하철톡",
        link: "https://disquiet.io/product/%EC%A7%80%ED%95%98%EC%B0%B0%ED%86%A1",
      },
      {
        rank: 5,
        icon: 'https://media.disquiet.io/images/product/thumbnail/74f619425e278d7600a627515d0f0b0363827bb3bcaf9de58169a0a23c55bc57?w=64&f=webp")',
        title: "oursymbol",
        link: "https://disquiet.io/product/oursymbol",
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
        icon: "https://ph-files.imgix.net/85680201-b41f-4658-9b07-ca85721f4343.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "EasyFrontend",
        link: "https://www.producthunt.com/posts/easyfrontend",
      },
      {
        rank: 2,
        icon: "https://ph-files.imgix.net/b8c70335-0711-4025-9759-c1d573772d5d.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "MicroAssets",
        link: "https://www.producthunt.com/posts/microassets",
      },
      {
        rank: 3,
        icon: "https://ph-files.imgix.net/4df0f404-a60e-46bb-b73e-a46f5e346ea8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "AgentCrew",
        link: "https://www.producthunt.com/posts/agentcrew",
      },
      {
        rank: 4,
        icon: "https://ph-files.imgix.net/969640f4-a56d-4363-91b7-95bdf1124259.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Iconbuddy Figma Plugin",
        link: "https://www.producthunt.com/posts/iconbuddy-figma-plugin",
      },
      {
        rank: 5,
        icon: "https://ph-files.imgix.net/7a7e3476-a1a3-4c87-a60a-7a0c7719f430.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Hammer",
        link: "https://www.producthunt.com/posts/hammer-3",
      },
      {
        rank: 6,
        icon: "https://ph-files.imgix.net/0624597c-8325-415e-8db0-06ac0f5c895a.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Actionize AI",
        link: "https://www.producthunt.com/posts/actionize-ai",
      },
      {
        rank: 7,
        icon: "https://ph-files.imgix.net/c71271be-4ec8-4733-bf2d-33f6e8153304.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "ContentPie",
        link: "https://www.producthunt.com/posts/contentpie",
      },
      {
        rank: 8,
        icon: "https://ph-files.imgix.net/781fe893-e8e1-4e96-bd90-d90834d1390c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Copilot Workspace Raycast Extension",
        link: "https://www.producthunt.com/posts/copilot-workspace-raycast-extension",
      },
      {
        rank: 9,
        icon: "https://ph-files.imgix.net/83f02b17-0974-49a3-be60-ac1752bd27da.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Facta",
        link: "https://www.producthunt.com/posts/facta",
      },
      {
        rank: 10,
        icon: "https://ph-files.imgix.net/421dfa09-140a-4296-9fad-e3273e03d29a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Piips",
        link: "https://www.producthunt.com/posts/piips",
      },
      {
        rank: 11,
        icon: "https://ph-files.imgix.net/ab9656be-6c1d-421c-b18f-3425cc4e7f21.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "MoneyMate - Chores & Allowance",
        link: "https://www.producthunt.com/posts/moneymate-chores-allowance",
      },
      {
        rank: 12,
        icon: "https://ph-files.imgix.net/37b7af9d-2b6a-47db-b947-60623369c5dc.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "NeighborHoodShare",
        link: "https://www.producthunt.com/posts/neighborhoodshare",
      },
      {
        rank: 13,
        icon: "https://ph-files.imgix.net/76037dcc-ecd1-4a93-bae3-ca8dcff44e44.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Pressmaster.ai",
        link: "https://www.producthunt.com/posts/pressmaster-ai",
      },
      {
        rank: 14,
        icon: "https://ph-files.imgix.net/2e62489e-b762-4432-b6ce-d6a0f28ee9b2.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "oss.gallery",
        link: "https://www.producthunt.com/posts/oss-gallery",
      },
      {
        rank: 15,
        icon: "https://ph-files.imgix.net/dcfc5733-a56c-40b6-bb03-5f874cec34d3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Logoit",
        link: "https://www.producthunt.com/posts/logoit",
      },
      {
        rank: 16,
        icon: "https://ph-files.imgix.net/ef501ea4-5ada-4c63-a3fe-c75c64b98c80.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Creatoor AI",
        link: "https://www.producthunt.com/posts/creatoor-ai",
      },
      {
        rank: 17,
        icon: "https://ph-files.imgix.net/15d9ad1e-4ee3-4429-9082-6b04614238fb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "CallBud AI",
        link: "https://www.producthunt.com/posts/callbud-ai",
      },
      {
        rank: 18,
        icon: "https://ph-files.imgix.net/fc83ba48-f3f9-4b10-8f6f-f185756fda7b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "PaddleBoat",
        link: "https://www.producthunt.com/posts/paddleboat",
      },
      {
        rank: 19,
        icon: "https://ph-files.imgix.net/2e8527b5-5d7d-4d47-8348-961c9896c93d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
        title: "Boom",
        link: "https://www.producthunt.com/posts/boom-6",
      },
      {
        rank: 20,
        icon: "https://ph-files.imgix.net/d95fa22d-1597-4ebe-8a22-c28fc63be449.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop",
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
