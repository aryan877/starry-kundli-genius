import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            size={Math.random() * 10 + 5}
            className={`absolute text-white/20 animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Discover Your Cosmic Path
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore your destiny through ancient Vedic astrology. Generate detailed Kundli charts,
            read daily horoscopes, and connect with expert astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-cosmic-gold text-cosmic-purple hover:bg-cosmic-gold/90"
            >
              Generate Free Kundli
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-purple"
            >
              Consult Astrologer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;