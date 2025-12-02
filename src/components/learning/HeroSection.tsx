import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, GraduationCap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LearningHeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
          alt="Corporate training session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>Learning Solutions</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Academia to Corporate 
              <span className="text-secondary"> Excellence</span>
            </h1>
            
            <p className="text-lg text-white/90 max-w-xl">
              Comprehensive training programs designed to bridge the gap between academic knowledge 
              and corporate requirements across Marketing, Finance, Sales, and HR specializations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white"
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Request Program Details 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <a href="#programs">Browse Programs</a>
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-secondary mb-3" />
              <div className="font-heading text-3xl font-bold text-white mb-1">5000+</div>
              <p className="text-white/80">Students Trained</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="w-8 h-8 text-secondary mb-3" />
              <div className="font-heading text-3xl font-bold text-white mb-1">50+</div>
              <p className="text-white/80">Training Programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-8 h-8 text-secondary mb-3" />
              <div className="font-heading text-3xl font-bold text-white mb-1">95%</div>
              <p className="text-white/80">Placement Rate</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-secondary/30">
              <GraduationCap className="w-8 h-8 text-secondary mb-3" />
              <div className="font-heading text-3xl font-bold text-secondary mb-1">4+</div>
              <p className="text-white/80">Specializations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
