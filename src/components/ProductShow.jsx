import Image from 'next/image'
import React from 'react'
import shoe from "../Asset/shoes.svg";

export default function ProductShow() {
  return (
    <div className='grid 2xl:gap-[16px] gap-[5px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 2xl:grid-cols-9 p-[10px] 2xl:p-[20px] rounded-[24px] border border-[#E9E9E9] mt-[20]'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      
    </div>
  )
}


const Card=()=>{


    return(
        <div className='flex flex-col gap-[8] justify-center items-center'>
            <div className="img-container">
                <Image src={shoe} className='w-full' alt='image'></Image>
            </div>
            <p className='text-[14px] text-[#6f6f6f]'>Sneakers</p>
        </div>
    )
}