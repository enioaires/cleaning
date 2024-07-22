"use client";
import { FC, useState, useEffect } from "react";
import Video from "next-video";
import Antes from "@/videos/antes.mp4";
import Depois from "@/videos/depois.mp4";
import BeforeStove from "@/videos/beforeStove.mp4";
import AfterStove from "@/videos/afterStove.mp4";
import { Loader2 } from "lucide-react";

export const VideosTab: FC = ({}) => {
  const videos = [
    { src: Depois, title: "Before Bedroom" },
    { src: Antes, title: "After Bedroom" },
    { src: BeforeStove, title: "Before Stove" },
    { src: AfterStove, title: "After Stove" },
  ];

  const [showAllVideos, setShowAllVideos] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const visibleVideos = showAllVideos ? videos : videos.slice(0, 2);

  return (
    <div className="mt-6 flex flex-col items-center">
      {loading ? (
        <Loader2 className="size-8 text-primary animate-spin" />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {visibleVideos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center border border-border rounded-lg p-4 shadow-md max-w-[320px] gap-y-2"
              >
                <Video
                  src={video.src}
                  className="cursor-pointer w-full"
                  controls
                />
                <h3 className="text-lg font-medium text-center">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
          <button
            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            onClick={() => setShowAllVideos(!showAllVideos)}
          >
            {showAllVideos ? "Show Less" : "Show All"}
          </button>
        </>
      )}
    </div>
  );
};
