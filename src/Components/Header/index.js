import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import { LinkedinIcon, TwitterIcon, GithubIcon, SunIcon } from '../Icons'

export const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
        <Logo />
        <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mr-2">About</Link>
            <Link href="/contact" className="mr-2">Contact</Link>
            <button>
                <SunIcon />
            </button>
        </nav>
        <div>
        <div className=" hidden sm:flex items-center">
            <a href='' rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href='' rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href='' rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 " /></a>
        </div>
        </div>
    </header>
  )
}
