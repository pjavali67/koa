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

export function OfficeBearers2024() {
  const [officeBearers, setOfficeBearers] = useLocalStorageData<OfficeBearer>("officeBearers2024", [
    { id: 1, name: "John Doe", position: "President", department: "Executive", term: "2024-2025" },
    { id: 2, name: "Jane Smith", position: "Vice President", department: "Executive", term: "2024-2025" },
    { id: 3, name: "Bob Johnson", position: "Secretary", department: "Administration", term: "2024-2025" },
    { id: 4, name: "Alice Brown", position: "Treasurer", department: "Finance", term: "2024-2025" },
    { id: 5, name: "Charlie Davis", position: "Board Member", department: "Board", term: "2024-2025" },
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
    { key: "term", label: "Term", type: "text", required: true, defaultValue: "2024-2025" },
  ]

  return (
    <DataTable
      title="Office Bearers 2024"
      description="Manage office bearers for 2024"
      columns={columns}
      formFields={formFields}
      data={officeBearers}
      onDataChange={setOfficeBearers}
      storageKey="officeBearers2024"
      searchKeys={["name", "position", "department"]}
    />
  )
}
