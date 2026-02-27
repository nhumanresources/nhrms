import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  FileText, 
  AlertTriangle, 
  Download,
  Search,
  Filter,
  Building2,
  Scale,
  Users,
  Shield,
  Phone,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  labourLawCompliances, 
  stateWisePTDueDates, 
  frequencyColors,
  type ComplianceItem 
} from '@/data/complianceCalendar';
import { generateCompliancePDF } from '@/utils/generateCompliancePDF';

const months = [
  'All Months', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const frequencies = ['All', 'Monthly', 'Quarterly', 'Half-Yearly', 'Annual', 'As Required'];

export default function ComplianceCalendar() {
  const [selectedFrequency, setSelectedFrequency] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'labour-law' | 'state-pt'>('labour-law');
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      generateCompliancePDF(activeTab, filteredCompliances, selectedFrequency);
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const filteredCompliances = labourLawCompliances.filter(item => {
    const matchesFrequency = selectedFrequency === 'All' || item.frequency === selectedFrequency;
    const matchesSearch = 
      item.requirement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.act.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.formNo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFrequency && matchesSearch;
  });

  const groupedByFrequency = filteredCompliances.reduce((acc, item) => {
    if (!acc[item.frequency]) {
      acc[item.frequency] = [];
    }
    acc[item.frequency].push(item);
    return acc;
  }, {} as Record<string, ComplianceItem[]>);

  const frequencyOrder = ['Monthly', 'Quarterly', 'Half-Yearly', 'Annual', 'As Required'];

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
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-white/90">Labour Law Compliance</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Labour Law{' '}
                <span className="text-gradient-warm">Compliance Calendar</span>
              </h1>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Never miss a deadline. Track all statutory compliance due dates for EPF, ESI, 
                Professional Tax, TDS, and more. Updated for FY 2024-25.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary-premium">
                    Get Compliance Support
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/labour-codes">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Scale className="mr-2 w-4 h-4" />
                    New Labour Codes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: FileText, value: '20+', label: 'Compliances Tracked' },
                { icon: Clock, value: '100+', label: 'Annual Due Dates' },
                { icon: Building2, value: '14', label: 'States Covered (PT)' },
                { icon: Shield, value: '₹50L+', label: 'Penalty Prevention' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'labour-law' | 'state-pt')} className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search compliances..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <Select value={selectedFrequency} onValueChange={setSelectedFrequency}>
                    <SelectTrigger className="w-full sm:w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter by frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencies.map((freq) => (
                        <SelectItem key={freq} value={freq}>{freq}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                {frequencyOrder.map((frequency) => {
                  const items = groupedByFrequency[frequency];
                  if (!items?.length) return null;

                  return (
                    <Card key={frequency} className="overflow-hidden">
                      <CardHeader className="bg-muted/30 border-b border-border">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-3">
                            <Badge className={frequencyColors[frequency]}>
                              {frequency}
                            </Badge>
                            <span className="text-lg font-semibold">
                              {frequency} Compliances
                            </span>
                          </CardTitle>
                          <span className="text-sm text-muted-foreground">
                            {items.length} items
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-muted/20">
                                <TableHead className="font-semibold">Compliance Requirement</TableHead>
                                <TableHead className="font-semibold">Applicable Act</TableHead>
                                <TableHead className="font-semibold">Form No.</TableHead>
                                <TableHead className="font-semibold">Due Date</TableHead>
                                <TableHead className="font-semibold hidden lg:table-cell">Penalty</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {items.map((item) => (
                                <TableRow key={item.id} className="hover:bg-muted/10">
                                  <TableCell>
                                    <div>
                                      <div className="font-medium text-foreground">{item.requirement}</div>
                                      <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-sm">{item.act}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="font-mono text-xs">
                                      {item.formNo}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-2 text-secondary font-medium">
                                      <Clock className="w-4 h-4" />
                                      {item.dueDate}
                                    </div>
                                  </TableCell>
                                  <TableCell className="hidden lg:table-cell">
                                    {item.penalty ? (
                                      <div className="flex items-start gap-2 text-sm text-destructive">
                                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span>{item.penalty}</span>
                                      </div>
                                    ) : (
                                      <span className="text-muted-foreground text-sm">As per act</span>
                                    )}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {filteredCompliances.length === 0 && (
                  <Card className="p-12 text-center">
                    <div className="text-muted-foreground">
                      <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No compliances found</p>
                      <p className="text-sm mt-2">Try adjusting your search or filter criteria</p>
                    </div>
                  </Card>
                )}
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

        {/* Important Notice */}
        <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-900/50">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-1">Important Disclaimer</h3>
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  This compliance calendar is for informational purposes only. Due dates may vary based on specific 
                  notifications, holidays, and state-specific amendments. Always verify with the latest government 
                  notifications and consult with compliance experts for accurate filing.
                </p>
              </div>
            </div>
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
                Let nHRMS handle your labour law compliance. Our experts ensure timely filings, 
                accurate returns, and complete peace of mind.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Shield, title: '100% Compliant', desc: 'Zero penalty guarantee' },
                  { icon: Users, title: 'Expert Support', desc: 'Dedicated compliance team' },
                  { icon: Clock, title: 'Timely Reminders', desc: 'Never miss a deadline' }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:krishna@nhrms.com">
                  <Button size="lg" className="btn-primary-premium">
                    <Phone className="mr-2 w-4 h-4" />
                    Schedule Free Consultation
                  </Button>
                </a>
                <Link to="/services/compliance">
                  <Button size="lg" variant="outline">
                    View Compliance Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
