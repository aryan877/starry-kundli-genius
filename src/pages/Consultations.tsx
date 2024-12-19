import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Video } from "lucide-react";
import BackButton from "@/components/BackButton";

const Consultations = () => {
  const consultationTypes = [
    {
      title: "Chat Consultation",
      icon: MessageCircle,
      price: "₹499/30min",
      description: "Connect with astrologers via chat"
    },
    {
      title: "Voice Call",
      icon: Phone,
      price: "₹799/30min",
      description: "Get guidance through voice call"
    },
    {
      title: "Video Call",
      icon: Video,
      price: "₹999/30min",
      description: "Face-to-face consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Consult Astrologers</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {consultationTypes.map((type) => (
            <Card key={type.title} className="bg-white/10 border-none text-white">
              <CardHeader>
                <type.icon className="w-12 h-12 text-cosmic-gold mb-4" />
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">{type.description}</p>
                <p className="text-2xl font-bold text-cosmic-gold">{type.price}</p>
                <Button className="w-full bg-cosmic-gold text-cosmic-purple hover:bg-cosmic-gold/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultations;