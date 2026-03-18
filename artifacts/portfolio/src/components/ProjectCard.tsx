import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/50 flex items-center justify-center">
            <span className="font-serif text-2xl text-primary/40 italic">{project.title}</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
           <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={24} />
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            {project.category}
          </span>
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-balance line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-auto pt-6 flex items-center gap-4 border-t border-border/50">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
