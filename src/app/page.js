import Image from 'next/image'

import supabase from '../utils/supabaseClient.js';
import HomeCoverSection from '../Components/Home/CoverSection.js';
import RecentArticles from '../Components/Home/RecentArticles.js';
import Footer from '../Components/Footer/index.js';
// import { useState, useEffect } from 'react';


export async function getData() {
  try {
    const { data , error } = await supabase.from('blogs_duplicate').select('*');
    // console.log('Success:',blogs);
    if (error) {
      throw error;
    }
    return {
      blogs: data || [] ,
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [], // Return an empty array if there's an error
    };
  }
}


export default async function Page() {
  const data = await getData();

  if (data.isLoading) return <p>Loading...</p>;
  if (data.error) return <p>{data.error}</p>;

  return (
    <main className="flex flex-col items-center justify-center">
      <br />
      <HomeCoverSection blogs={data.blogs} />

      <RecentArticles blogs={data.blogs} />

      {/* {data.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>{blog.short_desc}</p>
          <p>{blog.image}</p>
        </div>
      ))} */}

      <Footer />
    </main>
  );
}

export const fetchCache = 'force-no-store';