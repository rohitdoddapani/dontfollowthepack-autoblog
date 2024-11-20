// app/blog/page.js
import Link from 'next/link';

const blogs = [
  { id: 1, title: 'First Blog Post' },
  { id: 2, title: 'Second Blog Post' },
];

export default function BlogList() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}-${blog.title.replace(/\s+/g, '-').toLowerCase()}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}