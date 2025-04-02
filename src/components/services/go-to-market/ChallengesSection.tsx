
import { Users, PieChart, Building2 } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChallengesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-future-100/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Unique Challenges of HR Products</h2>
          <p className="text-muted-foreground text-lg">
            HR solutions face specific go-to-market challenges that require specialized strategies and approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="0">
            <div className="h-2 bg-gradient-to-r from-future-600 to-future-400"></div>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-future-700" />
              </div>
              <CardTitle className="text-2xl">Multiple Decision Makers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                HR purchase decisions often involve multiple stakeholders including HR leaders, IT, finance, and the C-suite, requiring nuanced messaging for each audience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="150">
            <div className="h-2 bg-gradient-to-r from-future-500 to-neural-500"></div>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                <PieChart className="h-8 w-8 text-future-700" />
              </div>
              <CardTitle className="text-2xl">ROI Demonstration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                HR solutions must clearly demonstrate both quantitative and qualitative returns on investment, which can be challenging for products focused on culture, engagement, and development.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="300">
            <div className="h-2 bg-gradient-to-r from-neural-600 to-neural-400"></div>
            <CardHeader className="pb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-future-700" />
              </div>
              <CardTitle className="text-2xl">Organization Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                HR technology adoption is heavily dependent on organizational readiness and existing systems, requiring careful positioning and implementation planning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
