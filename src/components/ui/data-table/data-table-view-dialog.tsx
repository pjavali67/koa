"use client"

import type React from "react"

import { Button } from "../../../components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../../components/ui/dialog"

interface DataTableViewDialogProps<T> {
  open: boolean
  onOpenChange: (open: boolean) => void
  item: T
  renderContent: (item: T) => React.ReactNode
  title?: string
}

export function DataTableViewDialog<T>({
  open,
  onOpenChange,
  item,
  renderContent,
  title,
}: DataTableViewDialogProps<T>) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title || "View Details"}</DialogTitle>
        </DialogHeader>
        <div className="py-4">{renderContent(item)}</div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
