/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const Banner: FC = ({}) => {
  return (
    <div className="relative w-full items-center justify-center flex">
      <img
        src="/banner.png"
        alt="logo"
        className="rounded-lg w-[1270px] h-[513px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Fresh & Clean Homes</h1>
        <p className="text-xl">
          We bring freshness and cleanliness to your doorstep.
        </p>
      </div>
    </div>
  );
};
