
import { Linkedin, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Leader {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  imageSrc?: string;
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <Card 
              key={index} 
              className="bg-background border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-2">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10">
                    <User className="h-12 w-12 text-primary/80" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl mb-1">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.title}</p>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                <div className="flex justify-center">
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
