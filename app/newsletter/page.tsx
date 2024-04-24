import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4">
        <Link href={"./"}>
          <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        </Link>
      </header>
    </main>
  );
}
