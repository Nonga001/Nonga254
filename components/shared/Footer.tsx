"use client";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background/80 py-6 text-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Nonga254. All rights reserved.</p>
    </footer>
  );
}
