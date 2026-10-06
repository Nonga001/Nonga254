"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoEntrance } from "./LogoEntrance";

export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [isDecodingFinished, setIsDecodingFinished] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check session storage so intro only plays once per session
    const hasSeenIntro = sessionStorage.getItem("nonga254_intro_seen");
    if (!hasSeenIntro) {
      setShowSplash(true);
      // Prevent background scrolling while splash is active
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleComplete = () => {
    setIsDecodingFinished(true);
    // Allow decoding completion + glitch finish to display briefly (~250ms)
    setTimeout(() => {
      sessionStorage.setItem("nonga254_intro_seen", "true");
      setShowSplash(false);
      document.body.style.overflow = "";
    }, 250);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          {/* Glowing central aura */}
          <div className="absolute h-[300px] w-[500px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

          {/* Logo Entrance Scramble */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 text-center"
          >
            <LogoEntrance
              className="text-6xl sm:text-7xl md:text-8xl font-black"
              onComplete={handleComplete}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isDecodingFinished ? 0 : 0.6 }}
              className="mt-4 text-xs tracking-[0.25em] font-mono text-slate-400 uppercase"
            >
              Initializing System
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
