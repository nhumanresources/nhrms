
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { setLoggedIn } from '@/utils/loginHelper';
import { Lock } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LMSLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LMS Login - nHRMS Internal";
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Simulate login process - in a real implementation, this would connect to a backend
      console.log('Login attempt with:', values.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if it's an internal email (this is a simple check for demonstration)
      if (values.email.endsWith('@nhrms.com')) {
        setLoggedIn();
        toast({
          title: "Success",
          description: "Welcome to the Learning Management System",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "This system is for internal use only",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your credentials and try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/10 to-gray-100">
      <Helmet>
        <title>LMS Login - nHRMS Internal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="nHRMS LMS" 
              className="h-12"
            />
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Lock className="text-primary h-6 w-6" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Learning Management System</CardTitle>
            <CardDescription className="text-center">
              Internal access only. Please login with your nHRMS credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="name@nhrms.com" 
                          {...field} 
                          className="bg-white" 
                          autoComplete="username"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <a href="/forgot-password" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <FormControl>
                        <Input 
                          type="password" 
                          {...field} 
                          className="bg-white" 
                          autoComplete="current-password"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 border-t pt-4">
            <p className="text-xs text-center text-muted-foreground">
              This is a secure system for nHRMS employees only. Unauthorized access is prohibited.
            </p>
          </CardFooter>
        </Card>
      </main>
      
      <footer className="py-4">
        <div className="container mx-auto px-4">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} nHRMS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
