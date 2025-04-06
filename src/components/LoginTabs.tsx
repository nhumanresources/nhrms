
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, User } from "lucide-react";

export default function LoginTabs() {
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Customer login with:', customerEmail, customerPassword);
    // Add your customer login logic here
  };

  const handleEmployeeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Employee login with:', employeeEmail, employeePassword);
    // Add your employee login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="customer" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="customer" className="flex items-center justify-center gap-2">
            <User className="h-4 w-4" />
            <span>Customer Login</span>
          </TabsTrigger>
          <TabsTrigger value="employee" className="flex items-center justify-center gap-2">
            <Users className="h-4 w-4" />
            <span>Employee Login</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="customer">
          <Card>
            <CardHeader>
              <CardTitle>Customer Login</CardTitle>
              <CardDescription>Enter your credentials to access your customer account.</CardDescription>
            </CardHeader>
            <form onSubmit={handleCustomerLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-email">Email</Label>
                  <Input 
                    id="customer-email" 
                    type="email" 
                    placeholder="customer@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="customer-password">Password</Label>
                    <a href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="customer-password" 
                    type="password"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="employee">
          <Card>
            <CardHeader>
              <CardTitle>Employee Login</CardTitle>
              <CardDescription>Access your employee account and internal tools.</CardDescription>
            </CardHeader>
            <form onSubmit={handleEmployeeLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employee-email">Email</Label>
                  <Input 
                    id="employee-email" 
                    type="email" 
                    placeholder="name@nhrms.com"
                    value={employeeEmail}
                    onChange={(e) => setEmployeeEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="employee-password">Password</Label>
                    <a href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="employee-password" 
                    type="password"
                    value={employeePassword}
                    onChange={(e) => setEmployeePassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
