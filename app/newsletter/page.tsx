import Image from "next/image";
import Link from "next/link";
import NewsLetterSubmit from "../components/newsletter/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4">
        <Link href={"./"} className="inline-block">
          <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        </Link>
      </header>
      <div className="z-10 w-full max-w-4xl font-mono py-6">
        <div className="w-full bg-gray-300 h-[1px] my-2 mb-6"></div>
        <h3 className="mb-4">뉴스레터 사전예약을 받습니다.</h3>
        <NewsLetterSubmit />
        <div className="w-full bg-gray-300 h-[1px] my-2 mt-8"></div>
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">이런 한 분을 찾습니다</h2>
          <div className="pl-4">
            <h3 className="mb-2">
              ∙ 검증된 콘텐츠들만 핵심 위주로 챙겨보고 싶은 사람
            </h3>
            <h3>∙ 매일 아침 10분을 투자할 수 있는 사람</h3>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">뉴스레터는 이러합니다</h2>
          <div className="pl-0 pt-4">
            <div className="p-4 bg-[#fff]">
              <h3>
                ∙ 월요일: DEV RANKING 내 베스트 콘텐츠 요약 및 정리본 제공
              </h3>
              <h4 className="text-sm text-gray-400 pl-4">
                *(해커뉴스, 긱뉴스, 커리어리, EO, Back-end, Front-end)
              </h4>
              <h4 className="text-sm text-gray-400 pl-4">
                *(PDF or Notion파일 제공)
              </h4>
            </div>
            <br />

            <div className="p-4 bg-[#fff]">
              <h3>∙ 화요일: 실리콘밸리 테크 블로그 수번역-핵심 요약</h3>
              <h4 className="text-sm text-gray-400 pl-4">
                *(신규 콘텐츠위주, 콘텐츠 없는 주에는 기존 출간된 콘텐츠로 제공)
              </h4>
            </div>
            <br />

            <div className="p-4 bg-[#fff]">
              <h3>∙ 수요일: TECH 저널리즘 수번역-핵심 요약</h3>
              <h4 className="text-sm text-gray-400 pl-4">
                (TechCrunch, TheNextWeb, Wired, FirstPost, GizModo etc..){" "}
              </h4>
            </div>
            <br />

            <div className="p-4 bg-[#fff]">
              <h3>
                ∙ 목요일: 국내 TOP 티어 테크 블로그 신규 콘텐츠 알림 및 핵심
                요약
              </h3>
            </div>
            <br />

            <div className="p-4 bg-[#fff]">
              <h3>∙ 금요일: 위클리 트렌드 프로덕트 분석</h3>
              <h4 className="text-sm text-gray-400 pl-4">
                (disquiet, product hunt)
              </h4>
              <h3 className="pl-4">
                + 스타트업 동향(시장, 투자) 흐름 정리 제공
              </h3>
            </div>
            <br />

            <h3 className="pt-3">
              ∙(보너스) 주기별 각종 Dev 컨퍼런스 영상 핵심 요약
            </h3>
          </div>
          <br />
          <br />
          <div className="pl-4">
            [추가 정보]
            <h3 className="mb-1">∙ 주기: 요일별 5회 발행 (총20-25회)</h3>
            <h3 className="mb-1">∙ 분량: 10분 집중할 수 있는 양으로</h3>
            <h3 className="mb-0 text-red-600">
              ∙ 가격: 월 15,000원 ~ 18,000원
            </h3>
            <h4 className="mb-1 text-sm text-gray-400 pl-4">(*가격 책정중)</h4>
            <h3 className="mb-4">∙ 사전예약혜택: 첫 달 결제 50% 할인</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
