import AutoplayCarousel, {
  BannerCarousel,
} from "@/components/AutoplayCarousel";
import Header from "@/components/Header";
import TopSection from "@/components/TopSection";
import About from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import InstaFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";

export function Main() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <TopSection />
      <About />
      <section id="performances" className="py-20 bg-muted">
        <div className="container px-4 md:pl-14">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Performances
            </h2>
            <p className="text-muted-foreground">
              Witness The Captivating Performances Of Desafio Dance Company As
              We Bring The Art Of Dance To Life.
            </p>
          </div>
          <AutoplayCarousel />
        </div>
      </section>
      <Reviews />
      <InstaFeed />
      <ContactSection />
      <BannerCarousel />
    </div>
  );
}
