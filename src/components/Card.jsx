import Image from "next/image";
import React from "react";
import cardimg from "../Asset/cardimg.png";
import star from "../Asset/staricon.png";
import shipingcar from "../Asset/shipping-fast 1.svg";
import fire from "../Asset/fire.png";

export default function Card() {
  return (
    <div className=" w-full rounded-[12px] border overflow-hidden cursor-pointer ">
      <div className="img-container w-full  overflow-hidden">
        <Image src={cardimg} className="w-full" alt="img" />
      </div>
      <div className="flex  p-[6px] xl:p-[12px] flex-col gap-1 xl:gap-[12px]">
        <div className="bg-[#c7e1fb] flex items-center max-w-[139px] w-full  rounded-[8px] px-2">
          <span className="whitespace-nowrap text-[12px]">
            Mobile & Accessories
          </span>
        </div>
        <h2 className="leading-[20px] line-clamp-2">
          Nike Air Zoom Pegasus 40 Runn....Nike Air Zoom Pegasus 40 Runn....Nike
          Air Zoom Pegasus 40 Runn....
        </h2>

        <div className="flex justify-between">
          <p className="flex items-center gap-[4px] ">
            <Image src={star} className="w-[14px] " alt="image" />
            <span className="text-[12px]">4.7 (112)</span>
          </p>

          <p className="text-[12px]">4512 Sold</p>
        </div>
        <button className="rounded-xl max-w-[100px] xl:max-w-[140px] w-full px-[8px] py-[4px]    bg-[#31cb7e]  flex flex-row items-center gap-x-1 box-border">
          <Image
            className="w-[10px] xl:w-[16px]  "
            src={shipingcar}
            alt="image"
          ></Image>
          <span className="text-[8px] flex justify-center items-center xl:text-[12px] text-white font-semibold">
            Extra Fast Delivery
          </span>
        </button>
        <div className="flex gap-2 items-center">
          <h2 className="text-[18px] xl:text-[24px] font-semibold text-[#ff6a3d]">
            ৳24,990
          </h2>
          <h2 className="text-[16px] line-through xl:text-[20px] font-normal">
            ৳29,990
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <p className="flex items-center ">
            <Image src={fire} className="" alt="image"></Image>
            <span className="text-[#ff6a3d] text-[10px] 2xl:text-[16px] font-semibold">
              Saved ৳2,000
            </span>
          </p>

          <span className="font-semibold text-[10px] 2xl:text-[16px]  rounded-[4px] text-white bg-[#2323ff] px-[6px] py-[2px]">
            18% Off
          </span>
        </div>
      </div>
    </div>
  );
}
