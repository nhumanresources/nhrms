
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ViewAllButtonProps {
  activeTab: 'trends' | 'research';
}

export default function ViewAllButton({ activeTab }: ViewAllButtonProps) {
  return (
    <div className="text-center mt-10">
      <Button variant="outline" asChild>
        <Link to={activeTab === 'trends' ? "/research" : "/research"}>
          View All {activeTab === 'trends' ? 'Articles' : 'Research Papers'}
        </Link>
      </Button>
    </div>
  );
}
