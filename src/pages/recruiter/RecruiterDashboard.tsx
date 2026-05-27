import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Calendar, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "Total Jobs", value: 12, icon: Briefcase, color: "text-blue-600" },
  { label: "Active Candidates", value: 84, icon: Users, color: "text-green-600" },
  { label: "Interviews This Week", value: 7, icon: Calendar, color: "text-purple-600" },
  { label: "Offers Extended", value: 3, icon: Award, color: "text-orange-600" },
];

const recentActivity = [
  { id: 1, text: "John Smith moved to Interview stage for Senior Engineer role" },
  { id: 2, text: "New application received for Product Manager position" },
  { id: 3, text: "Priya Sharma accepted the offer for UX Designer role" },
  { id: 4, text: "InMail sent to Michael Chen for DevOps Lead position" },
  { id: 5, text: "Sara Patel screened for Data Analyst role — scheduled call" },
];

const chartData = [
  { job: "Sr. Engineer", applications: 28 },
  { job: "Product Mgr", applications: 19 },
  { job: "UX Designer", applications: 14 },
  { job: "DevOps Lead", applications: 11 },
  { job: "Data Analyst", applications: 22 },
];

export default function RecruiterDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Applications by Job</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="job" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="applications" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
