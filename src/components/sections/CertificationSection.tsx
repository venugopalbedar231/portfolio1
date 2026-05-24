"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/data";

function ProjectCard({ certificate, index }: { certificate: (typeof certificates)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: index * 0.12 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass border border-border rounded-2xl overflow-hidden gradient-border group cursor-pointer transition-all duration-300 hover:border-opacity-60"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${certificate.color}20 50%, rgba(5,5,8,0.8) 100%)`,
            }}
          />

          {/* Floating badge */}
          <div className="absolute top-3 left-3">
            {certificate.featured && (
              <span
                className="px-2.5 py-1 rounded-full font-mono text-xs font-medium border"
                style={{
                  background: `${certificate.color}20`,
                  borderColor: `${certificate.color}50`,
                  color: certificate.color,
                }}
              >
                ✦ Featured
              </span>
            )}
          </div>

          {/* Action buttons on hover */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* <a
              href={certificate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white hover:text-neon-cyan transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </a> */}
            <a
              href={certificate.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white hover:text-neon-cyan transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-xl font-bold text-text-primary group-hover:gradient-text-full transition-all duration-300">
              {certificate.title}
            </h3>
            <motion.div
              className="text-text-muted group-hover:text-neon-cyan transition-colors"
              whileHover={{ rotate: 45, scale: 1.2 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <p className="font-body text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
            {certificate.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {certificate.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md font-mono text-xs border border-border text-text-muted hover:border-border-bright hover:text-text-secondary transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Animated gradient border line */}
          <div
            className="h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to right, ${certificate.color}, transparent)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CertificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            03. Certifications
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
              Things I&apos;ve{" "}
              <span className="gradient-text-cyan">achieved</span>
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {certificates.map((certificate, i) => (
            <ProjectCard key={certificate.title} certificate={certificate} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
