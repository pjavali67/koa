"use client"
import { Check, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import RegistrationCard from "./registration-cards"
import { useRouter } from "next/navigation";

export default function MembershipTiers() {
  const router = useRouter();
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Membership Tiers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Life Membership Card */}
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-bold text-center">Life Membership</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Fully trained orthopaedic surgeon with an orthopaedic degree recognised by the National Medical Council of
              India / State Medical Council (D. Ortho., M.S. Ortho., DNB Ortho., M.Ch. Ortho.)
            </p>
            <div className="text-3xl font-bold text-center mt-4">₹ 3000</div>
            <div className="flex justify-center gap-2 mt-2">
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Resident</span>
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Karnataka</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Events</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Scientific Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Business Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Social Events</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Office</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Position</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Voting Rights</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Website</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Article</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Event</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Fellowship Details</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={() => { router.push('/membership') }}>Join KOA</Button>
          </CardFooter>
        </Card>

        {/* Associate Membership Card */}
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-bold text-center">Associate Membership</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Orthopaedics Post Graduate Students. The Associate members have to apply for Life Membership within five
              years from the date of enrolment as Associate Member by submitting the degree certificate and medical
              council registration. Failing which their Associate Membership will cease and the paid fee shall be
              forfeited.
            </p>
            <div className="text-3xl font-bold text-center mt-4">₹ 3000</div>
            <div className="flex justify-center gap-2 mt-2">
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Resident</span>
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Karnataka</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Events</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Scientific Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Business Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Social Events</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Office</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Position</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Voting Rights</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Website</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Article</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Event</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Fellowship Details</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={() => { router.push('/membership') }}>Join KOA</Button>
          </CardFooter>
        </Card>

        {/* Affiliate Membership Card */}
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-bold text-center">Affiliate Membership</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Foreign / Non-Resident Karnataka Orthopaedic Surgeon with an orthopaedic degree recognised by their
              National / State accreditation authority and being a member of their National / State Orthopaedic
              Association. Physicians and Surgeons who are interested in orthopaedic surgery or allied branches of
              medicine.
            </p>
            <div className="text-3xl font-bold text-center mt-4">₹ 3000</div>
            <div className="flex justify-center gap-2 mt-2">
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Resident</span>
              <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Non-Karnataka</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Events</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Scientific Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Business Meetings</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Social Events</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Office</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Position</span>
                  </div>
                  <div className="flex items-center">
                    <X className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-muted-foreground">Voting Rights</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold border-b pb-2 mb-2">Website</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Article</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Event</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Post Fellowship Details</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 hover:bg-purple-600" onClick={() => { router.push('/membership') }}>Join KOA</Button>
          </CardFooter>
        </Card>
      </div>
      <RegistrationCard/>
    </div>
  )
}
