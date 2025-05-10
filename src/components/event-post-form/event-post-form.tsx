"use client"

import type React from "react"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast, ToastContainer } from "react-toastify"
import { z } from "zod"
import { CalendarIcon, Upload } from "lucide-react"
import { format } from "date-fns"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Checkbox } from "../../components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { Calendar } from "../../components/ui/calendar"
import { cn } from "../../lib/utils"
import { TipTapEditor } from "./tiptap-editor"

import "react-toastify/dist/ReactToastify.css"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const formSchema = z.object({
  eventDetails: z.string().min(1, "Event details is required"),
  eventTitle: z.string().min(1, "Event title is required"),
  category: z.string().min(1, "Please select a category"),
  pinCode: z.string().min(1, "Pin code is required"),
  eventLocation: z.string().min(1, "Event location is required"),
  eventCountry: z.string().min(1, "Event country is required"),
  description: z.string().min(1, "Description is required"),
  registrationEmail: z.string().email("Invalid email address"),
  organizerDetails: z.string().min(1, "Organizer details are required"),
  organizer: z.string().optional(),
  venueDetails: z.string().min(1, "Venue details are required"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  startTime: z.string().min(1, "Start time is required"),
  endDate: z.date({
    required_error: "End date is required",
  }),
  endTime: z.string().min(1, "End time is required"),
  registrationDeadline: z.date().optional(),
  registrationDeadlineTime: z.string().optional(),
  showHideRegistration: z.boolean().default(false).optional(),
  enableHealthGuidelines: z.enum(["yes", "no"]),
  additionalHealthGuidelines: z.enum(["yes", "no"]),
})

type FormValues = z.infer<typeof formSchema>

export default function EventPostForm() {
  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [bannerUploaded, setBannerUploaded] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoUploaded, setVideoUploaded] = useState(false)
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [pdfUploaded, setPdfUploaded] = useState(false)
  const [editorContent, setEditorContent] = useState("")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      registrationEmail: "ramachandrahm@hotmail.com",
      enableHealthGuidelines: "no",
      additionalHealthGuidelines: "no",
      showHideRegistration: false,
    },
  })

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds 5MB limit")
        return
      }
      setBannerFile(file)
      setBannerUploaded(true)
      toast.success("Banner uploaded successfully")
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setVideoFile(file)
      setVideoUploaded(true)
      toast.success("Video uploaded successfully")
    }
  }

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setPdfFile(file)
      setPdfUploaded(true)
      toast.success("PDF uploaded successfully")
    }
  }

  function onSubmit(data: FormValues) {
    // Create a complete form data object including file uploads
    const completeFormData = {
      ...data,
      description: editorContent,
      bannerFile: bannerFile ? bannerFile.name : null,
      videoFile: videoFile ? videoFile.name : null,
      pdfFile: pdfFile ? pdfFile.name : null,
    }

    console.log(completeFormData)
    toast.success("Event submitted successfully!")
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Event Details */}
          <FormField
            control={form.control}
            name="eventDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Details</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Title */}
          <FormField
            control={form.control}
            name="eventTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Choose a Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="seminar">Seminar</SelectItem>
                    <SelectItem value="exhibition">Exhibition</SelectItem>
                    <SelectItem value="concert">Concert</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pin Code */}
          <FormField
            control={form.control}
            name="pinCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pin Code</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter zip code (Area code)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Location */}
          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location for google map" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Country */}
          <FormField
            control={form.control}
            name="eventCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Banner */}
          <div className="space-y-2">
            <Label htmlFor="event-banner">Event Banner</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="event-banner"
                  className="flex h-10 w-fit cursor-pointer items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </Label>
                <span className="text-sm text-muted-foreground">
                  {bannerUploaded ? "Upload is successful" : "No file chosen"}
                </span>
              </div>
              <Input id="event-banner" type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
              <p className="text-xs text-muted-foreground">Upload the main image of your post (Max size: 5MB)</p>
            </div>
          </div>

          {/* Description - TipTap Editor */}
          <div className="space-y-2">
            <Label>Description</Label>
            <div className="min-h-[300px]">
              <TipTapEditor content={editorContent} onChange={setEditorContent} />
            </div>
            {form.formState.errors.description && (
              <p className="text-sm font-medium text-destructive">{form.formState.errors.description.message}</p>
            )}
          </div>

          {/* Registration Email/URL */}
          <FormField
            control={form.control}
            name="registrationEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration Email/URL</FormLabel>
                <FormControl>
                  <Input placeholder="ramachandrahm@hotmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Video URL */}
          <div className="space-y-2">
            <Label htmlFor="video-url">Video URL (optional)</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="video-url"
                  className="flex h-10 w-fit cursor-pointer items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </Label>
                <span className="text-sm text-muted-foreground">
                  {videoUploaded ? "Upload is successful" : "No file chosen"}
                </span>
              </div>
              <Input id="video-url" type="file" accept="video/*" className="hidden" onChange={handleVideoChange} />
            </div>
          </div>

          {/* Start Date and Time */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* End Date and Time */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Registration Deadline */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="registrationDeadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Registration Deadline (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value || undefined}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registrationDeadlineTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Deadline Time (optional)</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Upload PDF */}
          <div className="space-y-2">
            <Label htmlFor="pdf-upload">Upload PDF (optional)</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="pdf-upload"
                  className="flex h-10 w-fit cursor-pointer items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </Label>
                <span className="text-sm text-muted-foreground">
                  {pdfUploaded ? "Upload is successful" : "No file chosen"}
                </span>
              </div>
              <Input id="pdf-upload" type="file" accept=".pdf" className="hidden" onChange={handlePdfChange} />
            </div>
          </div>

          {/* Show/Hide Registration Button */}
          <FormField
            control={form.control}
            name="showHideRegistration"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Show/Hide Registration Button</FormLabel>
                  <FormDescription>Enable this to show the registration button on the event page</FormDescription>
                </div>
              </FormItem>
            )}
          />

          {/* Enable Health Guidelines */}
          <FormField
            control={form.control}
            name="enableHealthGuidelines"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Enable Health Guidelines</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Additional Health Guidelines */}
          <FormField
            control={form.control}
            name="additionalHealthGuidelines"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Other Additional Health Guidelines</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Organizer Details */}
          <FormField
            control={form.control}
            name="organizerDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organizer Details</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter organizer details" value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Organizer */}
          <FormField
            control={form.control}
            name="organizer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organizer (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter organizer name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Venue Details */}
          <FormField
            control={form.control}
            name="venueDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue Details</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter venue details" value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full md:w-auto">
            Submit Event
          </Button>
        </form>
      </Form>
    </>
  )
}
