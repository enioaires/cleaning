import { FC } from "react";
import Image from "next/image";
import { CustomPlaceholder } from "react-placeholder-image";

export const Banner: FC = ({}) => {
  return (
    <div className="relative w-full items-center justify-center flex">
      {/* <Image
        src="/banner.jpg"
        width={1270}
        height={513}
        alt="logo"
        className="rounded-lg"
      /> */}
      <CustomPlaceholder
        width={1270}
        height={513}
        alt="logo"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Lorem Ipsum Title</h1>
        <p className="text-xl">Lorem ipsum subtitle goes here</p>
      </div>
    </div>
  );
};
