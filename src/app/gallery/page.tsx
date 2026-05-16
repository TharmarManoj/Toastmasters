"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { GALLERY_IMAGES } from "@/data/mock";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Event Gallery" 
        subtitle="A visual journey of our meetings, contests, and community."
      />
      <section className="py-20 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Club Event</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
