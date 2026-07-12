"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Fix: when user scrolls to the very bottom, force the last section active
        const handleBottomReach = () => {
            const nearBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
            if (nearBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1]);
            }
        };

        window.addEventListener("scroll", handleBottomReach, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleBottomReach);
        };
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Nonga254
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/30"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.4,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {link.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-600 dark:text-slate-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
                >
                    <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link) => {
                            const isActive =
                                activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar;
