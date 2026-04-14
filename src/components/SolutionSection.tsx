import { useScrollReveal } from "@/hooks/useScrollReveal";

const solutions = [
  { icon: "🎯", title: "Lead Sourcing", desc: "Precision-targeted lists built from on-chain and off-chain data signals." },
  { icon: "🔍", title: "Qualification", desc: "Multi-layer filtering to ensure every lead matches your ICP." },
  { icon: "📡", title: "Outbound Campaigns", desc: "Automated multi-channel sequences optimized for Web3 decision-makers." },
  { icon: "🔄", title: "Iteration", desc: "Continuous A/B testing, data-driven refinements, compounding results." },
];

const SolutionSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="solution" className="relative py-32 px-4">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-neon-blue/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="section-fade container mx-auto max-w-5xl">
        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">The solution</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 max-w-2xl">
          A systematic approach to <span className="gradient-text">outbound growth</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="glass-card-hover p-6 text-center">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-foreground font-semibold mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
