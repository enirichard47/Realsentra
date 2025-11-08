import {
  Shield,
  AlertCircle,
  GitBranch,
  Lock,
  ArrowRight,
  Twitter,
  MessageCircle,
  Send,
  Linkedin,
} from "lucide-react";
import Layout from "@/components/Layout";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";

export default function Home() {

  return (
    <Layout>
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full border border-accent/50 bg-accent/10 text-accent text-sm font-medium animate-fade-in">
              🚀 AI-Powered Security
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            The Wallet That Thinks
            <span className="block bg-gradient-cyan bg-clip-text text-transparent">
              Before You Click
            </span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed">
            Sentra's AI scans every transaction in real time, preventing scams
            and malicious contracts before they happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <a
              href="#waitlist"
              className="px-8 py-4 rounded-lg bg-gradient-cyan text-primary-foreground font-semibold hover:shadow-glow transition-shadow flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-accent/10 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="animate-slide-up">
            <p className="text-sm text-foreground/60 mb-3">
              Supported Networks
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-foreground/70 font-medium">
              <span>Ethereum</span>
              <span className="text-border">·</span>
              <span>Solana</span>
              <span className="text-border">·</span>
              <span>BNB</span>
              <span className="text-border">·</span>
              <span>Polygon</span>
              <span className="text-border">·</span>
              <span>Arbitrum</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-foreground/70 text-lg">
              Everything you need for secure, intelligent crypto transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-glass transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI Scam Detection
              </h3>
              <p className="text-foreground/70">
                Every transaction is analyzed by AI to flag suspicious or
                malicious contracts instantly.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-glass transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertCircle className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Transaction Risk Rating
              </h3>
              <p className="text-foreground/70">
                See clear risk scores before you approve — transparency for
                every click.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-glass transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Cross-Chain Compatibility
              </h3>
              <p className="text-foreground/70">
                Manage tokens across multiple blockchains from one secure
                interface.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 hover:shadow-glass transition-all group">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Private Key Security
              </h3>
              <p className="text-foreground/70">
                Your keys never leave your device — encrypted locally, always in
                your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-foreground/70 text-lg">
              Three simple steps to secure Web3 transactions
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  1
                </div>
                <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent hidden md:block" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Connect Your Wallet
                </h3>
                <p className="text-foreground/70">
                  Connect your wallet securely or import with encrypted local
                  backup. Your keys remain fully in your control.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                  2
                </div>
                <div className="w-1 h-20 bg-gradient-to-b from-accent to-transparent hidden md:block" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  AI Analyzes in Real Time
                </h3>
                <p className="text-foreground/70">
                  Sentra AI scans the transaction for risk patterns, evaluating
                  contract code, permissions, and historical threat data.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-cyan flex items-center justify-center text-primary-foreground font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Review & Approve with Confidence
                </h3>
                <p className="text-foreground/70">
                  You receive a clear risk report — approve safe transactions or
                  block suspicious ones instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get Early Access to Sentra Wallet
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Testing phase begins soon — be among the first to experience
              AI-powered wallet protection.
            </p>

            <div className="flex justify-center mb-8">
              <WaitlistForm />
            </div>

            <p className="text-sm text-foreground/60">
              Early testers will receive beta access and exclusive security
              insights.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Follow Sentra
          </h2>

          <p className="text-foreground/70 text-lg mb-8">
            Stay connected as we redefine safety and intelligence in Web3.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-accent/50 hover:bg-card/50 transition-colors group"
            >
              <Twitter size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <p className="text-foreground">@SentraWallet</p>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-accent/50 hover:bg-card/50 transition-colors group"
            >
              <MessageCircle size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground">Discord</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-accent/50 hover:bg-card/50 transition-colors group"
            >
              <Send size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground">Telegram</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-accent/50 hover:bg-card/50 transition-colors group"
            >
              <Linkedin size={20} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-foreground">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
