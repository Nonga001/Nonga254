"use client";

import { useState, useEffect } from "react";

const TARGET_TEXT = "Nonga254";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface LogoEntranceProps {
  className?: string;
  onComplete?: () => void;
}

export function LogoEntrance({ className = "", onComplete }: LogoEntranceProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let frame = 0;
    const totalDurationMs = 1200; // ~1.2s total decode time
    const fps = 30;
    const intervalMs = 1000 / fps;
    const totalFrames = Math.floor(totalDurationMs / intervalMs);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealedCount = Math.floor(progress * TARGET_TEXT.length);

      if (frame >= totalFrames) {
        setDisplayText(TARGET_TEXT);
        clearInterval(timer);

        // Step 2: Trigger quick subtle glitch (approx 180ms) right at completion
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
          // Step 3: Fade out cursor and lock to static text
          setShowCursor(false);
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 180);
      } else {
        let currentString = "";
        for (let i = 0; i < TARGET_TEXT.length; i++) {
          if (i < revealedCount) {
            currentString += TARGET_TEXT[i];
          } else {
            const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
            currentString += randomChar;
          }
        }
        setDisplayText(currentString);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <span
      className={`relative inline-block font-mono tracking-tight font-extrabold select-none ${className} ${
        isGlitching ? "animate-subtle-glitch" : ""
      }`}
    >
      {/* Primary visible text */}
      <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {displayText}
      </span>

      {/* Subtle RGB Split / Glitch layers (active only during the quick finish glitch) */}
      {isGlitching && (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 z-0 text-cyan-400 opacity-70 pointer-events-none translate-x-[1.5px] -translate-y-[1px]"
          >
            {displayText}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 z-0 text-rose-500 opacity-70 pointer-events-none -translate-x-[1.5px] translate-y-[1px]"
          >
            {displayText}
          </span>
        </>
      )}

      {/* Terminal Blinking Cursor */}
      {showCursor && (
        <span
          className={`inline-block ml-0.5 w-[0.45em] h-[1.05em] bg-blue-500/80 align-middle ${
            isFinished ? "opacity-0 transition-opacity duration-300" : "animate-pulse"
          }`}
          style={{ verticalAlign: "-0.15em" }}
        />
      )}
    </span>
  );
}
