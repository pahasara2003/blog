"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav
      className={`  ${
        !/\bposts/.test(path) &&
        "text-transparent  bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"
      } gap-10 items-center text-[1rem] duration-1000 uppercase font-bold tracking-wider  flex justify-center p-5 pb-0`}
    >
      <Link href={"/"} className={`${path === "/" && "text-[2rem]"} w-[100px]`}>
        Home
      </Link>
      <Link
        href={"/posts"}
        className={`${/\bposts/.test(path) && "text-[2rem]"} w-[100px]`}
      >
        Blog
      </Link>
      <Link
        href={"/projects"}
        className={`${/\bprojects/.test(path) && "text-[2rem]"} w-[100px]`}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
