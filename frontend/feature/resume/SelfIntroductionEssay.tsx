import { MarkdownRenderer } from "@/frontend/common/MarkdownRender";
import { CoverLetterContent } from "@/frontend/feature/resume/CoverLetterContent";
import { piiStrings } from "@/frontend/feature/resume/PIIData";
import React from "react";

const SelfIntroductionEssay: React.FC = () => {
  const hide = true;
  let content = CoverLetterContent;
  if (hide) {
    for (const piiString of piiStrings) {
      content = content.replaceAll(piiString, "******");
    }
  }

  return (
    <article
      className="flex flex-col items-center
          max-w-2xl mx-auto p-8 rounded-lg my-10
        dark:shadow-gray-700 shadow-lg animate-focusIn
        mb-10 lg:min-w-[840px]"
    >
      <MarkdownRenderer content={content} className="lg:min-w-[800px]" />
    </article>
  );
};

export default SelfIntroductionEssay;
