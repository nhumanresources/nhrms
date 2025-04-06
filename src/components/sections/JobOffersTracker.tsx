
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Target, Briefcase, TrendingUp } from "lucide-react";
import { ChartContainer, ChartLegend, ChartLegendContent } from "../ui/chart";

export default function JobOffersTracker() {
  const [progress, setProgress] = useState(0);
  const jobOffersCreated = 278432; // Updated to 278,432 jobs created as of March 2025
  const jobOffersGoal = 1000000; // 1 million jobs by 2035
  const progressPercentage = Math.round((jobOffersCreated / jobOffersGoal) * 100);

  // Array of monthly job offer counts for the past 12 months (updated through March 2025)
  const monthlyOffers = [
    { month: 'Apr', count: 18 },
    { month: 'May', count: 21 },
    { month: 'Jun', count: 22 },
    { month: 'Jul', count: 24 },
    { month: 'Aug', count: 25 },
    { month: 'Sep', count: 23 },
    { month: 'Oct', count: 26 },
    { month: 'Nov', count: 27 },
    { month: 'Dec', count: 24 },
    { month: 'Jan', count: 28 },
    { month: 'Feb', count: 30 },
    { month: 'Mar', count: 32 }
  ];

  const totalLastYear = monthlyOffers.reduce((acc, month) => acc + month.count, 0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPercentage), 500);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Job Offers Tracker</h2>
          <p className="text-muted-foreground mt-2">
            Tracking our progress toward creating 1 million jobs by 2035
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-bold">Job Offers Created</CardTitle>
              <Briefcase className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Progress towards our goal</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-4xl font-bold">{jobOffersCreated.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Jobs created so far</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">{jobOffersGoal.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">2035 goal</p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">On track to meet our 2035 target</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-2xl font-bold">Last 12 Months</CardTitle>
              <TrendingUp className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">{totalLastYear}</p>
                  <p className="text-sm text-muted-foreground">Total job offers in the past year</p>
                </div>
                
                <div className="grid grid-cols-6 gap-1 md:grid-cols-12">
                  {monthlyOffers.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative w-full">
                        <div 
                          className="absolute bottom-0 w-full bg-primary/80 rounded-sm" 
                          style={{ 
                            height: `${(item.count / Math.max(...monthlyOffers.map(o => o.count))) * 60}px`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs mt-1 text-muted-foreground">{item.month}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Average: {Math.round(totalLastYear / 12)} per month</span>
                  </div>
                  <div>
                    <span className="text-green-500 font-medium">+35.8% YoY</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
