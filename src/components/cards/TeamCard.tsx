"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, MessageCircle } from "lucide-react";

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
    social: { linkedin: string; twitter: string };
  };
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold">{member.name}</h3>
        <p className="text-accent font-medium mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {member.description}
        </p>
        <div className="flex space-x-3">
          <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <LinkIcon className="h-5 w-5" />
          </a>
          <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
