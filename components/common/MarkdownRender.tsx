import "@/components/common/MarkdownRender.css";
import { ClassAttributes, HTMLAttributes } from "react";
import Markdown, { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const Code = ({
  children,
  className,
  ...rest
}: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(className ?? "");
  if (!match) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  }
  return (
    <SyntaxHighlighter
      PreTag="div"
      language={match[1]}
      style={codeStyle}
      customStyle={{ padding: 0, margin: 0, background: "transparent" }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <article className="prose dark:prose-invert">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{ code: Code }}
      >
        {content}
      </Markdown>
    </article>
  );
};

export { MarkdownRenderer };
