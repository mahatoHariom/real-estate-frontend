"use client"

import { useState } from "react"
import { store } from "@/redux/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { Toaster } from "sonner"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
        <Provider store={store}>
          <Toaster />
          {children}
        </Provider>
      </QueryClientProvider>
    </>
  )
}
