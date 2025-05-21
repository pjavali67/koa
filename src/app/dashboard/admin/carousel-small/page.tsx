import { DashboardLayout } from "../../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Edit, Trash2, Plus, ArrowUp, ArrowDown, Eye } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"

export default function CarouselSmallPage() {
  // Mock data for small carousel slides
  const carouselSlides = [
    { id: 1, title: "Latest News", order: 1, status: "Active", lastUpdated: "2023-05-20" },
    { id: 2, title: "Featured Doctor", order: 2, status: "Active", lastUpdated: "2023-05-18" },
    { id: 3, title: "Health Tip of the Day", order: 3, status: "Inactive", lastUpdated: "2023-05-15" },
    { id: 4, title: "Upcoming Event", order: 4, status: "Active", lastUpdated: "2023-05-12" },
    { id: 5, title: "New Service Announcement", order: 5, status: "Active", lastUpdated: "2023-05-10" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Carousel Small</h1>
            <p className="text-muted-foreground">Manage small carousel slides on the homepage.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Slide
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Small Carousel Slides</CardTitle>
            <CardDescription>View, edit, and manage all small carousel slides.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {carouselSlides.map((slide) => (
                    <TableRow key={slide.id}>
                      <TableCell className="font-medium">{slide.order}</TableCell>
                      <TableCell>{slide.title}</TableCell>
                      <TableCell>
                        <Badge variant={slide.status === "Active" ? "default" : "secondary"}>{slide.status}</Badge>
                      </TableCell>
                      <TableCell>{slide.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ArrowUp className="h-4 w-4" />
                            <span className="sr-only">Move Up</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ArrowDown className="h-4 w-4" />
                            <span className="sr-only">Move Down</span>
                          </Button>
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
