import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Calculator, Search } from "lucide-react";
import BackButton from "@/components/BackButton";

const Tools = () => {
  const tools = [
    {
      title: "Panchang",
      icon: Calendar,
      description: "Daily planetary positions and auspicious timings"
    },
    {
      title: "Dasha Calculator",
      icon: Calculator,
      description: "Calculate your planetary periods"
    },
    {
      title: "Rashi Finder",
      icon: Search,
      description: "Find your moon sign and birth rashi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Astrology Tools</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card key={tool.title} className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors cursor-pointer">
              <CardHeader>
                <tool.icon className="w-12 h-12 text-cosmic-gold mb-4" />
                <CardTitle>{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;