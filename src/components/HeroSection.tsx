import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-foreground mb-6 animate-fade-in">Organizational fitness through shared insight</h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            HIIIT helps teams build clarity, rhythm, and forward movement — not through one-off transformation projects,
            but through steady cycles of assessment, analysis, and meaningful action.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="lg">
              Request a Demo
            </Button>
            <Button variant="hero-secondary" size="lg">
              Explore the Approach
            </Button>
          </div>

          {/* Video Placeholder */}
          <div
            className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-surface-subtle border border-border shadow-lg animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play Button */}
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center group mb-4">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1" />
              </button>
              <p className="text-sm text-muted-foreground max-w-md px-4 text-center">
                Video Demonstrates E-E-A-T — See how the HIIIT methodology works in practice.
              </p>
            </div>

            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
