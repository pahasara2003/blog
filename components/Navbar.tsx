"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav
      className={` 
       bg-fg gap-10 items-center relative text-[1.2rem] uppercase font-bold tracking-wider h-[120px]  flex justify-center p-5 pb-0 text-white`}
    >
      <Link
        href={"/"}
        className={`${
          path === "/" && " bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md  p-2 text-white `}
      >
        Home
      </Link>
      <Link
        href={"/posts"}
        className={`${
          /\bposts/.test(path) && " bg-gradient-to-r from-s1 to-s2"
        } text-center  rounded-md  p-2 text-white`}
      >
        Blog
      </Link>
      <Link
        href={"/projects"}
        className={`${
          /\bprojects/.test(path) && "  bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md  p-2 text-white `}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
