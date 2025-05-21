"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Search, Plus, Pencil, Trash2, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../../components/ui/dialog"
import { toast } from "../../../hooks/use-toast"
import { DataTableAddForm } from "./data-table-add-form"
import { DataTableEditForm } from "./data-table-edit-form"
import { DataTableViewDialog } from "./data-table-view-dialog"

export interface Column {
  key: string
  title: string
  render?: (value: any, item: any) => React.ReactNode
}

export interface FormField {
  key: string
  label: string
  type: "text" | "email" | "date" | "select" | "textarea" | "number"
  options?: { value: string; label: string }[]
  required?: boolean
  defaultValue?: any
  rows?: number
}

export interface DataTableProps<T extends { id: number }> {
  title: string
  description?: string
  columns: Column[]
  formFields: FormField[]
  data: T[]
  onDataChange: (data: T[]) => void
  storageKey: string
  searchKeys?: string[]
  viewContent?: (item: T) => React.ReactNode
  additionalActions?: (item: T, onRefresh: () => void) => React.ReactNode
}

export function DataTable<T extends { id: number }>({
  title,
  description,
  columns,
  formFields,
  data,
  onDataChange,
  storageKey,
  searchKeys = [],
  viewContent,
  additionalActions,
}: DataTableProps<T>) {
  const [items, setItems] = useState<T[]>(data)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingItem, setEditingItem] = useState<T | null>(null)
  const [viewingItem, setViewingItem] = useState<T | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<T | null>(null)

  // Update parent component when items change
  useEffect(() => {
    onDataChange(items)
  }, [items, onDataChange])

  // Filter items based on search term
  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true

    return searchKeys.some((key) => {
      const value = item[key as keyof T]
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase())
      }
      return false
    })
  })

  const handleAddItem = (newItem: Omit<T, "id">) => {
    const newId = Math.max(0, ...items.map((item) => item.id)) + 1
    const itemWithId = { ...newItem, id: newId } as T
    setItems([...items, itemWithId])
    setIsAddDialogOpen(false)
    toast({
      title: "Item added",
      description: "The item has been added successfully.",
    })
  }

  const handleUpdateItem = (updatedItem: T) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
    setEditingItem(null)
    setIsEditDialogOpen(false)
    toast({
      title: "Item updated",
      description: "The item has been updated successfully.",
    })
  }

  const handleDeleteItem = () => {
    if (!itemToDelete) return
    setItems(items.filter((item) => item.id !== itemToDelete.id))
    setItemToDelete(null)
    setIsDeleteDialogOpen(false)
    toast({
      title: "Item deleted",
      description: "The item has been deleted successfully.",
    })
  }

  const refreshData = () => {
    // This function can be passed to additionalActions to refresh data after an action
    // For now it just re-renders the current data
    setItems([...items])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add {title.endsWith("s") ? title.slice(0, -1) : title}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add {title.endsWith("s") ? title.slice(0, -1) : title}</DialogTitle>
              <DialogDescription>{description || `Add a new ${title.toLowerCase()}.`}</DialogDescription>
            </DialogHeader>
            <DataTableAddForm formFields={formFields} onSubmit={handleAddItem} />
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key}>{column.title}</TableHead>
                ))}
                <TableHead className="w-[150px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className="text-center py-4">
                    No items found
                  </TableCell>
                </TableRow>
              ) : (
                filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    {columns.map((column) => (
                      <TableCell
                        key={`${item.id}-${column.key}`}
                        className={column.key === columns[0].key ? "font-medium" : ""}
                      >
                        {column.render
                          ? column.render(item[column.key as keyof T], item)
                          : item[column.key as keyof T]?.toString()}
                      </TableCell>
                    ))}
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {viewContent && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setViewingItem(item)
                              setIsViewDialogOpen(true)
                            }}
                          >
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        )}

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingItem(item)
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
                            setItemToDelete(item)
                            setIsDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>

                        {additionalActions && additionalActions(item, refreshData)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* View Dialog */}
          {viewContent && viewingItem && (
            <DataTableViewDialog
              open={isViewDialogOpen}
              onOpenChange={setIsViewDialogOpen}
              item={viewingItem}
              renderContent={viewContent}
            />
          )}

          {/* Edit Dialog */}
          <Dialog
            open={isEditDialogOpen}
            onOpenChange={(open) => {
              setIsEditDialogOpen(open)
              if (!open) setEditingItem(null)
            }}
          >
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Edit {title.endsWith("s") ? title.slice(0, -1) : title}</DialogTitle>
                <DialogDescription>Make changes to the item details.</DialogDescription>
              </DialogHeader>
              {editingItem && (
                <DataTableEditForm formFields={formFields} initialData={editingItem} onSubmit={handleUpdateItem} />
              )}
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete Dialog */}
          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={(open) => {
              setIsDeleteDialogOpen(open)
              if (!open) setItemToDelete(null)
            }}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete {title.endsWith("s") ? title.slice(0, -1) : title}</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this item? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              {itemToDelete && (
                <div className="py-4">
                  <p>
                    You are about to delete an item with ID: <strong>{itemToDelete.id}</strong>.
                  </p>
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleDeleteItem}>
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
