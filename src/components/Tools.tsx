import RemoteDataStatus from "./RemoteDataStatus";
import { useState } from "react";
import useRemoteData from "../hooks/useRemoteData";
import useScrollReveal from "../hooks/useScrollReveal";
import type { Tool } from "../types/portfolio";

function ToolTile({ tool, index }: { tool: Tool; index: number }) {
  const reveal = useScrollReveal((index % 5) * 45);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <li ref={reveal} className="tool-tile">
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
          <span>{tool.shortName ?? tool.name.slice(0, 2)}</span>
        )}
      </span>
      <span className="tool-name">{tool.name}</span>
      {tool.category ? (
        <span className="tool-category">{tool.category}</span>
      ) : null}
    </li>
  );
}

export default function Tools() {
  const {
    data: tools,
    isLoading,
    errorMessage,
  } = useRemoteData<Tool[]>(
    "/data/tools.json",
    [],
    "Tools are unavailable right now.",
  );
  return (
    <div className="tools-row">
      <div className="toolkit-heading">
        <h3>In my toolkit</h3>
        <p>The tools behind the work, from first commit to production.</p>
      </div>
      <RemoteDataStatus
        isLoading={isLoading}
        errorMessage={errorMessage}
        isEmpty={!tools.length}
        loadingMessage="Loading tools…"
        emptyMessage="No tools found."
      />
      <ul aria-label="Development toolkit">
        {tools.map((tool, index) => (
          <ToolTile key={tool.id} tool={tool} index={index} />
        ))}
      </ul>
    </div>
  );
}
