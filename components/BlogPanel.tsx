import getMetaData from "@/components/getMetaData";
import BlogPageContainer from "@/components/BlogPageContainer";

const BlogPanel = () => {
  let postMetaData = getMetaData();
  postMetaData = postMetaData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="p-10 w-[100%] ">
      <BlogPageContainer postMetaData={postMetaData} />
    </div>
  );
};

export default BlogPanel;
