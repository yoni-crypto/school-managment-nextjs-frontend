import "./global.css";


import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex">
          {/* left */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] px-2">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
              <Image src="/logo.png" alt="logo" width={48} height={48} />
              <span className="hidden lg:block font-bold">YoSchool</span>
            </Link>
            <Menu />
          </div>
          {/* right */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col ">
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}