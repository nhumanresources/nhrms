import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LMSLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user, isLoading: authLoading, signIn } = useAuth();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LMS Login - nHRMS Internal";
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard');
    }
  }, [user, authLoading, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Check if it's an internal email first
    if (!values.email.endsWith('@nhrms.com')) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "This system is for internal use only",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await signIn(values.email, values.password);
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: error.message,
        });
      } else {
        toast({
          title: "Success",
          description: "Welcome to the Learning Management System",
        });
        navigate('/dashboard');
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

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

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
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
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
