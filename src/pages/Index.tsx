import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SchemeCarousel from "@/components/SchemeCarousel";
import DashboardCharts from "@/components/Charts/DashboardCharts";
import MSPPanel from "@/components/MSPPanel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ShoppingCart, TrendingUp, Users, Leaf, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection />
      
      <SchemeCarousel />
      
      <DashboardCharts />
      
      <MSPPanel />

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              আমাদের সেবা / Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              কৃষকদের জন্য সব ধরনের ডিজিটাল সমাধান
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border bg-background">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  কৃষি বাজার / Agri Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  বীজ, সার, কৃষি যন্ত্রপাতি কিনুন ও বিক্রি করুন সহজেই।
                  Buy and sell seeds, fertilizers, and equipment easily.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  বাজার দেখুন / View Market
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border bg-background">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">
                  AI পরামর্শদাতা / AI Advisor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  স্মার্ট চ্যাটবট থেকে ফসল ও মাটি সম্পর্কে বিশেষজ্ঞ পরামর্শ নিন।
                  Get expert advice on crops and soil from smart chatbot.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  পরামর্শ নিন / Get Advice
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border bg-background">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  বাজার দর / Market Prices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  সর্বশেষ MSP ও বাজার দর জানুন, সঠিক সময়ে বিক্রি করুন।
                  Know latest MSP and market rates, sell at right time.
                </CardDescription>
                <Button variant="outline" className="w-full">
                  দর দেখুন / Check Rates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই যুক্ত হন কৃষিবন্ধু পরিবারে
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the KrishiBandhu family today and transform your farming experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="harvest" size="lg" className="text-lg px-8 py-3">
              নিবন্ধন করুন / Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              আরও জানুন / Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                কৃষি<span className="text-accent-light">বন্ধু</span>
              </div>
              <p className="opacity-80">
                স্মার্ট কৃষির জন্য ডিজিটাল সমাধান
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">সেবা / Services</h4>
              <ul className="space-y-2 opacity-80">
                <li>কৃষি বাজার / Marketplace</li>
                <li>AI পরামর্শ / AI Advice</li>
                <li>সরকারি প্রকল্প / Schemes</li>
                <li>বাজার দর / Market Rates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">সহায়তা / Support</h4>
              <ul className="space-y-2 opacity-80">
                <li>যোগাযোগ / Contact</li>
                <li>সাহায্য / Help</li>
                <li>FAQ</li>
                <li>নীতিমালা / Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">যোগাযোগ / Contact</h4>
              <p className="opacity-80">
                📧 support@krishibandhu.gov.in<br />
                📞 1800-XXX-XXXX<br />
                🏢 Government of India
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-80">
            <p>&copy; 2024 KrishiBandhu. All rights reserved. | Built for Indian Farmers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;