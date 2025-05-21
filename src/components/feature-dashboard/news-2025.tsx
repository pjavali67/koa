"use client"

import { DataTable, type Column, type FormField } from "../../components/ui/data-table"
import { useLocalStorageData } from "../../hooks/use-local-storage-data"
import { Button } from "../../components/ui/button"
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
  const [newsArticles, setNewsArticles] = useLocalStorageData<NewsArticle>("news2025", [
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
  ])

  const columns: Column[] = [
    { key: "title", title: "Title" },
    { key: "author", title: "Author" },
    { key: "date", title: "Date" },
    {
      key: "status",
      title: "Status",
      render: (value) => (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            value === "Published"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
          }`}
        >
          {value}
        </span>
      ),
    },
  ]

  const formFields: FormField[] = [
    { key: "title", label: "Title", type: "text", required: true },
    { key: "author", label: "Author", type: "text", required: true },
    { key: "date", label: "Date", type: "date", required: true, defaultValue: new Date().toISOString().split("T")[0] },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "Published", label: "Published" },
        { value: "Draft", label: "Draft" },
      ],
      required: true,
      defaultValue: "Draft",
    },
    { key: "content", label: "Content", type: "textarea", rows: 8 },
  ]

  const handlePublishArticle = (article: NewsArticle, onRefresh: () => void) => {
    const newStatus = article.status === "Published" ? "Draft" : "Published"
    const updatedArticles = newsArticles.map((a) => (a.id === article.id ? { ...a, status: newStatus } : a))
    setNewsArticles(updatedArticles)
    toast({
      title: newStatus === "Published" ? "Article published" : "Article unpublished",
      description:
        newStatus === "Published"
          ? "The article has been published successfully."
          : "The article has been moved to drafts.",
    })
    onRefresh()
  }

  return (
    <DataTable
      title="News 2025"
      description="Manage news articles for 2025"
      columns={columns}
      formFields={formFields}
      data={newsArticles}
      onDataChange={setNewsArticles}
      storageKey="news2025"
      searchKeys={["title", "author"]}
      viewContent={(article) => (
        <div className="prose dark:prose-invert max-w-none">
          <h2>{article.title}</h2>
          <p className="text-sm text-muted-foreground">
            By {article.author} on {article.date}
          </p>
          <div className="mt-4">{article.content}</div>
        </div>
      )}
      additionalActions={(article, onRefresh) => (
        <Button
          variant={article.status === "Published" ? "outline" : "default"}
          size="sm"
          className="ml-1"
          onClick={() => handlePublishArticle(article, onRefresh)}
        >
          {article.status === "Published" ? "Unpublish" : "Publish"}
        </Button>
      )}
    />
  )
}
