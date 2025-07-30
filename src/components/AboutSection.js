export default function ContactSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Desafio</h2>
          <p className="text-muted-foreground">
            At Desafío Dance Company, our mission is to inspire and guide people
            of all ages and abilities through the art of dance. As the premier
            studio for salsa and bachata classes in Montebello, CA, we offer a
            space where social dancing, performing on stage, and competing at a
            high level are equally valued. With a focus on excellence,
            community, and personal development, we challenge each student to
            push their limits—not only in dance but in life. Our goal is to
            create a culture of self-discovery and accomplishment that extends
            beyond the studio, fostering a sense of belonging and growth for
            every individual.
          </p>
          {/* <Button>Learn More</Button> */}
        </div>
        <img
          src="/images/luis-jess-about.jpg"
          width={600}
          height={400}
          alt="Desafio Dance Company"
          className="rounded-xl object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
