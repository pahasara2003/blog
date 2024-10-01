import BlogPanel from "@/components/BlogPanel";
import LandingPage from "@/components/LandingPage";
import Model from "@/components/3DModel";
import type { Metadata } from "next";

const Page = () => {
  return (
    <section className="bg-fg p-3">
      <LandingPage />
      {/* <BlogPanel /> */}
    </section>
  );
};

export default Page;
