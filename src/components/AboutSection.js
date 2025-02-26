export default function ContactSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Desafio</h2>
          <p className="text-muted-foreground">
            {/* Desafio Dance Company is a renowned dance troupe that has been
              captivating audiences for over a decade. Our talented dancers
              blend classical and contemporary styles to create breathtaking
              performances that inspire and move. Join us on a journey of
              artistic expression and discover the power of dance. */}
            Our goal is to create an environment that nurtures growth,
            encouraging each student to strive for their own personal
            excellence. Beyond choreo retention and stage training, we aim to
            develop our students into dancers. Lastly, we seek to encourage each
            student to challenge themselves in dance and in life, creating a
            culture of confidence and personal accomplishment.
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
