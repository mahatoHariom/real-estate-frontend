"use client"

import React from "react"
import { registerUser } from "@/actions/user/registerUser"
import { registerFormSchema } from "@/validations/user/registerUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import {
  Control,
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Form } from "@/components/ui/form"

import FieldWrapper from "../Custom/FormInput"
import { Button } from "../ui/button"

const Register = () => {
  const { mutate: createUserHandler, isPending } = useMutation({
    mutationKey: ["user", "register"],
    mutationFn: registerUser,
  })

  const form = useForm<z.infer<typeof registerFormSchema>>({
    mode:"all",
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof registerFormSchema>> = async (
    values
  ) => {
    createUserHandler(values, {
      onSuccess: (data) => {
        toast.success("Successfully created")
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data.message)
        }
      },
    })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FieldWrapper
            control={form.control}
            name="username"
            label="Name"
            placeholder="Enter your name"
          />
          <FieldWrapper
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FieldWrapper
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <Button type="submit" className="w-full">
            {isPending ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "  Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Register
