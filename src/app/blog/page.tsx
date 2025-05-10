"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";


interface BlogPost {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
}

const mockPosts: BlogPost[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  image: `/images/image${Math.floor(Math.random() * 8)}.jpg`,
  description: `This is a short description for blog post ${i + 1}.`,
  author: `Author ${i + 1}`,
  date: new Date().toLocaleDateString(),
}));

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mockPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(mockPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>

      <div className="container mx-auto p-2">
        <div className="flex justify-end mr-10">
          <Link className='btn relative   bg-purple-500 h-20 m-5 text-xl text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out mr-10 inset-15 ' href="/postablog">
            Post an Article
          </Link>
        </div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md p-4">
            <Image src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" height={150} width={275} />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{post.description}</p>
            <p className="text-gray-500 text-xs mb-4">
              By {post.author} on {post.date}
            </p>
            <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;