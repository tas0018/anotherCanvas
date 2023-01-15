import React from "react"

const Gallery = () => {
  return (
    <div className="w-full h-[240vh] md:h-[140vh] grid grid-cols-1  md:grid-rows-14 md:grid-cols-3 gap-6 lg:px-20">
      <div className="bg-red-400 row-start-1 row-end-3   md:row-start-1 md:row-end-6 md:col-start-1">
        1
      </div>
      <div className="bg-red-400 md:row-start-1 md:row-span-3 md:col-start-2">
        2
      </div>
      <div className="bg-red-400 md:col-start-2 md:row-span-3">3</div>
      <div className="bg-red-400 row-start-5 row-end-8 md:col-start-3 md:row-start-1 md:row-end-8">
        4
      </div>
      <div className="bg-red-400 md:row-start-6 md:row-end-14">5</div>
      <div className="bg-red-400 row-start-9 row-end-11 md:col-start-2 md:row-span-4">
        6
      </div>
      <div className="bg-red-400  md:col-start-2 md:row-start-11 md:row-end-14">
        7
      </div>
      <div className="bg-red-400 row-start-12 row-end-14 md:col-start-3 md:row-start-8 md:row-span-6">
        8
      </div>
    </div>
  )
}

export default Gallery
