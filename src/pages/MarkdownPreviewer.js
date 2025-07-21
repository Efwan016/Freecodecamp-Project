import React, { useState } from "react";
import { marked } from "marked" ;
import "../index.css" ;

const initialMarkdown = `# welcome to my Markdown Previewer !

## This is a sub heading
[Visite Github](https://github.com/Efwan016)

Inline code: \`<div></div>\`

\`\`\`javascript
function sayHello() {
console.lg("Hello!");
}
\`\`\`
- Item 1
- Item 2
> this is a blockquote!
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bold Text**
`;

function MarkdownPreviewer() {
    const [markdown, setMarkdown] = useState(initialMarkdown);

    return (
        <div className="markdown-container">
            <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    );
}

export default MarkdownPreviewer;