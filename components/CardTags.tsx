import React from "react";
import Icon from "./Icons";

interface tag {
  text: string;
  tag: string;
}

interface props {
  tags: tag[];
}

const CardTags = ({ tags }: props) => {
  return (
    <div className="flex  w-full justify-between">
      {tags.slice(0, 3).map((t) => {
        return <Icon {...t} key={Math.random()} />;
      })}
    </div>
  );
};

export default CardTags;
