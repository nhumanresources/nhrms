import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { FileText, Download, CheckCircle } from 'lucide-react';

export default function WhitePaperSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-labour-code-lead', {
        body: {
          ...formData,
          lead_type: 'whitepaper',
        },
      });

      if (error) throw error;

      toast({
        title: "Success! Download Started",
        description: "Your white paper is being downloaded. Check your email for additional resources.",
      });

      setIsDownloaded(true);
      
      // Trigger white paper download
      // In production, this would be a real PDF download link
      window.open('/labour-codes-whitepaper.pdf', '_blank');
      
      setFormData({ name: '', email: '', phone: '', company_name: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us at marketing.ops@nhrms.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <FileText className="h-4 w-4" />
                Exclusive Research White Paper
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-primary">Complete Implementation Guide</span> to India's New Labour Codes
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive 45-page research report covering everything you need to know about compliance, implementation, and risk mitigation.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What's Inside:</h3>
                <ul className="space-y-3">
                  {[
                    'Detailed breakdown of all 4 Labour Codes',
                    'Industry-specific implementation roadmaps',
                    'Wage restructuring calculators and templates',
                    'Registration consolidation checklist',
                    'Sample policies and documentation',
                    'Timeline and penalty analysis',
                    'Digital readiness assessment framework',
                    'State-wise implementation status',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="font-semibold text-lg mb-2">📊 Based on Research From:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Ministry of Labour & Employment guidelines</li>
                  <li>• 423 organization compliance audits across 14 countries</li>
                  <li>• Industry expert interviews</li>
                  <li>• Case studies and best practices</li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <Card className="p-8 shadow-2xl border-2 border-primary/20">
              {!isDownloaded ? (
                <>
                  <div className="text-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Download className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Download Free White Paper</h3>
                    <p className="text-muted-foreground">Enter your details to access the complete guide</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="wp-name">Full Name *</Label>
                      <Input
                        id="wp-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="wp-email">Work Email *</Label>
                      <Input
                        id="wp-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="wp-phone">Phone Number *</Label>
                      <Input
                        id="wp-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="wp-company">Company Name *</Label>
                      <Input
                        id="wp-company"
                        type="text"
                        required
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        placeholder="Your company name"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Download White Paper'}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By downloading, you agree to receive periodic updates from nHRMS about labour law compliance. We'll also send this to marketing.ops@nhrms.com for lead nurturing.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Download Started!</h3>
                  <p className="text-muted-foreground mb-6">
                    The white paper is downloading. We've also sent it to your email with additional resources.
                  </p>
                  <Button 
                    onClick={() => window.open('/labour-codes-whitepaper.pdf', '_blank')}
                    variant="outline"
                  >
                    Download Again
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}