
import { TrendingUp, UserPlus, BarChart, Radio } from 'lucide-react';

export default function SuccessMetricsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Measuring Success</h2>
          <p className="text-muted-foreground text-lg">
            Key metrics we track to ensure your HR solution achieves market penetration and adoption goals.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="0">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-10 w-10 text-future-700" />
            </div>
            <h3 className="text-xl font-medium mb-3">Market Penetration</h3>
            <p className="text-sm text-muted-foreground">Share of target HR market segments acquired</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="150">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="h-10 w-10 text-future-700" />
            </div>
            <h3 className="text-xl font-medium mb-3">User Adoption</h3>
            <p className="text-sm text-muted-foreground">Percentage of active users within client organizations</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="300">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
              <BarChart className="h-10 w-10 text-future-700" />
            </div>
            <h3 className="text-xl font-medium mb-3">Customer ROI</h3>
            <p className="text-sm text-muted-foreground">Measurable impact and returns for client organizations</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="450">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
              <Radio className="h-10 w-10 text-future-700" />
            </div>
            <h3 className="text-xl font-medium mb-3">Growth Velocity</h3>
            <p className="text-sm text-muted-foreground">Speed of market expansion and revenue growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
