const GetInTouch = () => {
  return (
    <section className="bg-pubg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-wider text-pubg-yellow uppercase">
            Get In Touch
          </h2>
          <p className="text-2xl opacity-90 tracking-wider leading-relaxed text-pubg-text uppercase">
            Ready to deploy your next big idea?
          </p>
          <p className="text-xl opacity-90 text-pubg-text leading-relaxed normal-case">
            Let's sync up and engineer a solution. My comms are open for new
            opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10">
          <div className="mx-auto">Contact Information</div>
          <div className="mx-auto">Form</div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
