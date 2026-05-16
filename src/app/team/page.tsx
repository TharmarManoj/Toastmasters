import { PageBanner } from "@/components/ui/PageBanner";
import { TeamCard } from "@/components/cards/TeamCard";
import { TEAM_MEMBERS } from "@/data/mock";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Meet Our Executive Team" 
        subtitle="The dedicated student leaders who make our club a success."
      />
      <section className="py-20 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
