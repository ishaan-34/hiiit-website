/**
 * HIIIT Design System Documentation
 * 
 * This file documents the design system used throughout the HIIIT landing page.
 * All styles follow a modern, minimalistic, and elegant approach inspired by
 * Linear, Stripe, and Notion.
 */

// =============================================================================
// 1. COLOR PALETTE
// =============================================================================

export const colors = {
  // Primary Colors
  primary: {
    value: "hsl(234, 89%, 64%)",
    description: "Main brand color - refined deep slate blue",
    usage: "Primary buttons, links, accents",
  },
  primaryHover: {
    value: "hsl(234, 89%, 58%)",
    description: "Darker shade for hover states",
    usage: "Button hover states",
  },
  primaryForeground: {
    value: "hsl(0, 0%, 100%)",
    description: "Text on primary backgrounds",
    usage: "Button text, icons on primary",
  },

  // Neutral Colors
  background: {
    value: "hsl(0, 0%, 100%)",
    hex: "#FFFFFF",
    description: "Pure white background",
    usage: "Page backgrounds, cards",
  },
  surfaceSubtle: {
    value: "hsl(240, 5%, 96%)",
    hex: "#F5F5F7",
    description: "Light gray surface",
    usage: "Alternate section backgrounds, subtle containers",
  },
  surfaceMuted: {
    value: "hsl(240, 5%, 91%)",
    hex: "#E0E0E6",
    description: "Medium gray",
    usage: "Borders, dividers, disabled states",
  },
  foreground: {
    value: "hsl(240, 6%, 10%)",
    hex: "#18181A",
    description: "Near-black text",
    usage: "Headlines, primary text",
  },
  mutedForeground: {
    value: "hsl(240, 4%, 46%)",
    hex: "#6E6E73",
    description: "Gray text",
    usage: "Secondary text, descriptions",
  },

  // Border Colors
  border: {
    value: "hsl(240, 6%, 90%)",
    description: "Standard border color",
    usage: "Cards, inputs, dividers",
  },
  borderSubtle: {
    value: "hsl(240, 6%, 94%)",
    description: "Very subtle border",
    usage: "Light separators, subtle card borders",
  },
};

// =============================================================================
// 2. TYPOGRAPHY
// =============================================================================

export const typography = {
  fontFamily: {
    primary: "Inter, system-ui, -apple-system, sans-serif",
    description: "Clean, modern sans-serif font family",
  },

  // Heading Styles
  h1: {
    size: "text-4xl md:text-5xl lg:text-6xl",
    weight: "font-semibold",
    tracking: "tracking-tight",
    leading: "leading-tight",
    description: "Main page headlines - large, calm, weight 600",
  },
  h2: {
    size: "text-2xl md:text-3xl lg:text-4xl",
    weight: "font-medium",
    tracking: "tracking-tight",
    description: "Section headlines - weight 500",
  },
  h3: {
    size: "text-xl md:text-2xl",
    weight: "font-medium",
    description: "Subsection headlines - weight 500",
  },
  h4: {
    size: "text-lg",
    weight: "font-medium",
    description: "Card titles, smaller headings - weight 500",
  },

  // Body Styles
  body: {
    size: "text-base",
    weight: "font-normal",
    leading: "leading-relaxed",
    description: "Standard body text - weight 400",
  },
  bodyLarge: {
    size: "text-lg md:text-xl",
    weight: "font-normal",
    leading: "leading-relaxed",
    description: "Larger body text for emphasis",
  },
  small: {
    size: "text-sm",
    weight: "font-normal",
    description: "Small text, captions - weight 400",
  },

  // Guidelines
  guidelines: [
    "Avoid uppercase headings",
    "Avoid decorative fonts",
    "Use low-contrast color combinations for calm readability",
    "Maintain generous line-height for body text",
  ],
};

// =============================================================================
// 3. SPACING SCALE
// =============================================================================

export const spacing = {
  xs: {
    value: "4px",
    tailwind: "space-xs or 1",
    usage: "Tight spacing, icon gaps",
  },
  sm: {
    value: "8px",
    tailwind: "space-sm or 2",
    usage: "Small padding, compact spacing",
  },
  md: {
    value: "16px",
    tailwind: "space-md or 4",
    usage: "Standard padding, component spacing",
  },
  lg: {
    value: "24px",
    tailwind: "space-lg or 6",
    usage: "Card padding, section spacing",
  },
  xl: {
    value: "40px",
    tailwind: "space-xl or 10",
    usage: "Section padding, generous spacing",
  },
  "2xl": {
    value: "64px",
    tailwind: "space-2xl or 16",
    usage: "Large section padding, page sections",
  },
  "3xl": {
    value: "96px",
    tailwind: "space-3xl or 24",
    usage: "Maximum section padding, hero sections",
  },

  // Section Classes
  sectionPadding: {
    class: "section-padding",
    values: "py-16 md:py-24 lg:py-32",
    description: "Standard vertical section padding",
  },
  sectionPaddingSm: {
    class: "section-padding-sm",
    values: "py-12 md:py-16 lg:py-20",
    description: "Smaller vertical section padding",
  },
};

// =============================================================================
// 4. COMPONENT STYLES
// =============================================================================

