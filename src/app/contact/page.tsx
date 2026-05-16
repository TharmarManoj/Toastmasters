"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Contact Us" 
        subtitle="Have questions? We're here to help you on your public speaking journey."
      />
      <section className="py-20 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Coimbatore<br />Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Meeting Times</h4>
                    <p className="text-muted-foreground">Every Saturday & Sunday<br />6:00 PM - 7:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">emeraldvoices2026@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden shadow-sm border h-64 bg-muted relative">
                {/* Mock Map Placeholder */}
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-background/90 backdrop-blur px-6 py-3 rounded-full font-medium shadow-sm flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" /> View on Map
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help you?"></textarea>
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  * This is a UI mockup. No data is actually submitted.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
