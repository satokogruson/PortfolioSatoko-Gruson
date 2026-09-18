import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsDataJa, ProjectCategory } from "@/data/projectsJa";
import { ProjectCardJa } from "./ProjectCardJa";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = ["UI/UX", "Frontend"];

export function ProjectsJa() {
  const [activeTab, setActiveTab] = useState<ProjectCategory | "All">("All");

  const filteredProjects = activeTab === "All" 
    ? projectsDataJa 
    : projectsDataJa.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            プロジェクト
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            UI/UXデザインからフロントエンド開発まで、最近のプロジェクトを集めました。
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          <button
            onClick={() => setActiveTab("All")}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === "All" 
                ? "bg-foreground text-background shadow-md" 
                : "bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground"
            )}
          >
            すべてのプロジェクト
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === category 
                  ? "bg-foreground text-background shadow-md" 
                  : "bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCardJa project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
