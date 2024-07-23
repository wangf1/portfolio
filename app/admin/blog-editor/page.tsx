import { MarkdownRenderer } from "@/components/common/MarkdownRender";

export default function BlogEditPage() {
  const markdownContent = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |

  Here is some JavaScript code:
  ~~~js
  let code = 'This is a code block';
  ~~~
  # Heading 1
  ## Heading 2
  ### Heading 3
  This is a paragraph with some **bold text** and _italic text_.

  - List item 1
  - List item 2
  - List item 3

  1. Ordered item 1
  2. Ordered item 2
  3. Ordered item 3

  > This is a blockquote.

  \`\`\`javascript
  const codeBlock = 'This is a code block';
  console.log(codeBlock);
  \`\`\`

  [This is a link](https://example.com)

  `;
  return (
    <div>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}
