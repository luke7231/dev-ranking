import Image from "next/image";
import { ContentsData, techBlogs } from "./lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4 flex justify-between items-center">
        <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        <Link href={"/newsletter"}>
          <span className="text-sm font-medium">뉴스레터 신청</span>
        </Link>
      </header>
      <div className="z-10 w-full max-w-4xl font-mono text-sm grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 py-6">
        {ContentsData.map((block, index) => {
          return (
            <div key={index}>
              <div className="flex items-end">
                {block.img ? (
                  <Link href={block.link || ""}>
                    <Image
                      alt="logo of topic"
                      src={block.img}
                      width={48}
                      height={48}
                      className="rounded-sm"
                    />
                  </Link>
                ) : null}
                <div className="font-bold text-lg ml-2">{block.title}</div>
              </div>

              <div className="h-[1px] bg-gray-700 mb-2" />
              <div>
                {block.contents.map((content, index) => {
                  return (
                    <div key={index} className="mb-1">
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
          );
        })}
      </div>
      <div className="flex flex-col w-full max-w-4xl mt-16 mb-12">
        <span className="font-bold text-lg border border-gray-500 pl-2 py-2 mb-6 bg-black text-white">
          TECH BLOGS
        </span>
        <div className="flex flex-wrap gap-x-10 gap-y-6 pl-2">
          {techBlogs.map((blog, index) => {
            return (
              <div key={index}>
                <div className="font-semibold">{blog.topic}</div>
                <div className="h-[1px] bg-gray-700 mb-2" />
                <div>
                  {blog.list.map((page, index) => {
                    return (
                      <a key={index} href={page.link} className="block">
                        {page.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
