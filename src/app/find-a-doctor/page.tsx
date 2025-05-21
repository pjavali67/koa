"use client"

import { useState } from "react"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card, CardContent, CardFooter } from "../../components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"
import { doctors } from "./doctors"
import Link from "next/link"
import { ExternalLink, Mail, Phone } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

type Doctor = {
  id: string
  name: string
  qualification: string
  address: string
  subSpecialisation: string
  email: string
  phone: string
  photo: string
  "koa-profile": string
  website: string
}

export default function DoctorSearch() {
  const [nameSearch, setNameSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")
  const [specialisationFilter, setSpecialisationFilter] = useState("All Specialisations")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Filter doctors based on search criteria
  const filteredDoctors = doctors.filter((doctor) => {
    const nameMatch = doctor.name.toLowerCase().includes(nameSearch.toLowerCase())
    const locationMatch = doctor.address.toLowerCase().includes(locationSearch.toLowerCase())
    const specialisationMatch =
      specialisationFilter === "All Specialisations" || doctor.subSpecialisation === specialisationFilter

    return nameMatch && locationMatch && specialisationMatch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedDoctors = filteredDoctors.slice(startIndex, startIndex + itemsPerPage)

  // Clear all search filters
  const clearSearch = () => {
    setNameSearch("")
    setLocationSearch("")
    setSpecialisationFilter("All Specialisations")
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Find a Doctor</h1>

      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="name-search" className="text-xl font-bold">
              Search by Name
            </label>
            <Input
              id="name-search"
              placeholder="Enter doctor name"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              className="text-xl font-bold  h-10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location-search" className="text-xl font-bold">
              Filter by Location
            </label>
            <Input
              id="location-search"
              placeholder="Enter location"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              className="text-xl font-bold h-10 px-4"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="specialisation-filter" className="text-xl font-bold">
              Filter by Subspecialisation
            </label>
            <Select  value={specialisationFilter} onValueChange={setSpecialisationFilter} >
              <SelectTrigger id="specialisation-filter" className="h-10 text-xl w-full font-md min-w-[250px] px-4">
                <SelectValue placeholder="Select specialisation" className="text-xl w-full font-bold"/>
              </SelectTrigger>
              <SelectContent className="text-xl font-bold min-w-[250px]">
                <SelectItem value="All Specialisations">All Specialisations</SelectItem>
                <SelectItem value="Cardiology">Cardiology</SelectItem>
                <SelectItem value="Dermatology">Dermatology</SelectItem>
                <SelectItem value="Neurology">Neurology</SelectItem>
                <SelectItem value="Gynaecology">Gynaecology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button  className="text-xl font-bold" variant="outline" onClick={clearSearch}>
            Clear Search
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Doctor Cards Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No doctors found matching your search criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) setCurrentPage(currentPage - 1)
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(index + 1)
                  }}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="pt-6 flex-grow space-y-4">
        {/* Header with Avatar and Name */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-muted">
            <AvatarImage src={doctor.photo || "/placeholder.svg?height=200&width=200"} alt={doctor.name} />
            <AvatarFallback>
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-bold">{doctor.name}</h3>
            <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
          </div>
        </div>

        {/* Specialization Badge */}
        <div className="bg-muted inline-block px-2 py-1 rounded-md text-xs">{doctor.subSpecialisation}</div>

        {/* Contact Information */}
        <div className="space-y-3 pt-2 border-t">
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
            <span>{doctor.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{doctor.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{doctor.email}</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 pt-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4 flex gap-2">
        <Button asChild variant="default" size="sm" className="flex-1 bg-purple-500">
          <Link href={`/find-a-doctor/${doctor.id}`} target="_blank">
            KOA Profile
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={doctor.website} target="_blank">
            Website
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
