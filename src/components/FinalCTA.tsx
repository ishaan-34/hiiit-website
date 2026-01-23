import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-surface-subtle">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-foreground mb-4">
            Elevate your organizational rhythm.
          </h2>

          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-8">
            Transform complex insights into valuable strategic assets.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="lg">
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
