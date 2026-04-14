import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  { value: "47", label: "Qualified meetings", suffix: "" },
  { value: "3.2", label: "Pipeline multiplier", suffix: "x" },
  { value: "18", label: "Avg. days to first meeting", suffix: "d" },
  { value: "62", label: "Reply rate", suffix: "%" },
];

const CaseStudySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="case-study" className="relative py-32 px-4">
      <div ref={ref} className="section-fade container mx-auto max-w-5xl">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Case study</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Web3 outbound <span className="gradient-text">system</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Full outbound infrastructure deployed for a Series A Web3 protocol — from zero pipeline to predictable deal flow in 60 days.
        </p>

        <div className="glass-card p-8 sm:p-12 gradient-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  {m.value}
                  <span className="text-xl">{m.suffix}</span>
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
