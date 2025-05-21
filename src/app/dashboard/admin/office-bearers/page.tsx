import { DashboardLayout } from "../../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Input } from "../../../../components/ui/input"
import { Edit, Trash2, Search, Plus } from "lucide-react"

export default function OfficeBearersPage() {
  // Mock data for office bearers
  const officeBearers = [
    {
      id: 1,
      name: "Dr. Ramachandra HM",
      position: "President",
      department: "Cardiology",
      term: "2023-2025",
      contact: "Ramachandra@example.com",
    },
    {
      id: 2,
      name: "Dr. Sarah Ram",
      position: "Vice President",
      department: "Neurology",
      term: "2023-2025",
      contact: "sarah.ram@example.com",
    },
    {
      id: 3,
      name: "Dr. Vittal Das",
      position: "Secretary",
      department: "Orthopedics",
      term: "2023-2025",
      contact: "vittal_das@example.com",
    },
    {
      id: 4,
      name: "Dr. Lisa Dcasta",
      position: "Treasurer",
      department: "Pediatrics",
      term: "2023-2025",
      contact: "lisa.b@example.com",
    },
    {
      id: 5,
      name: "Dr. Harish chandra",
      position: "Board Member",
      department: "Surgery",
      term: "2023-2025",
      contact: "Harish@example.com",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Office Bearers</h1>
            <p className="text-muted-foreground">Manage office bearers and their positions.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Office Bearer
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Office Bearers List</CardTitle>
            <CardDescription>View and manage all office bearers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search office bearers..." className="pl-8" />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {officeBearers.map((bearer) => (
                    <TableRow key={bearer.id}>
                      <TableCell className="font-medium">{bearer.name}</TableCell>
                      <TableCell>{bearer.position}</TableCell>
                      <TableCell>{bearer.department}</TableCell>
                      <TableCell>{bearer.term}</TableCell>
                      <TableCell>{bearer.contact}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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
