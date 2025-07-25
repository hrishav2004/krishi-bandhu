import { Button } from "@/components/ui/button";
import { Menu, User, Globe } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "BN" : "EN");
  };

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              কৃষি<span className="text-accent">বন্ধু</span>
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">
              KrishiBandhu
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="farm" size="sm">
              কিনুন / Buy
            </Button>
            <Button variant="harvest" size="sm">
              বিক্রি করুন / Sell
            </Button>
            <Button variant="outline" size="sm">
              পরামর্শ / Advice
            </Button>
            <Button variant="earth" size="sm">
              প্রকল্প / Schemes
            </Button>
          </div>

          {/* Language Toggle & User Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {language}
            </Button>
            
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-6 space-y-3">
            <Button variant="farm" size="sm" className="w-full justify-start">
              কিনুন / Buy
            </Button>
            <Button variant="harvest" size="sm" className="w-full justify-start">
              বিক্রি করুন / Sell
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              পরামর্শ / Advice
            </Button>
            <Button variant="earth" size="sm" className="w-full justify-start">
              প্রকল্প / Schemes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-full justify-start"
            >
              <Globe className="h-4 w-4" />
              Switch to {language === "EN" ? "Bengali" : "English"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;