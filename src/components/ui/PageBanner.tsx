"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="bg-primary text-primary-foreground py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-primary-foreground/80"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
