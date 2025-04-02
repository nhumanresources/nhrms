
import { Check, Target, BadgeDollarSign, Megaphone, LineChart } from 'lucide-react';

export default function ApproachSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-future-100/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-future-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neural-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Our GTM Approach for HR Products</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive framework designed specifically for HR solutions to maximize market penetration and customer adoption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="0">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                <Target className="h-8 w-8 text-future-700" />
              </div>
              <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Market Strategy</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">HR Market Analysis</p>
                  <p className="text-muted-foreground">Comprehensive analysis of HR market trends, competitive landscape, and buyer personas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Segmentation & Targeting</p>
                  <p className="text-muted-foreground">Identify optimal market segments and prioritize based on opportunity size and fit.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Positioning Strategy</p>
                  <p className="text-muted-foreground">Develop distinctive positioning that addresses specific HR pain points and differentiates from competitors.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="150">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                <BadgeDollarSign className="h-8 w-8 text-future-700" />
              </div>
              <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Pricing & Packaging</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Value-Based Pricing</p>
                  <p className="text-muted-foreground">Develop pricing models aligned with the value delivered and buying patterns of HR departments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Solution Packaging</p>
                  <p className="text-muted-foreground">Create tiered offerings and bundles that address different HR maturity levels and organizational needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">ROI Modeling</p>
                  <p className="text-muted-foreground">Develop robust ROI calculator tools that demonstrate both hard and soft returns for HR investments.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                <Megaphone className="h-8 w-8 text-future-700" />
              </div>
              <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Marketing & Communications</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">HR-Specific Content Strategy</p>
                  <p className="text-muted-foreground">Develop thought leadership and content that addresses the unique challenges of HR professionals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Multi-Stakeholder Messaging</p>
                  <p className="text-muted-foreground">Create tailored messaging for different stakeholders in the HR purchase process (CHRO, HR Business Partners, IT, Finance).</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">HR Event Strategy</p>
                  <p className="text-muted-foreground">Leverage HR conferences, industry forums, and targeted events to build visibility and credibility.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="450">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                <LineChart className="h-8 w-8 text-future-700" />
              </div>
              <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Sales & Channel Strategy</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">HR Buyer Journey Mapping</p>
                  <p className="text-muted-foreground">Map the complex buying journey for HR solutions to optimize sales approach and touchpoints.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">HR Ecosystem Partnerships</p>
                  <p className="text-muted-foreground">Develop partnerships with complementary HR solution providers, consultants, and system integrators.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Sales Enablement for HR Products</p>
                  <p className="text-muted-foreground">Equip sales teams with HR domain expertise, objection handling, and value proposition articulation.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
