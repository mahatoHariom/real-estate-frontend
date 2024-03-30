"use client"

import React from "react"
import { loginUser } from "@/actions/user/registerUser"
import {
  loginFormSchema,
} from "@/validations/user/registerUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import {
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import {
  Form,
} from "@/components/ui/form"
import { Button } from "../ui/button"
import FieldWrapper from "../Custom/FormInput"

interface FormValues {
  email: string
  password: string
}


const Login = () => {
  const {
    mutate: createUserHandler,
    isPending,
    reset,
  } = useMutation({
    mutationKey: ["user", "login"],
    mutationFn: loginUser,
  })
  
  const form = useForm<z.infer<typeof loginFormSchema>>({
    mode: "all",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = async (
    values
  ) => {
    createUserHandler(values, {
      onSuccess: (data) => {
        toast.success("Login Successfully")
        reset()
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

export default Login
