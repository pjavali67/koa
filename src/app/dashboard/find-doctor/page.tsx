import { DashboardLayout } from "../../../components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Button } from "../../../components/ui/button"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
// import { Checkbox } from "../../../components/ui/checkbox"

export default function FindDoctorPage() {
  return (
    <DashboardLayout >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Find a Doctor Form For Profile Page</h1>
          <p className="text-muted-foreground">Profile Page building form for doctors listings.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Profile Page Form</CardTitle>
            <CardDescription>Add a new doctor to the directory.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualifications">Qualifications</Label>
              <Input id="qualifications" placeholder="MD, PhD, etc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hospital">Hospital/Clinic</Label>
              <Input id="hospital" placeholder="Hospital or clinic name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Full address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Whatsapp">WhatsApp Number</Label>
              <Input id="whatsapp" type="tel" placeholder="Whatsapp number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook Url Link</Label>
              <Input id="facebook"  placeholder="Facebook Url Link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter Url Link</Label>
              <Input id="twitter" placeholder="Facebook Url Link" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea id="bio" placeholder="Doctor's biography" className="min-h-[150px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Our Approach</Label>
              <Textarea id="bio" placeholder="Doctor's biography" className="min-h-[150px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Our Commitment</Label>
              <Textarea id="bio" placeholder="Doctor's biography" className="min-h-[150px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Profile Photo</Label>
              <Input id="photo" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Clinic Photo</Label>
              <Input id="photo" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photo">Work-in-Action Photo</Label>
              <Input id="photo" type="file" />
            </div>
            {/* <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="available" />
                <Label htmlFor="available">Currently Accepting Patients</Label>
              </div>
            </div> */}
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
