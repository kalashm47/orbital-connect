import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section id="cta" className="relative py-32 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="section-fade container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Build your outbound <span className="gradient-text">pipeline</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Stop waiting for inbound. Start generating predictable deal flow with infrastructure built for Web3.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-medium neon-glow hover:opacity-90 transition-all"
        >
          Book a call
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
