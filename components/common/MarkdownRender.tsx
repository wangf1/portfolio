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
    <div
      className="xl:col-span-3 xl:row-span-2 xl:pb-0 m-6
        prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto
        max-w-none pb-8 pt-10 dark:prose-invert"
    >
      <article className="">
        <Markdown
          children={content}
          remarkPlugins={[remarkGfm]}
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
                  style={codeStyle}
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
    </div>
  );
};

export { MarkdownRenderer };
