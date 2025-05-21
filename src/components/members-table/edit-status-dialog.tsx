"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Label } from "../../components/ui/label"
import type { Member } from "./columns"

interface EditStatusDialogProps {
  member: Member
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (status: "active" | "inactive" | "pending" | "applied" | "expired") => void
}

export function EditStatusDialog({ member, open, onOpenChange, onSave }: EditStatusDialogProps) {
  const [status, setStatus] = useState<"active" | "inactive" | "pending" | "applied" | "expired">(member.status)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Member Status</DialogTitle>
          <DialogDescription>Update the status for {member.name}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select value={status} onValueChange={(value: "active" | "inactive" | "pending"| "applied"|"expired") => setStatus(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onSave(status)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
