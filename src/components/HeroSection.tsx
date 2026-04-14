import { useEffect, useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Radial glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="section-fade relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 text-xs font-mono text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          Web3 outbound infrastructure
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-balance">
          Outbound infrastructure for{" "}
          <span className="gradient-text">Web3 companies</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          We build predictable pipelines for partnerships and growth
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm neon-glow hover:opacity-90 transition-all"
          >
            Book a call
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="#case-study"
            className="inline-flex items-center px-8 py-3.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all text-sm font-medium"
          >
            View case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
