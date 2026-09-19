import { useState } from "react";
import { tools } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";
import type { Tool } from "../types/portfolio";

function ToolTile({ tool, index }: { tool: Tool; index: number }) {
  const reveal = useScrollReveal((index % 5) * 45);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <li ref={reveal} className="tool-tile" title={tool.category}>
      <span className="tool-logo" aria-hidden="true">
        {tool.icon && !imageFailed ? (
          <img
            src={tool.icon}
            alt=""
            width={38}
            height={38}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span>{tool.name.slice(0, 2)}</span>
        )}
      </span>
      <span className="tool-name">{tool.name}</span>
    </li>
  );
}

export default function Tools() {
  return (
    <div className="tools-row">
      <div className="toolkit-heading">
        <h3>In my toolkit</h3>
        <p>The tools behind the work, from first commit to production.</p>
      </div>
      <ul aria-label="Development toolkit">
        {tools.map((tool, index) => (
          <ToolTile key={tool.id} tool={tool} index={index} />
        ))}
      </ul>
    </div>
  );
}
