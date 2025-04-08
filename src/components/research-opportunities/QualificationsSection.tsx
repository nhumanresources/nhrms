
import { ArrowRight } from 'lucide-react';

export default function QualificationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Qualifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Required</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Master's degree in Industrial/Organizational Psychology, HR Management, Analytics, or related field</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Strong quantitative and qualitative research skills</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Proficiency with statistical analysis software (R, SPSS, or similar)</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Excellent written and verbal communication skills</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Preferred</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>2+ years of experience in HR research or consulting</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Experience with data visualization tools (Tableau, Power BI)</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Knowledge of AI/ML applications in HR</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p>Publications in relevant academic or professional journals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
