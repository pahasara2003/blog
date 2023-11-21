"use client";
// import React from "react";
// import Markdown from "react-markdown";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import hljs from "highlight.js";
// import javascript from "highlight.js/lib/languages/javascript";
// import "highlight.js/styles/default.css";

// interface props {
//   html: string;
// }

// const Renderer = ({ html }: props) => {
//   hljs.registerLanguage("javascript", javascript);

//   hljs.highlightAll();
//   return (
//     <div dangerouslySetInnerHTML={{ __html: html }}></div>
//     // import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface props {
  html: string;
}

const Renderer = ({ html }: props) => {
  return (
    <article className="prose lg:prose-xl prose-stone prose-pre:bg-transparent prose-a:text-sky-600">
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={atomDark}
                wrapLines={true}
                wrapLongLines
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {html}
      </Markdown>
    </article>
  );
};

export default Renderer;
//     `}
//     //     </SyntaxHighlighter>
//     //   );
// //   );
// // };

// // export default Renderer;
