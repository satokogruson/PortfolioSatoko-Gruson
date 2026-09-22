import { NavigationJa } from "@/components/ja/NavigationJa";
import { HeroJa } from "@/components/ja/HeroJa";
import { ProjectsJa } from "@/components/ja/ProjectsJa";
import { AboutJa } from "@/components/ja/AboutJa";
import { ExperienceJa } from "@/components/ja/ExperienceJa";
import { PasswordGateJa } from "@/components/ja/PasswordGateJa";
import { FooterJa } from "@/components/ja/FooterJa";
import { useEffect } from "react";

export default function JapanesePortfolio() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Satoko Gruson | Digital Product Manager";
    
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div
      lang="ja"
      className="japanese-typography min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-foreground"
    >
      <NavigationJa />
      
      <main>
        <HeroJa />
        <section id="experience">
          <PasswordGateJa>
            <ExperienceJa />
          </PasswordGateJa>
        </section>
        <ProjectsJa />
        <AboutJa />
      </main>

      <FooterJa />
    </div>
  );
}
