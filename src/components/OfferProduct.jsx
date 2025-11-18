import React from "react";
import offerimg from "../Asset/offerimg3.png";
import arrow from "../Asset/arrow.svg";
import jaket from "../Asset/jaket.svg";

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
      <Slider2></Slider2>
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
      className="cursor-pointer rounded-0 xl:rounded-[24px]  w-full h-full "
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
      <div className="custom-prev">
        <Image className="xl:w-[14px] w-[8px] " src={arrow} alt="image"></Image>
      </div>
      <div className="custom-next">
        <Image
          className="rotate-[180deg] xl:w-[14px] w-[8px]"
          src={arrow}
          alt="image"
        />
      </div>
    </Swiper>
  );
};

const Slider2 = () => {
  return (
    <div className="relative bg-[linear-gradient(96deg,#FA4292_3.04%,#FF702E_100%)] rounded-0 rounded-[24px] xl:rounded-[24px] p-[40px]">

      {/* custom navigation buttons (outside swiper) */}
      <div className="custom-prev-product absolute top-1/2  left-2 z-50 cursor-pointer">
        <Image className="xl:w-[14px] w-[8px]" src={arrow} alt="image" />
      </div>

      <div className="custom-next-product absolute top-1/2  right-2 z-50 cursor-pointer">
        <Image className="rotate-[180deg] xl:w-[14px] w-[8px]" src={arrow} alt="image" />
      </div>

      <h2 className="text-white text-[18px] text-center md:text-left md:text-[30px] mb-[20px]">
        Huge saving alert grab your double 11 coupons now
      </h2>

      <Swiper
        navigation={{
          nextEl: ".custom-next-product",
          prevEl: ".custom-prev-product",
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          el: ".swiper-pagination-slider2",
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="rounded-0 "
      >
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i} className="flex items-center">
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



const Card = () => {
  return (
    <div className="relative cursor-pointer max-w-[318px] w-full flex justify-center">
      <Image className="w-full" src={jaket} alt="image"></Image>

      <div className=" absolute bottom-[9.39%] bg-[linear-gradient(180deg,#FF6B35_0%,#FF0080_100%)] flex items-center justify-center px-[18px] sm:px-[35px] xl:px-[18px] 2xl:px-[35px] py-[3px] rounded-2xl">
        <p className="text-[16px] sm:text-[19px] text-white font-semibold">৳500.00</p>
      </div>
    </div>
  );
};
