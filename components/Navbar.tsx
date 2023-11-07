"use client"

import Link from 'next/link'
import {useSession, signOut} from "next-auth/react"
import Image from 'next/image'


const Navbar = () => {
  const {status} = useSession()

  return (
    <div className='flex justify-between pb-4 border-b mb-4'>
    <div>
        <Link href={"/"}>
            <h1 className='text-dark text-4xl font-bold tracking-tighter'>Second Hand</h1>
        </Link>
        <p className='text-sm'>
            Exploring Tomorrows Innovations, <br/> One Byte at a Time.
        </p>
       </div>

         {status === "authenticated" ? (
          <>
           <div className="hidden">
            <button onClick={()=> signOut()} className='btn'>Sign Out</button>
            </div>
            <div>
            <Image
              src={session?.user?.image || ""}
              width={36}
              height={36}
              alt="Profile Image"
              className="rounded-full cursor-pointer"
              // onClick={() => setIsPopupVisible((prev) => !prev)}
            />
            </div>
          </>
         ):(
          <div className='flex items-center'>
          <Link className='btn' href={"/sign-in"}>
              Sign In
          </Link>
         </div>
         )}
    </div>
  )
}

export default Navbar