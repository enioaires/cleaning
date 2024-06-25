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
import Video from "next-video";
import Gorfe from "@/y/gorfe.mp4";
import Cama from "@/y/cama.mp4";
import Piscina from "@/y/piscina.mp4";
import Sofa from "@/y/sofa.mp4";

export const VideosTab: FC = ({}) => {
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

  const videos = [
    { src: Gorfe, title: "Gorfe Video" },
    { src: Gorfe, title: "Gorfe Video" },
    { src: Cama, title: "Cama Video" },
    { src: Piscina, title: "Piscina Video" },
    { src: Sofa, title: "Sofa Video" },
  ];

  return (
    <div className="mt-6 flex flex-col items-center">
      <Carousel
        setApi={setApi}
        className="max-w-[600px] w-[600px] flex items-center justify-center"
      >
        <CarouselContent className="flex items-center justify-center">
          {videos.map((video, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <Video src={video.src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Video {current} of {count}
      </div>
    </div>
  );
};
