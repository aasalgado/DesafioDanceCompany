import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/testimonials/luis-testimonial.png"
              width={650}
              height={650}
              alt="Instructor"
              className="aspect-square object-cover rounded-md"
            />
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">Luis Rosa</h3>
              <p className="text-muted-foreground">
                Luis Alberto, along with his partner/wife Jess Sheppard, is the
                co-founder and co-director of Desafio Dance Company. They are
                salsa/bachata instructors, performers and competitors. He has
                performed/taught in countless congresses across the US,
                including: Reno Latin Dance Fest, San Francisco SFSBK, Orlando
                Salsa Congress, Chicago Salsa International Congress,
                Bachateando, Atlanta Salsa Bachata Festival, etc. He is always
                training for competition and to improve in his profession.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">Jess</h3>
              <p className="text-muted-foreground pl-6">
                Jess Sheppard, along with her partner/husband, Luis Alberto, is
                the co-founder and co-director of Desafio Dance Company. They
                are salsa/bachata instructors, performers and competitors. She
                has performed/taught across the country including: Reno Latin
                Dance Fest, San Francisco SFSBK, Orlando Salsa Congress, Chicago
                Salsa International Congress, Bachateando, Atlanta Salsa Bachata
                Festival, etc. Her classes focus on technique and body movement.
                She is also founder and owner of Standing O Cosmetics, a line of
                cosmetics designed for performers.
              </p>
              <p className="text-muted-foreground pl-6">
                Her titles include: 2020/2021 World Salsa Summit Pro Bachata
                Classic Finalist, 2019 World Salsa Summit Rising Star Bachata
                Champion (1st Place), 2018 Oaxaca Salsa & Bachata Festival,
                Amateur Bachata Team (1st Place with Alma Latina)
              </p>
            </div>
            <img
              src="/images/instructors/jess-instructor.jpg"
              width={650}
              height={650}
              alt="Instructor Jess"
              className="aspect-square object-cover rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/instructors/frida-instructor.jpg"
              width={650}
              height={650}
              alt="Instructor Frida"
              className="aspect-square object-cover rounded-md"
            />
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">Frida</h3>
              <p className="text-muted-foreground">
                Jess Sheppard, along with her partner/husband, Luis Alberto, is
                the co-founder and co-director of Desafio Dance Company. They
                are salsa/bachata instructors, performers and competitors. She
                has performed/taught across the country including: Reno Latin
                Dance Fest, San Francisco SFSBK, Orlando Salsa Congress, Chicago
                Salsa International Congress, Bachateando, Atlanta Salsa Bachata
                Festival, etc. Her classes focus on technique and body movement.
                She is also founder and owner of Standing O Cosmetics, a line of
                cosmetics designed for performers.
              </p>
              <p className="text-muted-foreground">
                Her titles include: 2020/2021 World Salsa Summit Pro Bachata
                Classic Finalist, 2019 World Salsa Summit Rising Star Bachata
                Champion (1st Place), 2018 Oaxaca Salsa & Bachata Festival,
                Amateur Bachata Team (1st Place with Alma Latina)
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
