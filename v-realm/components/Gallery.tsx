import React from "react"

const Gallery = () => {
  return (
    <div className="w-full h-[140vh] grid grid-rows-14 grid-cols-3 gap-6 lg:px-20">
      <div className="bg-red-400 row-start-1 row-end-6 col-start-1">1</div>
      <div className="bg-red-400 row-start-1 row-span-3 col-start-2">2</div>
      <div className="bg-red-400 col-start-2 row-span-3">3</div>
      <div className="bg-red-400 col-start-3 row-start-1 row-end-8">4</div>
      <div className="bg-red-400 row-start-6 row-end-14">5</div>
      <div className="bg-red-400 col-start-2 row-span-4">6</div>
      <div className="bg-red-400 col-start-2 row-start-11 row-end-14">7</div>
      <div className="bg-red-400 col-start-3 row-start-8 row-span-6">8</div>
    </div>
  )
}

export default Gallery
