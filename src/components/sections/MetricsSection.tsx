
import { Slider } from '@/components/ui/slider';

interface PerformanceMetric {
  label: string;
  value: number;
}

interface MetricsSectionProps {
  metrics: PerformanceMetric[];
}

export default function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border/30">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">{metric.label}</h3>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-primary">{metric.value}%</div>
                <Slider
                  defaultValue={[metric.value]}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
