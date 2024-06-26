"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";

type Section = {
    title: string,
    description: React.ReactNode,
    badge: string,
    image: string
}

type Props = {
    dummyContent: Section[];
    next: string;
}

export function TracingContent({dummyContent, next}:Props) {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
        <Link href={`/${next}`} className="align-right text-right left-auto hover:text-blue-500">
            {next}
        </Link>
      </div>
    </TracingBeam>
  );
}
