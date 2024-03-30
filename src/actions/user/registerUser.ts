import api from "@/lib/axiosInstance"

export interface IRegisterInput {
  username: string
  password: string
  email: string
}

export  async function registerUser(data: IRegisterInput) {
  const response = await api.post("/api/v1/auth/register", data)
  return response?.data
}

export async function loginUser(data: Partial<IRegisterInput>) {
  const response = await api.post("/api/v1/auth/login", data)
  return response?.data
}
