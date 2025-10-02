import { Shield } from 'lucide-react';

export default function JobGuaranteeBadge() {
  return (
    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-sm font-semibold shadow-md">
      <Shield className="h-4 w-4 mr-2" />
      <span>100% Job Guarantee</span>
    </div>
  );
}
