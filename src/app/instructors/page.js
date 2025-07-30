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
                <b>Luis Alberto</b> is the co-founder and co-director of&nbsp;
                <i>Desafío Dance Company</i>, alongside his partner and
                wife,&nbsp;
                <b>Jess Sheppard</b>. Together, they are nationally recognized
                salsa and bachata instructors, performers, and competitors. With
                a passion for Latin dance and a commitment to excellence, Luis
                has taught and performed at some of the most prestigious dance
                festivals across the United States, including the&nbsp;
                <b>
                  Reno Latin Dance Fest, Las Vegas Super Congress, LA Bachata
                  Festival, San Francisco SBK, Orlando Salsa Congress, Chicago
                  International Salsa Congress, Bachateando
                </b>
                , and the <b>Atlanta Salsa Bachata Festival</b>, among many
                others.
              </p>
              <p className="text-muted-foreground px-8 sm:px-0">
                Driven by growth and artistry, Luis is constantly training—both
                for competition and to refine his craft as a dancer and
                educator.
              </p>
              <div className="text-muted-foreground px-8 sm:px-0 text-center">
                <p className="font-semibold mb-2">His titles include:</p>
                <ul className="list-disc list-inside text-left sm:text-center space-y-1">
                  <li className="font-semibold">
                    2020/2021 World Salsa Summit Pro Bachata Classic Finalist
                  </li>
                  <li className="font-semibold">
                    2019 World Salsa Summit Rising Star Bachata Champion (1st
                    Place)
                  </li>
                  <li className="font-semibold">
                    2019 LA Top Social Dancer in the Professional Category
                    <br />
                    at the Annual La Granada Competition
                  </li>
                  <li className="font-semibold">
                    2018 World Latin Dance Cup Am Male Salsa Soloist (3rd place)
                  </li>
                </ul>
              </div>
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
                <b>Jess Sheppard</b> is the co-founder and co-director of&nbsp;
                <i>Desafio Dance Company</i>, which she runs alongside her
                partner and husband, Luis Alberto. Together, they are nationally
                recognized salsa and bachata instructors, performers, and
                competitors known for their dynamic style and technical
                precision. Jess has taught and performed at major dance events
                across the U.S., including the&nbsp;
                <b>
                  Reno Latin Dance Fest, Las Vegas Super Congress, LA Bachata
                  Festival, San Francisco SBK, Orlando Salsa Congress, Chicago
                  International Salsa Congress, Bachateando
                </b>
                , and the <b>Atlanta Salsa Bachata Festival</b>, among others.
                Her classes emphasize strong technique, fluid body movement, and
                musicality.
              </p>
              <p className="text-muted-foreground px-8 sm:pr-0 sm:pl-6">
                In addition to her dance career, Jess is also the founder
                of&nbsp;
                <b>Standing O Cosmetics</b>, a performance-focused makeup line
                designed to meet the unique needs of dancers and stage artists.
              </p>
              <div className="text-muted-foreground px-8 sm:px-0 text-center">
                <p className="font-semibold mb-2">Her titles include:</p>
                <ul className="list-disc list-inside text-left sm:text-center space-y-1">
                  <li className="font-semibold">
                    2020/2021 World Salsa Summit Pro Bachata Classic Finalist
                  </li>
                  <li className="font-semibold">
                    2019 World Salsa Summit Rising Star Bachata Champion (1st
                    Place)
                  </li>
                  <li className="font-semibold">
                    2018 Oaxaca Salsa & Bachata Festival, <br />
                    Amateur Bachata Team (1st Place with Alma Latina)
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="/images/instructors/jess-instructor.jpg"
              width={650}
              height={650}
              alt="Instructor Jess"
              className="hidden sm:block aspect-square object-contain rounded-md"
            />
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 sm:pt-0">
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
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
