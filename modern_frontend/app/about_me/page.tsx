import { getMarkdownContent } from "@/lib/markdownToHtml";

export default async function AboutMe() {
  const { contentHtml, data } = await getMarkdownContent("about_me.md");
  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
