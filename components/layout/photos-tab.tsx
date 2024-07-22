/* eslint-disable @next/next/no-img-element */
"use client";
import { Loader2 } from "lucide-react";
import { FC, useState, useEffect } from "react";
import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const PhotosTab: FC = ({}) => {
  const photos = [
    { src: "/photo1.jpeg", title: "Bedroom" },
    { src: "/photo2.jpeg", title: "Bathroom" },
    { src: "/photo3.jpeg", title: "Living Room" },
    { src: "/photo4.jpeg", title: "Bathroom" },
    { src: "/photo5.jpeg", title: "Bedroom" },
    { src: "/photo7.jpeg", title: "Kitchen" },
    { src: "/photo8.jpeg", title: "Living Room" },
    { src: "/photo9.jpeg", title: "Kitchen" },
    { src: "/photo10.jpeg", title: "Bedroom" },
    { src: "/photo11.jpeg", title: "Kitchen" },
    { src: "/photo12.jpeg", title: "Stove" },
    { src: "/photo13.jpeg", title: "Oven" },
    { src: "/photo14.jpeg", title: "Dishwasher" },
    { src: "/photo15.jpeg", title: "Toilet" },
    { src: "/photo16.jpeg", title: "Sink" },
    { src: "/photo17.jpeg", title: "Microwave" },
    { src: "/photo18.jpeg", title: "Fridge" },
  ];

  const [isZoomed, setIsZoomed] = useState(
    photos.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleZoomChange = (index: number) => (shouldZoom: boolean) => {
    setIsZoomed((prev) => ({
      ...prev,
      [index]: shouldZoom,
    }));
  };

  const visiblePhotos = showAllPhotos ? photos : photos.slice(0, 6);

  return (
    <div className="mt-6 flex flex-col items-center">
      {loading ? (
        <Loader2 className="size-8 text-primary animate-spin" />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {visiblePhotos.map((photo, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border border-border rounded-lg p-4 shadow-md max-w-[320px] gap-y-2"
              >
                <Zoom
                  key={`zoom-${index}`}
                  isZoomed={isZoomed[index]}
                  onZoomChange={handleZoomChange(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="cursor-pointer w-full"
                  />
                </Zoom>
                <h3 className="text-lg font-medium text-center">
                  {photo.title}
                </h3>
              </div>
            ))}
          </div>
          <button
            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            onClick={() => setShowAllPhotos(!showAllPhotos)}
          >
            {showAllPhotos ? "Show Less" : "Show All"}
          </button>
        </>
      )}
    </div>
  );
};
