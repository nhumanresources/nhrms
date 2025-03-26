
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface PerformanceMetric {
  label: string;
  value: number;
}

interface MetricsSectionProps {
  metrics: PerformanceMetric[];
}

export default function MetricsSection({ metrics }: MetricsSectionProps) {
  // Store slider values in state to make them reactive
  const [sliderValues, setSliderValues] = useState<Record<number, number[]>>(
    Object.fromEntries(metrics.map((metric, index) => [index, [metric.value]]))
  );

  const handleSliderValueChange = (index: number, value: number[]) => {
    setSliderValues(prev => ({
      ...prev,
      [index]: value
    }));
  };

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Performance Metrics</h2>
          <p className="text-muted-foreground mt-2">See how we deliver results across key areas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border/30 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">{metric.label}</h3>
              <div className="flex items-center space-x-4 mb-2">
                <div className="text-3xl font-bold text-primary">{sliderValues[index]?.[0] || metric.value}%</div>
              </div>
              <Slider
                value={sliderValues[index] || [metric.value]}
                onValueChange={(value) => handleSliderValueChange(index, value)}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">0%</span>
                <span className="text-xs text-muted-foreground">100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
