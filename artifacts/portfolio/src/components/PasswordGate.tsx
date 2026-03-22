import { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const SESSION_KEY = "portfolio_experience_unlocked_v2";
const CORRECT_PASSWORD = "DesignSG1210";

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 600);
    }
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "hsl(210 30% 95%)" }}
    >
      {/* Subtle colour orbs to give the glass something to refract */}
      <div className="absolute pointer-events-none" style={{
        width: 500, height: 500, top: "-80px", left: "-100px",
        background: "radial-gradient(circle, hsl(350 60% 88% / 0.45) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 400, height: 400, bottom: "-60px", right: "-80px",
        background: "radial-gradient(circle, hsl(210 50% 82% / 0.4) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />

      {/* Glass card */}
      <div
        className={`relative z-10 max-w-md w-full mx-auto px-8 py-10 text-center rounded-3xl ${shake ? "animate-shake" : ""}`}
        style={{
          background: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 8px 40px rgba(160,170,200,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          <Lock size={20} className="text-foreground/60" />
        </div>

        <h3 className="text-2xl font-serif text-foreground mb-2">Protected Content</h3>
        <p className="text-foreground/60 text-sm mb-7 leading-relaxed">
          This section contains confidential case study work.<br />
          Enter the password to view it.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Enter password"
              className={`w-full px-5 py-3.5 pr-12 rounded-full text-sm text-foreground outline-none transition-all duration-200 ${
                error
                  ? "ring-2 ring-destructive/40"
                  : "focus:ring-2 focus:ring-white/70"
              }`}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.8)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-destructive text-xs -mt-2">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            style={{ background: "rgba(30,20,25,0.82)", color: "#fff" }}
          >
            Unlock
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-8px); }
          30% { transform: translateX(8px); }
          45% { transform: translateX(-6px); }
          60% { transform: translateX(6px); }
          75% { transform: translateX(-4px); }
          90% { transform: translateX(4px); }
        }
        .animate-shake { animation: shake 0.5s ease; }
      `}</style>
    </div>
  );
}
