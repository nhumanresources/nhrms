import React, { useState } from 'react';
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
import { Upload, FileText } from 'lucide-react';

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
  address: z.string().min(10, {
    message: "Please provide your complete address.",
  }),
  currentPosition: z.string().min(2, {
    message: "Please provide your current position.",
  }),
  experienceLevel: z.string({
    required_error: "Please select your experience level.",
  }),
  education: z.string().min(10, {
    message: "Please provide detailed educational background.",
  }),
  motivation: z.string().min(100, {
    message: "Please write at least 100 characters about your motivation.",
  }),
  expectedSalary: z.string().optional(),
  noticePeriod: z.string({
    required_error: "Please select your notice period.",
  }),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  resume: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type ResearchAssociateApplicationFormProps = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function ResearchAssociateApplicationForm({ 
  onSuccess, 
  onCancel 
}: ResearchAssociateApplicationFormProps) {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      currentPosition: '',
      experienceLevel: '',
      education: '',
      motivation: '',
      expectedSalary: '',
      noticePeriod: '',
      portfolioUrl: '',
      linkedinUrl: '',
      agreeToTerms: false,
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        });
        return;
      }
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
      form.setValue('resume', file);
    }
  };

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Add all form fields
      formData.append('_subject', 'Research Associate Application - ' + data.fullName);
      formData.append('_captcha', 'false');
      formData.append('_next', window.location.origin + '/research-opportunities?success=true');
      formData.append('_template', 'table');
      
      // Add form data
      formData.append('Full Name', data.fullName);
      formData.append('Email', data.email);
      formData.append('Phone', data.phone);
      formData.append('Address', data.address);
      formData.append('Current Position', data.currentPosition);
      formData.append('Experience Level', data.experienceLevel);
      formData.append('Education', data.education);
      formData.append('Expected Salary', data.expectedSalary || 'Not specified');
      formData.append('Notice Period', data.noticePeriod);
      formData.append('Portfolio URL', data.portfolioUrl || 'Not provided');
      formData.append('LinkedIn URL', data.linkedinUrl || 'Not provided');
      formData.append('Motivation', data.motivation);
      formData.append('Position Applied', 'Research Associate');
      formData.append('Application Date', new Date().toLocaleDateString());
      
      // Add resume file if uploaded
      if (selectedFile) {
        formData.append('resume', selectedFile);
      }
      
      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/info@nhrms.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We will review your application and get back to you soon.",
        });
        
        if (onSuccess) {
          onSuccess();
        }
        
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Research Associate Application</h2>
        <p className="text-muted-foreground">Please fill out all required fields to apply for the Research Associate position.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
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
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                      <Input placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="City, State, Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="currentPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Position *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Research Analyst, HR Executive" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="expectedSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Salary (Annual)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., ₹5,00,000 - ₹8,00,000" {...field} />
                    </FormControl>
                    <FormDescription>Optional - You can discuss this during the interview</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="noticePeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notice Period *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your notice period" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="2-months">2 months</SelectItem>
                        <SelectItem value="3-months">3 months</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Education & Resume Section */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Education & Resume</h3>
            
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Educational Background *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide your degree(s), university/institution, graduation year, and any relevant certifications" 
                      className="resize-none min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Resume Upload */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">Resume/CV Upload *</label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload your resume/CV
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX (max 5MB)
                  </p>
                </label>
              </div>
              
              {selectedFile && (
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-md border">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm">{selectedFile.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormField
                control={form.control}
                name="portfolioUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourportfolio.com" {...field} />
                    </FormControl>
                    <FormDescription>Optional - Link to your work portfolio</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                    </FormControl>
                    <FormDescription>Optional - Your LinkedIn profile</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter / Motivation *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please explain why you're interested in the Research Associate position at nHRMS, what you hope to achieve, and how your skills and experience make you a good fit for this role." 
                      className="resize-none min-h-[150px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Terms and Conditions */}
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
                    I agree to the terms and conditions *
                  </FormLabel>
                  <FormDescription>
                    By submitting this application, you confirm that the information provided is true and accurate. You also consent to nHRMS processing your personal data for recruitment purposes.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
                Cancel
              </Button>
            )}
            <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}