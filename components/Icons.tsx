import React from "react";
import { Image } from "@nextui-org/react";

interface props {
  tag: string;
  text: string;
}

const Icon = ({ tag, text }: props) => {
  const images: any = {};
  return (
    <div className="flex gap-1 items-center">
      <Image
        alt={text}
        src={`/icons/${tag}.png`}
        width={20}
        className="rounded-none"
      />
      <span className="text-sm font-bold text-gray-500">{text}</span>
    </div>
  );
};

export default Icon;
