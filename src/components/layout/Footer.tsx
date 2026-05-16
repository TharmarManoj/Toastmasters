import Link from "next/link";
import { Mic2, Users, MessageCircle, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Mic2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Emerald Voices
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed">
              Build Confidence. Master Public Speaking. Become a Leader. Join our vibrant student community today.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
              {/* <li><Link href="/events" className="text-primary-foreground/80 hover:text-white transition-colors">Events</Link></li> */}
              <li><Link href="/team" className="text-primary-foreground/80 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/join" className="text-primary-foreground/80 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/testimonials" className="text-primary-foreground/80 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <ImageIcon className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <LinkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Emerald Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
