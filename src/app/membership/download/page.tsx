"use client"

import { useEffect, useState } from "react"
import { useFormStore } from "../../../lib/form-store"
import { useRouter } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"
import { ArrowLeft, FileDown, Check } from "lucide-react"
import { generatePDF } from "../../../lib/pdf-generator"
import PageLayout from "../../../components/custom-components/PageLayout"

export default function DownloadPage() {
  const { formData } = useFormStore()
  const router = useRouter()
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

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
        setIsGenerated(true)
      } catch (error) {
        console.error("Error generating PDF:", error)
        alert("There was an error generating the PDF. Please try again.")
      } finally {
        setIsGenerating(false)
      }
    }
  }

  return (
    <PageLayout title="Download Membership Form">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={() => router.push("/membership/form")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Form
          </Button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Download Your Membership Application</h1>
          <Separator className="my-6" />

          <div className="max-w-md mx-auto p-8 border rounded-lg bg-gray-50">
            <div className="mb-6">
              {isGenerated ? (
                <div className="flex flex-col items-center justify-center text-green-600">
                  <Check className="h-16 w-16 mb-2" />
                  <p className="text-lg font-medium">PDF Generated Successfully!</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FileDown className="h-16 w-16 mb-2 text-gray-400" />
                  <p className="text-lg font-medium">Generate your application as PDF</p>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Click the button below to generate and download your completed membership application form as a PDF
              document.
            </p>

            <Button onClick={handleDownloadPDF} disabled={isGenerating} className="w-full">
              {isGenerating ? (
                <span>Generating PDF...</span>
              ) : isGenerated ? (
                <span className="flex items-center gap-2">
                  <FileDown className="h-4 w-4" />
                  Download Again
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FileDown className="h-4 w-4" />
                  Generate & Download PDF
                </span>
              )}
            </Button>

            {isGenerated && (
              <p className="text-xs text-muted-foreground mt-4">
                Your PDF has been generated and downloaded. If the download didn't start automatically, click the button
                above to try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
