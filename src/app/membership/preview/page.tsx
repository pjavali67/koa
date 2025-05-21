"use client"

import { useEffect, useState } from "react"
import { useFormStore } from "../../../lib/form-store"
import { useRouter } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"
import { format } from "date-fns"
import Image from "next/image"
import { ArrowLeft, FileDown } from "lucide-react"
import { generatePDF } from "../../../lib/pdf-generator"
import PageLayout from "../../../components/custom-components/PageLayout"

export default function PreviewPage() {
  const { formData } = useFormStore()
  const router = useRouter()
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!formData) {
      router.push("/membership/form")
      return
    }

    // Create URL for photo if it exists
    if (formData.photo instanceof File) {
      try {
        const url = URL.createObjectURL(formData.photo)
        setPhotoUrl(url)

        // Clean up URL on unmount
        return () => {
          URL.revokeObjectURL(url)
        }
      } catch (error) {
        console.error("Error creating object URL:", error)
      }
    }
  }, [formData, router])

  if (!formData) {
    return null // Will redirect in useEffect
  }

  const handleDownloadPDF = async () => {
    if (formData) {
      setIsGenerating(true)
      try {
        await generatePDF(formData, photoUrl)
      } catch (error) {
        console.error("Error generating PDF:", error)
        alert("There was an error generating the PDF. Please try again.")
      } finally {
        setIsGenerating(false)
      }
    }
  }

  // Helper function to format dates safely
  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    try {
      return format(new Date(date), "dd/MM/yyyy")
    } catch (e) {
      return ""
    }
  }

  return (
    <PageLayout title="Membership Form Preview">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Form
          </Button>

          <Button onClick={handleDownloadPDF} disabled={isGenerating} className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            {isGenerating ? "Generating PDF..." : "Download PDF"}
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Membership Application Form Preview</h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-sm">
              This is a preview of your membership application. Please review all details before submission.
            </p>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Personal Details</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">First Name</p>
                  <p className="font-medium">{formData.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Name</p>
                  <p className="font-medium">{formData.lastName}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{formData.address}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Street Address</p>
                  <p className="font-medium">{formData.streetAddress}</p>
                </div>
                {formData.addressLine2 && (
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">Address Line 2</p>
                    <p className="font-medium">{formData.addressLine2}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-muted-foreground">City</p>
                  <p className="font-medium">{formData.city}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">State/Province</p>
                  <p className="font-medium">{formData.state}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Postal Code</p>
                  <p className="font-medium">{formData.postalCode}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Country</p>
                  <p className="font-medium">{formData.country}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{formData.dob ? formatDate(formData.dob) : ""}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {photoUrl ? (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Photo</p>
                  <Image
                    src={photoUrl || "/placeholder.svg"}
                    alt="Applicant Photo"
                    width={150}
                    height={150}
                    className="rounded border object-cover"
                    unoptimized // Add this to avoid Next.js image optimization issues
                  />
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Photo</p>
                  <div className="w-[150px] h-[150px] bg-gray-100 rounded border flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Photo Preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Academic Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Academic Details</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Post Graduate Degree</p>
              <p className="font-medium">{formData.pgDegree}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">PG College</p>
              <p className="font-medium">{formData.pgCollege}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">PG Passing Year</p>
              <p className="font-medium">{formData.pgYear}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">MBBS College</p>
              <p className="font-medium">{formData.mbbsCollege}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">MBBS Passing Year</p>
              <p className="font-medium">{formData.mbbsYear}</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Certificates</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Medical Council Certificate</p>
              <p className="font-medium">
                {formData.medicalCouncilCert instanceof File ? formData.medicalCouncilCert.name : "Not uploaded"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">PG Certificate</p>
              <p className="font-medium">
                {formData.pgCertificate instanceof File ? formData.pgCertificate.name : "Not uploaded"}
              </p>
            </div>
          </div>
        </div>

        {/* Proposer Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Proposer Details</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Proposer Name</p>
              <p className="font-medium">{formData.proposerName || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Proposer KOA Number</p>
              <p className="font-medium">{formData.proposerKoaNumber || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Seconder Name</p>
              <p className="font-medium">{formData.seconderName || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Seconder KOA Number</p>
              <p className="font-medium">{formData.seconderKoaNumber || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Login Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Login Details</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Password</p>
              <p className="font-medium">••••••••</p>
            </div>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Payment Details</h2>
          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">UPI Transaction ID</p>
              <p className="font-medium">{formData.upiTransactionId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Transaction Date</p>
              <p className="font-medium">
                {formData.upiTransactionDate ? formatDate(formData.upiTransactionDate) : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Form
          </Button>

          <Button onClick={handleDownloadPDF} disabled={isGenerating} className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            {isGenerating ? "Generating PDF..." : "Download PDF"}
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
