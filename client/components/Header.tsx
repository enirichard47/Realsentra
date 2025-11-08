import { Link } from "react-router-dom";
import SentraLogo from "./SentraLogo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="transform group-hover:scale-105 transition-transform">
            <SentraLogo size={40} />
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Sentra</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>

        <a
          href="#waitlist"
          className="px-6 py-2 rounded-lg bg-gradient-cyan text-primary-foreground font-semibold hover:shadow-glow transition-shadow"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
