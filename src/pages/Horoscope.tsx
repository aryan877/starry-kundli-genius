import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import BackButton from "@/components/BackButton";

const Horoscope = () => {
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer", 
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Daily Horoscope</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signs.map((sign) => (
            <Card key={sign} className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Star className="text-cosmic-gold" />
                <CardTitle>{sign}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">Click to view your daily prediction</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horoscope;