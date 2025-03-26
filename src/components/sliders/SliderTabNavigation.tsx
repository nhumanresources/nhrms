
import { Button } from '@/components/ui/button';

interface SliderTabNavigationProps {
  activeTab: 'trends' | 'research';
  setActiveTab: (tab: 'trends' | 'research') => void;
}

export default function SliderTabNavigation({ activeTab, setActiveTab }: SliderTabNavigationProps) {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <Button 
        variant={activeTab === 'trends' ? 'default' : 'outline'} 
        onClick={() => setActiveTab('trends')}
        className="rounded-full px-6"
      >
        Trending Topics
      </Button>
      <Button 
        variant={activeTab === 'research' ? 'default' : 'outline'} 
        onClick={() => setActiveTab('research')}
        className="rounded-full px-6"
      >
        Research Papers
      </Button>
    </div>
  );
}
