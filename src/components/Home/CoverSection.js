// import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = blogs;
    const blog = sortedBlogs[0];

  return (
    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-[#9C6644]/90 rounded-3xl z-0' />
            <Image src={blog.image} alt={blog.title} fill className='w-full h-full object-center object-cover rounded-3xl -z-10' sizes='100vw' priority />
            <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-[#EDE0D4]'>
                <Link href={`/blog/${blog.id}-${blog.title.replace(/\s+/g, '-').toLowerCase()}`} className='mt-6'>
                <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                    <span className='bg-gradient-to-r from-[#B08968] to-[#7F5539] bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                    {blog.title}
                    </span>
                </h1>
                </Link>
                <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl text-[#DDB892]'>
                {blog.description}
                </p>
            </div>
        </article>
    </div>
  )
}

export default HomeCoverSection