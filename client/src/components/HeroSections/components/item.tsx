import { classNames } from "@/utils/utils";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import * as React from "react";

interface IItemRowProps {
  type: "video" | "image";
  option: {
    title: string;
    slogan: string;
    buyHref: string;
    details: string;
    Url: string;
  };
}

const ItemRow: React.FC<IItemRowProps> = (props) => {
  const { type, option } = props;
  return (
    <div className="relative h-full">
      {type === "video" && (
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}

          className="w-screen h-screen object-cover"
        >
          <source src={option.Url} type="video/mp4" />
        </video>
      )}
      {type === "image" && (
        <img
          className="w-screen h-screen object-cover"
          src={option.Url}
          alt=""
        />
      )}

      <div className=" container mx-auto text-center absolute top-0 inset-x-0">
        <div className="mt-11">
          <h1 className=" text-5xl text-white font-semibold pt-10">
            {option.title}
          </h1>
          <p className="leading-[4rem] font-semibold text-xl text-slate-400">
            {option.slogan}
          </p>
        </div>
      </div>
      <div className=" container mx-auto text-center  absolute bottom-20 inset-x-0 pb-7">
        <div className="flex justify-center items-center">
          <a
            href={option.details}
            className="py-2.5 px-7 bg-green-600 hover:bg-green-700 font-semibold mr-6 text-white rounded-lg"
          >
            预约看车
          </a>
          <a href={option.buyHref} className=" text-white font-semibold ">
            立即购买
          </a>
        </div>
        <ChevronDownIcon className="w-6 h-6 mx-auto mt-3 text-white text-6xl animate-bounce " />
      </div>
    </div>
  );
};

export default ItemRow;
