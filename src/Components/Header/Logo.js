import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export const Logo = () => {
  return (
    // <Link href="/">
    //     <div className=" rounded-full overflow-hidden border border-solid p-2 justify-center text-center">
    //         <span>My Logo</span>
    //     </div>
    // </Link>
    <Image
      src="https://qakkspvhxfwkttmbalej.supabase.co/storage/v1/object/public/images/logo.png"
      width={250}
      height={250}
      alt="Picture of the author"
    />
  )
}
