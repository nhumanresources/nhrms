
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  education: z.string().min(3, {
    message: "Please provide your educational background.",
  }),
  specialization: z.string({
    required_error: "Please select a specialization area.",
  }),
  experience: z.string().optional(),
  motivation: z.string().min(50, {
    message: "Please write at least 50 characters about your motivation.",
  }),
  questions: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

type InternshipApplicationFormProps = {
  onSuccess?: () => void;
  position: string;
  location: string;
};

export default function InternshipApplicationForm({ 
  onSuccess, 
  position,
  location 
}: InternshipApplicationFormProps) {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      education: '',
      specialization: '',
      experience: '',
      motivation: '',
      questions: '',
      agreeToTerms: false,
    },
  });

  function onSubmit(data: FormValues) {
    // In a real app, you would send this data to your backend
    // For now, we'll simulate sending an email
    const emailSubject = encodeURIComponent(`Application for ${position} in ${location}`);
    const emailBody = encodeURIComponent(`
Dear HR Team,

Please find my application details for the ${position} position in ${location}:

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Education: ${data.education}
Specialization Area: ${data.specialization}
Experience: ${data.experience || 'Not provided'}

Motivation:
${data.motivation}

Questions:
${data.questions || 'None'}

Thank you for considering my application.

Sincerely,
${data.fullName}
    `);
    
    // Open email client with pre-filled content
    window.location.href = `mailto:krishna@nhrms.com?subject=${emailSubject}&body=${emailBody}`;
    
    toast({
      title: "Application submitted",
      description: "Your application has been sent successfully.",
    });
    
    if (onSuccess) {
      onSuccess();
    }
    
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialization Area</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Human Resources">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Educational Background</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Degree, University, Year of graduation" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Experience (if any)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Briefly describe any relevant experience" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                This field is optional if you don't have previous experience.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Motivation</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Why are you interested in this career development program? What do you hope to achieve?" 
                  className="resize-none min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Questions</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Do you have any questions about the program?" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                This field is optional.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the terms and conditions
                </FormLabel>
                <FormDescription>
                  By submitting this application, you agree that the information provided is true and accurate.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" size="lg" className="w-full md:w-auto">Submit Application</Button>
      </form>
    </Form>
  );
}
