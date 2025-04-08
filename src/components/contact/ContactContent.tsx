
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

export default function ContactContent() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <ContactForm />
          </div>
          <ContactInformation />
        </div>
      </div>
    </section>
  );
}
