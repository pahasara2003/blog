"use client";
import { TypeAnimation } from "react-type-animation";

interface props {
  text: string;
}

const Typing = ({ text }: props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi!",
        1000,
        "This website is under construction",
        1000,
        "Coming soon",
        1000,
      ]}
      wrapper="div"
      className="text-center font-serif text-white"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Typing;
