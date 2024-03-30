import React from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { CiHeart, CiLocationOn } from "react-icons/ci"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

const PropertyCard = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="relative  m-1  h-[220px]">
          <Image
            src="/img/p3.jpg"
            alt="name"
            layout="fill"
            className="rounded-lg object-cover"
          />
          <div className="absolute left-2 top-2 flex gap-2">
            <Badge>Featured</Badge>
            <Badge>Sell</Badge>
          </div>
          <div className="absolute bottom-2 left-2 ">
            <div className="w-full">
              <span className="text-xl font-bold text-secondary">$1300/mo</span>
            </div>
          </div>
          <div className=" absolute bottom-2 right-2">
            <CiHeart size={25} className="font-bold text-white" />
          </div>
        </CardHeader>
        <CardContent className="mt-5 ">
          <h1 className="text-lg font-semibold">Luxury Family House</h1>
          <span className="flex items-center gap-1">
            <CiLocationOn />
            Lorem ipsum dolor sit amet,
          </span>
        </CardContent>
        <hr />
        <CardFooter className="mt-2 flex justify-between">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/img/p1.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="mx-1 text-xs">Hariom Mahato</span>
          </div>

          <span className="text-xs text-gray-400">
            1 year ago
          </span>
        </CardFooter>
      </Card>
    </>
  )
}

export default PropertyCard
