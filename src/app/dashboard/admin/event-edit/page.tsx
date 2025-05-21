import { DashboardLayout } from "../../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Input } from "../../../../components/ui/input"
import { Edit, Trash2, Search, Eye } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"

export default function EventEditPage() {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Annual Medical Conference",
      category: "Conference",
      location: "Grand Hotel",
      status: "Upcoming",
      date: "2023-06-15",
    },
    {
      id: 2,
      title: "Health Awareness Workshop",
      category: "Workshop",
      location: "Community Center",
      status: "Upcoming",
      date: "2023-06-10",
    },
    {
      id: 3,
      title: "Medical Research Symposium",
      category: "Symposium",
      location: "University Hall",
      status: "Completed",
      date: "2023-05-20",
    },
    {
      id: 4,
      title: "Doctors Meet & Greet",
      category: "Networking",
      location: "City Hospital",
      status: "Upcoming",
      date: "2023-06-25",
    },
    {
      id: 5,
      title: "Healthcare Policy Seminar",
      category: "Seminar",
      location: "Convention Center",
      status: "Completed",
      date: "2023-05-15",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Event Edit</h1>
          <p className="text-muted-foreground">Manage and edit events.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription>View, edit, and manage all events.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search events..." className="pl-8" />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>{event.category}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>
                        <Badge variant={event.status === "Upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                      </TableCell>
                      <TableCell>{event.date}</TableCell>
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
