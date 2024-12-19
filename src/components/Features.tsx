import { Star, Moon, Users, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Kundli Generation",
      description: "Get detailed birth charts in North & South Indian styles with comprehensive analysis.",
      icon: Star,
    },
    {
      title: "Daily Horoscope",
      description: "Personalized daily predictions based on your zodiac and moon signs.",
      icon: Moon,
    },
    {
      title: "Match Making",
      description: "Check compatibility with potential partners through detailed Kundli matching.",
      icon: Users,
    },
    {
      title: "Expert Consultation",
      description: "Connect with experienced astrologers for personalized guidance.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cosmic-blue to-cosmic-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Your Cosmic Journey
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover our comprehensive astrological services designed to guide you through life's journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-cosmic-gold mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;