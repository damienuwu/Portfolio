"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Damien</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">About</Link>
              <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
              <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="py-12 md:py-24 lg:py-32 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Full Stack Developer
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Building digital experiences with modern technologies.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/damienuwu" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/eiman-damien-202a21215/" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:hello@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section id="about" className="py-12 md:py-24 lg:py-32" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <Card className="w-full max-w-4xl mx-auto mt-8">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-8">
                <motion.div className="w-48 h-48 relative rounded-full overflow-hidden" whileHover={{ scale: 1.05 }}>
                  <Image src="/images/githubprofile.png" alt="Damien" width={200} height={200} className="rounded-full" unoptimized />
                </motion.div>
                <motion.div className="flex-1 space-y-4" variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold">Eiman Damien</h3>
                  <p className="text-muted-foreground">
                    I&apos;m a passionate student currently pursuing a career as a full-stack developer.
                  </p>
                  <motion.div className="pt-4" whileHover={{ scale: 1.05 }}>
                    <Button variant="default">Download CV</Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="py-12 md:py-24 lg:py-32" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <ProjectCard title="E-commerce Platform" description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe." image="/placeholder.svg" link="https://github.com" tags={["Next.js", "Prisma", "Stripe"]} />
              <ProjectCard title="Task Management App" description="A real-time task management app with team collaboration features." image="/placeholder.svg" link="https://github.com" tags={["React", "Node.js", "Socket.io"]} />
              <ProjectCard title="AI Chat Interface" description="An AI-powered chat interface with NLP capabilities." image="/placeholder.svg" link="https://github.com" tags={["OpenAI", "Next.js", "TailwindCSS"]} />
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-12 md:py-24 lg:py-32" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
            <ContactForm />
          </div>
        </motion.section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2025 Damien. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
