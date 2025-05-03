import type { Metadata } from "next"
import BlogPostForm from "../../components/Blog/blog-post-form"

export const metadata: Metadata = {
  title: "Create Blog Post",
  description: "Create a new blog post for your medical website",
}

export default function CreateBlogPost() {
  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold ml-20">Create Blog Post</h1>
   
     
    </div> <BlogPostForm />
    </div>
  )
}
