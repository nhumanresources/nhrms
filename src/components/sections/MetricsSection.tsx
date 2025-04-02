
import { PerformanceMetric } from '@/types/metrics';

interface MetricsSectionProps {
  metrics: PerformanceMetric[];
}

export default function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Performance Metrics</h2>
          <p className="text-muted-foreground mt-2">Driving organizational excellence through measurable outcomes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border/30 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-3">{metric.value}</div>
              <h3 className="text-lg font-medium text-muted-foreground">{metric.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
