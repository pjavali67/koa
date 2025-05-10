"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Search, Plus, Pencil, Trash2, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { toast } from "../../hooks/use-toast"

interface NewsArticle {
  id: number
  title: string
  author: string
  date: string
  status: string
  content?: string
}

export function News2025() {
  // Load news articles from localStorage or use default data
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>(() => {
    if (typeof window !== "undefined") {
      const savedArticles = localStorage.getItem("news2025")
      if (savedArticles) {
        return JSON.parse(savedArticles)
      }
    }
    return [
      {
        id: 1,
        title: "Future Tech Trends",
        author: "John Doe",
        date: "2025-01-10",
        status: "Draft",
        content: "Looking ahead to the technology trends of 2025...",
      },
      {
        id: 2,
        title: "Strategic Planning for 2025",
        author: "Jane Smith",
        date: "2025-02-15",
        status: "Draft",
        content: "Our strategic planning initiatives for the upcoming year...",
      },
    ]
  })

  // Save news articles to localStorage when they change
  useEffect(() => {
    localStorage.setItem("news2025", JSON.stringify(newsArticles))
  }, [newsArticles])

  const [searchTerm, setSearchTerm] = useState("")
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null)
  const [viewingArticle, setViewingArticle] = useState<NewsArticle | null>(null)
  const [newArticle, setNewArticle] = useState<Omit<NewsArticle, "id">>({
    title: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    status: "Draft",
    content: "",
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<NewsArticle | null>(null)

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddArticle = () => {
    // Validate form
    if (!newArticle.title.trim() || !newArticle.author.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and author are required fields.",
        variant: "destructive",
      })
      return
    }

    const newId = Math.max(0, ...newsArticles.map((a) => a.id)) + 1
    setNewsArticles([...newsArticles, { id: newId, ...newArticle }])
    setNewArticle({
      title: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
      status: "Draft",
      content: "",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Article added",
      description: "The news article has been added successfully.",
    })
  }

  const handleUpdateArticle = () => {
    if (!editingArticle) return

    // Validate form
    if (!editingArticle.title.trim() || !editingArticle.author.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and author are required fields.",
        variant: "destructive",
      })
      return
    }

    setNewsArticles(newsArticles.map((a) => (a.id === editingArticle.id ? editingArticle : a)))
    setEditingArticle(null)
    setIsEditDialogOpen(false)
    toast({
      title: "Article updated",
      description: "The news article has been updated successfully.",
    })
  }

  const handleDeleteArticle = () => {
    if (!articleToDelete) return
    setNewsArticles(newsArticles.filter((a) => a.id !== articleToDelete.id))
    setArticleToDelete(null)
    setIsDeleteDialogOpen(false)
    toast({
      title: "Article deleted",
      description: "The news article has been deleted successfully.",
    })
  }

  const handlePublishArticle = (article: NewsArticle) => {
    setNewsArticles(
      newsArticles.map((a) =>
        a.id === article.id ? { ...a, status: a.status === "Published" ? "Draft" : "Published" } : a,
      ),
    )
    toast({
      title: article.status === "Published" ? "Article unpublished" : "Article published",
      description:
        article.status === "Published"
          ? "The article has been moved to drafts."
          : "The article has been published successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">News 2025</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add News Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add News Article</DialogTitle>
              <DialogDescription>Create a new news article for 2025.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-right">
                  Author
                </Label>
                <Input
                  id="author"
                  value={newArticle.author}
                  onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newArticle.date}
                  onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select
                  value={newArticle.status}
                  onValueChange={(value) => setNewArticle({ ...newArticle, status: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="content" className="text-right pt-2">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  className="col-span-3"
                  rows={8}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleAddArticle}>Add Article</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news articles..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>News Articles 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[150px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No articles found
                  </TableCell>
                </TableRow>
              ) : (
                filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>{article.author}</TableCell>
                    <TableCell>{article.date}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          article.status === "Published"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {article.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setViewingArticle(article)
                            setIsViewDialogOpen(true)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingArticle(article)
                            setIsEditDialogOpen(true)
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                          onClick={() => {
                            setArticleToDelete(article)
                            setIsDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>

                        <Button
                          variant={article.status === "Published" ? "outline" : "default"}
                          size="sm"
                          className="ml-1"
                          onClick={() => handlePublishArticle(article)}
                        >
                          {article.status === "Published" ? "Unpublish" : "Publish"}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* View Dialog */}
          <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{viewingArticle?.title}</DialogTitle>
                <DialogDescription>
                  By {viewingArticle?.author} on {viewingArticle?.date}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="prose dark:prose-invert max-w-none">
                  <p>{viewingArticle?.content}</p>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Edit Dialog */}
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Edit News Article</DialogTitle>
                <DialogDescription>Make changes to the news article.</DialogDescription>
              </DialogHeader>
              {editingArticle && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="edit-title"
                      value={editingArticle.title}
                      onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-author" className="text-right">
                      Author
                    </Label>
                    <Input
                      id="edit-author"
                      value={editingArticle.author}
                      onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="edit-date"
                      type="date"
                      value={editingArticle.date}
                      onChange={(e) => setEditingArticle({ ...editingArticle, date: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-status" className="text-right">
                      Status
                    </Label>
                    <Select
                      value={editingArticle.status}
                      onValueChange={(value) => setEditingArticle({ ...editingArticle, status: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Published">Published</SelectItem>
                        <SelectItem value="Draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="edit-content" className="text-right pt-2">
                      Content
                    </Label>
                    <Textarea
                      id="edit-content"
                      value={editingArticle.content}
                      onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                      className="col-span-3"
                      rows={8}
                    />
                  </div>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleUpdateArticle}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete Dialog */}
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete News Article</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this article? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              {articleToDelete && (
                <div className="py-4">
                  <p>
                    You are about to delete <strong>{articleToDelete.title}</strong> by{" "}
                    <strong>{articleToDelete.author}</strong>.
                  </p>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteArticle}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
