"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide as soon as user scrolls down more than 20px (when Projects starts to appear)
      setIsVisible(window.scrollY < 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-20 pb-10"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary dark:text-primary-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for New Opportunities
          </span>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Shaldon Nonga
        </motion.h1>

        {/* Hero Sub-heading / Focus */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl font-semibold sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Computer Science • Cybersecurity • AI & Software Engineering
        </motion.p>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          I build secure web applications, explore offensive security and SOC operations, and leverage artificial intelligence to architect resilient, real-world software solutions.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground transition-colors duration-200 hover:text-primary"
          >
            Let's Connect <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Disappears as soon as user begins scrolling */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
          >
            <a
              href="#projects"
              className="group flex flex-col items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <span>Scroll to Projects</span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}