"use client"

import React from "react"
import {
  chnagePropertyType,
  PropertyTypeEnum,
} from "@/redux/features/property_type"
import { RootState } from "@/redux/store"
import { FormProvider, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InputField } from "@/components/common/InputField"

const SearchComponent = () => {
  const methods = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const { type } = useSelector((state: RootState) => state.propertyType)

  const handleChangePropertyType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonName = e.currentTarget.name
    if (buttonName === PropertyTypeEnum.SELL) {
      dispatch(chnagePropertyType(PropertyTypeEnum.SELL))
    } else {
      dispatch(chnagePropertyType(PropertyTypeEnum.RENT))
    }
  }

  return (
    <div className="mt-4 flex w-screen  flex-col items-center justify-center">
      <div className="flex  gap-2">
        <Button
          className={cn(
            type === PropertyTypeEnum.SELL ? "bg-primary text-white" : "bg-white text-black",
            "px-10 py-6 "
          )}
          name={PropertyTypeEnum.SELL}
          onClick={(e) => handleChangePropertyType(e)}
        >
          Sell
        </Button>
        <Button
          className={cn(
            type === PropertyTypeEnum.RENT ? "bg-primary text-white" : "bg-white text-black",
            "px-10 py-6 "
          )}
          name={PropertyTypeEnum.RENT}
          onClick={(e) => handleChangePropertyType(e)}
        >
          Rent
        </Button>
      </div>

      <div className="mt-5 h-20 w-2/4 rounded-lg border bg-white shadow-md ">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="m-5 flex items-center justify-between gap-5"
          >
            <InputField
              type="text"
              placeholder="Enter keyword"
              name="keyword"
            />
            <Select {...methods.register("type")} name="type">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Bungalow">Bungalow</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
              </SelectContent>
            </Select>

            <InputField type="text" placeholder="Location" name="location" />

            <Button type="submit">Search</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SearchComponent
