import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Scale,
  Building2,
  ChevronRight,
  Download,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import ComplianceCalendarView from '@/components/compliance-calendar/ComplianceCalendarView';
import { generateCompliancePDF } from '@/utils/generateCompliancePDF';
import { labourLawCompliances, stateWisePTDueDates } from '@/data/complianceCalendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Clock } from 'lucide-react';

export default function ComplianceCalendarNew() {
  const [activeTab, setActiveTab] = useState<'labour-law' | 'state-pt'>('labour-law');
  const [isExporting, setIsExporting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      generateCompliancePDF(activeTab, labourLawCompliances, 'All');
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Labour Law Compliance Calendar India 2024-25 | nHRMS"
        description="Complete labour law compliance calendar for India. Track EPF, ESI, Professional Tax, TDS, and all statutory due dates. Stay compliant with nHRMS expert guidance."
        keywords="labour law compliance calendar, EPF due date, ESI due date, professional tax, TDS return, statutory compliance India, HR compliance calendar 2024"
        canonicalUrl="https://nhrms.com/compliance-calendar"
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                Compliance Calendar
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'labour-law' | 'state-pt')} className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                    {activeTab === 'labour-law' ? 'Labour Law' : 'State-wise PT'}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <TabsList className="bg-muted/50 p-1">
                    <TabsTrigger value="labour-law" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Scale className="w-4 h-4 mr-2" />
                      Labour Law
                    </TabsTrigger>
                    <TabsTrigger value="state-pt" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Building2 className="w-4 h-4 mr-2" />
                      State-wise PT
                    </TabsTrigger>
                  </TabsList>

                  <Button
                    onClick={handleExportPDF}
                    disabled={isExporting}
                    variant="outline"
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {isExporting ? 'Exporting...' : 'Download PDF'}
                  </Button>
                </div>
              </div>

              <TabsContent value="labour-law" className="space-y-8">
                <ComplianceCalendarView 
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </TabsContent>

              <TabsContent value="state-pt" className="space-y-6">
                <Card>
                  <CardHeader className="bg-muted/30 border-b border-border">
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="bg-purple-100 text-purple-800">State-wise</Badge>
                      <span className="text-lg font-semibold">Professional Tax Due Dates</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/20">
                            <TableHead className="font-semibold">State</TableHead>
                            <TableHead className="font-semibold">Due Date</TableHead>
                            <TableHead className="font-semibold">Applicable Act</TableHead>
                            <TableHead className="font-semibold">Form</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {stateWisePTDueDates.map((item, index) => (
                            <TableRow key={index} className="hover:bg-muted/10">
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Building2 className="w-4 h-4 text-primary" />
                                  <span className="font-medium">{item.state}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2 text-secondary font-medium">
                                  <Clock className="w-4 h-4" />
                                  {item.dueDate} of month
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">{item.act}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="font-mono text-xs">
                                  {item.form}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Never Miss a Compliance Deadline Again
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our experts handle your compliance requirements while you focus on growing your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary-premium">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
