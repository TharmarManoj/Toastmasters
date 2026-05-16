"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
