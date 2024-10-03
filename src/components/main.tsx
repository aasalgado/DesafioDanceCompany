import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AutoplayCarousel from "@/components/AutoplayCarousel";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export function Main() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <section className="relative h-[80dvh] bg-black">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Desafio Dance Company
          </h1>
          <p className="mt-3 max-w-3xl text-lg">
            Discover the art of movement and the power of expression with
            Desafio.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button>Join Us</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>
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
              develop our students into dancers. Lastly, we seek to encourage
              each student to challenge themselves in dance and in life,
              creating a culture of confidence and personal accomplishment.
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
      <section id="performances" className="py-20 bg-muted">
        <div className="container px-4 md:pl-14">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Performances
            </h2>
            <p className="text-muted-foreground">
              Witness the captivating performances of Desafio Dance Company as
              we bring the art of dance to life.
            </p>
          </div>
          <AutoplayCarousel />
          {/* <Carousel
            opts={{
              align: "center",
              loop: true,
              autoplay: true,
              autoplayInterval: 5000,
            }}
            className="mt-10"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/2">
                <img
                  src="/images/team-shot.jpg"
                  width={800}
                  height={500}
                  alt="Performance 1"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img
                  src="/images/luis-and-jess.jpg"
                  width={800}
                  height={500}
                  alt="Performance 2"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img
                  src="/images/dinamico-ladies.jpg"
                  width={800}
                  height={500}
                  alt="Performance 3"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img
                  src="/images/frida-bio-pic.jpeg"
                  width={800}
                  height={500}
                  alt="Performance 4"
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
      </section>
      <section id="instructors" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Instructors
            </h2>
            <p className="text-muted-foreground">
              Meet the talented individuals who bring the art of dance to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <Card className="bg-muted">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/jess-bio-pic.jpg"
                    alt="Jess"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Instructor 1</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Jess</h3>
                <p className="text-muted-foreground">Lead Dancer</p>
              </CardContent>
            </Card>
            <Card className="bg-muted">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/luis-bio-pic.png"
                    alt="Luis"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Instructor 2</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Luis</h3>
                <p className="text-muted-foreground">Lead Dancer</p>
              </CardContent>
            </Card>
            <Card className="bg-muted">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/frida-bio-pic.jpeg"
                    alt="Frida"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Instructor 3</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Frida</h3>
                <p className="text-muted-foreground">Lead Dancer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="instagram" className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Follow Us on Instagram
            </h2>
            <p className="text-muted-foreground">
              Stay up-to-date with our latest performances and behind-the-scenes
              moments.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="Instagram Post 1"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="Instagram Post 2"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="Instagram Post 3"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="Instagram Post 4"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or want to learn more about Desafio Dance Company?
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <h3 className="text-lg font-bold mt-4">Address:</h3>
            <p className="text-muted-foreground">
              1122 E Washington Blvd Suite B
            </p>
            <p className="text-muted-foreground">Montebello, CA 90640</p>
            <h3 className="text-lg font-bold mt-4">Email:</h3>
            <p className="text-muted-foreground">Info@DesafioDance.com</p>
            <h3 className="text-lg font-bold mt-4">Phone:</h3>
            <p className="text-muted-foreground">(404) 408-6656</p>
            <h3 className="text-lg font-bold mt-4">Social Media:</h3>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="https://www.instagram.com/desafio.dance.company/"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
                target="_blank"
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@DesafioDanceCompany"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
                target="_blank"
              >
                <YoutubeIcon className="w-8 h-8" />
              </Link>
            </div>
            {/* <img
              src="/placeholder.svg"
              width={500}
              height={500}
              alt="Contact"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "500/500", objectFit: "cover" }}
            /> */}
          </div>
        </div>
      </section>
      {/* bg-muted */}
      <footer className="bg-primary py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* <DrumIcon className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Desafio</span> */}
            <WhiteLogo />
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.instagram.com/desafio.dance.company/"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
              target="_blank"
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
            {/* <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link> */}
            <Link
              href="https://www.youtube.com/@DesafioDanceCompany"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
              target="_blank"
            >
              <YoutubeIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhiteLogo() {
  return (
    <img
      src="/images/logo-white.png"
      width={200}
      height={100}
      alt="Desafio Dance Company Logo"
      className="rounded-xl object-cover"
      style={{ aspectRatio: "auto", objectFit: "cover" }}
    />
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
