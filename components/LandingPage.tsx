import Navbar from "@/components/Navbar";
import Typing from "@/components/Typing";
const LandingPage = () => {
  return (
    <div
      className="min-h-screen rounded-sm shadow-xl shadow-bg bg-cover  bg-custom-gradient bg-custom-size bg-custom-position h-screen  "
      style={{}}
    >
      <Navbar />

      <div className="md:text-[5rem]  text-black font-bold  bg-transparent p-5 m-auto mt-[240px] w-[90vw]">
        <Typing text={"Coming soon!"} />
      </div>
    </div>
  );
};

export default LandingPage;
