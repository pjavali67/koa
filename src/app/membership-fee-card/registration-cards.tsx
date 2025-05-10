"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"

interface RegistrationCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  isOnline: boolean
  downloadLink?: string
}

const Ribbon = ({ text, isOnline }: { text: string; isOnline: boolean }) => {
  return (
    <div
      className={`absolute top-0 right-0 ${isOnline ? "bg-green-500" : "bg-blue-500"
        } text-white px-3 py-1 text-xs font-semibold z-10`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      {text}
    </div>
  )
}

const RegistrationCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  isOnline,
  downloadLink,
 }: RegistrationCardProps) => {
  return (
    <Card className="relative h-full flex flex-col">
      <div className="absolute top-[8] right-0 z-10">
      <Ribbon text={isOnline ? "Online" : "Offline"} isOnline={isOnline}/></div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        {downloadLink ? (
          <Button asChild className="w-full bg-purple-500 hover:bg-purple-700">
            <a href={downloadLink} download>
              {buttonText}
            </a>
          </Button>
        ) : (
          <Button asChild className="w-full bg-purple-500 hover:bg-purple-700">
            <Link href={buttonLink}>
              {buttonText} <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function RegistrationCards() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RegistrationCard
          title="Guest Registration"
          description="This registration is for a professional from a non-orthopedic background, such as a company executive or HR manager, seeking to publish events and jobs on the website."
          buttonText="Click Here"
          buttonLink="/guest-registration"
          isOnline={true}
        />
        <RegistrationCard
          title="IOA Life Membership"
          description="To register online, please go to the link below."
          buttonText="Click Here"
          buttonLink="/ioa-online-registration"
          isOnline={true}
        />
        <RegistrationCard
          title="IOA Life Membership"
          description="To register offline, please download the application below."
          buttonText="Download"
          buttonLink="#"
          isOnline={false}
          downloadLink="/path-to-your-pdf-file.pdf"
        />
      </div>
    </div>
  )
}
