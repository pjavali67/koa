"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { Plus, FileText, Search } from "lucide-react"
import { useToast } from "../../ui/use-toast"
import { Input } from "../../ui/input"
import { Pagination } from "../pagination"

interface BlogPost {
  id: string
  title: string
  date: Date
  excerpt: string
  author: string
}

export default function BlogsContent() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Sample blog posts data
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Getting Started with Our Organization",
      date: new Date(2023, 0, 15),
      excerpt:
        "This is a sample blog post content. It would typically contain a summary or excerpt of the full blog post.",
      author: "John Smith",
    },
    {
      id: "2",
      title: "Best Practices for Community Engagement",
      date: new Date(2023, 1, 22),
      excerpt: "Learn how to effectively engage with your community and build lasting relationships.",
      author: "Sarah Johnson",
    },
    {
      id: "3",
      title: "The Future of Our Industry",
      date: new Date(2023, 2, 10),
      excerpt: "Exploring trends and predictions for where our industry is headed in the next decade.",
      author: "Michael Brown",
    },
    {
      id: "4",
      title: "How to Maximize Your Membership Benefits",
      date: new Date(2023, 3, 5),
      excerpt: "A comprehensive guide to taking advantage of all the benefits available to our members.",
      author: "Emily Davis",
    },
    {
      id: "5",
      title: "Spotlight: Member Success Stories",
      date: new Date(2023, 4, 18),
      excerpt: "Highlighting the achievements and success stories of our outstanding members.",
      author: "David Wilson",
    },
    {
      id: "6",
      title: "Annual Conference Recap",
      date: new Date(2023, 5, 30),
      excerpt: "A summary of the key takeaways and highlights from our annual conference.",
      author: "Jennifer Lee",
    },
    {
      id: "7",
      title: "New Resources for Professional Development",
      date: new Date(2023, 6, 12),
      excerpt: "Introducing new tools and resources to help you advance in your career.",
      author: "Robert Johnson",
    },
    {
      id: "8",
      title: "Industry Insights: Q3 2023",
      date: new Date(2023, 7, 25),
      excerpt: "Analysis of current trends and developments in our industry for the third quarter.",
      author: "Amanda Martinez",
    },
    {
      id: "9",
      title: "Volunteer Opportunities for Fall 2023",
      date: new Date(2023, 8, 8),
      excerpt: "Learn about upcoming volunteer opportunities and how you can get involved.",
      author: "Thomas Clark",
    },
    {
      id: "10",
      title: "Leadership Workshop Series Announcement",
      date: new Date(2023, 9, 20),
      excerpt: "Details about our upcoming workshop series focused on developing leadership skills.",
      author: "Lisa Anderson",
    },
    {
      id: "11",
      title: "Holiday Event Planning Guide",
      date: new Date(2023, 10, 15),
      excerpt: "Tips and strategies for planning successful holiday events for your organization.",
      author: "Kevin White",
    },
    {
      id: "12",
      title: "Year in Review: Our Achievements in 2023",
      date: new Date(2023, 11, 28),
      excerpt: "Reflecting on our organization's accomplishments and milestones over the past year.",
      author: "Patricia Brown",
    },
  ])

  const handleAddBlog = () => {
    toast({
      title: "Add Blog Post",
      description: "This would open a form to add a new blog post.",
    })
  }

  // Filter blog posts based on search query
  const filteredBlogPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogPosts.length / itemsPerPage)
  const paginatedBlogPosts = filteredBlogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button onClick={handleAddBlog}>
          <Plus className="mr-2 h-4 w-4" />
          Add Blog Post
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search blog posts..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Reset to first page on new search
          }}
        />
      </div>

      {filteredBlogPosts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <p className="mb-4 text-center text-muted-foreground">No blog posts found</p>
            <Button onClick={handleAddBlog}>
              <Plus className="mr-2 h-4 w-4" />
              Add Blog Post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paginatedBlogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{post.title}</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription>
                  Posted on {post.date.toLocaleDateString()} by {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredBlogPosts.length > itemsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
