import Image from "next/image";
import { ContentsData } from "./lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-4xl font-mono text-sm grid grid-cols-2 gap-4">
        {ContentsData.map((block, index) => {
          return (
            <div key={index}>
              <div className="font-bold  text-lg">{block.title}</div>
              <div className="h-[1px] bg-gray-700 mb-2" />
              <div>
                {block.contents.map((content, index) => {
                  return (
                    <div key={index}>
                      <span>{content.rank}. </span>
                      <span>{content.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
