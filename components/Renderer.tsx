"use client";
import "../app/stackedit.css";

interface props {
  html: string;
}

const Renderer = ({ html }: props) => {
  return (
    <div className="min-w-[90vw]">
      <article
        className="prose-lg prose-headings:font-bold"
        dangerouslySetInnerHTML={{ __html: html }}
      ></article>
    </div>
  );
};

export default Renderer;
