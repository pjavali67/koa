"use client"

import { DataTable, type Column, type FormField } from "../../components/ui/data-table"
import { useLocalStorageData } from "../../hooks/use-local-storage-data"

interface Member {
  id: number
  name: string
  email: string
  role: string
  status: string
}

export function Members() {
  const [members, setMembers] = useLocalStorageData<Member>("members", [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Member", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Member", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Member", status: "Active" },
  ])

  const columns: Column[] = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "role", title: "Role" },
    {
      key: "status",
      title: "Status",
      render: (value) => (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {value}
        </span>
      ),
    },
  ]

  const formFields: FormField[] = [
    { key: "name", label: "Name", type: "text", required: true },
    { key: "email", label: "Email", type: "email", required: true },
    {
      key: "role",
      label: "Role",
      type: "select",
      options: [
        { value: "Admin", label: "Admin" },
        { value: "Member", label: "Member" },
        { value: "Editor", label: "Editor" },
      ],
      required: true,
      defaultValue: "Member",
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
      ],
      required: true,
      defaultValue: "Active",
    },
  ]

  return (
    <DataTable
      title="Members"
      description="Manage organization members"
      columns={columns}
      formFields={formFields}
      data={members}
      onDataChange={setMembers}
      storageKey="members"
      searchKeys={["name", "email", "role"]}
    />
  )
}
