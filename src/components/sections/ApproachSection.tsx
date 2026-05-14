"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code2, Rocket } from "lucide-react";
import { workflowSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Code2,
  Rocket,
};

export default function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-neon-cyan text-sm tracking-[0.25em] uppercase mb-3">
            06. Process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            How I{" "}
            <span className="gradient-text-purple">approach</span> work
          </h2>
          <p className="font-body text-text-secondary max-w-xl mx-auto">
            A clear, iterative process that ensures quality at every stage — from concept to production.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connection lines — desktop only */}
          <div className="hidden lg:block absolute top-[3.5rem] left-1/3 right-1/3 h-px pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="w-full h-full origin-left"
              style={{
                background: "linear-gradient(to right, rgba(168,85,247,0.3), rgba(59,130,246,0.3))",
              }}
            />
          </div>
          <div className="hidden lg:block absolute top-[3.5rem] left-2/3 right-0 h-px pointer-events-none">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
              className="w-full h-full origin-left"
              style={{
                background: "linear-gradient(to right, rgba(59,130,246,0.3), rgba(6,182,212,0.3))",
              }}
            />
          </div>

          {workflowSteps.map((step, i) => {
            const Icon = iconMap[step.icon];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass border border-border rounded-2xl p-8 h-full gradient-border shine group transition-all duration-300 hover:border-opacity-60"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border flex-shrink-0 transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        background: `${step.color}15`,
                        borderColor: `${step.color}30`,
                        boxShadow: `0 0 0 0 ${step.color}`,
                      }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                    </div>

                    <span
                      className="font-display text-5xl font-extrabold leading-none opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
