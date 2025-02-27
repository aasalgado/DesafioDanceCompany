import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Instructors() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mt-8 sm:mt-0">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/instructors/luis-instructor.png"
              width={650}
              height={650}
              alt="Instructor"
              className="aspect-square object-contain rounded-md"
            />
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">Luis</h3>
              <p className="text-muted-foreground px-8 sm:px-0">
                Luis Alberto, along with his partner/wife Jess Sheppard, is the
                co-founder and co-director of Desafio Dance Company. They are
                salsa/bachata instructors, performers and competitors. He has
                performed/taught in countless congresses across the US,
                including: Reno Latin Dance Fest, San Francisco SFSBK, Orlando
                Salsa Congress, Chicago Salsa International Congress,
                Bachateando, Atlanta Salsa Bachata Festival, etc. He is always
                training for competition and to improve in his profession.
              </p>
              <p className="text-muted-foreground px-8 sm:px-0">
                His titles include: 2020/2021 World Salsa Summit Pro Bachata
                Classic Finalist, 2019 World Salsa Summit Rising Star Bachata
                Champion (1st Place), 2019 LA Top Social Dancer in the
                Professional Category at the Annual La Granada Competition, 2018
                World Latin Dance Cup Am Male Salsa Soloist (3rd place).
              </p>
            </div>
          </div>
          {/* bg-muted for grey background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 sm:pt-0">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src="/images/instructors/jess-instructor.jpg"
                width={650}
                height={650}
                alt="Instructor Jess"
                className="sm:hidden aspect-square object-contain rounded-md"
              />
              <h3 className="text-2xl font-bold">Jess</h3>
              <p className="text-muted-foreground px-8 sm:pr-0 sm:pl-6">
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
              <p className="text-muted-foreground px-8 sm:pr-0 sm:pl-6">
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
              className="hidden sm:block aspect-square object-contain rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 sm:pt-0">
            <img
              src="/images/instructors/frida-instructor.jpg"
              width={650}
              height={650}
              alt="Instructor Frida"
              className="aspect-square object-contain rounded-md"
            />
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-2xl font-bold">Frida</h3>
              <p className="text-muted-foreground px-8 sm:px-0">
                Frida Moses is a dancer, choreographer, and instructor
                specializing in Latin dances. Her artistic journey has been
                deeply intertwined with her Latin American roots and Mexican
                heritage, forging a profound connection through the power of
                dance and the arts. Drawing inspiration from her vibrant
                community, Frida continues to evolve as an artist, and her
                unique perspective shapes her approach to sharing this
                captivating art form.
              </p>
              <p className="text-muted-foreground px-8 sm:px-0">
                Based in Southern California and Salt Lake City, Frida is
                actively engaged in both dancing and teaching. Her experience
                includes collaborations with dance companies such as Desafio
                Dance Co, Samba Fogo, On2ourage Dance Co, Tehamata Dance Co, DF
                Dance Studio, and many others.
              </p>
              <p className="text-muted-foreground px-8 sm:px-0">
                As an instructor, Frida offers energetic and meticulous guidance
                in various styles of dance. Her primary goal is to promote
                healthy movement among children and adults while fostering
                confidence in their artistic abilities. By emphasizing
                creativity, expression, and self-connection through the arts,
                she empowers her students to explore their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
