"use client";

import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Custom Github Icon component since brand icons are removed from Lucide v1+
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Project data
const projects = [
  {
    id: 1,
    title: "WeCare Digital Platform",
    description:
      "A full-stack web platform developed to support student mothers by streamlining access to university assistance, emergency support services, case management, and communication between students and administrators.",
    longDescription:
      "WeCare Digital Platform is a university support system designed to improve how student mothers access institutional assistance. The platform enables students to request support, report emergencies, manage personal cases, receive announcements, and communicate with university administrators through a centralized portal. Administrators can manage student records, monitor support requests, generate reports, and coordinate available resources, making service delivery more organized, transparent, and efficient.",
    category: "Social Impact",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Student registration and profile management",
      "Emergency assistance request system",
      "Case and support request management",
      "Announcements and university updates",
      "Administrative dashboard and reporting",
      "Secure authentication and role-based access control",
    ],
    impact:
      "Designed to improve access to university support services for student mothers while simplifying administrative management and reporting.",
    role: "Full-Stack Developer",
    liveUrl: "https://we-care-project-five.vercel.app/",
    githubUrl: "https://github.com/Nonga001/WeCare_Project",
    image: "/images/projects/wecare.jpeg",
    color: "from-blue-600 to-indigo-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A selection of projects demonstrating my experience in full-stack software development, cybersecurity, and building technology that solves real-world problems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                        <Heart className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-2">
                        Supporting Student Mothers
                      </p>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border-0 backdrop-blur-sm">
                    {project.category}
                  </Badge>

                  {/* Tech Stack Badges */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl lg:text-3xl font-bold">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          {project.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-1">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.longDescription || project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        Key Features:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg mb-4">
                        <Heart className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-200">
                          <span className="font-semibold">Impact:</span> {project.impact}
                        </span>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-0 mt-4 flex flex-wrap gap-3">
                    <Button asChild className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
