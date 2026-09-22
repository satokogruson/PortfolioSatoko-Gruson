import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ホーム", href: "#top" },
  { name: "ケーススタディ", href: "#experience" },
  { name: "プロジェクト", href: "#projects" },
  { name: "プロフィール", href: "#about" },
];

export function NavigationJa() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchToEnglish = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign(`${import.meta.env.BASE_URL}${window.location.hash}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4 shadow-sm" : "py-6"
      )}
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.7)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#top" 
          className="flex items-center"
        >
          <img
            src="/images/sg-logo.png"
            alt="SG Logo"
            className="h-10 w-10 object-contain transition-all duration-300"
            style={{ filter: "sepia(1) saturate(2) hue-rotate(318deg) brightness(0.75)" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:fsjm1210@gmail.com"
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            お問い合わせ
          </a>
          <a
            href={`${import.meta.env.BASE_URL}`}
            onClick={switchToEnglish}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            data-testid="link-english-navigation"
          >
            English
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:fsjm1210@gmail.com"
              className="mt-4 px-6 py-3 rounded-full text-center font-medium bg-primary text-primary-foreground"
            >
              お問い合わせ
            </a>
            <a
              href={`${import.meta.env.BASE_URL}`}
              onClick={(event) => {
                setMobileMenuOpen(false);
                switchToEnglish(event);
              }}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-english-mobile-navigation"
            >
              English
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
