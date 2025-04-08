
import { Clock, BookOpen } from 'lucide-react';

export default function JobOverviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Position Overview</h2>
          <p className="text-lg mb-8">
            We're looking for a talented Research Associate to join our team in Whitefield, Bangalore. In this role, you'll contribute to innovative research projects in HR technology, organizational psychology, and workforce analytics. You'll work alongside a diverse team of researchers, data scientists, and HR practitioners to develop evidence-based insights and solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                  <p>Full-time position, flexible working hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <BookOpen className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p>2+ years of research experience preferred</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
