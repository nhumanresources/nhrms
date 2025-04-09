
import { BookOpen, LightbulbIcon, Share2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LearningCulture() {
  return (
    <section className="py-16 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning-Focused Culture</h2>
          <p className="text-lg text-muted-foreground">
            At the heart of our culture is a commitment to continuous learning that drives innovation and excellence in everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border/50 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Education</h3>
            <p className="text-muted-foreground">
              We invest in our team's growth through structured learning programs, courses, and certifications.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border/50 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LightbulbIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation Through Research</h3>
            <p className="text-muted-foreground">
              Our research initiatives keep us at the forefront of HR practices and technologies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border/50 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
            <p className="text-muted-foreground">
              We promote a culture of mentorship and cross-functional collaboration to enhance collective expertise.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-border/50">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6">Learning & Development Programs</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Our structured learning programs include industry certifications, leadership development, technical skills enhancement, and interdisciplinary research opportunities. Team members can access both internal and external learning resources.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6">Innovation Initiatives</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                We dedicate time for innovation through regular hackathons, design thinking workshops, and collaborative problem-solving sessions. Team members are encouraged to experiment with new approaches and solutions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6">Knowledge Exchange</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Our knowledge sharing platforms include brown bag sessions, community of practice meetings, and an internal knowledge base where team members document and share insights, best practices, and lessons learned.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
