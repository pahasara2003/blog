import React from "react";

const ball = (index: any) => {
  return 100;
};

const Anime = () => {
  return (
    <div className="h-[500px] relative w-[500px] bg-fg">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`w-[30px] h-[30px] top-[${ball(
            index
          )}px]  absolute rounded-full bg-s2`}
        ></div>
      ))}
    </div>
  );
};

export default Anime;
