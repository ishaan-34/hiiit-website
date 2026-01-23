import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import MethodologySection from "@/components/MethodologySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <HowItWorks />
        <WhoItsFor />
        <MethodologySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
