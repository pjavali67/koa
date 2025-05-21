"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { toast } from "../../../hooks/use-toast"
import type { FormField } from "./data-table"

interface DataTableEditFormProps<T> {
  formFields: FormField[]
  initialData: T
  onSubmit: (data: T) => void
}

export function DataTableEditForm<T>({ formFields, initialData, onSubmit }: DataTableEditFormProps<T>) {
  const [formData, setFormData] = useState<T>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }))

    // Clear error when user types
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    formFields.forEach((field) => {
      if (field.required && !formData[field.key as keyof T]) {
        newErrors[field.key] = `${field.label} is required`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      })
      return
    }

    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formFields.map((field) => (
        <div key={field.key} className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor={`edit-${field.key}`} className="text-right">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </Label>

          <div className={`col-span-3 ${errors[field.key] ? "relative" : ""}`}>
            {field.type === "textarea" ? (
              <Textarea
                id={`edit-${field.key}`}
                value={(formData[field.key as keyof T] as string) || ""}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                rows={field.rows || 4}
                className={errors[field.key] ? "border-red-500" : ""}
              />
            ) : field.type === "select" ? (
              <Select
                value={(formData[field.key as keyof T] as string) || ""}
                onValueChange={(value) => handleInputChange(field.key, value)}
              >
                <SelectTrigger className={errors[field.key] ? "border-red-500" : ""}>
                  <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                id={`edit-${field.key}`}
                type={field.type}
                value={(formData[field.key as keyof T] as string) || ""}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className={errors[field.key] ? "border-red-500" : ""}
              />
            )}

            {errors[field.key] && <p className="text-xs text-red-500 mt-1">{errors[field.key]}</p>}
          </div>
        </div>
      ))}

      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  )
}
