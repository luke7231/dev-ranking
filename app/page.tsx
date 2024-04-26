import Image from "next/image";
import { techBlogs } from "./lib/data";
import NewsletterLink from "./components/newsletter/newsletter-link";
import Contents from "./components/contents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4 flex justify-between items-center">
        <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        <NewsletterLink />
      </header>
      <Contents />

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
