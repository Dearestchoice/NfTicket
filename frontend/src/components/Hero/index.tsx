const HeroSection = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full bg-cover bg-center flex items-center justify-center">
      <section className="py-20 md:py-32 lg:py-40 h-full">
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-5xl !leading-[1.25] text-[#f2f2f2]">
              {title}
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero.webp"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
