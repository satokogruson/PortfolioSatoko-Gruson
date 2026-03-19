import { useState, useEffect } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const SESSION_KEY = "portfolio_experience_unlocked_v2";
const CORRECT_PASSWORD = "portfolio2025";

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
    <div className="py-24 md:py-32 flex flex-col items-center justify-center">
      <div
        className={`max-w-md w-full mx-auto px-6 text-center transition-transform ${shake ? "animate-shake" : ""}`}
        style={shake ? { animation: "shake 0.5s ease" } : {}}
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Lock size={24} className="text-primary" />
        </div>
        <h3 className="text-2xl font-serif text-foreground mb-2">Protected Content</h3>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
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
              autoFocus
              className={`w-full px-5 py-3.5 pr-12 rounded-full border text-sm bg-background text-foreground outline-none transition-all duration-200 ${
                error
                  ? "border-destructive ring-2 ring-destructive/20"
                  : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
            className="px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
        .animate-shake {
          animation: shake 0.5s ease;
        }
      `}</style>
    </div>
  );
}
