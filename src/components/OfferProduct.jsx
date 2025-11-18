import React from "react";
import offerimg from "../Asset/offerimg3.png";
import arrow from "../Asset/arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function OfferProduct() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[10px] xl:gap-[20px] mt-[20px]">
      <Slider1></Slider1>
      <Slider1></Slider1>
    </div>
  );
}

const Slider1 = () => {
  return (
    <Swiper
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={{ delay: 3500 }}
      pagination={{
        el: ".swiper-pagination-custom",
        clickable: true,
      }}
      className=" rounded-0 xl:rounded-[24px]  w-full h-full "
    >
      <SwiperSlide>
        <Image src={offerimg} alt="" className=" w-full  h-full"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={offerimg} alt="" className=" w-full h-full"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={offerimg} alt="" className=" w-full h-full"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={offerimg} alt="" className=" w-full h-full"></Image>
      </SwiperSlide>

      <div className="swiper-pagination-custom"></div>
      <div className="custom-prev"><Image className="xl:w-[14px] w-[8px] " src={arrow} alt="image"></Image></div>
      <div className="custom-next"><Image className="rotate-[180deg] xl:w-[14px] w-[8px]" src={arrow} alt="image"/></div>
    </Swiper>
  );
};
