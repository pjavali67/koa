"use client"

import { useState } from "react"
import { columns, type Member } from "./columns"
import { DataTable } from "./data-table"
import { sampleMembersData } from "./sample-data"

export function MembersTable() {
  const [data, setData] = useState<Member[]>(sampleMembersData)

  const handleAddMember = (newMember: Omit<Member, "id">) => {
    const id = `MEM${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`

    setData((prev) => [
      {
        id,
        ...newMember,
      },
      ...prev,
    ])
  }

  const handleUpdateMember = (updatedMember: Member) => {
    setData((prev) => prev.map((member) => (member.id === updatedMember.id ? updatedMember : member)))
  }

  const handleDeleteMember = (id: string) => {
    setData((prev) => prev.filter((member) => member.id !== id))
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      onAddMember={handleAddMember}
      onUpdateMember={handleUpdateMember}
      onDeleteMember={handleDeleteMember}
    />
  )
}
