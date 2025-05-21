import { DashboardLayout } from "../../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Input } from "../../../../components/ui/input"
import { Edit, Trash2, Search, Eye } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"

export default function NewsEditPage() {
  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "New Medical Center Opening",
      category: "General",
      author: "Praveen",
      status: "Published",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "COVID-19 Vaccination Drive",
      category: "Health",
      author: "Praveen",
      status: "Published",
      date: "2023-05-10",
    },
    {
      id: 3,
      title: "Medical Conference Announcement",
      category: "Events",
      author: "Praveen",
      status: "Draft",
      date: "2023-05-08",
    },
    {
      id: 4,
      title: "New Research Findings",
      category: "Research",
      author: "Praveen",
      status: "Published",
      date: "2023-05-05",
    },
    {
      id: 5,
      title: "Healthcare Policy Update",
      category: "Policy",
      author: "Praveen",
      status: "Draft",
      date: "2023-05-01",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">News Edit</h1>
          <p className="text-muted-foreground">Manage and edit news articles.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>News Articles</CardTitle>
            <CardDescription>View, edit, and manage all news articles.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search news articles..." className="pl-8" />
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
                  {newsArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.category}</TableCell>
                      <TableCell>{article.author}</TableCell>
                      <TableCell>
                        <Badge variant={article.status === "Published" ? "default" : "secondary"}>
                          {article.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{article.date}</TableCell>
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
