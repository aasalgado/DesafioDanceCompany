export default function TopSection() {
  return (
    <section className="relative h-[53dvh] sm:h-[255dvh] bg-white">
      {/* <section className="relative h-[80dvh] bg-white"> */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center opacity-60 mt-[5dvh] sm:mt-0"
        style={{
          backgroundImage: "url('/images/landing-one.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-black pt-[15dvh] sm:pt-0">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Desafio Dance Company
        </h1>
        <p className="mt-3 max-w-3xl text-lg">
          Discover The Art Of Movement And The Power Of Expression With Desafio.
        </p>
      </div>
    </section>
  );
}
