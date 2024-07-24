import "@/components/common/MarkdownRender.css";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeStyle from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <article className="prose dark:prose-invert">
      <Markdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={codeStyle}
                customStyle={{
                  padding: "0",
                  margin: "0",
                  background: "transparent",
                }}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </article>
  );
};

export { MarkdownRenderer };
