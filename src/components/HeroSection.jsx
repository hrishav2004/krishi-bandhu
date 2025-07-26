import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            কৃষিকে 
            <span className="text-accent-light"> ডিজিটাল </span>
            করুন
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-4 opacity-90">
            Make Agriculture Digital
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-80 leading-relaxed">
            স্মার্ট কৃষি সমাধান, সরকারি প্রকল্প এবং বাজার সংযোগ - সব এক জায়গায়।
            <br />
            <span className="text-sm">Smart farming solutions, government schemes, and market connections - all in one place.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="harvest" size="lg" className="text-lg px-8 py-3">
              এখনই শুরু করুন / Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              আরও জানুন / Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-accent-light" />
              </div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm opacity-80">কৃষক / Farmers</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Leaf className="h-8 w-8 text-accent-light" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-80">পণ্য / Products</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <TrendingUp className="h-8 w-8 text-accent-light" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-80">সন্তুষ্টি / Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;