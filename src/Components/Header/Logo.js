import React from 'react'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
        <div className=" rounded-full overflow-hidden border border-solid p-2 justify-center text-center">
            <span>My Logo</span>
        </div>
    </Link>
  )
}
