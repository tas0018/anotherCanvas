import React from "react"
import Image from "next/image"
import mouseImg from "../images/mouse.svg"

const HomeHero = () => {
  return (
    <div className="h-screen w-full bg-cover bg-[url('../images/home-hero-img.png')]">
      <div className="h-full relative z-30 bg-gradient-to-b from-hero-blue-dark to-hero-blue-light"></div>
      <div className="absolute flex flex-row h-full w-full justify-center items-center top-0 left-0 z-40">
        <div className="flex flex-col justify-center items-center text-white font-Poppins text-center -mt-16">
          <h1 className="uppercase font-bold text-6xl leading-tight">
            V-Realm Visual
            <br />
            Studios
          </h1>

          <p className="pt-4 font-light text-3xl">Seeing is Believing</p>

          <div className="text-md font-medium mt-8 ring-1 ring-white rounded-sm">
            <a className="inline-block px-8 py-4" href="/">
              Let's Connect
            </a>
          </div>

          <div className="relative mt-4 h:20 md:h-2">
            <div className="absolute left-1/2 top-0 h-1 border-l-2 opacity-60 border-white bg-white w-1 -translate-x-1/2 rounded-full"></div>
            <div className="absolute left-1/2 top-0 h-40 md:h-28 border-l-2 opacity-60 border-white ">
              <div className="absolute top-full">
                <div className="w-10 h-10 ring-1 ring-white rounded-full -translate-x-1/2">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <Image
                      src={mouseImg}
                      alt={"Company headline on to of a picture of a house"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
