import HomeComponent from "@/components/Home";
import FeaturedProperties from "@/components/Home/Featured";
import { ModeToggle } from "@/components/mode-toggle"; 

export default function Home() {
  return (
    <>
      <HomeComponent/>
      <FeaturedProperties/>
      {/* <ModeToggle/> */}
    </>
  )
}
