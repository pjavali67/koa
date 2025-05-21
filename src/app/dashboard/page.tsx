import { DashboardLayout } from "../../components/dashboard-layout"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
// import { Users, FileText, Calendar } from "lucide-react"
// import ProfileTable from "../profiletable/ProfileTable"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* <ProfileTable /> */}

      <div className="flex min-h-screen flex-col items-center justify-center p-2">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-4xl font-bold">Admin Dashboard</h1>
          <p className="mb-8 text-muted-foreground">
            A comprehensive admin dashboard with sidebar navigation, dynamic content loading, and multiple admin features.
          </p>
          {/* <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button> */}
        </div>
      </div>
      {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Published</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+3 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">+5 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Next event in 3 days</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to your Admin Dashboard</CardTitle>
            <CardDescription>Manage your content, users, and settings from this central dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use the sidebar navigation to access different sections of the admin panel. You can post news, blogs,
              events, and manage various aspects of your site.
            </p>
          </CardContent>
        </Card> */}

    </DashboardLayout>
  )
}
