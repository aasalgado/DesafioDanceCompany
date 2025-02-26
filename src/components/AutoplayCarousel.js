/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const AutoplayCarousel = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      className="mt-10"
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/2">
          <iframe
            src="https://drive.google.com/file/d/1tGDDlq9K6fl-cWr_xEku4YIrBXekDUX1/preview"
            width="540"
            height="380"
            allow="autoplay"
          ></iframe>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <iframe
            src="https://drive.google.com/file/d/10uzx865-jg5reCuXdAtZN-ZWwcEeVY6x/preview"
            width="540"
            height="380"
            allow="autoplay"
          ></iframe>
        </CarouselItem>
        <CarouselItem className="basis-1/2 pl-2 md:pl-4">
          <iframe
            src="https://drive.google.com/file/d/1wbvg_zBAwXpDEeWRy3GpwUHFJ3oI226f/preview"
            width="540"
            height="380"
            allow="autoplay"
          ></iframe>
        </CarouselItem>
        <CarouselItem className="basis-1/2 pl-2 md:pl-4">
          <iframe
            src="https://drive.google.com/file/d/1PuwRkbGwGE-tfmJiL9DbXMiIis5xN8oN/preview"
            width="540"
            height="380"
            allow="autoplay"
          ></iframe>
        </CarouselItem>
        <CarouselItem className="basis-1/2 pl-2 md:pl-4">
          <iframe
            src="https://drive.google.com/file/d/1aDq3y89nkVbW0Zeu8umm7dgh13Qi-uVh/preview"
            width="540"
            height="380"
            allow="autoplay"
          ></iframe>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AutoplayCarousel;

const BannerCarousel = () => {
  const autoplayPlugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <section id="banner" className="bg-muted">
      <Carousel plugins={[autoplayPlugin.current]} opts={{ loop: true }}>
        {/* Carousel container, using flex and controlling item width -- bg-primary */}
        <CarouselContent>
          {/* Adjust width of CarouselItem to show multiple items */}
          <CarouselItem className="flex basis-1/4 sm:basis-1/3 lg:basis-1/5 justify-center items-center">
            <img
              src="/images/partners/StandingOCosmetics_BlackOnWhite.png"
              alt="Image 1"
              width={300}
              height={100}
              className="object-cover rounded-xl "
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/logo-black.png"
              alt="Image 3"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/YAMILOGO.png"
              alt="Image 2"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/logo-black.png"
              alt="Image 3"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/StandingOCosmetics_BlackOnWhite.png"
              alt="Image 4"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/logo-black.png"
              alt="Image 3"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/YAMILOGO.png"
              alt="Image 5"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center basis-1/4 sm:basis-1/3 lg:basis-1/5">
            <img
              src="/images/partners/logo-black.png"
              alt="Image 6"
              width={300}
              height={100}
              className="object-cover rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export { BannerCarousel };

// https://ui.shadcn.com/docs/components/carousel
