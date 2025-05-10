import type { Metadata } from "next"
import EventPostForm from "../../components/event-post-form/event-post-form"

export const metadata: Metadata = {
  title: "Post an Event",
  description: "Create and publish a new event",
}

export default function PostEventPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Post an Event</h1>
        <EventPostForm />
      </div>
    </div>
  )
}
