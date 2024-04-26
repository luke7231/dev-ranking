import Image from "next/image";
import NewsletterLink from "./components/newsletter/newsletter-link";
import Contents from "./components/contents";
import TechBlogList from "./components/tech-blog-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4 flex justify-between items-center">
        <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        <NewsletterLink />
      </header>
      <Contents />
      <TechBlogList />
    </main>
  );
}
