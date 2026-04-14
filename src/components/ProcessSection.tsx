import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Identify targets", desc: "Define ICP and build precision-targeted prospect lists." },
  { num: "02", title: "Build campaigns", desc: "Craft multi-channel outbound sequences tailored to Web3." },
  { num: "03", title: "Launch & iterate", desc: "Deploy campaigns, monitor signals, and optimize in real-time." },
  { num: "04", title: "Generate meetings", desc: "Convert qualified prospects into booked calls and partnerships." },
];

const ProcessSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="relative py-32 px-4">
      <div ref={ref} className="section-fade container mx-auto max-w-4xl">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">How it works</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Four steps to a <span className="gradient-text">predictable pipeline</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 bg-muted/50 flex items-center justify-center text-xs font-mono text-primary neon-glow">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-foreground font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
