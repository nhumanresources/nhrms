import { Card } from '@/components/ui/card';
import { Database, Clock, FileSearch, AlertTriangle, DollarSign } from 'lucide-react';

export default function EnforcementSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-sm font-medium text-destructive mb-6">
            <AlertTriangle className="h-4 w-4" />
            Critical Update
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The New <span className="text-destructive">Enforcement Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inspections are now algorithm-driven, randomized, and web-based
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-destructive/5 to-background border-2 border-destructive/20">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                <strong>You can't prepare for these inspections the day before.</strong> Inspectors access your systems directly and see:
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <Database className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Real-time Attendance Data</h3>
                    <p className="text-sm text-muted-foreground">Complete attendance patterns with timestamps and biometric verification trails</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <FileSearch className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Leave Records Audit Trails</h3>
                    <p className="text-sm text-muted-foreground">Complete leave history with approval workflows and documentation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Payroll Calculations</h3>
                    <p className="text-sm text-muted-foreground">Detailed breakdown of wage components, statutory deductions, and compliance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Filing History</h3>
                    <p className="text-sm text-muted-foreground">Complete statutory filing records with timestamps and submission status</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <p className="text-base font-semibold mb-2">⚠️ Manual Record-Keeping Won't Pass Scrutiny</p>
                <p className="text-sm text-muted-foreground">
                  Spreadsheets, WhatsApp groups, and physical registers are no longer acceptable. Digital systems with audit trails are mandatory for compliance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}