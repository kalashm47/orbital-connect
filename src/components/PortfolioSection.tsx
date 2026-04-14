import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "DeFi Protocol Launch",
    desc: "Built a full outbound pipeline targeting L1/L2 ecosystem partners, generating 40+ qualified meetings in 60 days.",
    tags: ["Web3", "DeFi", "Outbound"],
  },
  {
    title: "NFT Marketplace Growth",
    desc: "Scaled creator acquisition through automated outreach and qualification, onboarding 200+ verified artists.",
    tags: ["NFT", "Automation", "Growth"],
  },
  {
    title: "DAO Tooling Partnerships",
    desc: "Identified and engaged governance tooling partners across 15 DAOs using on-chain data enrichment.",
    tags: ["DAO", "AI", "Data"],
  },
  {
    title: "Infrastructure Provider GTM",
    desc: "Designed and executed multi-channel outbound for an RPC provider, resulting in 3x pipeline growth.",
    tags: ["Infra", "Web3", "B2B"],
  },
];

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-32 px-4">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="section-fade container mx-auto max-w-5xl">
        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-4">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Projects we've <span className="gradient-text">shipped</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="glass-card-hover p-6 gradient-border flex flex-col">
              <h3 className="text-foreground font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-border/50 text-muted-foreground bg-muted/30">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="self-start text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                View project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
