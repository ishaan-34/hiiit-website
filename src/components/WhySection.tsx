const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-surface-subtle">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-foreground mb-8">Why HIIIT exists</h2>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Many organizations rely on external initiatives to create momentum — frameworks, 
              programs, or expert-led transformations that generate activity while they are present. 
              But when that presence disappears, the energy often fades with it.
            </p>

            <p className="text-lg leading-relaxed">
              Internal roles now exist that once belonged to consultants, yet what's often missing 
              is a shared structure and rhythm that keeps learning and progress moving forward.
            </p>

            <p className="text-lg leading-relaxed">
              HIIIT closes that gap. It provides a repeatable cycle of insight, reflection, and 
              action that helps teams align, learn, and adjust as conditions change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
