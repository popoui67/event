import Link from "next/link"
import Image from "next/image"
const Footer = ()=>{
    return(
        <footer className=" border-t">
            <div className=" flex-centre wrapper fex-between flex flex-col gap-4 text-center sm:flex-row">
            <Link href="/">
<Image 
src="/assets/images/logo.svg"
alt=""
width={128}
height={38}
/>

<p>2023 Evently all Rights Reserved</p>


            </Link>


            </div>
  

        </footer>
    )
}
export default Footer