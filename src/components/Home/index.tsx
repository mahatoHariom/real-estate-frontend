"use client"

import React from "react"
import Image from "next/image"

import LoginModal from "../Modal/LoginModal"
import { SquigglyUnderline } from "../UnderlineNav"
import SearchComponent from "./Search"

const HomeComponent = () => {
  return (
    <>
      <div className="relative flex  h-screen w-full items-center justify-center gap-5">
        <Image
          src={"/img/home.jpeg"}
          fill
          alt="home"
          className="z-0 object-cover"
        />
        <div className="absolute text-center ">
          <h1 className=" text-5xl font-bold text-white ">
            Find Your Dream Home
          </h1>

          <SearchComponent />
        </div>
      </div>
      
    </>
  )
}

export default HomeComponent
