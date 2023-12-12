import Navbar from "@/components/Navbar";
import Anime from "./Anime";
const LandingPage = () => {
  return (
    <div className="min-h-[80vh] bg-fg">
      <Navbar />
      <h1 className="md:text-[5rem] text-[2rem] text-white tracking-wider w-fit p-5 m-auto mt-[100px] bg-s2">
        {"<Hello World/>"}
      </h1>
    </div>
  );
};

export default LandingPage;
