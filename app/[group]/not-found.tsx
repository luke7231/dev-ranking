import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-0">
      <header className="w-full max-w-4xl py-4">
        <Link href={"./"} className="inline-block">
          <Image alt="logo" src={"/logo.png"} width={132} height={74.25} />
        </Link>
      </header>
      <div className="h-[500px] flex justify-center items-center">
        <div className="flex flex-col">
          NOT FOUND!
          <Link
            href="/"
            className="mt-3 p-3 bg-gray-900 text-[#fff] rounded-lg sm:mt-0"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
