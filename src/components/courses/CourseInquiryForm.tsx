import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters' }).max(100, { message: 'Name must be less than 100 characters' }),
  email: z.string().trim().email({ message: 'Invalid email address' }).max(255, { message: 'Email must be less than 255 characters' }),
  phone: z.string().trim().min(10, { message: 'Please enter a valid phone number' }).max(15, { message: 'Phone number is too long' }),
  course: z.string().min(1, { message: 'Please select a course' }),
  qualification: z.string().trim().min(2, { message: 'Please enter your qualification' }).max(100, { message: 'Qualification must be less than 100 characters' }),
  message: z.string().trim().max(1000, { message: 'Message must be less than 1000 characters' }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CourseInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: '',
      qualification: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('course', data.course);
      formData.append('qualification', data.qualification);
      formData.append('message', data.message || '');
      formData.append('_subject', `Course Inquiry - ${data.course} from Website`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/venisha.dsouza@nhrms.in', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Inquiry Submitted!',
          description: 'Thank you for your interest. Our team will contact you shortly.',
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly at venisha.dsouza@nhrms.in',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours with course details and next steps.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-muted/30 p-6 md:p-8 rounded-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Course *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ready for HR as a Career">Ready for HR as a Career</SelectItem>
                        <SelectItem value="Ready Recruiter">Ready Recruiter</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., MBA, B.Tech, B.Com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Questions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific questions about the course?"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
