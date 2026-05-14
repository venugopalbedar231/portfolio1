"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

const TYPING_WORDS = [
  "Student at IIT Kharagpur",
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "AI Explorer",
  "Open Source Contributor",
  "Math & Computing Student",
  "Musician"
];

function useTypingEffect(words: string[]) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentWord, words]);

  return displayed;
}

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 2.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export default function HeroSection() {
  const typedText = useTypingEffect(TYPING_WORDS);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax blobs
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll<HTMLElement>("[data-parallax]");
      const xFactor = (e.clientX / window.innerWidth - 0.5) * 2;
      const yFactor = (e.clientY / window.innerHeight - 0.5) * 2;

      blobs.forEach((blob) => {
        const speed = parseFloat(blob.dataset.parallax || "1");
        blob.style.transform = `translate(${xFactor * speed * 20}px, ${yFactor * speed * 20}px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleScrollDown = () => {
    const about = document.querySelector("#about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Blobs */}
      <div
        data-parallax="1.5"
        className="blob absolute -top-32 -left-32 w-[500px] h-[500px] bg-neon-purple/8 opacity-60 transition-transform duration-700 ease-out"
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      />
      <div
        data-parallax="2"
        className="blob blob-2 absolute top-1/2 -right-48 w-[400px] h-[400px] bg-neon-blue/8 opacity-50 transition-transform duration-700 ease-out"
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      />
      <div
        data-parallax="1"
        className="blob blob-3 absolute -bottom-32 left-1/3 w-[350px] h-[350px] bg-neon-cyan/6 opacity-40 transition-transform duration-700 ease-out"
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      ><br /><br />
        {/* Badge */}
        {/* <motion.div variants={itemVariants} className="mb-6 inline-flex">
          <div className="flex items-center gap-2 px-4 py-2 glass border border-neon-purple/20 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-text-secondary text-xs tracking-wider">
              Available for internships & collaborations
            </span>
          </div>
        </motion.div> */}

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 leading-[0.95] tracking-tight"
        >
          <span className="text-text-primary">Hi, I&apos;m </span>
          <span className="gradient-text-full text-glow-purple">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          variants={itemVariants}
          className="mb-6 h-12 flex items-center justify-center"
        >
          <span className="font-display text-2xl sm:text-3xl font-semibold text-text-secondary">
            I&apos;m a{" "}
            <span className="gradient-text-cyan typing-cursor">{typedText}</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline} I build scalable, beautiful products that live at
          the intersection of great design and solid engineering.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 items-center justify-center mb-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-3.5 rounded-xl font-display font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-glow-purple hover:scale-105"
            style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ExternalLink size={15} />
            </span>
          </button>

          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3.5 rounded-xl font-display font-semibold text-sm border border-border-bright text-text-primary hover:border-neon-cyan/60 hover:text-neon-cyan transition-all duration-300 hover:shadow-glow-sm-cyan hover:scale-105 glass"
          >
            <span className="flex items-center gap-2">
              Contact Me
              <Mail size={15} />
            </span>
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-10 h-10 glass border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}

          <div className="w-px h-8 bg-border mx-2" />

          <span className="font-mono text-xs text-text-muted tracking-wider">
            @venugopal_bedar
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
