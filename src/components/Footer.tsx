const Footer = () => {
  return (
    <section className="bg-pubg-dark py-8 px-6 border-t border-pubg-dark shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="text-center flex flex-col gap-2">
        <p className="text-base md:text-lg opacity-90 tracking-wider text-pubg-text uppercase font-semibold">
          Designed & Developed By AZM{" "}
          <span className="text-pubg-yellow inline-block hover:-translate-y-1 transform duration-200 cursor-default">
            nostaLgic
          </span>
        </p>

        <p className="text-sm md:text-base text-pubg-text opacity-60 font-medium">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
