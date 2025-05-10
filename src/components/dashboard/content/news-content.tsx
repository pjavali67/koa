"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { Pencil, Trash, Search } from "lucide-react"
import { useToast } from "../../ui/use-toast"
import { AddNewsDialog } from "../dialogs/add-news-dialog"
import { format } from "date-fns"
import { Input } from "../../ui/input"
import { Pagination } from "../pagination"

interface NewsItem {
  id: string
  title: string
  content: string
  date: Date
}

interface NewsContentProps {
  year: string
}

export default function NewsContent({ year }: NewsContentProps) {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: "1",
      title: "Organization Wins Award",
      content: "Our organization has been recognized for excellence in community service.",
      date: new Date(Number.parseInt(year), 2, 15),
    },
    {
      id: "2",
      title: "New Partnership Announced",
      content: "We're excited to announce our new partnership with a leading industry player.",
      date: new Date(Number.parseInt(year), 4, 22),
    },
    {
      id: "3",
      title: "Annual Conference Success",
      content: "This year's conference was our most successful yet, with over 500 attendees.",
      date: new Date(Number.parseInt(year), 6, 10),
    },
    {
      id: "4",
      title: "New Board Members Elected",
      content: "We're pleased to welcome three new members to our board of directors.",
      date: new Date(Number.parseInt(year), 1, 5),
    },
    {
      id: "5",
      title: "Community Outreach Program Launched",
      content: "Our new community outreach program aims to support local initiatives.",
      date: new Date(Number.parseInt(year), 3, 18),
    },
    {
      id: "6",
      title: "Quarterly Financial Report",
      content: "Our Q2 financial report shows strong growth and stability.",
      date: new Date(Number.parseInt(year), 5, 30),
    },
    {
      id: "7",
      title: "New Office Location",
      content: "We're excited to announce our new headquarters location downtown.",
      date: new Date(Number.parseInt(year), 7, 12),
    },
    {
      id: "8",
      title: "Member Spotlight: Jane Doe",
      content: "This month we highlight the achievements of our long-time member Jane Doe.",
      date: new Date(Number.parseInt(year), 8, 25),
    },
    {
      id: "9",
      title: "Annual Charity Drive Results",
      content: "Thanks to your generosity, we raised over $50,000 for local charities.",
      date: new Date(Number.parseInt(year), 9, 8),
    },
    {
      id: "10",
      title: "Industry Recognition Award",
      content: "Our organization has been nominated for the Industry Excellence Award.",
      date: new Date(Number.parseInt(year), 10, 20),
    },
    {
      id: "11",
      title: "Holiday Schedule Announcement",
      content: "Please note our modified hours of operation during the holiday season.",
      date: new Date(Number.parseInt(year), 11, 15),
    },
    {
      id: "12",
      title: "Year-End Review",
      content: "A look back at our major accomplishments and milestones this year.",
      date: new Date(Number.parseInt(year), 11, 28),
    },
  ])

  const addNewsItem = (newsItem: Omit<NewsItem, "id">) => {
    const newItem: NewsItem = {
      ...newsItem,
      id: Math.random().toString(36).substring(2, 9),
    }

    setNewsItems([newItem, ...newsItems])

    toast({
      title: "News item added",
      description: "The news item has been added successfully.",
    })
  }

  const deleteNewsItem = (id: string) => {
    setNewsItems(newsItems.filter((item) => item.id !== id))
    toast({
      title: "News item deleted",
      description: "The news item has been deleted successfully.",
    })
  }

  const editNewsItem = (id: string) => {
      toast({
        title: "Edit news item",
        description: `Edit functionality would open a dialog for item with ID: ${id}.`,
      })
    }
 // Filter news items for the selected year and search query
  const filteredNewsItems = newsItems.filter(
    (item) =>
      item.date.getFullYear() === Number.parseInt(year) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage)
  const paginatedNewsItems = filteredNewsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">News for {year}</h2>
        <AddNewsDialog onAddNews={addNewsItem} year={Number.parseInt(year)} />
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search news..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Reset to first page on new search
          }}
        />
      </div>

      {filteredNewsItems.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <p className="mb-4 text-center text-muted-foreground">No news items found for {year}</p>
            <AddNewsDialog onAddNews={addNewsItem} year={Number.parseInt(year)} />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paginatedNewsItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{format(item.date, "MMMM d, yyyy")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{item.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => editNewsItem(item.id)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600" onClick={() => deleteNewsItem(item.id)}>
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {filteredNewsItems.length > itemsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
