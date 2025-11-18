import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import offer2 from "../Asset/offer2.png"

export default function OfferSlider2() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3500 }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      className="rounded-[12px] cursor-pointer  w-full h-full"
    >
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className=" w-full h-full"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className=" w-full h-full"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className=" w-full h-full"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className=" w-full h-full"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className=" w-full h-full"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className="w-full h-full rounded-[12px]"
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={offer2 }
          alt="banner img"
          className="rounded-[12px] w-full h-full"
        ></Image>
      </SwiperSlide>
       <div className="swiper-pagination"></div>
    </Swiper>
  )
}
