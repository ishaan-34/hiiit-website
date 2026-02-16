import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonaGrid from "@/components/PersonaGrid";
import MethodologyWorkflow from "@/components/MethodologyWorkflow";
import { HelpCircle, Workflow, Users, BookOpen, Play, X } from "lucide-react";
import PricingCard from "@/components/pricing/PricingCard";
import InteractivePricingCalculator from "@/components/pricing/InteractivePricingCalculator";
import { pricingPlans } from "@/components/pricing/data/pricingData";

interface Satellite {
  id: string;
  icon: React.ReactNode;
  title: string;
  teaser: string;
  expandedTeaser: string;
  visualType: "image" | "video" | "methodology";
  visualPlaceholder: string;
  modalTitle: string;
  modalContent: React.ReactNode;
}

const satellites: Satellite[] = [
  {
    id: "why",
    icon: <HelpCircle className="w-5 h-5" />,
    title: "Why HIIIT",
    teaser: "The gap between external momentum and lasting change",
    expandedTeaser: "Organizations invest in transformation, but momentum fades when external support leaves. HIIIT bridges this gap with sustainable internal rhythms.",
    visualType: "video",
    visualPlaceholder: "Video explaining why HIIIT exists",
    modalTitle: "Why HIIIT exists",
    modalContent: (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Many organizations rely on external initiatives to create momentum — frameworks,
          programs, or expert-led transformations that generate activity while they are present.
          But when that presence disappears, the energy often fades with it.
        </p>
        <p>
          Internal roles now exist that once belonged to consultants, yet what's often missing
          is a shared structure and rhythm that keeps learning and progress moving forward.
        </p>
        <p>
          HIIIT closes that gap. It provides a repeatable cycle of insight, reflection, and
          action that helps teams align, learn, and adjust as conditions change.
        </p>
      </div>
    ),
  },
  {
    id: "how",
    icon: <Workflow className="w-5 h-5" />,
    title: "How It Works",
    teaser: "A repeatable cycle from insight to action — leading to visible results.",
    expandedTeaser: "A structured cycle: define focus areas, capture insights, analyze patterns, facilitate reflection, identify actions, track progress, and repeat.",
    visualType: "video",
    visualPlaceholder: "Product walkthrough video",
    modalTitle: "How HIIIT works",
    modalContent: (
      <div className="space-y-4 text-muted-foreground">
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="text-primary font-medium">01</span>
            <span>Define focus areas aligned to strategic priorities</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">02</span>
            <span>Capture team insights through structured pulse surveys</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">03</span>
            <span>Analyze patterns and surface key themes</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">04</span>
            <span>Facilitate reflection sessions with teams</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">05</span>
            <span>Identify concrete actions and owners</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">06</span>
            <span>Track progress and adjust as needed</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-medium">07</span>
            <span>Repeat the cycle — building organizational rhythm</span>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: "who",
    icon: <Users className="w-5 h-5" />,
    title: "Who It's For",
    teaser: "Leaders, teams, and consultants driving change",
    expandedTeaser: "Designed for leaders seeking clarity, teams navigating complexity, and consultants wanting lasting impact beyond their engagement.",
    visualType: "image",
    visualPlaceholder: "Collaborative team working together",
    modalTitle: "",
    modalContent: null,
  },
  {
    id: "methodology",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Methodology",
    teaser: "A structured approach to organizational fitness",
    expandedTeaser: "High-Intensity Interval Insight Training: short, focused bursts of effort followed by reflection — creating compounding organizational capability.",
    visualType: "methodology",
    visualPlaceholder: "Diagram of the HIIIT methodology cycle",
    modalTitle: "The HIIIT Methodology",
    modalContent: null,
  },
];

const OrbitPrototype = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const calculatorRef = useRef<HTMLDivElement>(null);
  const [configuredPlan, setConfiguredPlan] = useState(pricingPlans[0]);

  const handleConfigurePlan = (planId: string) => {
    const plan = pricingPlans.find(p => p.id === planId);
    if (!plan) return;
    setConfiguredPlan(plan);
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignIn = () => {
    console.log("Navigate to sign in");
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeCard) {
        setActiveCard(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeCard]);

  // Close on click outside the panel
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!activeCard) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // Check if click was on a card
        const target = e.target as HTMLElement;
        if (!target.closest('[data-card]')) {
          setActiveCard(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeCard]);

  const handleCardClick = (id: string) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  // Get the selected satellite (active takes priority over hovered)
  const selectedId = activeCard || hoveredCard;
  const selectedSatellite = satellites.find(s => s.id === selectedId);
  const isActive = activeCard === selectedId;

  const handleNavClick = (sectionId: string) => {
    // Handle pricing separately
    if (sectionId === 'pricing') {
      const pricingSection = document.getElementById('pricing');
      pricingSection?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // For satellite sections, expand the card and scroll to it
    const satellite = satellites.find(s => s.id === sectionId);
    if (satellite) {
      setActiveCard(sectionId);
      // Scroll to the cards section
      setTimeout(() => {
        const cardsSection = document.getElementById('cards-section');
        cardsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onNavClick={handleNavClick} />

      <main className="flex-1 flex flex-col items-center justify-center section-padding">
        {/* Central Hub */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-foreground mb-6 animate-fade-in">
            Organizational fitness through shared insight
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            HIIIT helps teams build clarity, rhythm, and forward movement — not through one-off transformation projects,
            but through steady cycles of assessment, analysis, and meaningful action.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="lg">
              Talk to us
            </Button>
            <Button variant="hero-secondary" size="lg">
              Try it out
            </Button>
          </div>
        </div>

        {/* Connecting Structure */}
        <div className="w-full max-w-5xl mx-auto relative">
          {/* Vertical connector from hub */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-border-subtle" />

          {/* Horizontal line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-border-subtle" />

          {/* Satellite Cards - Always visible */}
          <div
            id="cards-section"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 scroll-mt-20"
            style={{ animationDelay: "0.2s" }}
          >
            {satellites.map((satellite, index) => {
              const isHovered = hoveredCard === satellite.id;
              const isCardActive = activeCard === satellite.id;
              const isSelected = isCardActive || isHovered;

              return (
                <div
                  key={satellite.id}
                  className="relative"
                  data-card
                >
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-8 w-px h-8 bg-border-subtle" />
                  <div
                    onClick={() => handleCardClick(satellite.id)}
                    onMouseEnter={() => !activeCard && setHoveredCard(satellite.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`
                      w-full h-full rounded-lg bg-card border text-left 
                      transition-all duration-300 ease-out animate-fade-in
                      overflow-hidden cursor-pointer flex flex-col
                      ${isCardActive
                        ? 'border-primary shadow-lg ring-2 ring-primary/20'
                        : isHovered
                          ? 'border-primary/50 shadow-md -translate-y-1'
                          : 'border-border-subtle shadow-sm hover:shadow-card hover:border-border'
                      }
                    `}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Visual Placeholder */}
                    <div className="relative bg-surface-subtle overflow-hidden h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                                           radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`,
                        }}
                      />

                      {satellite.visualType === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`
                              w-12 h-12 rounded-full flex items-center justify-center
                              border shadow-sm transition-all duration-300
                              ${isSelected
                                ? 'bg-primary border-primary'
                                : 'bg-background/90 border-border-subtle'
                              }
                            `}
                          >
                            <Play className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                          </div>
                        </div>
                      )}

                      {satellite.visualType === "image" && satellite.id === "who" && (
                        <PersonaGrid variant="compact" />
                      )}

                      {satellite.visualType === "methodology" && (
                        <MethodologyWorkflow variant="compact" />
                      )}

                      {satellite.visualType === "image" && satellite.id !== "who" && !isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground/50 px-4 text-center">
                            {satellite.visualPlaceholder}
                          </span>
                        </div>
                      )}

                      {/* Selected indicator overlay */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-medium text-foreground mb-2">
                        {satellite.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {satellite.teaser}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Content Panel - Below cards */}
          {selectedSatellite && (
            <div
              ref={panelRef}
              className="mt-8 rounded-lg bg-card border border-border-subtle shadow-lg overflow-hidden animate-fade-in relative"
            >
              {/* Close Button - only when active */}
              {isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                  className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-background/80 border border-border-subtle hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}

              <div className={`flex flex-col ${selectedSatellite.id !== "who" && selectedSatellite.id !== "methodology" ? "md:flex-row" : ""}`}>
                {/* Visual Placeholder - Left side (or full width for personas/methodology) */}
                {selectedSatellite.id === "who" ? (
                  <div className="w-full">
                    <div className="bg-surface-subtle">
                      <PersonaGrid variant="expanded" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Who It's For
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-3xl">
                        {selectedSatellite.expandedTeaser}
                      </p>
                    </div>
                  </div>
                ) : selectedSatellite.id === "methodology" ? (
                  <div className="w-full">
                    <div className="bg-surface-subtle">
                      <MethodologyWorkflow variant="expanded" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        {selectedSatellite.modalTitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-3xl">
                        {selectedSatellite.expandedTeaser}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={`relative bg-surface-subtle overflow-hidden h-48 md:h-auto md:w-1/3 ${isActive ? 'md:min-h-[280px]' : 'md:min-h-[180px]'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`,
                      }}
                    />

                    {selectedSatellite.visualType === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border border-primary shadow-lg">
                          <Play className="w-7 h-7 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Content - Right side (or below for personas/methodology) */}
                <div className={`p-6 ${selectedSatellite.id !== "who" && selectedSatellite.id !== "methodology" ? "md:w-2/3" : "w-full"} ${isActive ? 'md:p-8' : 'md:p-6'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">
                      {selectedSatellite.icon}
                    </div>
                    <h3 className={`font-medium text-foreground ${isActive ? 'text-xl' : 'text-lg'}`}>
                      {isActive ? selectedSatellite.modalTitle : selectedSatellite.title}
                    </h3>
                  </div>

                  {isActive ? (
                    <>
                      <div className="text-muted-foreground">
                        {selectedSatellite.modalContent}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border-subtle">
                        <span className="text-xs text-muted-foreground">
                          Click anywhere outside or press Esc to close
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedSatellite.expandedTeaser}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border-subtle">
                        <span className="text-xs text-primary font-medium">
                          Click the card to explore full details →
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Plans & Pricing Section */}
      <section id="pricing">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get started
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your organization's needs
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-col md:flex-row max-w-5xl mx-auto">
            <PricingCard
              plan={pricingPlans[0]}
              onSelectPlan={handleSignIn}
              onConfigurePlan={() => handleConfigurePlan('corePlan')}
              addOnInfo={{
                teams: {
                  price: 90,
                  includes: "Includes 5 members per team",
                  features: ["Compare teams"]
                },
                members: {
                  price: 5,
                  description: "5/monthly per member"
                }
              }}
            />

            <PricingCard
              plan={pricingPlans[1]}
              onSelectPlan={handleSignIn}
              onConfigurePlan={() => handleConfigurePlan('fitnessCheck')}
              addOnInfo={{
                teams: {
                  price: 50,
                  includes: "Add teams to compare and customize recommendations 50 USD/team"
                },
                members: {
                  price: 5,
                  description: "Add respondants as needed. 5 USD/person"
                }
              }}
            />
          </div>
        </div>
      </section>
      <div ref={calculatorRef} className="w-full">
        <InteractivePricingCalculator configuredPlan={configuredPlan} />
      </div>


      <section className="py-20 w-full bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Building Organizational Fitness?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join organizations that have transformed their effectiveness through regular practice.
            Get visible results from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-input bg-background hover:bg-muted text-foreground"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrbitPrototype;
