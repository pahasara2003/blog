"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav
      className={` 
        md:gap-[1vw] items-center bg-bg relative max-md:text-[2.2vw] uppercase font-bold tracking-wider h-[120px]  flex justify-center p-5 pb-0 text-white`}
    >
      <Link
        href={"/"}
        className={`${
          path === "/" && " bg-gradient-to-r from-s1 to-s2"
        }  text-center font-sans  rounded-md  p-2 text-white `}
      >
        Home
      </Link>
      <Link
        href={"/articles"}
        className={`${
          /\bposts/.test(path) && " bg-gradient-to-r from-s1 to-s2"
        } text-center  rounded-md  p-2 text-white`}
      >
        Articles
      </Link>
      {/* <Link
        href={"/projects"}
        className={`${
          /\bprojects/.test(path) && "  bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md  p-2 text-white `}
      >
        Projects
      </Link> */}
      <Link
        href={"/about"}
        className={`${
          /\babout/.test(path) && "  bg-gradient-to-r from-s1 to-s2"
        }  text-center  rounded-md   p-2 text-white `}
      >
        About Me
      </Link>
    </nav>
  );
};

export default Navbar;
