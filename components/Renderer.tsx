"use client";

interface props {
  html: string;
}

const Renderer = ({ html }: props) => {
  return (
    <div className="md:w-[70vw] bg-white ">
      <script
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_CHTML"
      ></script>

      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </div>
  );
};

export default Renderer;
