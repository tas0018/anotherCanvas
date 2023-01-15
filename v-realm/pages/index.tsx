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
import ContactForm from "../components/ContactForm"

const text = "Test"

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-off-white-one">
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

      <div className="py-24">
        <BaseButton btnText={"Learn More"} />
      </div>

      <div className="relative h-[70vh] w-full bg-cover bg-center bg-[url('../images/divider-one.png')]">
        <div className="h-full relative z-30 bg-image-divider-overlay opacity-60"></div>
        <div className="absolute flex flex-row h-full w-full justify-center items-center top-0 left-0 z-40">
          <div className="opacity-100 z-50">
            <h3 className="font-Poppins font-light text-6xl">
              We Treat You Like Family
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full w-full px-10 lg:px-20 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-dark-grey text-4xl font-light pb-8 md:pb-0">
            Check Our
            <span className="font-semibold font-Poppins"> Instagram</span>
          </h2>

          <BaseButton btnText={"@VRVS"} />
        </div>

        <div className=" grid grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 h-[200vh] md:h-[60vh] w-full mt-16 md:mt-10 gap-y-6 md:gap-x-6">
          <div className="h-full bg-cover bg-[url('../images/instagram-VRVS.png')]"></div>
          <div className="h-full bg-cover bg-[url('../images/instagram-VRVS.png')]"></div>
          <div className="h-full bg-cover bg-[url('../images/instagram-VRVS.png')]"></div>
          <div className="h-full bg-cover bg-[url('../images/instagram-VRVS.png')]"></div>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default HomePage
