"use client";

interface props {
  html: string;
}

const Renderer = ({ html }: props) => {
  return (
    <div className="min-w-[80vw] bg-white ">
      <article
        className="prose-lg prose-headings:font-bold"
        dangerouslySetInnerHTML={{ __html: html }}
      ></article>
    </div>
  );
};

export default Renderer;
