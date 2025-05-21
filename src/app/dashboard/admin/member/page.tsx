import { DashboardLayout } from "../../../../components/dashboard-layout"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
// import { Button } from "../../../../components/ui/button"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
// import { Input } from "../../../../components/ui/input"
// import { Edit, Trash2, Search, Plus } from "lucide-react"
import { MembersTable } from "@/src/components/members-table/members-table"

export default function MemberPage() {
  // Mock data for members
  // const members = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     role: "Doctor",
  //     status: "Active",
  //     joinDate: "2023-01-15",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     role: "Nurse",
  //     status: "Active",
  //     joinDate: "2023-02-20",
  //   },
  //   {
  //     id: 3,
  //     name: "Robert Johnson",
  //     email: "robert.j@example.com",
  //     role: "Administrator",
  //     status: "Inactive",
  //     joinDate: "2023-03-10",
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Davis",
  //     email: "emily.d@example.com",
  //     role: "Doctor",
  //     status: "Active",
  //     joinDate: "2023-04-05",
  //   },
  //   {
  //     id: 5,
  //     name: "Michael Brown",
  //     email: "michael.b@example.com",
  //     role: "Technician",
  //     status: "Active",
  //     joinDate: "2023-05-12",
  //   },
  // ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <MembersTable/>
        {/* <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Members</h1>
            <p className="text-muted-foreground">Manage all members in the system.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Member
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Member List</CardTitle>
            <CardDescription>View and manage all registered members.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search members..." className="pl-8" />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            member.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {member.status}
                        </span>
                      </TableCell>
                      <TableCell>{member.joinDate}</TableCell>
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
        </Card> */}
      </div>
    </DashboardLayout>
  )
}
