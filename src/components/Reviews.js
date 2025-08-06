// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <section id="instructors" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
          <p className="text-muted-foreground">What Our Dancers Are Saying</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <Card className="bg-muted">
            <Link
              href="https://www.google.com/maps/contrib/108751608146641208592/place/ChIJe8k4zorPwoARTKlmV2CemaY/@34.0832106,-118.3467926,11z/data=!4m6!1m5!8m4!1e1!2s108751608146641208592!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
              prefetch={false}
              target="_blank"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/reviews/lorraine.png"
                    alt="Jess"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Instructor 1</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Lorraine</h3>
                <StarRating rating={5} />
                <p className="text-muted-foreground">
                  Luis and Jess, directors of the company, create the best
                  environment for dancers of all levels. They teach not only
                  choreography but also technique to become a strong dancer. The
                  classes are always fun and full of great energy!! I highly
                  recommend you take a class, you won’t regret it and you’ll
                  keep coming back for more!
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card className="bg-muted">
            <Link
              href="https://www.google.com/maps/contrib/100883435201982562771/place/ChIJe8k4zorPwoARTKlmV2CemaY/@33.9958752,-160.3074943,3z/data=!4m6!1m5!8m4!1e1!2s100883435201982562771!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
              prefetch={false}
              target="_blank"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/reviews/diana.png"
                    alt="Luis"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Review</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Diana</h3>
                <StarRating rating={5} />
                <p className="text-muted-foreground">
                  I had so much taking classes with Desafio! I saw the
                  instructors, Luis and Jess, teaching at a festival and
                  continued to take classes with them in LA. They focus on
                  technique for social dancing which helped me improve A LOT.
                  You can get a class free when you buy your first one. I used
                  the code DesafioNew
                </p>
              </CardContent>
            </Link>
          </Card>
          <Card className="bg-muted">
            <Link
              href="https://www.google.com/maps/contrib/103920939591373355088/place/ChIJe8k4zorPwoARTKlmV2CemaY/@35.2167112,-122.0223426,7z/data=!4m6!1m5!8m4!1e1!2s103920939591373355088!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
              prefetch={false}
              target="_blank"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage
                    src="/images/reviews/melissa.png"
                    alt="Frida"
                    style={{ objectFit: "cover" }}
                  />
                  <AvatarFallback>Review</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold">Melissa</h3>
                <StarRating rating={5} />
                <p className="text-muted-foreground">
                  I have been attending classes and a part of Desafio for three
                  years now. The first time I took a dance class with the
                  directors, Luis and Jess, I was excited to have finally found
                  a good fit for me in terms of the challenge and teaching style
                  they provide. Once you take a class with them you will be
                  surprised...
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://www.google.com/search?sca_esv=38b8b35f2fe0540c&sxsrf=AE3TifNYHKuFQ7qyJ5sB-jNJU6Fp2ocLHQ:1754450521773&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-epgQwOHoLmPTAXECP7lk2p64NVtnDaxMvjWrgw5qdGQNaU8-p5pMSRTewmHKF4xmok_0zaR0scBIc52JmkYmc2n4uawgpwekjudJu8J6CuhB_P7Q%3D%3D&q=Desafio+Dance+Company+Reviews&sa=X&ved=2ahUKEwjGjIHBnfWOAxXxBEQIHW8_FwoQ0bkNegQIMRAE&biw=1330&bih=813&dpr=1"
            target="_blank"
            prefetch={false}
            className="text-muted-foreground underline hover:text-primary transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

function StarRating({ rating, totalStars = 5 }) {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="yellow" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} color="yellow" />);
    } else {
      stars.push(<FaRegStar key={i} color="yellow" />);
    }
  }

  return <div className="flex">{stars}</div>;
}
