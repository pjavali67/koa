"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Check } from "lucide-react"
import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Badge } from "../../components/ui/badge"
import { useState } from "react"
import { EditStatusDialog } from "./edit-status-dialog"
import { EditMemberDialog } from "./edit-member-dialog"
import { format } from "date-fns"

export type Member = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  koaNo: string
  joiningDate: string
  transId: string
  personalAddress?: string
  personalphone?: string
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "id",
    header: "SlNo.",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "role",
  //   header: "Role",
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      return (
        <Badge
          className={
            status === "active"
              ? "bg-green-100 text-green-800 hover:bg-green-100"
              : status === "inactive"
                ? "bg-red-100 text-red-800 hover:bg-red-100"
                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "koaNo",
    header: "KOA No.",
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("joiningDate"))
      return format(date, "dd/MM/yyyy")
    },
  },
  {
    accessorKey: "transId",
    header: "TransID",
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const member = row.original
      const [showStatusDialog, setShowStatusDialog] = useState(false)
      const [showEditDialog, setShowEditDialog] = useState(false)

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowStatusDialog(true)}>Edit Status</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowEditDialog(true)}>Edit</DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this member?")) {
                    const meta = table.options.meta as any
                    meta?.deleteData(member.id)
                  }
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {showStatusDialog && (
            <EditStatusDialog
              member={member}
              open={showStatusDialog}
              onOpenChange={setShowStatusDialog}
              onSave={(status) => {
                const meta = table.options.meta as any
                meta?.updateData(row.index, "status", status)
                setShowStatusDialog(false)
              }}
            />
          )}

          {showEditDialog && (
            <EditMemberDialog
              member={member}
              open={showEditDialog}
              onOpenChange={setShowEditDialog}
              onSave={(updatedMember) => {
                const meta = table.options.meta as any
                Object.keys(updatedMember).forEach((key) => {
                  if (key !== "id") {
                    meta?.updateData(row.index, key, updatedMember[key])
                  }
                })
                setShowEditDialog(false)
              }}
            />
          )}
        </>
      )
    },
  },
  {
    id: "save",
    cell: ({ row, table }) => {
      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // This would typically save any pending changes
            console.log("Saving changes for row:", row.original)
          }}
        >
          <Check className="h-4 w-4 text-green-600" />
          <span className="sr-only">Save</span>
        </Button>
      )
    },
  },
]
