import React from "react"

interface BtnText {
  text: string
}

const BaseButton = ({ btnText }: { btnText: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-44 h-12 bg-blue-shade">
        <a
          href="/"
          className="h-full tracking-wide text-sm font-medium font-Poppins text-white flex justify-center items-center "
        >
          {btnText}
        </a>
      </div>
    </div>
  )
}

export default BaseButton
