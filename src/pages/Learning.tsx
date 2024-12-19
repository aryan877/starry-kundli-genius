import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, Star } from "lucide-react";

const Learning = () => {
  const resources = [
    {
      title: "Articles",
      icon: BookOpen,
      items: [
        "Introduction to Vedic Astrology",
        "Understanding Your Birth Chart",
        "Planetary Influences"
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      items: [
        "Basics of Kundli Reading",
        "Houses and Their Significance",
        "Planetary Combinations"
      ]
    },
    {
      title: "Guides",
      icon: Star,
      items: [
        "Beginner's Guide to Astrology",
        "Advanced Chart Analysis",
        "Remedial Measures"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Learning Center</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="bg-white/10 border-none text-white">
              <CardHeader>
                <resource.icon className="w-12 h-12 text-cosmic-gold mb-4" />
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item) => (
                    <li key={item} className="text-white/80 hover:text-cosmic-gold cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;