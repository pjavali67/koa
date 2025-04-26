
"use client";

import React from 'react'

const ProductPage = ({params}:{ params:{id:number}}) => {

  const  id  = params.id
    console.log(id);
    const blogPost = {
      id,
      title: `Blog Post ${id}`,
      author: `Author ${id}`,
      date: new Date().toLocaleDateString(),
      image: `/images/image${Math.floor(Math.random() * 8)}.jpg`,
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
      ],
    };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="text-gray-600 text-sm mb-2">
          By {blogPost.author} on {blogPost.date}
        </p>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-100 h-64 object-cover rounded-md mb-6"
        />
        <div className="space-y-4 text-gray-800">
          {blogPost.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
     
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 shadow-md">
            <p className="text-gray-400">
              <strong>Praveen Javali:</strong> Great article! I really enjoyed reading
              it.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <p className="text-gray-400">
              <strong>Dr. HM Ramchandra:</strong> Very informative and well-written.
              Keep up the good work!
            </p>
          </div>
        </div>
      </div>

      {/* Post Comments Section */}
      <>
          <div className="mt-8">
            <div className="border rounded-lg p-6 shadow-md bg-white">
              <h2 className="text-2xl font-semibold mb-4">Post Comments</h2>
              <p className="text-gray-600 mb-4">Leave your comments here</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    className="w-full border rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your comments here..."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-pur-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
      </>
    </div>
  );
}


export default ProductPage;