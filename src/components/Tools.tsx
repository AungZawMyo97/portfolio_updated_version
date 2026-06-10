import Marquee from "react-fast-marquee";

import RemoteDataStatus from "./RemoteDataStatus";
import ScrollReveal from "./ScrollReveal";
import useRemoteData from "../hooks/useRemoteData";
import type { Tool } from "../types/portfolio";

const TOOLS_ENDPOINT = "/data/tools.json";

type ToolItemProps = {
  tool: Tool;
};

const ToolItem = ({ tool }: ToolItemProps) => {
  return (
    <div
      title={tool.name}
      className="mx-8 md:mx-12 transition-transform duration-300 hover:scale-125 cursor-pointer"
    >
      {tool.iconClass ? (
        <i
          className={`${tool.iconClass} text-7xl drop-shadow-[0_0_18px_rgba(243,183,59,0.18)]`}
        ></i>
      ) : (
        <span className="flex h-24 min-w-32 items-center justify-center rounded-sm border border-pubg-yellow/30 bg-pubg-dark px-5 text-3xl font-bold tracking-wider text-pubg-yellow shadow-lg">
          {tool.shortName ?? tool.name}
        </span>
      )}
    </div>
  );
};

const Tools = () => {
  const {
    data: tools,
    isLoading,
    errorMessage,
  } = useRemoteData<Tool[]>(
    TOOLS_ENDPOINT,
    [],
    "Tools are unavailable right now.",
  );

  return (
    <section className="section-frame section-divider bg-pubg-panel/80 py-14 px-6">
      <ScrollReveal className="max-w-5xl mx-auto flex flex-col items-center gap-6" variant="pop">
        <h2 className="display-title text-5xl lg:text-6xl text-center font-bold tracking-wider text-pubg-text uppercase">
          Tools I'm familiar with
        </h2>

        <RemoteDataStatus
          isLoading={isLoading}
          errorMessage={errorMessage}
          isEmpty={tools.length === 0}
          loadingMessage="Loading tools..."
          emptyMessage="No tools found."
        />

        {!isLoading && !errorMessage && tools.length > 0 && (
          <Marquee
            gradient={false}
            speed={50}
            autoFill={true}
            pauseOnHover={true}
            className="py-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
          >
            {tools.map((tool) => (
              <ToolItem key={tool.id} tool={tool} />
            ))}
          </Marquee>
        )}
      </ScrollReveal>
    </section>
  );
};

export default Tools;
