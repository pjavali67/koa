"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { BarChart3, Users, Newspaper, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function OverviewContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +8% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500 flex items-center">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                -2 from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Site Traffic</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +19% from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Activity</CardTitle>
            <CardDescription>Overview of member activity and content creation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
              <BarChart3 className="h-8 w-8 text-muted" />
              <span className="ml-2 text-muted">Activity Chart</span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-muted"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">User updated profile</p>
                    <p className="text-xs text-muted-foreground">{i * 10} minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
