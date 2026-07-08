"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-background px-6 py-24 sm:py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary dark:text-primary-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Crafting Next-Gen{" "}
          <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            Web Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
        >
          I design and build interactive, high-performance web applications with a focus on modern aesthetics, solid engineering, and seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-250 hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-200"
          >
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
