import { Github, Twitter, Mail, Linkedin } from "lucide-react";
import SentraLogo from "./SentraLogo";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SentraLogo size={40} />
              <span className="font-bold text-xl text-foreground">Sentra</span>
            </div>
            <p className="text-foreground/70 text-sm max-w-sm" style={{ marginTop: "-3px" }}>
              AI-powered wallet security for the next generation of Web3 users.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/70 text-sm mx-auto">
              © 2025 Sentra Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
