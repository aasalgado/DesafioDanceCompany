export default function TopSection() {
  return (
    <section className="relative h-[240dvh] bg-white">
      {/* <section className="relative h-[80dvh] bg-white"> */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/landing-one.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-black">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Desafio Dance Company
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          Discover The Art Of Movement And The Power Of Expression With Desafio.
        </p>
        {/* <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Join Us</Button>
              <Button variant="secondary">Learn More</Button>
            </div> */}
      </div>
    </section>
  );
}
