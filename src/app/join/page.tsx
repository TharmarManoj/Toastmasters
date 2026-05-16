"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function JoinPage() {
  const steps = [
    "Attend a meeting as a guest",
    "Experience the supportive environment",
    "Fill out the membership application",
    "Pay the club dues",
    "Start your communication journey!"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Join Our Club" 
        subtitle="Take the first step towards becoming a more confident speaker and leader."
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
              <h2 className="text-3xl font-heading font-bold mb-6">Why Become a Member?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a member, you&apos;ll gain access to the Toastmasters Pathways learning experience, a tailored educational program designed to help you build the competencies you need to communicate and lead effectively.
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-semibold">How to join:</h3>
                <ul className="space-y-4">
                  {steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground text-lg">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Membership Interest Form</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@university.edu" />
                </div>
                <div>
                  <label htmlFor="college" className="block text-sm font-medium mb-2">College / Major</label>
                  <input type="text" id="college" className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Engineering" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">Why do you want to join?</label>
                  <textarea id="interest" rows={4} className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your goals..."></textarea>
                </div>
                <Button type="submit" className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit Interest
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
