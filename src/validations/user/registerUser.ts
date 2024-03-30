import {z} from 'zod'
export const registerFormSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8characters.",
    }),
  })

  export const loginFormSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    
    password: z.string().min(8, {
      message: "Password must be at least 8characters.",
    }),
  })