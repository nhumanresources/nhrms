
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { trendingTopics } from '@/data/trendingTopics';
import { researchPapers } from '@/data/researchPapers';
import TrendingTopicsSlider from './sliders/TrendingTopicsSlider';
import ResearchPapersSlider from './sliders/ResearchPapersSlider';
import SliderTabNavigation from './sliders/SliderTabNavigation';
import ViewAllButton from './sliders/ViewAllButton';

export default function TrendsResearchSlider() {
  const [activeTab, setActiveTab] = useState<'trends' | 'research'>('trends');

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay ahead with the latest trends and research in HR management and organizational development
          </p>
          
          {/* Tab navigation */}
          <SliderTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Trending Topics Slider */}
        <div className={cn(activeTab === 'trends' ? 'block' : 'hidden')}>
          <TrendingTopicsSlider topics={trendingTopics} />
        </div>
        
        {/* Research Papers Slider */}
        <div className={cn(activeTab === 'research' ? 'block' : 'hidden')}>
          <ResearchPapersSlider papers={researchPapers} />
        </div>
        
        {/* View all button */}
        <ViewAllButton activeTab={activeTab} />
      </div>
    </section>
  );
}
