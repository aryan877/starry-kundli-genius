import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

const Matchmaking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-purple to-cosmic-blue p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Kundli Matchmaking</h1>
        
        <Card className="bg-white/10 border-none text-white">
          <CardHeader className="text-center">
            <Heart className="w-16 h-16 text-cosmic-gold mx-auto mb-4" />
            <CardTitle className="text-2xl">Check Compatibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Users className="w-12 h-12 text-cosmic-gold mx-auto" />
                <h3 className="text-lg font-semibold text-center">Partner 1</h3>
                <Button variant="outline" className="w-full border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-purple">
                  Upload Kundli
                </Button>
              </div>
              <div className="space-y-4">
                <Users className="w-12 h-12 text-cosmic-gold mx-auto" />
                <h3 className="text-lg font-semibold text-center">Partner 2</h3>
                <Button variant="outline" className="w-full border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-purple">
                  Upload Kundli
                </Button>
              </div>
            </div>
            <Button className="w-full bg-cosmic-gold text-cosmic-purple hover:bg-cosmic-gold/90">
              Generate Compatibility Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Matchmaking;