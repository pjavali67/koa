"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Search, Plus, Pencil, Trash2 } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { toast } from "../../hooks/use-toast"

interface Member {
  id: number
  name: string
  email: string
  role: string
  status: string
}

export function Members() {
  // Load members from localStorage or use default data
  const [members, setMembers] = useState<Member[]>(() => {
    if (typeof window !== "undefined") {
      const savedMembers = localStorage.getItem("members")
      if (savedMembers) {
        return JSON.parse(savedMembers)
      }
    }
    return [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Member", status: "Active" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Member", status: "Inactive" },
      { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
      { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Member", status: "Active" },
    ]
  })

  // Save members to localStorage when they change
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members))
  }, [members])

  const [searchTerm, setSearchTerm] = useState("")
  const [editingMember, setEditingMember] = useState<Member | null>(null)
  const [newMember, setNewMember] = useState<Omit<Member, "id">>({
    name: "",
    email: "",
    role: "Member",
    status: "Active",
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [memberToDelete, setMemberToDelete] = useState<Member | null>(null)

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddMember = () => {
    // Validate form
    if (!newMember.name.trim() || !newMember.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Name and email are required fields.",
        variant: "destructive",
      })
      return
    }

    const newId = Math.max(0, ...members.map((m) => m.id)) + 1
    setMembers([...members, { id: newId, ...newMember }])
    setNewMember({
      name: "",
      email: "",
      role: "Member",
      status: "Active",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Member added",
      description: "The member has been added successfully.",
    })
  }

  const handleUpdateMember = () => {
    if (!editingMember) return

    // Validate form
    if (!editingMember.name.trim() || !editingMember.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Name and email are required fields.",
        variant: "destructive",
      })
      return
    }

    setMembers(members.map((m) => (m.id === editingMember.id ? editingMember : m)))
    setEditingMember(null)
    setIsEditDialogOpen(false)
    toast({
      title: "Member updated",
      description: "The member has been updated successfully.",
    })
  }

  const handleDeleteMember = () => {
    if (!memberToDelete) return
    setMembers(members.filter((m) => m.id !== memberToDelete.id))
    setMemberToDelete(null)
    setIsDeleteDialogOpen(false)
    toast({
      title: "Member deleted",
      description: "The member has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Members</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Member</DialogTitle>
              <DialogDescription>Add a new member to your organization.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select value={newMember.role} onValueChange={(value) => setNewMember({ ...newMember, role: value })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select
                  value={newMember.status}
                  onValueChange={(value) => setNewMember({ ...newMember, status: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleAddMember}>Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search members..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No members found
                  </TableCell>
                </TableRow>
              ) : (
                filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          member.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {member.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingMember(member)
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
                            setMemberToDelete(member)
                            setIsDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Edit Dialog */}
          <Dialog
            open={isEditDialogOpen}
            onOpenChange={(open) => {
              setIsEditDialogOpen(open)
              if (!open) setEditingMember(null)
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Member</DialogTitle>
                <DialogDescription>Make changes to the member details.</DialogDescription>
              </DialogHeader>
              {editingMember && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="edit-name"
                      value={editingMember.name}
                      onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="edit-email"
                      type="email"
                      value={editingMember.email}
                      onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-role" className="text-right">
                      Role
                    </Label>
                    <Select
                      value={editingMember.role}
                      onValueChange={(value) => setEditingMember({ ...editingMember, role: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Member">Member</SelectItem>
                        <SelectItem value="Editor">Editor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-status" className="text-right">
                      Status
                    </Label>
                    <Select
                      value={editingMember.status}
                      onValueChange={(value) => setEditingMember({ ...editingMember, status: value })}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleUpdateMember}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete Dialog */}
          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={(open) => {
              setIsDeleteDialogOpen(open)
              if (!open) setMemberToDelete(null)
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Member</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this member? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              {memberToDelete && (
                <div className="py-4">
                  <p>
                    You are about to delete <strong>{memberToDelete.name}</strong> with email{" "}
                    <strong>{memberToDelete.email}</strong>.
                  </p>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteMember}>
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
