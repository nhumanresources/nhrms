
export default function StatsSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-4xl font-bold mb-2 text-primary">16+</div>
            <p className="text-muted-foreground">Years Serving Clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-4xl font-bold mb-2 text-primary">423</div>
            <p className="text-muted-foreground">Clients Across 14 Countries</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-4xl font-bold mb-2 text-primary">3</div>
            <p className="text-muted-foreground">Global Offices</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-4xl font-bold mb-2 text-primary">15+</div>
            <p className="text-muted-foreground">HR Consultants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
