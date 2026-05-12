import Marquee from "react-fast-marquee";

import useRemoteData from "../hooks/useRemoteData";

const TOOLS_ENDPOINT = "/data/tools.json";

type Tool = {
  id: number;
  name: string;
  iconClass?: string;
  shortName?: string;
};

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
        <i className={`${tool.iconClass} text-7xl`}></i>
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
    <section className="bg-pubg-panel py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-5xl lg:text-6xl text-center font-bold tracking-wider text-pubg-text uppercase">
          Tools I'm familiar with
        </h2>

        {isLoading && (
          <p className="text-center text-pubg-text opacity-80">
            Loading tools...
          </p>
        )}

        {errorMessage && (
          <p className="text-center text-pubg-text opacity-80">
            {errorMessage}
          </p>
        )}

        {!isLoading && !errorMessage && tools.length === 0 && (
          <p className="text-center text-pubg-text opacity-80">
            No tools found.
          </p>
        )}

        {!isLoading && !errorMessage && tools.length > 0 && (
          <Marquee
            gradient={false}
            speed={50}
            autoFill={true}
            pauseOnHover={true}
            className="py-8 overflow-hidden"
          >
            {tools.map((tool) => (
              <ToolItem key={tool.id} tool={tool} />
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default Tools;
