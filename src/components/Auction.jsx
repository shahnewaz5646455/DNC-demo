import Image from "next/image";
import React from "react";
import arrow from "../Asset/arrow.svg";
import watch from "../Asset/watch.png";
import rightarrow from "../Asset/rightarrow.svg";
import time from "../Asset/time.svg";
import drop from "../Asset/drop.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Auction() {
  return (
    <div className="relative mt-[47px]">
  <h2 className="font-semibold text-[20px] mb-[28px]">
    Exclusive Auction Deals
  </h2>

  {/* Custom navigation buttons */}
  <div className="custom-next-auction  absolute top-0 right-[45px] md:right-[60px] z-50 cursor-pointer px-[10px] py-[8px] border-[1px] border-[#E9E9E9] bg-white rounded-[10px]">
    <Image className=" rotate-[180deg] xl:w-[24px] md:w-[24px] w-[16px]" src={rightarrow} alt="image" />
  </div>

  <div className="custom-prev-auction absolute top-0 right-0 z-50 cursor-pointer px-[10px] py-[8px] border-[1px] border-[#E9E9E9] bg-white rounded-[10px]">
    <Image
      className=" xl:w-[24px] md:w-[24px] w-[16px]"
      src={rightarrow}
      alt="image"
    />
  </div>

  <Swiper
    navigation={{
      nextEl: ".custom-next-auction",
      prevEl: ".custom-prev-auction ",
    }}
    modules={[Pagination, Navigation]}
    slidesPerView={2}
    spaceBetween={10}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    className="cursor-pointer rounded-0 w-full h-full"
  >
    {[...Array(8)].map((_, i) => (
      <SwiperSlide key={i}>
        <Card />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}

const Card = () => {
  return (
    <div className="border  rounded-[12px] overflow-hidden">
      <div className="relative w-full">
        <Image src={watch} className="w-full" alt="image"></Image>
        <div className="top-[2.5%] left-[2.5%] inline-flex absolute items-center gap-[4px] px-[8px] py-[4px] rounded-[4px] bg-[#fb2c36] ">
          <button className="rounded-full  bg-[#fd9ba0] w-[6px] h-[6px]"></button>
          <span className="font-semibold text-[12px] text-white">LIVE</span>
        </div>
        <div className="absolute bottom-[2.5%] right-[2.5%] inline-flex py-[4px] rounded-[4px] items-center gap-[4px] px-[8px] bg-[#000000B2]">
          <Image src={time} alt="image" className="w-[12px]"></Image>
          <span className="text-[12px] font-normal text-white">2h 45m</span>
        </div>
      </div>

      <div className="p-[6px] md:p-[13px] flex flex-col gap-[4px] md:gap-[8px]">
        <h2 className="text-[12px] text-[#2B2B2B] font-normal">
          Luxury Automatic Watch - Swiss Movement
        </h2>
        <p className="text-[12px] text-[#6F6F6F] font-normal">Current Bid</p>
        <h2 className="text-[20px] font-normal text-[#FF6A3D]">৳45,000</h2>

        <div className="flex items-center gap-[4px]">
          <Image className="w-[12px]" src={drop} alt="image"></Image>
          <span className="text-[#6F6F6F]  text-[12px] font-normal">
            23 bids
          </span>
        </div>
        <div className="bg-[#FF6A3D] flex justify-center items-center py-[8px] rounded-[8px]">
          <span className="font-medium text-[14px] text-white">Place Bid</span>
        </div>
      </div>
    </div>
  );
};
