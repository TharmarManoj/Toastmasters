"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: {
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
  };
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-md transition-shadow"
    >
      <div className="flex-shrink-0 bg-primary/5 rounded-xl p-6 flex flex-col items-center justify-center text-center min-w-[140px] border border-primary/10">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{event.date.split(',')[0].split(' ')[0]}</span>
        <span className="text-4xl font-heading font-black text-primary mb-1">{event.date.split(',')[0].split(' ')[1]}</span>
        <span className="text-sm text-muted-foreground">{event.date.split(',')[1]}</span>
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <h3 className="text-2xl font-heading font-bold mb-3">{event.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80 mb-6">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {event.venue}
          </div>
        </div>
        <div>
          <Button asChild>
            <a href="#">Register Now</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
