interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Start with assessment",
    description: "Teams take guided assessments to create a shared baseline.",
  },
  {
    number: "02",
    title: "Analyze your results",
    description: "HIIIT surfaces patterns, strengths, friction points, and what matters most — showing what's really happening beneath the surface.",
  },
  {
    number: "03",
    title: "Get tailored recommendations",
    description: "The platform interprets your data and offers clear, actionable guidance you can use immediately.",
  },
  {
    number: "04",
    title: "Plan focused work",
    description: "Teams choose where to focus and how to move forward — at a pace that fits their real work.",
  },
  {
    number: "05",
    title: "Engage your teams",
    description: "Workshops and guided templates help people contribute, align, and build ownership around what matters most.",
  },
  {
    number: "06",
    title: "Build assets",
    description: "Strategy, priorities, goals, and milestones take shape visually and become reusable organizational assets.",
  },
  {
    number: "07",
    title: "Plan your next cycle",
    description: "Progress becomes visible, next steps become clear, and the cycle continues — quarter by quarter.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section-padding">
      <div className="container-wide">
        {/* Section Title */}
        <h2 className="text-foreground mb-16 max-w-3xl">How HIIIT works</h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group p-6 rounded-lg border border-border-subtle bg-card hover:border-border hover:shadow-card transition-all duration-200 ${
                index === 6 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Step Number */}
              <div className="text-sm font-medium text-primary mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
