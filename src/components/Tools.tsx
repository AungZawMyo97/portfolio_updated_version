import Marquee from "react-fast-marquee";

const toolsData = [
  { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
  { name: "Visual Studio", iconClass: "devicon-visualstudio-plain colored" },
  { name: "Postman", iconClass: "devicon-postman-plain colored" },
  { name: "SQL Server", iconClass: "devicon-microsoftsqlserver-plain colored" },
  { name: "MySQL", iconClass: "devicon-mysql-original colored" },
  { name: "Figma", iconClass: "devicon-figma-plain" },
  { name: "Git", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", iconClass: "devicon-github-original colored" },
  { name: "GitLab", iconClass: "devicon-gitlab-plain-wordmark" },
];

const Tools = () => {
  return (
    <section className="bg-pubg-panel py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-5xl lg:text-6xl text-center font-bold tracking-wider text-pubg-text uppercase">
          Tools I'm familiar with
        </h2>

        <Marquee
          gradient={false}
          speed={50}
          autoFill={true}
          pauseOnHover={true}
          className="py-8 overflow-hidden"
        >
          {toolsData.map((tool, index) => (
            <div
              key={index}
              title={tool.name}
              className="text-7xl mx-8 md:mx-12 transition-transform duration-300 hover:scale-125 cursor-pointer"
            >
              <i className={tool.iconClass}></i>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Tools;
