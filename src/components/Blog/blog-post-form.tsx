"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { z } from "zod"

import { Button } from "../../components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"
import RichTextEditor from "./rich-text-editor"

const MEDICAL_SPECIALTIES = ["Cardiology", "Neurology", "Pediatrics", "Oncology", "Orthopedics"] as const

const blogFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  category: z.enum(MEDICAL_SPECIALTIES, {
    required_error: "Please select a category.",
  }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  excerpt: z.string().optional(),
  tags: z.string().optional(),
  featuredImage: z.instanceof(File).optional(),
})

type BlogFormValues = z.infer<typeof blogFormSchema>

export default function BlogPostForm() {
  const [imageUploaded, setImageUploaded] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
   

  console.log("Image file:", imageFile);

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      tags: "",
    },
  })

  function onSubmit(data: BlogFormValues) {
    const formData = {
      ...data,
      tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
    }

    console.log("Form submitted:", formData)

    toast.success("Blog post created successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Post an Article</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your post name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {MEDICAL_SPECIALTIES.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Select a category for your post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Write the full description of your Post</FormLabel>
                <FormControl>
                  <RichTextEditor value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="featuredImage"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setImageFile(file)
                          setImageUploaded(true)
                          toast.info("Image uploaded successfully!")
                          onChange(file)
                        }
                      }}
                      className=" file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <span className="text-sm text-muted-foreground">
                      {imageUploaded ? "Upload is successful" : "No file chosen"}
                    </span>
                  </div>
                </FormControl>
                <FormDescription>Upload the main image of your post</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea placeholder="Provide a short description of this post (optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="cardiology, research, treatment" {...field} />
                </FormControl>
                <FormDescription>Separate tags with commas.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
        </form>
      </Form>

      <ToastContainer />
    </div>
  )
}
