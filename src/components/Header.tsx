import { Button } from "@/components/ui/button";

interface HeaderProps {
  onNavClick?: (sectionId: string) => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(sectionId);
    } else {
      // Fallback to scroll behavior
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">H</span>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">HIIIT</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#why" 
              onClick={(e) => handleNavClick(e, 'why')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Why HIIIT
            </a>
            <a 
              href="#how" 
              onClick={(e) => handleNavClick(e, 'how')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </a>
            <a 
              href="#who" 
              onClick={(e) => handleNavClick(e, 'who')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Who it's for
            </a>
            <a 
              href="#methodology" 
              onClick={(e) => handleNavClick(e, 'methodology')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Methodology
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing & Plans
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button size="sm">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
