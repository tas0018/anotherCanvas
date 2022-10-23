import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import HomeHero from "../components/HomeHero"
import ThreeCard from "../components/ThreeCard"
import BaseButton from "../components/BaseButton"

const text = "Test"

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <HomeHero />
      <div className="h-full lg:min-h-[110vh] w-screen px-10 lg:px-20 flex flex-col bg-off-white-one justify-around">
        <h2 className="text-dark-grey mt-20 pb-8 text-4xl font-light">
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
    </div>
  )
}

export default HomePage
