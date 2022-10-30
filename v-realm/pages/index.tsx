import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import HomeHero from "../components/HomeHero"
import ThreeCard from "../components/ThreeCard"
import BaseButton from "../components/BaseButton"
import MapIcon from "../components/MapIcon"
import ClipboardIcon from "../components/ClipboardIcon"
import Ribbon from "../components/Ribbon"
import Gallery from "../components/Gallery"

const text = "Test"

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <HomeHero />
      <div className="h-full lg:h-[110vh] w-screen px-10 lg:px-20 flex flex-col bg-off-white-one justify-around">
        <h2 className="text-dark-grey mt-20 pb-8 text-4xl font-light mb-8">
          About{" "}
          <span className="font-semibold font-Poppins">
            V-Realm Visual Studios
          </span>
        </h2>

        <ThreeCard />

        <div className="py-10">
          <BaseButton btnText={"Learn More"} />
        </div>
      </div>

      <div className="flex flex-col bg-off-white-one w-full h-full">
        <div className="px-10 lg:px-20 pb-20">
          <h2 className="text-dark-grey mt-12 pb-8 text-4xl font-light">
            Why <span className="font-semibold font-Poppins">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8 md:gap-6 mt-12">
            <div className="flex flex-col justify-around bg-white h-72 p-8">
              <div>
                <MapIcon />
              </div>
              <div>
                <h3 className="text-card-headline font-medium text-xl font-Poppins">
                  We’re Locally Based
                </h3>
              </div>
              <div>
                <p className="text-black-olive">
                  In his tractibus navigerum nusquam vsitu flumen sed in locis
                  plurimis aquae suapte natura calentes emergu
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-around bg-white h-72 p-8">
              <div>
                <ClipboardIcon />
              </div>
              <div>
                <h3 className="text-card-headline font-medium text-xl font-Poppins">
                  We Fit Your Budget
                </h3>
              </div>
              <div>
                <p className="text-black-olive">
                  In his tractibus navigerum nusquam vsitu flumen sed in locis
                  plurimis aquae suapte natura calentes emergu
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-around bg-white h-72 p-8">
              <div>
                <Ribbon />
              </div>
              <div>
                <h3 className="text-card-headline font-medium text-xl font-Poppins">
                  Certified Experts
                </h3>
              </div>
              <div>
                <p className="text-black-olive">
                  In his tractibus navigerum nusquam vsitu flumen sed in locis
                  plurimis aquae suapte natura calentes emergu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  )
}

export default HomePage
