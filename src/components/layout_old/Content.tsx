import React, { ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs/promises";
import path from "path";

const file_name = "MindfireDigitalLLP-Landing";

const Content = async (props: { children: ReactNode }) => {
  const { children } = props;

  const fullPath = path.join(
    process.cwd(),
    "src",
    "markdowns",
    `${file_name}.md`
  );
  const fileContents = await fs.readFile(fullPath, "utf8");

  return (
    <div className='max-w-5xl px-24 py-8 my-0 mx-auto'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2(props) {
            const { ...rest } = props;
            return (
              <h2
                className='text-mindfire-text-black mt-8 mb-4 text-lg font-bold'
                {...rest}
              />
            );
          },
          p(props) {
            const { ...rest } = props;
            return (
              <p
                className='my-4 first-of-type:my-0 text-lg text-mindfire-content-p-text-color'
                {...rest}
              />
            );
          },
          ul(props) {
            const { ...rest } = props;
            return (
              <ul
                className='mt-0 list-disc ps-10 my-4 text-lg text-mindfire-content-p-text-color'
                {...rest}
              />
            );
          },
          li(props) {
            const { ...rest } = props;
            return (
              <li
                className='pb-1 text-lg text-mindfire-content-p-text-color font-semibold'
                {...rest}
              />
            );
          },
          a(props) {
            const { ...rest } = props;
            return (
              <a
                className='text-mindfire-text-red font-semibold text-lg pb-[2px] hover-underline'
                {...rest}
              />
            );
          },
        }}
      >
        {fileContents}
      </Markdown>
      {children}
    </div>
  );
};

export default Content;
