"use client";

import { motion } from "framer-motion";
import {
    Award,
    Code2,
    GraduationCap,
    Shield,
    Brain,
    Server,
    Database,
    Coffee,
    Heart,
    Calendar,
    MapPin,
    BookOpen,
    Cpu,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

export function About() {

    // ==========================
    // Statistics
    // ==========================

    const stats = [
        {
            icon: Code2,
            label: "Projects Built",
            value: "10+",
        },
        {
            icon: Award,
            label: "Certifications",
            value: "6+",
        },
        {
            icon: Shield,
            label: "Security Labs",
            value: "50+",
        },
        {
            icon: Coffee,
            label: "Late Coding Nights",
            value: "∞",
        },
    ];

    // ==========================
    // Technical Skills
    // ==========================

    const skillGroups = [
        {
            title: "Programming",
            icon: Code2,
            skills: [
                "Python",
                "Java",
                "JavaScript",
                "TypeScript",
            ],
        },

        {
            title: "Frontend",
            icon: Cpu,
            skills: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
            ],
        },

        {
            title: "Backend",
            icon: Server,
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "Prisma ORM",
            ],
        },

        {
            title: "Databases",
            icon: Database,
            skills: [
                "MongoDB",
                "PostgreSQL",
                "MySQL",
            ],
        },

        {
            title: "Cybersecurity",
            icon: Shield,
            skills: [
                "Linux",
                "Burp Suite",
                "Wireshark",
                "Nmap",
                "OWASP ZAP",
                "SQLMap",
                "Git",
                "Docker",
            ],
        },

        {
            title: "Artificial Intelligence",
            icon: Brain,
            skills: [
                "Prompt Engineering",
                "LLMs",
                "AI Workflows",
                "AI Security",
            ],
        },
    ];

    // ==========================
    // Experience
    // ==========================

    const experiences = [
        {
            title: "ERP Technical Intern",
            company: "Future Kenya Ltd",
            period: "2026",
            description:
                "Supported ERP deployment, user support, troubleshooting, documentation, and enterprise system workflows while gaining experience in real-world business operations.",
        },

        {
            title: "Lead Developer",
            company: "WeCare Digital Platform",
            period: "2025 – 2026",
            description:
                "Co-developed a full-stack web platform supporting student mothers through emergency assistance, resource management, reporting, and university administration.",
        },

        {
            title: "Computer Science Student",
            company: "Dedan Kimathi University of Technology",
            period: "2022 – 2026",
            description:
                "Specialized in software engineering, networking, cybersecurity, artificial intelligence, databases, and secure software development.",
        },
    ];

    // ==========================
    // Education
    // ==========================

    const education = {
        degree: "Bachelor of Science in Computer Science",

        school: "Dedan Kimathi University of Technology",

        period: "2022 – 2026",

        grade: "Second Class Honours (Upper Division)",

        description:
            "Graduated with a strong foundation in software engineering, networking, cybersecurity, operating systems, artificial intelligence, and modern application development.",
    };

    // ==========================
    // Certifications
    // ==========================

    const certifications = [
        "ISC2 Certified in Cybersecurity (Candidate)",

        "APIsec University – API Security",

        "IBM Prompt Engineering",

        "Future of AI – BlueDot Impact",

        "Ethically Hack the Planet",

        "Cyber Game Capture The Flag",
    ];

    // ==========================
    // Interests
    // ==========================

    const interests = [
        "SOC Operations",

        "Penetration Testing",

        "Web Application Security",

        "Artificial Intelligence",

        "AI Security",

        "Reverse Engineering",

        "Open Source",

        "Linux",

        "CTF Competitions",

        "Cloud Security",
    ];

    return (
        <section
            id="about"
            className="py-24 px-6 max-w-7xl mx-auto"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    About Me
                </h2>

                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Computer Science graduate passionate about Cybersecurity,
                    Artificial Intelligence and Full-Stack Software Engineering.
                    I enjoy building secure applications, exploring offensive
                    security, and creating technology that solves real-world
                    problems.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">

                {/* ================= Left Column ================= */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >

                    {/* Profile Card */}

                    <div className="rounded-3xl border bg-background shadow-lg p-8">

                        <div className="flex flex-col sm:flex-row items-center gap-6">

                            <Avatar className="w-32 h-32 ring-4 ring-primary/10">

                                <AvatarImage
                                    src="/images/profile.jpg"
                                    alt="Shaldon Omondi Nonga"
                                />

                                <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                                    SN
                                </AvatarFallback>

                            </Avatar>

                            <div>

                                <h3 className="text-3xl font-bold">
                                    Shaldon Omondi Nonga
                                </h3>

                                <p className="text-primary font-medium mt-1">
                                    Computer Scientist • Cybersecurity Enthusiast • AI Developer
                                </p>

                                <div className="flex items-center gap-2 text-muted-foreground mt-3">
                                    <MapPin className="w-4 h-4" />
                                    Nairobi, Kenya
                                </div>

                            </div>

                        </div>

                        <div className="mt-8 space-y-5 leading-8 text-muted-foreground">

                            <p>
                                I'm a Computer Science graduate with a strong passion for
                                cybersecurity, artificial intelligence and secure software
                                engineering. My goal is to build systems that are not only
                                functional but resilient against modern cyber threats.
                            </p>

                            <p>
                                I enjoy developing full-stack applications, performing web
                                application security assessments, exploring Linux systems,
                                participating in Capture The Flag challenges and constantly
                                learning new technologies.
                            </p>

                            <p>
                                My long-term ambition is to work in Security Operations
                                (SOC), Application Security and AI Security while
                                contributing to impactful open-source projects that improve
                                digital security across Africa.
                            </p>

                        </div>

                    </div>

                    {/* Statistics */}

                    <div className="rounded-3xl border bg-background shadow-lg p-8">

                        <h4 className="text-xl font-semibold mb-6">
                            Quick Overview
                        </h4>

                        <div className="grid grid-cols-2 gap-6">

                            {stats.map((stat, index) => (

                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl border p-5 text-center hover:border-primary transition-colors"
                                >

                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />

                                    <h3 className="text-3xl font-bold">
                                        {stat.value}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mt-2">
                                        {stat.label}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                    {/* Technical Skills */}

                    <div className="rounded-3xl border bg-background shadow-lg p-8">

                        <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">

                            <Code2 className="w-5 h-5 text-primary" />

                            Technical Skills

                        </h4>

                        <div className="space-y-8">

                            {skillGroups.map((group) => {

                                const Icon = group.icon;

                                return (

                                    <div key={group.title}>

                                        <div className="flex items-center gap-2 mb-4">

                                            <Icon className="w-5 h-5 text-primary" />

                                            <h5 className="font-semibold">
                                                {group.title}
                                            </h5>

                                        </div>

                                        <div className="flex flex-wrap gap-2">

                                            {group.skills.map((skill) => (

                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="px-3 py-1.5 rounded-full hover:scale-105 transition-transform"
                                                >
                                                    {skill}
                                                </Badge>

                                            ))}

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </motion.div>

                {/* ================= Right Column starts in Part 3 ================= */}

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                {/* ================= Education ================= */}

                <div className="rounded-3xl border bg-background shadow-lg p-8">

                    <div className="flex items-center gap-2 mb-6">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h4 className="text-xl font-semibold">
                            Education
                        </h4>
                    </div>

                    <div className="rounded-2xl border p-6">

                        <h5 className="text-lg font-semibold">
                            {education.degree}
                        </h5>

                        <p className="text-primary font-medium mt-1">
                            {education.school}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                            <Calendar className="w-4 h-4" />
                            {education.period}
                        </div>

                        <Badge className="mt-4">
                            {education.grade}
                        </Badge>

                        <p className="mt-5 text-muted-foreground leading-7">
                            {education.description}
                        </p>

                    </div>

                </div>

                {/* ================= Experience ================= */}

                <div className="rounded-3xl border bg-background shadow-lg p-8">

                    <div className="flex items-center gap-2 mb-8">

                        <BookOpen className="w-6 h-6 text-primary" />

                        <h4 className="text-xl font-semibold">
                            Experience
                        </h4>

                    </div>

                    <div className="space-y-8">

                        {experiences.map((experience, index) => (

                            <motion.div

                                key={experience.title}

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{
                                    delay: index * 0.15,
                                }}

                                viewport={{ once: true }}

                                className="relative border-l-2 border-primary/30 pl-6"
                            >

                                <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary" />

                                <h5 className="font-semibold text-lg">
                                    {experience.title}
                                </h5>

                                <p className="text-primary text-sm mt-1">
                                    {experience.company}
                                </p>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">

                                    <Calendar className="w-3 h-3" />

                                    {experience.period}

                                </div>

                                <p className="mt-3 text-muted-foreground leading-7">
                                    {experience.description}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

                {/* ================= Certifications ================= */}

                <div className="rounded-3xl border bg-background shadow-lg p-8">

                    <div className="flex items-center gap-2 mb-6">

                        <Award className="w-6 h-6 text-primary" />

                        <h4 className="text-xl font-semibold">
                            Certifications
                        </h4>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        {certifications.map((cert) => (

                            <div
                                key={cert}
                                className="rounded-xl border p-4 hover:border-primary transition-colors"
                            >

                                <div className="flex gap-3">

                                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />

                                    <span className="text-sm">
                                        {cert}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ================= Interests ================= */}

                <div className="rounded-3xl border bg-background shadow-lg p-8">

                    <div className="flex items-center gap-2 mb-6">

                        <Heart className="w-6 h-6 text-primary" />

                        <h4 className="text-xl font-semibold">
                            Interests
                        </h4>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {interests.map((interest) => (

                            <Badge
                                key={interest}
                                variant="outline"
                                className="rounded-full px-4 py-2"
                            >
                                {interest}
                            </Badge>

                        ))}

                    </div>

                </div>

                {/* ================= Mission ================= */}

                <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border shadow-lg p-8">

                    <div className="flex items-center gap-2 mb-6">

                        <Heart className="w-6 h-6 text-red-500" />

                        <h4 className="text-xl font-semibold">
                            My Mission
                        </h4>

                    </div>

                    <p className="leading-8 text-muted-foreground">

                        My mission is to build secure, intelligent and impactful software
                        that improves people's lives. I believe cybersecurity should be
                        integrated into every stage of software development, and that AI
                        should be used responsibly to solve real-world challenges.

                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">

                        <Badge>Cybersecurity</Badge>

                        <Badge>Artificial Intelligence</Badge>

                        <Badge>Secure Software Engineering</Badge>

                        <Badge>Open Source</Badge>

                        <Badge>Continuous Learning</Badge>

                    </div>

                </div>

            </motion.div>

        </div>

    </section>

  );
}

export default About;