import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "📉", title: "Inconsistent growth", desc: "Revenue spikes and crashes with no repeatable system driving pipeline." },
  { icon: "⏳", title: "Over-reliance on inbound", desc: "Waiting for leads to come to you is not a strategy — it's a gamble." },
  { icon: "🔀", title: "No predictable acquisition", desc: "Without outbound infrastructure, scaling becomes impossible." },
  { icon: "🧩", title: "Fragmented tooling", desc: "Disconnected tools and manual processes create leaky pipelines." },
];

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="problem" className="relative py-32 px-4">
      <div ref={ref} className="section-fade container mx-auto max-w-5xl">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">The problem</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 max-w-2xl">
          Most Web3 teams don't have an <span className="gradient-text">outbound system</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="glass-card p-6 gradient-border group">
              <span className="text-2xl mb-4 block">{p.icon}</span>
              <h3 className="text-foreground font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
