import { PageBanner } from "@/components/ui/PageBanner";
import { EventCard } from "@/components/cards/EventCard";
import { UPCOMING_EVENTS } from "@/data/mock";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Upcoming Events" 
        subtitle="Join our workshops, speech contests, and weekly meetings."
      />
      <section className="py-20 bg-background flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {UPCOMING_EVENTS.map((event, idx) => (
             <EventCard key={idx} event={event} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
