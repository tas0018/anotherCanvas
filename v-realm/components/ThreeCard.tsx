import React from "react"
import Image from "next/image"

function ThreeCard() {
  return (
    <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-y-0 lg:gap-x-6">
      <div className="text-white h-[30rem] lg:h-[70vh] bg-cover bg-[url('../images/temp1.png')]">
        <div className="h-full flex flex-col justify-end z-10 bg-gradient-to-t from-hero-blue-medium to-transparent">
          <div className="flex flex-row justify-between items-center mb-8 px-6">
            <h2 className="font-semibold text-2xl font-Poppins ">
              Architectural
            </h2>
            <div className="h-12 w-12 rounded-full cursor-pointer bg-blue-shade hover:bg-logo-pink transition ease-in delay-200">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src={"/right-arrow.svg"}
                  width={20}
                  height={20}
                  layout={"fixed"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white h-[30rem] lg:h-[70vh] bg-cover bg-[url('../images/temp2.png')]">
        <div className="h-full flex flex-col justify-end z-10 bg-gradient-to-t from-hero-blue-medium to-transparent">
          <div className="flex flex-row justify-between items-center mb-8 px-6">
            <h2 className="font-semibold text-2xl font-Poppins ">
              Interior Design
            </h2>
            <div className="h-12 w-12 rounded-full cursor-pointer bg-blue-shade hover:bg-logo-pink transition ease-in delay-200">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src={"/right-arrow.svg"}
                  width={20}
                  height={20}
                  layout={"fixed"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white h-[30rem] lg:h-[70vh]  bg-cover bg-[url('../images/temp3.png')]">
        <div className="h-full flex flex-col justify-end z-10 bg-gradient-to-t from-hero-blue-medium to-transparent">
          <div className="flex flex-row justify-between items-center mb-8 px-6">
            <h2 className="font-semibold text-2xl font-Poppins ">
              2D Floor Plans
            </h2>
            <div className="h-12 w-12 rounded-full cursor-pointer bg-blue-shade hover:bg-logo-pink transition ease-in delay-200">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                  src={"/right-arrow.svg"}
                  width={20}
                  height={20}
                  layout={"fixed"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeCard
