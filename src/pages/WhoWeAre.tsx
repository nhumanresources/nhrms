
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who Are We</h1>
              <p className="text-xl text-muted-foreground">
                A premier management consulting firm specializing in transformative HR solutions for forward-thinking organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2009, nHRMS began with a vision to revolutionize how organizations approach human resource management. What started as a small team of HR consultants has grown into a comprehensive consulting firm with global reach and influence.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've helped hundreds of organizations across various industries optimize their HR operations, find exceptional talent, and build sustainable HR strategies that align with their business objectives.
                </p>
                <p className="text-muted-foreground">
                  Our success is built on a foundation of deep expertise, innovative thinking, and a commitment to delivering measurable results for our clients.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">Since 2009</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-primary mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards in all our interactions, building trust through transparency and honesty.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-primary mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly pursue innovative solutions that challenge conventional thinking and deliver exceptional results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-primary mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, setting high standards and consistently exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30"></div>
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-2">CEO & Founder</p>
                <p className="text-muted-foreground">
                  20+ years of experience in HR leadership and organizational development.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30"></div>
                </div>
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-primary font-medium mb-2">Chief Strategy Officer</p>
                <p className="text-muted-foreground">
                  Former Fortune 500 HR Executive with expertise in global workforce strategies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30"></div>
                </div>
                <h3 className="text-xl font-semibold">Olivia Martinez</h3>
                <p className="text-primary font-medium mb-2">Head of Consulting</p>
                <p className="text-muted-foreground">
                  Specialized in transformational HR projects and change management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
