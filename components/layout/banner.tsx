/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const Banner: FC = ({}) => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <img
        src="/banner.png"
        alt="logo"
        className="rounded-lg w-full max-w-[1270px] h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-lg sm:text-3xl font-bold">Fresh & Clean Homes</h1>
        <p className="text-base sm:text-xl text-center">
          We bring freshness and cleanliness to your doorstep.
        </p>
      </div>
    </div>
  );
};
