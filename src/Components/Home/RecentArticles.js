// import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RecentArticles({blogs}) {
//   const [articles, setArticles] = useState([]);

  // Fetch the data from your API
//   useEffect(() => {
//     async function fetchArticles() {
//       const res = await fetch('/api/articles'); // Replace with your API endpoint
//       const data = await res.json();
//       setArticles(data);
//     }
//     fetchArticles();
//   }, []);

  return (
    <section className="py-16 bg-[#EDE0D4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#7F5539]">Recent Articles</h2>
        <p className="text-center text-[#9C6644] mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
                width='100'
                height='100'
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#7F5539]">{article.title}</h3>
                <p className="text-[#B08968] mt-4">
                  {article.excerpt}
                </p>
                <a href={`/blog/${article.id}-${article.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-[#9C6644] font-semibold mt-4 inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}