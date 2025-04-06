
import { Check } from 'lucide-react';

export default function MissionValuesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We empower organizations to achieve exceptional performance through their people by delivering innovative, tailored HR solutions that align human capital strategy with business objectives.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be the most trusted HR management consulting partner, recognized globally for our expertise, innovation, and measurable impact on organizational success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Excellence</h3>
                  <p className="text-muted-foreground">We are committed to delivering exceptional quality and results in everything we do.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Innovation</h3>
                  <p className="text-muted-foreground">We continuously seek new and better ways to solve complex HR challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Integrity</h3>
                  <p className="text-muted-foreground">We operate with the highest ethical standards and unwavering commitment to doing what's right.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Partnership</h3>
                  <p className="text-muted-foreground">We build collaborative relationships with our clients based on trust, respect, and shared success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
