import Image from "next/image";
import NewsletterLink from "./components/newsletter/newsletter-link";
import Contents from "./components/contents";
import TechBlogList from "./components/tech-blog-list";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-0">
      <div className="max-w-4xl">
        <header className="w-full py-4 flex justify-between items-center">
          <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
          {/* <NewsletterLink /> */}
        </header>
        <Contents />
        <TechBlogList />
        <Contact />
      </div>
    </main>
  );
}
