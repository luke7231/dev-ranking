type contents = {
  rank?: number;
  title: string;
  link: string;
};

interface Data {
  title: string;
  contents: contents[];
}

export const ContentsData: Data[] = [
  {
    title: "Careerly Top5 (Weekly)",
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
    ],
  },
  {
    title: "HakerNews Top5",
    contents: [
      {
        rank: 1,
        title:
          "Ruby vs. Python comes down to the for loop (2021) (softwaredoug.com)",
        link: "https://softwaredoug.com/blog/2021/11/12/ruby-vs-python-for-loop.html",
      },
      {
        rank: 2,
        title: "I should have loved biology (2020) (jsomers.net)",
        link: "https://jsomers.net/i-should-have-loved-biology/",
      },
      {
        rank: 3,
        title: "Pico.sh – Hacker Labs (github.com/picosh)",
        link: "https://github.com/picosh/pico",
      },
      {
        rank: 4,
        title:
          "Penzai: JAX research toolkit for building, editing, and visualizing neural nets (github.com/google-deepmind)",
        link: "https://github.com/google-deepmind/penzai",
      },
      {
        rank: 5,
        title:
          "The failure of the Domino's 30-minute delivery guarantee (thehustle.co)",
        link: "https://thehustle.co/originals/the-failure-of-the-dominos-30-minute-delivery-guarantee",
      },
    ],
  },
  {
    title: "GeekNews Top5",
    contents: [
      {
        rank: 1,
        title: "당신이 기술 코파운더를 찾을 수 없는 이유 (breakneck.dev)",
        link: "https://www.breakneck.dev/blog/no-tech-cofounder",
      },
      {
        rank: 2,
        title:
          "Python을 학습하기에 좋은 고품질 스크립트/작은 라이브러리는? (news.ycombinator.com)",
        link: "https://news.ycombinator.com/item?id=40085887",
      },
      {
        rank: 3,
        title:
          "Pretzel - 데이터 탐색/시각화를 위한 오픈소스 오프라인 브라우저 기반 도구 (github.com/pretzelai)",
        link: "https://github.com/pretzelai/pretzelai",
      },
      {
        rank: 4,
        title:
          "GN⁺: 분산형 SQLite: 패러다임의 전환인가 과장된 선전인가? (kerkour.com)",
        link: "https://kerkour.com/distributed-sqlite",
      },
      {
        rank: 5,
        title: "GN⁺: Valkey가 빠르게 Redis를 대체하고 있음 (devops.com)",
        link: "https://devops.com/valkey-is-rapidly-overtaking-redis/",
      },
    ],
  },
  {
    title: "Trending product (disquiet)",
    contents: [
      {
        rank: 1,
        title: "Reliv 릴리브 QA 자동화",
        link: "https://disquiet.io/product/reliv-%EB%A6%B4%EB%A6%AC%EB%B8%8C-qa-%EC%9E%90%EB%8F%99%ED%99%94",
      },
      {
        rank: 2,
        title: "바퀴벌레 감별기",
        link: "https://disquiet.io/product/%EB%B0%94%ED%80%B4%EB%B2%8C%EB%A0%88-%EA%B0%90%EB%B3%84%EA%B8%B0",
      },
      {
        rank: 3,
        title: "모티브",
        link: "https://disquiet.io/product/%EB%AA%A8%ED%8B%B0%EB%B8%8C",
      },
      {
        rank: 4,
        title: "플라이어",
        link: "https://disquiet.io/product/%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4-1713623995850",
      },
      {
        rank: 5,
        title: "SumOne",
        link: "https://disquiet.io/product/sum-one-1713226447105",
      },
    ],
  },
  {
    title: "Careerly Top5 (Monthly)",
    contents: [
      {
        rank: 1,
        title: "🕊️ 2024 버클리즈 Java SpringBoot 인터뷰 질문 (1)",
        link: "https://careerly.co.kr/comments/102333",
      },
      {
        rank: 2,
        title: "개발자👨‍💻에게 기술 블로그는 필수일까?",
        link: "https://careerly.co.kr/comments/101712",
      },
      {
        rank: 3,
        title: "Spring 면접 전 살펴보기 위한 Q&A 35가지 (2024년 ver)",
        link: "https://careerly.co.kr/comments/101340",
      },
      {
        rank: 4,
        title: "아파치 톰캣 내부구조",
        link: "https://careerly.co.kr/comments/101977",
      },
      {
        rank: 5,
        title: "Netflix의 Java 사용 변천사 (번역)",
        link: "https://careerly.co.kr/comments/102677",
      },
    ],
  },
];
