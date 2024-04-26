"use client";

import useAmplitudeContext from "../lib/core/amplitude/use-amplitude-context";
import { techBlogs } from "../lib/data";

const TechBlogList = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  const log = (obj: any) => {
    trackAmplitudeEvent("click", obj);
  };
  return (
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
                    <a
                      key={index}
                      href={page.link}
                      className="block"
                      onClick={() =>
                        log({ what: "tech-blog-link", value: page.title })
                      }
                    >
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
  );
};

export default TechBlogList;
