"use client"

import { DataTable, type Column, type FormField } from "../../components/ui/data-table"
import { useLocalStorageData } from "../../hooks/use-local-storage-data"

interface OfficeBearer {
  id: number
  name: string
  position: string
  department: string
  term: string
}

export function OfficeBearers2025() {
  const [officeBearers, setOfficeBearers] = useLocalStorageData<OfficeBearer>("officeBearers2025", [
    { id: 1, name: "Sarah Johnson", position: "President", department: "Executive", term: "2025-2026" },
    { id: 2, name: "Michael Lee", position: "Vice President", department: "Executive", term: "2025-2026" },
  ])

  const columns: Column[] = [
    { key: "name", title: "Name" },
    { key: "position", title: "Position" },
    { key: "department", title: "Department" },
    { key: "term", title: "Term" },
  ]

  const formFields: FormField[] = [
    { key: "name", label: "Name", type: "text", required: true },
    { key: "position", label: "Position", type: "text", required: true },
    { key: "department", label: "Department", type: "text", required: true },
    { key: "term", label: "Term", type: "text", required: true, defaultValue: "2025-2026" },
  ]

  return (
    <DataTable
      title="Office Bearers 2025"
      description="Manage office bearers for 2025"
      columns={columns}
      formFields={formFields}
      data={officeBearers}
      onDataChange={setOfficeBearers}
      storageKey="officeBearers2025"
      searchKeys={["name", "position", "department"]}
    />
  )
}
