import { MarkdownRenderer } from "@/frontend/common/MarkdownRender";
import { CoverLetterContent } from "@/frontend/feature/resume/CoverLetterContent";
import React from "react";

const SelfIntroductionEssay: React.FC = () => {
  return (
    <article
      className="flex flex-col items-center
          max-w-2xl mx-auto p-8 rounded-lg my-10
        dark:shadow-gray-700 shadow-lg animate-focusIn
        mb-10"
    >
      <MarkdownRenderer content={CoverLetterContent} />
    </article>
  );
};

export default SelfIntroductionEssay;
