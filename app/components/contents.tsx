"use client";

import Link from "next/link";
import { ContentsData } from "../lib/data";
import Image from "next/image";
import useAmplitudeContext from "../lib/core/amplitude/use-amplitude-context";

const Contents = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  const log = (obj: any) => {
    trackAmplitudeEvent("click", obj);
  };
  return (
    <div className="z-10 w-full max-w-4xl font-mono text-sm grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 py-6">
      {ContentsData.map((block, index) => {
        return (
          <div key={index}>
            <div className="flex items-end">
              {block.img ? (
                <Link
                  href={block.link || ""}
                  onClick={() => log({ what: "out-link", value: block.key })}
                >
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
              {block.contents.length > 5 ? (
                <Link
                  href={`/${block.key}`}
                  onClick={() => log({ what: "see more", value: block.key })}
                >
                  <div className="p-1 underline ml-2">더보기</div>
                </Link>
              ) : null}
            </div>

            <div className="h-[1px] bg-gray-700 mb-2" />
            <div>
              {block.contents.slice(0, 5).map((content, index) => {
                return (
                  <div key={index} className="mb-1">
                    <Link
                      href={content.link}
                      onClick={() =>
                        log({
                          what: "in-link",
                          value: block.key,
                          title: content.title,
                        })
                      }
                    >
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
  );
};

export default Contents;
