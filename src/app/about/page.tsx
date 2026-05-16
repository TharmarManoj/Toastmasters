"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Target, Lightbulb, Users, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Mission", desc: "To provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills." },
    { icon: Lightbulb, title: "Vision", desc: "To be the premier provider of dynamic, high-value, experiential communication and leadership skills development." },
    { icon: Users, title: "Community", desc: "A diverse group of students uniting to help each other grow through constructive feedback and peer mentoring." },
    { icon: Award, title: "Excellence", desc: "Committing to continuous improvement, celebrating successes, and setting a high standard for our speeches and leadership roles." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="About Our Club" 
        subtitle="Learn about our history, mission, and the values that drive our school community."
      />
      
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">About Emerald Groups & Emerald Voices</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At <strong className="text-foreground">Emerald Groups</strong>, we believe in holistic development. We have established several initiatives to nurture student talents across various domains:
              </p>
              <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 space-y-2 ml-2">
                <li><strong className="text-foreground">Emerald Voices:</strong> Our public speaking and leadership club (our very own Toastmasters) to help you master communication.</li>
                <li><strong className="text-foreground">Emerald Musics:</strong> A creative space to explore musical talents and collaborative performances.</li>
                <li><strong className="text-foreground">Emerald Readers:</strong> A community dedicated to literature, critical thinking, and a shared love for reading.</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-6">
                This platform is the official home of <strong className="text-foreground">Emerald Voices</strong>. We provide a safe, encouraging environment where you can practice speaking in front of an audience, learn how to give and receive constructive feedback, and take on leadership roles that prepare you for your future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Meeting" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" alt="Speaking" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" alt="Audience" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop" alt="Award" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide our meetings and our interactions." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border shadow-sm text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
