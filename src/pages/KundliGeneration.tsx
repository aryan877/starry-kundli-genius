import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileDown, Compass } from "lucide-react";

const KundliGeneration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Kundli Generation</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle>North Indian Chart</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                <Compass className="w-24 h-24 text-cosmic-gold opacity-50" />
              </div>
              <Button className="w-full bg-cosmic-gold text-cosmic-purple hover:bg-cosmic-gold/90">
                <FileDown className="mr-2" />
                Generate Chart
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle>South Indian Chart</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                <Compass className="w-24 h-24 text-cosmic-gold opacity-50" />
              </div>
              <Button className="w-full bg-cosmic-gold text-cosmic-purple hover:bg-cosmic-gold/90">
                <FileDown className="mr-2" />
                Generate Chart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KundliGeneration;