import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

const schemes = [
  {
    id: 1,
    title: "প্রধানমন্ত্রী কিসান সম্মান নিধি",
    titleEn: "PM-KISAN Samman Nidhi",
    description: "কৃষকদের জন্য আর্থিক সহায়তা - বছরে ৬০০০ টাকা",
    descriptionEn: "Financial assistance for farmers - ₹6000 per year",
    type: "Central",
    link: "https://pmkisan.gov.in",
    amount: "₹6,000/year"
  },
  {
    id: 2,
    title: "কৃষক বন্ধু প্রকল্প",
    titleEn: "Krishak Bandhu Scheme",
    description: "পশ্চিমবঙ্গের কৃষকদের জন্য বিশেষ সুবিধা",
    descriptionEn: "Special benefits for West Bengal farmers",
    type: "State",
    link: "https://wb.gov.in/krishakbandhu",
    amount: "₹5,000/acre"
  },
  {
    id: 3,
    title: "মুখ্যমন্ত্রী কৃষক কল্যাণ মিশন",
    titleEn: "CM Farmer Welfare Mission",
    description: "ত্রিপুরার কৃষকদের জন্য সমন্বিত উন্নয়ন",
    descriptionEn: "Integrated development for Tripura farmers",
    type: "State",
    link: "https://tripura.gov.in/farmer-welfare",
    amount: "₹4,000/year"
  },
  {
    id: 4,
    title: "জৈব কৃষি প্রোত্সাহন",
    titleEn: "Organic Farming Promotion",
    description: "জৈব কৃষির জন্য অনুদান ও প্রশিক্ষণ",
    descriptionEn: "Subsidy and training for organic farming",
    type: "Central",
    link: "https://pgsindia-ncof.gov.in",
    amount: "Up to ₹25,000"
  }
];

const SchemeCarousel = () => {
  const [filter, setFilter] = useState("All");

  const filteredSchemes = schemes.filter(scheme => 
    filter === "All" || scheme.type === filter
  );

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            সরকারি প্রকল্প / Government Schemes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            কৃষকদের জন্য সরকারি সুবিধা ও অনুদান সম্পর্কে জানুন
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-background rounded-lg border">
            {["All", "Central", "State"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "farm" : "ghost"}
                size="sm"
                onClick={() => setFilter(filterType)}
                className="min-w-[80px]"
              >
                <Filter className="h-4 w-4 mr-1" />
                {filterType}
              </Button>
            ))}
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-all duration-300 border-border bg-background">
              <CardHeader className="space-y-3">
                <div className="flex justify-between items-start">
                  <Badge variant={scheme.type === "Central" ? "default" : "secondary"}>
                    {scheme.type === "Central" ? "কেন্দ্রীয় / Central" : "রাজ্য / State"}
                  </Badge>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">{scheme.amount}</div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  <div className="text-primary">{scheme.title}</div>
                  <div className="text-base font-medium text-muted-foreground mt-1">
                    {scheme.titleEn}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  <div className="mb-2">{scheme.description}</div>
                  <div className="text-sm opacity-80">{scheme.descriptionEn}</div>
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(scheme.link, '_blank')}
                >
                  আবেদন করুন / Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="farm" size="lg">
            সব প্রকল্প দেখুন / View All Schemes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchemeCarousel;