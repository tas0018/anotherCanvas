import React from "react"
import Image from "next/image"
import { loadGetInitialProps } from "next/dist/shared/lib/utils"

const Footer = () => {
  return (
    <div className="flex flex-col justify-end items-center pb-2.5 w-full h-[360px] bg-[#1C1C1C]">
      <div className="flex flex-col w-full px-20 md:px-28">
        <div className="">
          <Image src={"/VRVS-Logo.svg"} width={115} height={48} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs">
            We’ll provide our detailed strategy and brand recommendations for
            your review.
          </p>
          <a href="" className="flex items-center mt-14  md:mt-0 ">
            <Image src={"/instagram-logo.svg"} width={32} height={32} />
          </a>
        </div>
      </div>
      <div className="mt-20 pb-2.5">
        <p className="text-xs">
          Copyright © 2023 V-Realm Visuals - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
