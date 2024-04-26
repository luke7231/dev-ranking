import Image from "next/image";
import { ContentsData } from "../lib/data";
import Link from "next/link";
import NewsletterLink from "../components/newsletter/newsletter-link";
import { notFound } from "next/navigation";
interface Props {
  params: {
    group: string;
  };
}

export default function Page({ params: { group } }: Props) {
  const currentGroupData = ContentsData.filter((data) => data.key === group)[0];
  if (!currentGroupData) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4 flex justify-between items-center">
        <Link href={"./"} className="inline-block">
          <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        </Link>
        <NewsletterLink />
      </header>
      <div className="z-10 w-full max-w-4xl font-mono text-sm flex justify-center md:grid-cols-2 gap-x-6 gap-y-10 py-6">
        <div className="max-w-[780px]">
          <div className="flex flex-col w-full">
            <div className="flex-row flex justify-center items-end">
              {currentGroupData?.img ? (
                <Link href={currentGroupData.link || ""} className="">
                  <Image
                    alt="logo of topic"
                    src={currentGroupData.img}
                    width={76}
                    height={76}
                    className="rounded-sm mb-4"
                  />
                </Link>
              ) : null}
            </div>
            <div className="h-[1px] max-w-[780px] bg-gray-700 mb-2" />
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-4">
              {currentGroupData?.contents.map((content, index) => {
                return (
                  <div key={index} className="mb-2">
                    <Link href={content.link}>
                      <span className="text-base">{content.rank}. </span>
                      <span>{content.title}</span>
                      {content.icon ? (
                        <Image
                          src={content.icon}
                          height={24}
                          width={24}
                          alt="trending_product"
                          className="inline rounded-md ml-2 mb-1"
                        />
                      ) : null}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
