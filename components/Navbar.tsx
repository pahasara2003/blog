"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "@nextui-org/react";

const Navbar = () => {
  const path = usePathname();
  const [light, setLight] = useState(
    sessionStorage.getItem("blog-theme") !== "dark"
  );

  useEffect(() => {
    if (light) {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("blog-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("blog-theme", "dark");
    }
  }, [light]);

  return (
    <nav
      className={` 
       dark:bg-fg gap-10 items-center relative text-[1.2rem] uppercase font-bold tracking-wider bg-white pb-5 h-[90px]  flex justify-center p-5 pb-0`}
    >
      <Switch isSelected={light} onValueChange={setLight} />
      <Link
        href={"/"}
        className={`${
          path === "/" && "text-white bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md  px-2  `}
      >
        Home
      </Link>
      <Link
        href={"/posts"}
        className={`${
          /\bposts/.test(path) && "text-white bg-gradient-to-r from-s1 to-s2"
        } text-center  rounded-md  px-2 `}
      >
        Blog
      </Link>
      <Link
        href={"/projects"}
        className={`${
          /\bprojects/.test(path) &&
          " text-white bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md  px-2 `}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
