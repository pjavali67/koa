import { AdminLayout } from "./admin-layout";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Activity, Users, FileText, Calendar } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Members", value: "1,254", icon: <Users className="h-6 w-6" /> },
    { title: "Active Events", value: "8", icon: <Calendar className="h-6 w-6" /> },
    { title: "Recent Posts", value: "24", icon: <FileText className="h-6 w-6" /> },
    { title: "Site Activity", value: "High", icon: <Activity className="h-6 w-6" /> },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">New member registered</p>
                    <p className="text-sm text-muted-foreground">
                      John Doe joined the organization
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}