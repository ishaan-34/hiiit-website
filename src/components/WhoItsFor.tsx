interface Role {
  title: string;
  description: string;
}

const roles: Role[] = [
  {
    title: "Leaders",
    description: "For those responsible for direction and long-term coherence — and who need clarity that holds beyond individual initiatives.",
  },
  {
    title: "People & Organization",
    description: "For professionals shaping healthy, sustainable ways of working — connecting culture, structure, and everyday practice.",
  },
  {
    title: "Teams",
    description: "For groups navigating complexity and change — building shared understanding around how they work and what to focus on next.",
  },
  {
    title: "Consultants",
    description: "For consultants who want their expertise to have lasting impact. HIIIT provides a shared framework that allows consultants to step in where their expertise adds the most value — and step out without momentum being lost.",
  },
];

const WhoItsFor = () => {
  return (
    <section id="who" className="section-padding bg-surface-subtle">
      <div className="container-wide">
        {/* Section Title */}
        <h2 className="text-foreground mb-6">Built for how organizations work today</h2>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-8 rounded-lg bg-card border border-border-subtle hover:border-border hover:shadow-card transition-all duration-200"
            >
              {/* Role Title */}
              <h3 className="text-xl font-medium text-foreground mb-4">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
