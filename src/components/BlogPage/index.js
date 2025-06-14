import Image from 'next/image';

export default function BlogPage({ blog, relatedPosts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <a href="/" className="text-gray-500">Home</a> / 
        <a href="/category" className="text-gray-500"> {blog.category} </a> /
        <span className="text-gray-700"> {blog.title} </span>
      </div>

      {/* Title and Date */}
      <div className="flex flex-col md:flex-row md:items-start mb-6">
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold text-[#7F5539] mb-2">{blog.title}</h1>
          <p className="text-gray-600 text-sm"> {blog.date} </p>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/4 md:ml-6 mb-6 md:mb-0">
          <Image 
            src={blog.image}
            alt={blog.title}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Author */}
      <div className="flex items-center mb-6">
        <Image src={blog.authorImage} alt={blog.authorName} width={40} height={40} className="rounded-full mr-3" />
        <div>
          <p className="text-gray-700 font-semibold">{blog.authorName}</p>
          <p className="text-gray-500 text-sm">{blog.authorTitle}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none text-lg text-gray-700 leading-7 mb-10">
        {blog.content}
      </div>

      {/* Related Posts */}
      <h3 className="text-2xl font-semibold text-[#7F5539] mb-4">Posts You May Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#7F5539] mb-2">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a href={post.url} className="text-[#9C6644] font-semibold mt-2 inline-block">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}