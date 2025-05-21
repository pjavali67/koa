import React from 'react'

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Card } from "../../../components/ui/card"
import { Separator } from "../../../components/ui/separator"
import { Button } from "../../../components/ui/button"
interface Props {
  params: {
    slugid: string;
  };
}
// Sample doctor data
const doctor = {
  id: "1",
  name: "Dr. Arjun Mehta",
  qualification: "MBBS",
  specialisation: "Cardiology",
  address: "123 MG Road, Indiranagar, Bangalore, Karnataka",
  email: "arjun.mehta@example.com",
  phone: "9876543210",
  photo: "./../../../../images/placeholder.svg",
  koaProfile: "/",
  website: "http://www.google.com",
}

export default function DoctorProfile({ params }: Props) {

  return (
    <>
      <p>Showing content for ID: {params.slugid}</p>
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="p-6 shadow-lg">
        {/* Doctor name, qualification and specialisation */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold">{doctor.name}</h1>
            <h2 className="text-xl text-muted-foreground">{doctor.qualification}</h2>
          </div>
          <p className="text-lg text-primary mt-1">{doctor.specialisation}</p>
        </div>

        <Separator className="my-6" />

        {/* Two column grid - Photo and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src={doctor.photo || "./../../../../images/placeholder.svg"}
              alt={doctor.name}
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-muted-foreground">{doctor.address}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Contact</h3>
              <p className="text-muted-foreground">{doctor.phone}</p>
              <p className="text-muted-foreground">{doctor.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Social Media</h3>
              <div className="flex space-x-4 mt-2">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Website</h3>
              <Link
                href={doctor.website}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {doctor.website}
              </Link>
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={doctor.koaProfile} target="_blank" rel="noopener noreferrer">
                  View KOA 
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Intro paragraph and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground">
              Dr. Arjun Mehta is a highly skilled cardiologist with over 15 years of experience in treating various
              heart conditions. He completed his medical education from prestigious institutions and has been recognized
              for his contributions to the field of cardiology. Dr. Mehta is known for his patient-centered approach and
              commitment to providing the highest quality of care.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="./../../../images/placeholder.svg?height=300&width=400"
              alt="Doctor at work"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        <Separator className="my-6" />

        {/* Image and explanation paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex justify-center items-center md:order-1 order-2">
            <Image
              src="./../../../images/placeholder.svg?height=300&width=400"
              alt="Medical facility"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-muted-foreground">
              At our clinic, we believe in a holistic approach to cardiac care. We utilize the latest diagnostic tools
              and treatment methods to ensure optimal outcomes for our patients. Our team works collaboratively to
              develop personalized treatment plans that address each patients unique needs and circumstances.
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Full-length paragraph */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-muted-foreground">
            We are committed to providing compassionate, comprehensive, and cutting-edge cardiac care to all our
            patients. Our mission is to improve the heart health of our community through prevention, education, and
            advanced treatment options. We strive to create a supportive environment where patients feel comfortable
            discussing their concerns and actively participating in their care. Dr. Mehta and his team are dedicated to
            staying at the forefront of cardiology advancements to offer the best possible care for heart-related
            conditions.
          </p>
        </div>
      </Card>
    </main>
    </>
  )
}
