import { MarkdownRenderer } from "@/frontend/common/MarkdownRender";
import { ResumeContent } from "@/frontend/feature/resume/ResumeContent";

export default function Resume() {
  return (
    <article
      className="flex flex-col items-center
          max-w-2xl mx-auto p-8 rounded-lg my-10
        dark:shadow-gray-700 shadow-lg animate-focusIn
        mb-10 lg:min-w-[840px]"
    >
      <MarkdownRenderer content={ResumeContent} className="lg:min-w-[800px]" />
    </article>
  );
}
