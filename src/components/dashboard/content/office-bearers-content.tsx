"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { Pencil, Trash } from "lucide-react"
import { useToast } from "../../ui/use-toast"
import { AddOfficeBearerDialog } from "../dialogs/add-office-bearer-dialog"

interface OfficeBearer {
  id: string
  name: string
  position: string
  email: string
  phone: string
  photo: string
}

interface OfficeBearersContentProps {
  year: string
}

export default function OfficeBearersContent({ year }: OfficeBearersContentProps) {
  const { toast } = useToast()
  const [officeBearers, setOfficeBearers] = useState<OfficeBearer[]>([
    {
      id: "1",
      name: "John Smith",
      position: "President",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      position: "Vice President",
      email: "sarah.j@example.com",
      phone: "+1 (555) 234-5678",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      name: "Michael Brown",
      position: "Secretary",
      email: "michael.b@example.com",
      phone: "+1 (555) 345-6789",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "4",
      name: "Emily Davis",
      position: "Treasurer",
      email: "emily.d@example.com",
      phone: "+1 (555) 456-7890",
      photo: "/placeholder.svg?height=100&width=100",
    },
  ])

  const addOfficeBearer = (bearer: Omit<OfficeBearer, "id" | "photo">) => {
    const newBearer: OfficeBearer = {
      ...bearer,
      id: Math.random().toString(36).substring(2, 9),
      photo: "/placeholder.svg?height=100&width=100",
    }

    setOfficeBearers([...officeBearers, newBearer])

    toast({
      title: "Office bearer added",
      description: `${bearer.name} has been added as ${bearer.position}.`,
    })
  }

  const deleteOfficeBearer = (id: string) => {
    setOfficeBearers(officeBearers.filter((bearer) => bearer.id !== id))
    toast({
      title: "Office bearer deleted",
      description: "The office bearer has been deleted successfully.",
    })
  }

  const editOfficeBearer = (id: string) => {
      toast({
        title: "Edit office bearer",
        description: `Edit functionality would open a dialog for bearer with ID: ${id}.`,
      })
    }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Office Bearers for {year}</h2>
        <AddOfficeBearerDialog onAddOfficeBearer={addOfficeBearer} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {officeBearers.map((bearer) => (
          <Card key={bearer.id}>
            <>
              <CardHeader className="text-center">
                <Image
                  src={bearer.photo || "/placeholder.svg"}
                  alt={bearer.name}
                  className="h-full w-full object-cover"
                  width={96}
                  height={96}
                />
                <CardTitle>{bearer.name}</CardTitle>
                <CardDescription>{bearer.position}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm">{bearer.email}</p>
                <p className="text-sm">{bearer.phone}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => editOfficeBearer(bearer.id)}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600"
                  onClick={() => deleteOfficeBearer(bearer.id)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </>
          </Card>
        ))}
      </div>
    </div>
  )
}
