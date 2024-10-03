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
              src="/images/frida-pose.jpeg"
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
      </Carousel>
    );
  };

  export default AutoplayCarousel;