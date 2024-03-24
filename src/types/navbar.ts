import { Url } from "next/dist/shared/lib/router/router"

export interface InavbarItem {
  name: String
  href: Url
}

export const navItems: InavbarItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Property",
    href: "/property",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  
]
