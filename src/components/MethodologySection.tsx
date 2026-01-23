const MethodologySection = () => {
  return (
    <section id="methodology" className="section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-foreground mb-8">Our foundations</h2>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              HIIIT is grounded in well-established thinking about how organizations function and change.
            </p>

            <p className="text-lg leading-relaxed">
              We see organizations as living systems — shaped by relationships, decisions, and everyday 
              practice — not as machines that can be optimized through isolated interventions.
            </p>

            <p className="text-lg leading-relaxed">
              Progress comes from rhythm, reflection, and shared insight. Not from one-off transformation 
              projects, but from consistent cycles of learning and alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
