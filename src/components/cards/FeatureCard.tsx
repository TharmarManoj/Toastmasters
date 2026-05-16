"use client";

import { motion } from "framer-motion";
import { Mic2, Users, Target, MessageSquare } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const icons = [Mic2, Users, Target, MessageSquare];

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card text-card-foreground p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
