const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <span className="font-mono">
        <span className="gradient-text">outbound</span>.infra
      </span>
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
