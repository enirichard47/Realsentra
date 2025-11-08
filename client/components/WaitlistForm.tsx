import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Failed to join waitlist");
      }

      setSubmitted(true);
      setEmail("");

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8 px-4">
        <div className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
          <CheckCircle className="text-teal-500" size={28} />
          <span className="text-xl font-semibold text-foreground">
            You're in! 🎉
          </span>
        </div>
        <p className="text-center text-foreground/70">
          We'll notify you once testing begins. Early testers will receive beta access and exclusive security insights.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to join the waitlist."
          required
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading || !email}
        className="px-6 py-3 rounded-lg bg-gradient-cyan text-primary-foreground font-semibold hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-shadow"
      >
        {loading ? "Joining..." : "Join Now"}
      </button>

      <p className="text-xs text-foreground/60 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
