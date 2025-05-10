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
import { toast } from "../../hooks/use-toast"

interface OfficeBearer {
  id: number
  name: string
  position: string
  department: string
  term: string
}

export function OfficeBearers2025() {
  // Load office bearers from localStorage or use default data
  const [officeBearers, setOfficeBearers] = useState<OfficeBearer[]>(() => {
    if (typeof window !== "undefined") {
      const savedBearers = localStorage.getItem("officeBearers2025")
      if (savedBearers) {
        return JSON.parse(savedBearers)
      }
    }
    return [
      { id: 1, name: "Sarah Johnson", position: "President", department: "Executive", term: "2025-2026" },
      { id: 2, name: "Michael Lee", position: "Vice President", department: "Executive", term: "2025-2026" },
    ]
  })

  // Save office bearers to localStorage when they change
  useEffect(() => {
    localStorage.setItem("officeBearers2025", JSON.stringify(officeBearers))
  }, [officeBearers])

  const [searchTerm, setSearchTerm] = useState("")
  const [editingBearer, setEditingBearer] = useState<OfficeBearer | null>(null)
  const [newBearer, setNewBearer] = useState<Omit<OfficeBearer, "id">>({
    name: "",
    position: "",
    department: "",
    term: "2025-2026",
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [bearerToDelete, setBearerToDelete] = useState<OfficeBearer | null>(null)

  const filteredBearers = officeBearers.filter(
    (bearer) =>
      bearer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bearer.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bearer.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddBearer = () => {
    // Validate form
    if (!newBearer.name.trim() || !newBearer.position.trim() || !newBearer.department.trim()) {
      toast({
        title: "Validation Error",
        description: "Name, position, and department are required fields.",
        variant: "destructive",
      })
      return
    }

    const newId = Math.max(0, ...officeBearers.map((b) => b.id)) + 1
    setOfficeBearers([...officeBearers, { id: newId, ...newBearer }])
    setNewBearer({
      name: "",
      position: "",
      department: "",
      term: "2025-2026",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Office Bearer added",
      description: "The office bearer has been added successfully.",
    })
  }

  const handleUpdateBearer = () => {
    if (!editingBearer) return

    // Validate form
    if (!editingBearer.name.trim() || !editingBearer.position.trim() || !editingBearer.department.trim()) {
      toast({
        title: "Validation Error",
        description: "Name, position, and department are required fields.",
        variant: "destructive",
      })
      return
    }

    setOfficeBearers(officeBearers.map((b) => (b.id === editingBearer.id ? editingBearer : b)))
    setEditingBearer(null)
    setIsEditDialogOpen(false)
    toast({
      title: "Office Bearer updated",
      description: "The office bearer has been updated successfully.",
    })
  }

  const handleDeleteBearer = () => {
    if (!bearerToDelete) return
    setOfficeBearers(officeBearers.filter((b) => b.id !== bearerToDelete.id))
    setBearerToDelete(null)
    setIsDeleteDialogOpen(false)
    toast({
      title: "Office Bearer deleted",
      description: "The office bearer has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Office Bearers 2025</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Office Bearer
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Office Bearer</DialogTitle>
              <DialogDescription>Add a new office bearer for 2025.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newBearer.name}
                  onChange={(e) => setNewBearer({ ...newBearer, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="position" className="text-right">
                  Position
                </Label>
                <Input
                  id="position"
                  value={newBearer.position}
                  onChange={(e) => setNewBearer({ ...newBearer, position: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Input
                  id="department"
                  value={newBearer.department}
                  onChange={(e) => setNewBearer({ ...newBearer, department: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="term" className="text-right">
                  Term
                </Label>
                <Input
                  id="term"
                  value={newBearer.term}
                  onChange={(e) => setNewBearer({ ...newBearer, term: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleAddBearer}>Add Office Bearer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search office bearers..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Office Bearers for 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Term</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBearers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No office bearers found
                  </TableCell>
                </TableRow>
              ) : (
                filteredBearers.map((bearer) => (
                  <TableRow key={bearer.id}>
                    <TableCell className="font-medium">{bearer.name}</TableCell>
                    <TableCell>{bearer.position}</TableCell>
                    <TableCell>{bearer.department}</TableCell>
                    <TableCell>{bearer.term}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingBearer(bearer)
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
                            setBearerToDelete(bearer)
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
              if (!open) setEditingBearer(null)
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Office Bearer</DialogTitle>
                <DialogDescription>Make changes to the office bearer details.</DialogDescription>
              </DialogHeader>
              {editingBearer && (
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="edit-name"
                      value={editingBearer.name}
                      onChange={(e) => setEditingBearer({ ...editingBearer, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-position" className="text-right">
                      Position
                    </Label>
                    <Input
                      id="edit-position"
                      value={editingBearer.position}
                      onChange={(e) => setEditingBearer({ ...editingBearer, position: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-department" className="text-right">
                      Department
                    </Label>
                    <Input
                      id="edit-department"
                      value={editingBearer.department}
                      onChange={(e) => setEditingBearer({ ...editingBearer, department: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-term" className="text-right">
                      Term
                    </Label>
                    <Input
                      id="edit-term"
                      value={editingBearer.term}
                      onChange={(e) => setEditingBearer({ ...editingBearer, term: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleUpdateBearer}>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete Dialog */}
          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={(open) => {
              setIsDeleteDialogOpen(open)
              if (!open) setBearerToDelete(null)
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Office Bearer</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this office bearer? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              {bearerToDelete && (
                <div className="py-4">
                  <p>
                    You are about to delete <strong>{bearerToDelete.name}</strong> from the position of{" "}
                    <strong>{bearerToDelete.position}</strong>.
                  </p>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteBearer}>
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
