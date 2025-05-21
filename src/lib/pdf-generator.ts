import type { FormData } from "./form-store"

export const generatePDF = async (formData: Partial<FormData>, photoUrl: string | null): Promise<void> => {
  try {
    // Dynamically import jsPDF to avoid SSR issues
    const { jsPDF } = await import("jspdf")

    // Create a new PDF document
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    // Set font styles
    doc.setFont("helvetica")

    // Add title
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold")
    doc.text("Membership Application Form", 105, 20, { align: "center" })

    // Add logo or header
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("Karnataka Orthopaedic Association", 105, 30, { align: "center" })

    // Add horizontal line
    doc.setDrawColor(0, 0, 0)
    doc.line(20, 35, 190, 35)

    // Add photo if available - with better error handling
    let photoAdded = false
    if (photoUrl) {
      try {
        // Try to add the photo, but continue if it fails
        await new Promise<void>((resolve) => {
          const img = new Image()
          img.crossOrigin = "anonymous" // Important for CORS

          img.onload = () => {
            try {
              doc.addImage(img, "JPEG", 150, 45, 30, 30)
              photoAdded = true
              resolve()
            } catch (err) {
              console.error("Error adding image to PDF:", err)
              resolve() // Continue even if adding the image fails
            }
          }

          img.onerror = () => {
            console.error("Error loading image")
            resolve() // Continue even if loading the image fails
          }

          // Set src after setting up event handlers
          img.src = photoUrl

          // Set a timeout to resolve the promise if the image takes too long to load
          setTimeout(() => {
            if (!photoAdded) {
              console.warn("Image loading timed out")
              resolve()
            }
          }, 3000)
        })
      } catch (error) {
        console.error("Error processing photo for PDF:", error)
        // Continue without the photo
      }
    }

    // Personal Details Section
    let yPos = 45

    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("1. Personal Details", 20, yPos)
    yPos += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")

    // Two column layout for personal details
    const leftCol = 20
    const rightCol = 110

    // Left column
    doc.setFont("helvetica", "bold")
    doc.text("Name:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.firstName || ""} ${formData.lastName || ""}`, leftCol + 30, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Address:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.address || ""}`, leftCol + 30, yPos)
    yPos += 6

    if (formData.streetAddress) {
      doc.text(`${formData.streetAddress}`, leftCol + 30, yPos)
      yPos += 6
    }

    if (formData.addressLine2) {
      doc.text(`${formData.addressLine2}`, leftCol + 30, yPos)
      yPos += 6
    }

    doc.text(`${formData.city || ""}, ${formData.state || ""}`, leftCol + 30, yPos)
    yPos += 6

    doc.text(`${formData.postalCode || ""}, ${formData.country || ""}`, leftCol + 30, yPos)
    yPos += 6

    // Right column
    let rightYPos = 53

    doc.setFont("helvetica", "bold")
    doc.text("Phone:", rightCol, rightYPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.phone || ""}`, rightCol + 30, rightYPos)
    rightYPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Email:", rightCol, rightYPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.email || ""}`, rightCol + 30, rightYPos)
    rightYPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Date of Birth:", rightCol, rightYPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.dob ? formatDate(formData.dob) : ""}`, rightCol + 30, rightYPos)

    // Use the higher of the two y-positions
    yPos = Math.max(yPos, rightYPos) + 10

    // Academic Details Section
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("2. Academic Details", 20, yPos)
    yPos += 8

    doc.setFontSize(10)

    doc.setFont("helvetica", "bold")
    doc.text("Post Graduate Degree:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.pgDegree || ""}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("PG College:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.pgCollege || ""}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("PG Passing Year:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.pgYear || ""}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("MBBS College:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.mbbsCollege || ""}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("MBBS Passing Year:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.mbbsYear || ""}`, leftCol + 50, yPos)
    yPos += 10

    // Proposer Details Section
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("3. Proposer Details", 20, yPos)
    yPos += 8

    doc.setFontSize(10)

    doc.setFont("helvetica", "bold")
    doc.text("Proposer Name:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.proposerName || "N/A"}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Proposer KOA Number:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.proposerKoaNumber || "N/A"}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Seconder Name:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.seconderName || "N/A"}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Seconder KOA Number:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.seconderKoaNumber || "N/A"}`, leftCol + 50, yPos)
    yPos += 10

    // Payment Details Section
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("4. Payment Details", 20, yPos)
    yPos += 8

    doc.setFontSize(10)

    doc.setFont("helvetica", "bold")
    doc.text("UPI Transaction ID:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.upiTransactionId || ""}`, leftCol + 50, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.text("Transaction Date:", leftCol, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(`${formData.upiTransactionDate ? formatDate(formData.upiTransactionDate) : ""}`, leftCol + 50, yPos)
    yPos += 10

    // Footer
    yPos = 270
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Declaration:", 20, yPos)
    yPos += 6

    doc.setFont("helvetica", "normal")
    const declaration =
      "I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of the Karnataka Orthopaedic Association."

    // Word wrap for declaration text
    const splitText = doc.splitTextToSize(declaration, 170)
    doc.text(splitText, 20, yPos)
    yPos += splitText.length * 6 + 10

    // Signature
    doc.setFont("helvetica", "bold")
    doc.text("Signature:", 20, yPos)
    doc.line(50, yPos, 100, yPos)

    doc.setFont("helvetica", "bold")
    doc.text("Date:", 120, yPos)
    doc.line(135, yPos, 180, yPos)

    // Save the PDF
    doc.save("KOA_Membership_Application.pdf")

    return Promise.resolve()
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("There was an error generating the PDF. Please try again.")
    return Promise.reject(error)
  }
}

// Helper function to format dates
function formatDate(date: Date | undefined): string {
  if (!date) return ""
  try {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  } catch (e) {
    return ""
  }
}
