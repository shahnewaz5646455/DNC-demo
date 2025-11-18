"use client";
import Slider from "@/components/Slider";
import offer from "../Asset/offerbanner.png";
import offer2 from "../Asset/offer2.png";

import Image from "next/image";
import Card from "@/components/Card";
import OfferSlider from "@/components/OfferSlider";
import OfferSlider2 from "@/components/OfferSlider2";
import ProductShow from "@/components/ProductShow";
import OfferProduct from "@/components/OfferProduct";

export default function Home() {
  return (
    <div className="container mx-auto mt-6 mb-10 px-4 sm:px-6 md:px-8 2xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
        <aside className="col-span-1 sm:col-span-3">
          <Slider />
        </aside>
      </div>

      <ProductShow></ProductShow>

      <OfferProduct></OfferProduct>

      <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-[5px] 2xl:gap-6">
        {Array.from({ length: 21 }).map((_, index) => {
          // 1st banner at index 6
          if (index === 6) {
            return (
              <div
                key={index}
                className="col-span-2 sm:col-span-3 md:col-span-2 xl:col-span-3 "
              >
              <OfferSlider></OfferSlider>
              </div>
            );
          }

          // 2nd banner at index 20
          if (index === 20) {
            return (
              <div
                key={index}
                className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2"
              >
             <OfferSlider2></OfferSlider2>
              </div>
            );
          }

          // default → show card
          return (
            <div key={index} className="col-span-1 md:col-span-1">
              <Card />
            </div>
          );
        })}
      </div>
    </div>
  );
}
