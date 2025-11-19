import Image from "next/image";
import React from "react";
import logo from "../Asset/dnc logo.svg";
import xlogo from "../Asset/x.svg";
import facebook from "../Asset/facebook.svg";
import instagram from "../Asset/instagram.svg";
import envelope from "../Asset/envelope 1.svg";
import linkedin from "../Asset/linkendin.svg";
import payment1 from "../Asset/payment1.svg";
import payment2 from "../Asset/payment2.svg";
import payment3 from "../Asset/payment3.svg";
import payment4 from "../Asset/payment4.svg";
import payment5 from "../Asset/payment5.svg";
import payment6 from "../Asset/payment6.svg";
import footerbg from "../Asset/Footer.png";

export default function Footer() {
  return (
    <footer className="bg-[url('../Asset/Footer.png')] bg-cover bg-center bg-no-repeat w-full " >
      <div className="  pt-[40px] md:pt-[40px] xl:pt-[80px] 2xl:mt-[106px] pb-[45px]  container mx-auto px-4 sm:px-6 md:px-8 2xl:px-0">
        <div className="flex items-center md:items-start flex-col gap-4 xl:flex-row  2xl:gap-[92px]">
            <Titles ></Titles>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4    2xl:gap-[143px] w-full">
            <FooterLinks></FooterLinks>
            <FooterLinks></FooterLinks>
            <FooterLinks></FooterLinks>
            <ContactInfo></ContactInfo>
          </div>
        </div>
        <div className="flex justify-center pt-[10px] lg:pt-[96px]">
          <FindProduct></FindProduct>
        </div>
        <div className="flex md:justify-between flex-col  md:flex-row">
          <PaymentMethod></PaymentMethod>
          <p className="font-normal text-center md:text-left text-white text-[14px] pt-[10px] md:pt-[33px]">© 2025 Taobao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const Titles = () => {
  return (
    <div className=" flex flex-col gap-[20px] lg:gap-[40px] max-w-[500px] w-full">

        <div className="flex md:justify-start justify-center">

      <div className="flex gap-[16px] items-center ">
        
        <div className="logo w-[45.957px]">
          <Image src={logo} className="w-full" alt="image"></Image>
        </div>

        <h2 className="text-[20px] md:text-[33.75px] text-white font-extrabold ">
          Daily Need China
        </h2>
      </div>
        </div>

      <div className="flex flex-col gap-[20px] lg:gap-[80px]">
        <p className="text-base font-normal text-white text-center md:text-left">
          Salesflow is an all-in-one sales CRM designed to help teams close more
          deals, streamline their pipeline, and drive revenue growth. With
          AI-powered insights, automation, and seamless integrations.
        </p>
        <div className="socials-icons justify-center md:justify-start flex gap-[16px] md:gap-[32px]">
          <Image className="cursor-pointer" src={xlogo} alt="image"></Image>
          <Image className="cursor-pointer" src={facebook} alt="image"></Image>
          <Image className="cursor-pointer" src={instagram} alt="image"></Image>
          <Image className="cursor-pointer" src={linkedin} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-[20px] text-center md:text-left">
      <h2 className="text-[18px] font-semibold text-white">Customer Service</h2>
      <ul className="flex flex-col gap-[12px]">
        <li className="text-base cursor-pointer font-normal text-white">Help Center</li>
        <li className="text-base cursor-pointer font-normal text-white">How to Order</li>
        <li className="text-base cursor-pointer font-normal text-white">Delivery Info</li>
        <li className="text-base cursor-pointer font-normal text-white">Returns & Refunds</li>
        <li className="text-base cursor-pointer font-normal text-white">Payment method</li>
        <li className="text-base cursor-pointer font-normal text-white">Contact Us</li>
      </ul>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-[20px]  text-center md:text-left">
      <h2 className="text-[18px] whitespace-nowrap font-semibold text-white">
        Contact Information
      </h2>

      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-medium text-base text-white">Email</h3>
          <p className="font-normal text-[14px] text-white">
            support@salesflow.com
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-medium text-base text-white">Phone</h3>
          <p className="font-normal text-[14px] text-white">
            +1 (800) 123-4567
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="font-medium  text-base text-white">Office Address</h3>
          <p className="font-normal text-[14px] whitespace-nowrap leading-[170%] text-white">
            SalesFlow HQ<br></br> 1234 Sales Street, Suite 500<br></br> San
            Francisco, CA 94105, USA
          </p>
        </div>
      </div>
    </div>
  );
};

const FindProduct = () => {
  return (
    <div className="max-w-[520px] w-full rounded-[12px]  bg-white inline-flex gap-[10px] md:gap-[29px] items-center justify-center px-[12px] py-[10px]">
      <p className="font-normal text-[12px] md:text-[20px]">
        I’ll help you <span className="font-semibold">find</span> the right{" "}
        <span className="font-semibold">product</span>
      </p>
      <button className="flex cursor-pointer items-center gap-[2px] px-[21px] py-[8px] bg-[#FF6A3D] rounded-[4px]">
        <Image src={envelope} alt="envelope image"></Image>
        <span className="font-medium text-[10px] md:text-[14px] text-white ">
          Find Product
        </span>
      </button>
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="flex items-center md:items-start flex-col gap-[12px]">
      <p className="text-white text-center md:text-left lg:text-left text-[14px] font-normal">Payment Methods</p>
      <div className="flex items-center gap-[10px]">
        <Image src={payment1} alt="payment"></Image>
        <Image src={payment2} alt="payment"></Image>
        <Image src={payment3} alt="payment"></Image>
        <Image src={payment4} alt="payment"></Image>
        <Image src={payment5} alt="payment"></Image>
        <Image src={payment6} alt="payment"></Image>
      </div>
    </div>
  );
};
