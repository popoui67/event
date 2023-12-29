"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from 'next/link'
export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Event',
      route: '/events/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }

export const NavIt  =()=>{
    const pathname = usePathname();
    return(
   <ul className=" md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
{headerLinks.map((links )=>{
    const isActive = pathname === links.route
    return(
        <li 
        key={links.route}
      className={`${isActive && " text-primary"} 
      flex-center p-medium-16 whitespace-nowrap`}>
<Link href={links.route}>
{links.label}
</Link>   
     </li>
    )
})}


   </ul>
    )
}
export const MobNav =()=> {
return(
   <nav className=" md:hidden">
    <Sheet>
  <SheetTrigger className=" align-middle">
    <Image
  src="/assets/icons/menu.svg"
  alt=""
  width={24}
  height={24}
  /></SheetTrigger>
  <SheetContent className=" flex flex-col gap-6 bg-white md:hidden">
  <Image
  src="/assets/icons/logo.svg"
  alt=""
  width={128}
  height={38}
  />
    <Separator className="border boder-gray-50"/>
    <NavIt/>
  </SheetContent>
</Sheet>
   </nav>
)
}