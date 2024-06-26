/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CustomPlaceholder } from "react-placeholder-image";

export const PhotosTab: FC = ({}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const photos = [
    { src: "/photo1.jpeg", title: "Photo 1" },
    { src: "/photo1.jpeg", title: "Photo 1" },
    { src: "/photo1.jpeg", title: "Photo 1" },
    { src: "/photo2.jpeg", title: "Photo 2" },
    { src: "/photo3.jpeg", title: "Photo 3" },
  ];

  return (
    <div className="mt-6 flex flex-col items-center">
      <Carousel
        className="max-w-[600px] w-[600px] flex items-center justify-center"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center justify-center">
          {photos.map((photo, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <img src={photo.src} alt={photo.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Photo {current} of {count}
      </div>
    </div>
  );
};
