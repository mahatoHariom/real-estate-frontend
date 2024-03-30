"use client"

import React from "react"
import { Url } from "next/dist/shared/lib/router/router"
import Image from "next/image"
import Link from "next/link"
import { showModal } from "@/redux/features/modal"
import { useDispatch } from "react-redux"

import { navItems } from "@/types/navbar"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/Modal/LoginModal"
import { SquigglyUnderline } from "@/components/UnderlineNav"
import { User2 } from "lucide-react"

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <header className="sticky top-0 z-50 flex h-20   w-full  items-center justify-between bg-">
      <div className="flex items-center gap-2 px-5">
        <Image
          src={"/img/logo.svg"}
          height={30}
          width={30}
          alt="Logo"
          className="text-inherit"
        />
        <span className="text-xl ">FindHouse</span>
      </div>
      <SquigglyUnderline />

      <div className="flex gap-2">
        <Button
          onClick={() => {
            dispatch(showModal())
          }}
          className="mx-5 rounded-full"
        >
          + Create Listing
        </Button>

        <LoginModal>
          <Button variant={"secondary"} className="mx-10 w-32">
            <User2/>  Login/Register</Button>
        </LoginModal>
      </div>
    </header>
  )
}

export default Navbar
