 "use client"
 import Link from "next/link"
 import Image from "next/image"
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { MobNav, NavIt } from "./navbar"
import { Separator } from "@radix-ui/react-separator"
const Header =()=>{
    return (
     <header className=" w-full border-b">
        <div className=" wrapper flex items-center justify-between">
            <Link href="/" className="w-30">
                <Image 
                src="/assets/images/logo.svg"
                width={128}
                height={38}
                alt="evently"
                />
            </Link>
            <SignedIn>
                <nav className=" md:flex-between hidden w-full max-w-xs">
                    <NavIt/>
                </nav>
            </SignedIn>
            <div className=" flex w-32 justify-end gap-3 ">
            <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
            </div>
        </div>

     </header>
    )
}
export default Header