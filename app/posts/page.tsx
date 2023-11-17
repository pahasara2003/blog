import getMetaData from "@/components/getMetaData";
import BlogContainer from "@/components/BlogContainer";

const Page = () => {
  let postMetaData = getMetaData();
  postMetaData = postMetaData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="p-10 w-[100%] ">
      <BlogContainer postMetaData={postMetaData} />
    </div>
  );
};

export default Page;
