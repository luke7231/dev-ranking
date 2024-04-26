"use client";

import useAmplitudeContext from "@/app/lib/core/amplitude/use-amplitude-context";
import Link from "next/link";

const NewsletterLink = () => {
  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickHandler = () => {
    trackAmplitudeEvent("click", {
      what: "newsletter link",
    });
  };
  return (
    <Link href={"/newsletter"} onClick={clickHandler}>
      <span className="text-md">정기 뉴스레터 신청</span>
    </Link>
  );
};

export default NewsletterLink;
