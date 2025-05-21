import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define a simpler form data type without relying on external imports
interface FormData {
  firstName: string
  lastName: string
  address: string
  streetAddress: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  dob?: Date
  pgDegree: string
  pgCollege: string
  pgYear: string
  mbbsCollege: string
  mbbsYear: string
  photo?: File
  medicalCouncilCert?: File
  pgCertificate?: File
  proposerName?: string
  proposerKoaNumber?: string
  seconderName?: string
  seconderKoaNumber?: string
  email: string
  password: string
  confirmPassword: string
  upiTransactionId: string
  upiTransactionDate?: Date
}

interface FormState {
  formData: Partial<FormData> | null
  setFormData: (data: Partial<FormData>) => void
  clearFormData: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      formData: null,
      setFormData: (data) => set({ formData: data }),
      clearFormData: () => set({ formData: null }),
    }),
    {
      name: "membership-form-storage",
    },
  ),
)

// Export the FormData type for use in other files
export type { FormData }
