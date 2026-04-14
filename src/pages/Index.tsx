import ParticleNetwork from "@/components/ParticleNetwork";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <ParticleNetwork />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <PortfolioSection />
      <CaseStudySection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
