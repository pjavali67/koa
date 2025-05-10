"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { Calendar, Plus, Search } from "lucide-react"
import { useToast } from "../../ui/use-toast"
import { Input } from "../../ui/input"
import { Pagination } from "../pagination"

interface Event {
  id: string
  title: string
  date: Date
  location: string
  type: "upcoming" | "past"
}

export default function EventsContent() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Sample events data
  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "Annual Conference 2024",
      date: new Date(2024, 5, 10),
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "2",
      title: "Annual Conference 2025",
      date: new Date(2025, 5, 11),
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "3",
      title: "Annual Conference 2026",
      date: new Date(2026, 5, 12),
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "4",
      title: "Quarterly Meetup Q1 2023",
      date: new Date(2023, 2, 15),
      location: "In-person",
      type: "past",
    },
    {
      id: "5",
      title: "Quarterly Meetup Q2 2023",
      date: new Date(2023, 5, 20),
      location: "In-person",
      type: "past",
    },
    {
      id: "6",
      title: "Quarterly Meetup Q3 2023",
      date: new Date(2023, 8, 25),
      location: "In-person",
      type: "past",
    },
    {
      id: "7",
      title: "Workshop: Leadership Skills",
      date: new Date(2024, 3, 5),
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "8",
      title: "Workshop: Technical Skills",
      date: new Date(2023, 10, 12),
      location: "In-person",
      type: "past",
    },
    {
      id: "9",
      title: "Networking Event",
      date: new Date(2024, 4, 18),
      location: "Virtual Event",
      type: "upcoming",
    },
    {
      id: "10",
      title: "Annual Gala",
      date: new Date(2024, 11, 15),
      location: "Grand Hotel",
      type: "upcoming",
    },
    {
      id: "11",
      title: "Industry Panel Discussion",
      date: new Date(2024, 7, 22),
      location: "Conference Center",
      type: "upcoming",
    },
    {
      id: "12",
      title: "Member Orientation",
      date: new Date(2023, 9, 5),
      location: "Office Headquarters",
      type: "past",
    },
  ])

  const handleAddEvent = () => {
    toast({
      title: "Add Event",
      description: "This would open a form to add a new event.",
    })
  }

  // Filter events based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Separate upcoming and past events
  const upcomingEvents = filteredEvents.filter((event) => event.type === "upcoming")
  const pastEvents = filteredEvents.filter((event) => event.type === "past")

  // Calculate pagination for upcoming events
  const totalUpcomingPages = Math.ceil(upcomingEvents.length / itemsPerPage)
  const paginatedUpcomingEvents = upcomingEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Calculate pagination for past events
  const totalPastPages = Math.ceil(pastEvents.length / itemsPerPage)
  const paginatedPastEvents = pastEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Events Management</h2>
        <Button onClick={handleAddEvent}>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search events..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Reset to first page on new search
          }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled for the future</CardDescription>
          </CardHeader>
          <CardContent>
            {paginatedUpcomingEvents.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">No upcoming events found</p>
            ) : (
              <div className="space-y-4">
                {paginatedUpcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date.toLocaleDateString()} • {event.location}
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {upcomingEvents.length > itemsPerPage && (
              <div className="mt-4">
                <Pagination currentPage={currentPage} totalPages={totalUpcomingPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Past Events</CardTitle>
            <CardDescription>Events that have already taken place</CardDescription>
          </CardHeader>
          <CardContent>
            {paginatedPastEvents.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">No past events found</p>
            ) : (
              <div className="space-y-4">
                {paginatedPastEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-4 rounded-lg border p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date.toLocaleDateString()} • {event.location}
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm">
                          View Report
                        </Button>
                        <Button variant="outline" size="sm">
                          Archive
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {pastEvents.length > itemsPerPage && (
              <div className="mt-4">
                <Pagination currentPage={currentPage} totalPages={totalPastPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
