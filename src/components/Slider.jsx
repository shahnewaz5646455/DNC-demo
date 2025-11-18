import Image from "next/image";
import React from "react";

import slider1 from "../Asset/sliderimg1.png";
import sliderimg from "../Asset/sliderimg (2).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3500 }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      className="rounded-[10px] md:rounded-[27px]  w-full h-full"
    >
      <SwiperSlide>
        <Image src={sliderimg} alt="banner img" className="rounded-[10px] md:rounded-[28px]"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sliderimg} alt="banner img" className="rounded-[10px] md:rounded-[28px]"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sliderimg} alt="banner img" className="rounded-[10px] md:rounded-[28px]"></Image>
      </SwiperSlide>

      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
