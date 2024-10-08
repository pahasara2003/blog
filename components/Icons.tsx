import React from "react";
import { Image } from "@nextui-org/react";

interface props {
  tag: string;
  text: string;
}

const Icon = ({ tag, text }: props) => {
  const images: any = {};
  return (
    <div className="flex gap-1 h-full items-center">
      <Image
        alt={text}
        src={`/icons/${tag}.webp`}
        className="rounded-none w-[20px] md:w-[20px] "
      />
      <span className="text-sm  tracking-widest dark:text-white">{text}</span>
    </div>
  );
};

export default Icon;
