"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { TESTIMONIALS } from "@/data/mock";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Parent Testimonials" 
        subtitle="Hear from parents whose children's lives were transformed by Emerald Voices."
      />
      <section className="py-20 bg-muted flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background rounded-2xl p-8 border shadow-sm relative mt-10 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-10 left-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full border-4 border-background object-cover shadow-md"
                  />
                </div>
                <Quote className="h-8 w-8 text-accent/20 absolute top-8 right-8" />
                <div className="mt-10">
                  <h3 className="font-heading font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{testimonial.role}</p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
