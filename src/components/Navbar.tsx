import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-mono text-lg font-medium tracking-tight text-foreground">
          <span className="gradient-text">outbound</span>
          <span className="text-muted-foreground">.infra</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#cta" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium">
            Book a call
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-4 py-4 flex flex-col gap-3 text-sm text-muted-foreground">
          <a href="#problem" onClick={() => setOpen(false)} className="hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" onClick={() => setOpen(false)} className="hover:text-foreground transition-colors">Solution</a>
          <a href="#process" onClick={() => setOpen(false)} className="hover:text-foreground transition-colors">Process</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20">Book a call</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
