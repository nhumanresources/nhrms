
import { Calendar, Globe, BookOpen, Briefcase, Heart } from 'lucide-react';

export default function OurStorySection() {
  const nameBreakdown = [
    { letter: 'n', meaning: 'Nurturing', color: 'bg-primary' },
    { letter: 'H', meaning: 'Human', color: 'bg-secondary' },
    { letter: 'R', meaning: 'Resources', color: 'bg-primary' },
    { letter: 'M', meaning: 'Management', color: 'bg-secondary' },
    { letter: 'S', meaning: 'Systems', color: 'bg-primary' },
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          
          {/* Name Breakdown Section */}
          <div className="bg-white rounded-2xl p-8 mb-10 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">What nHRMS Stands For</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Nurturing Human Resources & Management Systems
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
              {nameBreakdown.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${item.color} rounded-xl flex items-center justify-center text-white font-heading text-2xl md:text-3xl font-bold shadow-lg transition-transform group-hover:scale-110`}>
                    {item.letter}
                  </div>
                  <span className="mt-2 text-sm md:text-base font-medium text-foreground">{item.meaning}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Each letter of <span className="font-semibold text-primary">nHRMS</span> represents our commitment to nurturing organizations through people-first HR solutions that build lasting success.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">The Nurturing Philosophy</h3>
                <p className="text-muted-foreground">
                  Our name begins with "Nurturing" because we believe great organizations are built through care, guidance, and continuous development of their most valuable asset—people.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">16+ Years of Excellence</h3>
                <p className="text-muted-foreground">
                  nHRMS was founded by experienced HR executives with a vision to transform how organizations approach human capital management. Over 16 years, we've grown from executive search specialists to a full-spectrum HR consulting partner.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Global Expansion</h3>
                <p className="text-muted-foreground">
                  By 2015, we had established a presence in key markets across North America, Europe, and Asia, allowing us to serve multinational clients with consistent quality and local expertise.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Innovation & Thought Leadership</h3>
                <p className="text-muted-foreground">
                  Throughout our journey, we've maintained a commitment to innovation and thought leadership, regularly publishing research and developing proprietary methodologies to address emerging HR challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Today</h3>
                <p className="text-muted-foreground">
                  Today, nHRMS stands as a trusted partner to hundreds of organizations worldwide, from fast-growing startups to Fortune 500 companies, helping them build and maintain world-class HR functions that drive business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
