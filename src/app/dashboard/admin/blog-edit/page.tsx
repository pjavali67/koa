import { DashboardLayout } from "../../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Input } from "../../../../components/ui/input"
import { Edit, Trash2, Search, Eye } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"

export default function BlogEditPage() {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Heart Health",
      category: "Cardiology",
      author: "Dr. Praveen",
      status: "Published",
      date: "2023-05-20",
    },
    {
      id: 2,
      title: "Mental Health Awareness",
      category: "Psychiatry",
      author: "Dr. Saraha",
      status: "Published",
      date: "2023-05-15",
    },
    {
      id: 3,
      title: "Nutrition Tips for Patients",
      category: "Nutrition",
      author: "Dr. sham",
      status: "Draft",
      date: "2023-05-12",
    },
    {
      id: 4,
      title: "Advances in Cancer Treatment",
      category: "Oncology",
      author: "Dr. krishnan",
      status: "Published",
      date: "2023-05-08",
    },
    {
      id: 5,
      title: "Pediatric Care Guidelines",
      category: "Pediatrics",
      author: "Dr. Ravan",
      status: "Draft",
      date: "2023-05-05",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Blog Edit</h1>
          <p className="text-muted-foreground">Manage and edit blog posts.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>View, edit, and manage all blog posts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search blog posts..." className="pl-8" />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                      </TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
