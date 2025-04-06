
import { Linkedin } from 'lucide-react';

interface Leader {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
}

interface LeadershipTeamSectionProps {
  leaders: Leader[];
}

export default function LeadershipTeamSection({ leaders }: LeadershipTeamSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground">
            Led by experienced professionals with deep expertise in HR and business strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-background border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                  <p className="text-primary text-sm">{leader.title}</p>
                </div>
                <a 
                  href={leader.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${leader.name}'s LinkedIn profile`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
