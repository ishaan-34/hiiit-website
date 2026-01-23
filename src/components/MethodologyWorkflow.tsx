import { Stars, SearchCheck, Users, Zap, RotateCcw } from "lucide-react";

interface WorkflowStep {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "assess",
    icon: <Stars className="w-6 h-6" />,
    label: "Assess",
  },
  {
    id: "analyze",
    icon: <SearchCheck className="w-6 h-6" />,
    label: "Analyze",
  },
  {
    id: "together",
    icon: <Users className="w-6 h-6" />,
    label: "Bring your teams together",
  },
  {
    id: "change",
    icon: <Zap className="w-6 h-6" />,
    label: "Make change",
  },
];

interface MethodologyWorkflowProps {
  variant: "compact" | "expanded";
}

const MethodologyWorkflow = ({ variant }: MethodologyWorkflowProps) => {
  if (variant === "compact") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-muted/50 border border-border-subtle flex items-center justify-center">
          <RotateCcw className="w-6 h-6 text-muted-foreground/70" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Circular Workflow with Loop */}
      <div className="relative flex flex-col items-center">
        {/* Main workflow row */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all
                    ${index === 0 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'bg-background border-border-subtle text-primary hover:border-primary/50'
                    }`}
                >
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium text-center max-w-[80px] md:max-w-[100px]">
                  {step.label}
                </span>
              </div>
              {/* Arrow between steps */}
              {index < workflowSteps.length - 1 && (
                <div className="mx-2 md:mx-4 text-border-subtle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop back arrow */}
        <div className="flex items-center justify-center gap-3 text-primary">
          <RotateCcw className="w-5 h-5" />
          <span className="text-sm font-medium">Start your next cycle</span>
        </div>

        {/* Curved loop line */}
        <svg 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-16 pointer-events-none"
          viewBox="0 0 400 60"
          fill="none"
        >
          <path 
            d="M 350 10 Q 380 10 380 30 Q 380 50 350 50 L 50 50 Q 20 50 20 30 Q 20 10 50 10"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            fill="none"
          />
        </svg>
      </div>

      {/* Description Text - Now part of the component but hidden, will be shown via parent */}
    </div>
  );
};

export default MethodologyWorkflow;
