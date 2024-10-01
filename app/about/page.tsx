import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Page = async () => {
  return (
    <div className="p-10 w-[100%] min-h-[500px] bg-bg text-white flex justify-center items-center  max-md:flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] max-lg:text-[2rem] max-lg:my-5 font-Headers text-center my-10 bg-gradient-to-r px-5 from-s1 to-s2">
          Hi There !
        </h1>
        <Image
          as={NextImage}
          src="/images/about_page_dp.jpg"
          alt="Pahasara Wickramasinghe"
          className="duration-1000 "
          shadow="sm"
          radius="full"
          width={250}
          height={250}
          isBlurred={true}
          isZoomed={true}
        />
      </div>
      <div className="max-md:w-[80vw] md:mt-[140px] text-xl font-serif p-4 py-10 w-[35rem]">
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
        quia. Non asperiores quidem numquam corrupti voluptas vero ullam magni,
        ad dicta laboriosam molestias atque qui, aliquid ipsam, sint tenetur
        a!",
        <div className="font-bold py-2 text-[1.3rem] mt-5  font-sans">
          <hr />
          <br />
          Find me on
        </div>
        <div className="font-sans my-0  text-light text-md">
          <a href="https://github.com/pahasara2003">
            <FaGithub className="inline mr-3" />
            pahasara2003
          </a>
          <br />
          <a href="https://www.instagram.com/paha_zz03/">
            <FaInstagram className="inline mr-3" />
            paha_zz03
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
