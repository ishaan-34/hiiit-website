import { User } from "lucide-react";
import leadersImage from "@/assets/persona-leaders.png";
import hrImage from "@/assets/persona-hr.png";
import teamsImage from "@/assets/persona-teams.png";
import consultantsImage from "@/assets/persona-consultants.png";

interface Persona {
  id: string;
  title: string;
  quote: string;
  image?: string;
}

const personas: Persona[] = [
  {
    id: "leaders",
    title: "Leaders",
    quote: "Finally, a way to see where we actually stand.",
    image: leadersImage,
  },
  {
    id: "hr",
    title: "People & Culture",
    quote: "It connects our people strategy to daily reality.",
    image: hrImage,
  },
  {
    id: "teams",
    title: "Teams",
    quote: "We know what to focus on next.",
    image: teamsImage,
  },
  {
    id: "consultants",
    title: "Consultants",
    quote: "My work has impact that lasts beyond the engagement.",
    image: consultantsImage,
  },
];

interface PersonaGridProps {
  variant: "compact" | "expanded";
}

const PersonaGrid = ({ variant }: PersonaGridProps) => {
  if (variant === "compact") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-muted/50 border border-border-subtle overflow-hidden">
          <img src={consultantsImage} alt="Consultant" className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-8">
      {personas.map((persona) => (
        <div key={persona.id} className="flex flex-col items-center text-center">
          {/* Image container */}
          <div className="w-20 h-20 rounded-full bg-muted/30 border border-border-subtle flex items-center justify-center mb-4 overflow-hidden">
            {persona.image ? (
              <img src={persona.image} alt={persona.title} className="w-full h-full object-cover" />
            ) : (
              <User className="w-8 h-8 text-muted-foreground/60" />
            )}
          </div>
          
          {/* Title */}
          <h4 className="text-sm font-medium text-foreground mb-3">
            {persona.title}
          </h4>
          
          {/* Quote - outside image, bigger */}
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "{persona.quote}"
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonaGrid;
