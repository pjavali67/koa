"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import { Search, MoreHorizontal, Pencil, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { useToast } from "../../ui/use-toast"
import { AddMemberDialog } from "../dialogs/add-member-dialog"
import { Pagination } from "../pagination"

interface Member {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  joinedDate: Date
}

export default function MembersContent() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 15

  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "active",
      joinedDate: new Date(2023, 5, 15),
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "active",
      joinedDate: new Date(2023, 6, 22),
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert.j@example.com",
      role: "Member",
      status: "inactive",
      joinedDate: new Date(2023, 7, 10),
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Member",
      status: "pending",
      joinedDate: new Date(2023, 8, 5),
    },
    {
      id: "5",
      name: "Michael Wilson",
      email: "michael.w@example.com",
      role: "Editor",
      status: "active",
      joinedDate: new Date(2023, 9, 18),
    },
    {
      id: "6",
      name: "Sarah Brown",
      email: "sarah.b@example.com",
      role: "Member",
      status: "active",
      joinedDate: new Date(2023, 10, 7),
    },
    {
      id: "7",
      name: "David Lee",
      email: "david.l@example.com",
      role: "Admin",
      status: "active",
      joinedDate: new Date(2023, 11, 12),
    },
    {
      id: "8",
      name: "Jennifer Taylor",
      email: "jennifer.t@example.com",
      role: "Member",
      status: "inactive",
      joinedDate: new Date(2024, 0, 3),
    },
    {
      id: "9",
      name: "Thomas Anderson",
      email: "thomas.a@example.com",
      role: "Editor",
      status: "active",
      joinedDate: new Date(2024, 1, 20),
    },
    {
      id: "10",
      name: "Lisa Martinez",
      email: "lisa.m@example.com",
      role: "Member",
      status: "pending",
      joinedDate: new Date(2024, 2, 15),
    },
    {
      id: "11",
      name: "Kevin White",
      email: "kevin.w@example.com",
      role: "Member",
      status: "active",
      joinedDate: new Date(2024, 3, 8),
    },
    {
      id: "12",
      name: "Amanda Clark",
      email: "amanda.c@example.com",
      role: "Editor",
      status: "active",
      joinedDate: new Date(2024, 4, 22),
    },
    {
      id: "13",
      name: "Daniel Rodriguez",
      email: "daniel.r@example.com",
      role: "Member",
      status: "inactive",
      joinedDate: new Date(2023, 4, 30),
    },
    {
      id: "14",
      name: "Michelle Lewis",
      email: "michelle.l@example.com",
      role: "Member",
      status: "active",
      joinedDate: new Date(2023, 3, 17),
    },
    {
      id: "15",
      name: "Christopher Hall",
      email: "chris.h@example.com",
      role: "Admin",
      status: "active",
      joinedDate: new Date(2023, 2, 5),
    },
    {
      id: "16",
      name: "Patricia Young",
      email: "patricia.y@example.com",
      role: "Member",
      status: "pending",
      joinedDate: new Date(2023, 1, 14),
    },
    {
      id: "17",
      name: "James Walker",
      email: "james.w@example.com",
      role: "Editor",
      status: "active",
      joinedDate: new Date(2023, 0, 28),
    },
  ])

  const addMember = (member: Omit<Member, "id" | "joinedDate">) => {
    const newMember: Member = {
      ...member,
      id: Math.random().toString(36).substring(2, 9),
      joinedDate: new Date(),
    }

    setMembers([newMember, ...members])

    toast({
      title: "Member added",
      description: `${member.name} has been added successfully.`,
    })
  }

  const deleteMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id))
    toast({
      title: "Member deleted",
      description: "The member has been deleted successfully.",
    })
  }

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredMembers.length / rowsPerPage)
  const paginatedMembers = filteredMembers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Members</CardTitle>
            <CardDescription>Manage your organization members</CardDescription>
          </div>
          <AddMemberDialog onAddMember={addMember} />
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search members..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1) // Reset to first page on new search
                }}
              />
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
                  <TableHead>Joined</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedMembers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No members found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                            member.status,
                          )}`}
                        >
                          {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>{member.joinedDate.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              className="flex items-center gap-2"
                              onSelect={(e) => {
                                e.preventDefault()
                                toast({
                                  title: "Edit member",
                                  description: "Edit functionality would open a dialog here.",
                                })
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2 text-red-600 focus:text-red-600"
                              onSelect={(e) => {
                                e.preventDefault()
                                deleteMember(member.id)
                              }}
                            >
                              <Trash className="h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {filteredMembers.length > rowsPerPage && (
            <div className="mt-4">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
