"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FEATURES } from "@/data/mock";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6"
            >
              Build Confidence. <span className="text-accent">Master Public Speaking.</span> Become a Leader.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-10"
            >
              Join a vibrant student community where communication and leadership skills grow through real-world speaking experiences.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg px-8">
                <Link href="/join">Join the Club <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto text-lg px-8">
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Join Toastmasters?" 
            subtitle="Discover the benefits of becoming a part of our supportive learning environment."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <FeatureCard key={idx} index={idx} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Empowering Students to Speak with Impact</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our club is more than just a place to practice speeches. It&apos;s a community of ambitious students who support each other in overcoming the fear of public speaking and developing essential leadership skills for the future workplace.
              </p>
              <ul className="space-y-4 mb-8">
                {['Weekly structured meetings', 'Constructive, positive feedback', 'Leadership opportunities', 'Networking with peers'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-foreground">
                    <div className="bg-accent/20 p-1 rounded-full mr-3 text-accent">
                      <Target className="h-5 w-5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop" 
                alt="Students presenting" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Ready to Find Your Voice?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg md:text-xl text-primary-foreground/80 mb-10"
          >
            Attend our next meeting as a guest and see what Toastmasters is all about. No pressure to speak!
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto" asChild>
              <Link href="/join">RSVP as a Guest</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
