import Image from "next/image";
import NewsletterLink from "./components/newsletter/newsletter-link";
import Contents from "./components/contents";
import TechBlogList from "./components/tech-blog-list";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 lg:px-0">
      <div className="max-w-4xl ">
        <div>서비스가 종료되었습니다. 감사합니다.</div>
      </div>
    </main>
  );
}
