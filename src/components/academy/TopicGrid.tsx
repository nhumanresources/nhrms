import { Link } from 'react-router-dom';
import { Users, Briefcase, Wallet, Shield, Cpu, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const topics = [
  {
    id: 'recruiting',
    title: 'Recruiting & Talent',
    description: 'Build effective hiring processes that attract and retain top talent.',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    courses: 4,
  },
  {
    id: 'hr-management',
    title: 'HR Management',
    description: 'Set up and scale your HR function with proven frameworks.',
    icon: Briefcase,
    color: 'from-emerald-500 to-emerald-600',
    courses: 4,
  },
  {
    id: 'payroll',
    title: 'Payroll & Compensation',
    description: 'Master payroll processing and design competitive compensation.',
    icon: Wallet,
    color: 'from-amber-500 to-amber-600',
    courses: 4,
  },
  {
    id: 'compliance',
    title: 'Compliance',
    description: 'Navigate labour laws and maintain regulatory compliance.',
    icon: Shield,
    color: 'from-rose-500 to-rose-600',
    courses: 4,
  },
  {
    id: 'hr-tech',
    title: 'HR Technology',
    description: 'Select, implement, and optimize HR systems effectively.',
    icon: Cpu,
    color: 'from-violet-500 to-violet-600',
    courses: 4,
  },
];

export default function TopicGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn by Topic
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive curriculum covering all aspects of HR systems 
            and people management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link key={topic.id} to={`/academy/courses?topic=${topic.id}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {topic.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {topic.courses} courses
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
