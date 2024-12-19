import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Kundli", href: "#kundli" },
    { name: "Horoscope", href: "#horoscope" },
    { name: "Consult", href: "#consult" },
  ];

  return (
    <nav className="fixed w-full bg-cosmic-purple/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-cosmic-gold text-xl font-bold">Astrogrand</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cosmic-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-purple"
              >
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cosmic-gold p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cosmic-gold block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className="w-full mt-4 border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-purple"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;