export const components = {
  // Buttons
  buttons: {
    hero: {
      class: "variant='hero'",
      styles: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm px-6 py-3 text-base font-medium",
      usage: "Primary CTAs in hero sections",
    },
    heroSecondary: {
      class: "variant='hero-secondary'",
      styles: "bg-background text-foreground border border-border hover:bg-surface-subtle px-6 py-3 text-base font-medium",
      usage: "Secondary CTAs in hero sections",
    },
    default: {
      class: "variant='default'",
      styles: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
      usage: "Standard primary buttons",
    },
    secondary: {
      class: "variant='secondary'",
      styles: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
      usage: "Secondary actions",
    },
    ghost: {
      class: "variant='ghost'",
      styles: "hover:bg-accent hover:text-accent-foreground",
      usage: "Tertiary actions, navigation",
    },
  },

  // Cards
  cards: {
    elevated: {
      class: "card-elevated",
      styles: "bg-card rounded-lg border border-border-subtle shadow-card",
      usage: "Cards with subtle elevation",
    },
    flat: {
      class: "card-flat",
      styles: "bg-surface-subtle rounded-lg",
      usage: "Flat background cards",
    },
    interactive: {
      styles: "p-6 rounded-lg border border-border-subtle bg-card hover:border-border hover:shadow-card transition-all duration-200",
      usage: "Clickable/interactive cards with hover state",
    },
  },

  // Containers
  containers: {
    narrow: {
      class: "container-narrow",
      styles: "max-w-3xl mx-auto px-6",
      usage: "Narrow content sections, text-heavy areas",
    },
    wide: {
      class: "container-wide",
      styles: "max-w-6xl mx-auto px-6",
      usage: "Full-width sections, grids",
    },
  },
};

// =============================================================================
// 5. SHADOWS
// =============================================================================

export const shadows = {
  sm: {
    value: "0 1px 2px 0 hsl(240 6% 10% / 0.03)",
    usage: "Subtle shadow for buttons",
  },
  md: {
    value: "0 4px 6px -1px hsl(240 6% 10% / 0.05), 0 2px 4px -2px hsl(240 6% 10% / 0.03)",
    usage: "Medium elevation",
  },
  lg: {
    value: "0 10px 15px -3px hsl(240 6% 10% / 0.05), 0 4px 6px -4px hsl(240 6% 10% / 0.03)",
    usage: "Larger elevated elements",
  },
  card: {
    value: "0 1px 3px 0 hsl(240 6% 10% / 0.04), 0 1px 2px -1px hsl(240 6% 10% / 0.04)",
    usage: "Card hover states",
  },
};

// =============================================================================
// 6. BORDER RADIUS
// =============================================================================

export const borderRadius = {
  sm: {
    value: "calc(0.5rem - 4px)",
    tailwind: "rounded-sm",
    usage: "Small elements, badges",
  },
  default: {
    value: "0.5rem",
    tailwind: "rounded-md or rounded-lg",
    usage: "Standard cards, buttons",
  },
  lg: {
    value: "0.75rem",
    tailwind: "rounded-xl",
    usage: "Larger containers, hero elements",
  },
  guidelines: [
    "Soft but not pill-shaped corners",
    "Consistent radius across similar components",
    "No heavy borders - prefer subtle separation",
  ],
};

// =============================================================================
// 7. ANIMATION & TRANSITIONS
// =============================================================================

export const animations = {
  fadeIn: {
    keyframes: "from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); }",
    class: "animate-fade-in",
    duration: "0.5s",
    usage: "Page load animations, content reveal",
  },
  hoverLift: {
    class: "hover-lift",
    styles: "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md",
    usage: "Interactive cards on hover",
  },
  hoverSubtle: {
    class: "hover-subtle",
    styles: "transition-colors duration-150 ease-out",
    usage: "Color-only hover transitions",
  },
  guidelines: [
    "Keep animations subtle and purposeful",
    "Duration between 150-300ms for micro-interactions",
    "Use ease-out for natural feeling",
    "Avoid flashy or attention-grabbing animations",
  ],
};

// =============================================================================
// 8. PRODUCT VISUALIZATION GUIDELINES
// =============================================================================

export const productVisualization = {
  guidelines: [
    "Use simple, modern layouts",
    "Light-tone screenshots only",
    "Clean charts with minimal color",
    "Insight cards with short, scannable text",
    "Avoid large, complex dashboards",
    "No photographic imagery",
    "No dark mode unless user toggles",
    "No gradient overlays",
    "No stock photos or AI-concept art",
  ],
  tone: "Calm analytical tone, matching tools like Linear, Notion, or Stripe",
  backgrounds: "Always use light backgrounds with subtle shadows and thin dividers",
};

// =============================================================================
// 9. DESIGN PRINCIPLES
// =============================================================================

export const designPrinciples = [
  "Modern, minimalistic, elegant, high-trust, professional",
  "Generous spacing creates calm and structure",
  "Clean, low-contrast, readable typography",
  "Thoughtful, trustworthy, methodical tone",
  "No hype, no marketing language",
  "Consistent use of design tokens",
  "No gradients or splash graphics",
  "Subtle hierarchy through weight and size, not color",
];
