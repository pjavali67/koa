"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Plus } from "lucide-react"
// import { useToast } from "../../ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { Calendar } from "../../ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "../../../lib/utils"

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters" }),
  date: z.date({ required_error: "Please select a date" }),
})

type FormValues = z.infer<typeof formSchema>

interface AddNewsDialogProps {
  onAddNews: (news: FormValues) => void
  year?: number
}

export function AddNewsDialog({ onAddNews, year }: AddNewsDialogProps) {
  const [open, setOpen] = useState(false)
  // const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      date: year ? new Date(year, 0, 1) : new Date(),
    },
  })

  function onSubmit(values: FormValues) {
    onAddNews(values)
    form.reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add News
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add News Item</DialogTitle>
          <DialogDescription>Create a new news article for your organization.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="News article title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
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
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => (year ? date.getFullYear() !== year : false)}
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
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your news content here..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Add News</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
