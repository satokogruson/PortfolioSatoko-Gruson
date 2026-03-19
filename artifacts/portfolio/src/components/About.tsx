import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-6 uppercase tracking-wider text-sm">
              <span className="w-8 h-[1px] bg-primary"></span>
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              Bridging cultures through <br className="hidden md:block"/>
              <span className="italic text-primary">design and technology.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-balance">
              <p>
                As a Web Product Manager, UI/UX Designer, and Frontend Developer based in Tokyo, 
                I wear many hats to ensure digital products are not just built, but crafted with purpose.
              </p>
              <p>
                My multi-cultural background combined with a master's degree in Translation & Localization 
                Management gives me a unique perspective on user experience. I don't just build interfaces; 
                I translate business goals into intuitive experiences that resonate globally, helping brands 
                broaden their target audience effortlessly.
              </p>
              <p>
                Whether it's designing a clean user flow in Figma, coding responsive components in React, 
                or managing a product's lifecycle, I thrive at the intersection of creativity and logic.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border/50 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl text-foreground mb-2">3+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-foreground mb-2">10+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block -mr-12 -my-24"
          >
            {/* Left edge fade so photo blends into the section */}
            <div
              className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, hsl(var(--secondary) / 0.3), transparent)" }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, hsl(var(--secondary) / 0.3), transparent)" }}
            />
            <img
              src={`${import.meta.env.BASE_URL}images/profile-original.png`}
              alt="Satoko Gruson"
              className="w-full h-full object-cover object-top rounded-l-[3rem]"
              style={{ filter: "sepia(0.3) saturate(1.1) hue-rotate(318deg) brightness(1.02)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
