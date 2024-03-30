import React from "react"

import PropertyCard from "@/components/common/PropertyCard"

const FeaturedProperties = () => {
  return (
    <div className="mt-10 w-full">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-bold text-gray-500">
          Featured Properties
        </h1>
        <span className="text-sm text-gray-500">
          Handpicked properties by our team.
        </span>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 w-[70%] mx-auto">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  )
}

export default FeaturedProperties
