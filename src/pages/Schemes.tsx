import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  ExternalLink, 
  Filter,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Leaf,
  Tractor
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const schemes = [
    {
      id: 1,
      title: "প্রধানমন্ত্রী কিসান সম্মান নিধি / PM-KISAN",
      description: "প্রতি বছর ৬০০০ টাকা সরাসরি কৃষকদের ব্যাংক অ্যাকাউন্টে স্থানান্তর",
      type: "Central",
      amount: "₹6,000/year",
      eligibility: "ভূমিধারী কৃষক / Landholding farmers",
      deadline: "Open",
      beneficiaries: "12 Crore+",
      link: "https://pmkisan.gov.in",
      status: "Active",
      category: "financial"
    },
    {
      id: 2,
      title: "কৃষি উন্নয়ন প্রকল্প / Krishi Unnayan Prakalpa",
      description: "আধুনিক কৃষি যন্ত্রপাতি ক্রয়ে ৫০% পর্যন্ত সাবসিডি",
      type: "State",
      amount: "50% Subsidy",
      eligibility: "ত্রিপুরার কৃষক / Tripura farmers",
      deadline: "March 2024",
      beneficiaries: "50,000+",
      link: "https://tripura.gov.in/agriculture",
      status: "Active",
      category: "equipment"
    },
    {
      id: 3,
      title: "জৈব কৃষি প্রোত্সাহন / Organic Farming Promotion",
      description: "জৈব সার ও বীজ ক্রয়ে বিশেষ সাবসিডি এবং প্রশিক্ষণ",
      type: "Central",
      amount: "₹25,000/hectare",
      eligibility: "জৈব চাষে আগ্রহী কৃষক / Organic farming aspirants",
      deadline: "Ongoing",
      beneficiaries: "2 Lakh+",
      link: "https://pgsindia-ncof.gov.in",
      status: "Active",
      category: "organic"
    },
    {
      id: 4,
      title: "ফসল বীমা পরিকল্পনা / Pradhan Mantri Fasal Bima Yojana",
      description: "প্রাকৃতিক দুর্যোগে ফসলের ক্ষতির বিপরীতে বীমা সুবিধা",
      type: "Central",
      amount: "2% Premium",
      eligibility: "সব কৃষক / All farmers",
      deadline: "Seasonal",
      beneficiaries: "5.5 Crore+",
      link: "https://pmfby.gov.in",
      status: "Active",
      category: "insurance"
    },
    {
      id: 5,
      title: "মহিলা কৃষক সশক্তিকরণ / Women Farmer Empowerment",
      description: "মহিলা কৃষকদের জন্য বিশেষ প্রশিক্ষণ ও আর্থিক সহায়তা",
      type: "State",
      amount: "₹15,000",
      eligibility: "মহিলা কৃষক / Women farmers",
      deadline: "December 2024",
      beneficiaries: "25,000+",
      link: "https://westbengal.gov.in/agriculture",
      status: "Active",
      category: "training"
    },
    {
      id: 6,
      title: "কৃষি ঋণ মওকুফ / Farm Loan Waiver",
      description: "ছোট ও প্রান্তিক কৃষকদের ঋণ মওকুফ প্রকল্প",
      type: "State",
      amount: "Up to ₹1 Lakh",
      eligibility: "প্রান্তিক কৃষক / Marginal farmers",
      deadline: "June 2024",
      beneficiaries: "1 Lakh+",
      link: "#",
      status: "Limited",
      category: "financial"
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || scheme.type.toLowerCase() === selectedType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Limited": return "secondary";
      default: return "outline";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "financial": return DollarSign;
      case "equipment": return Tractor;
      case "organic": return Leaf;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            সরকারি প্রকল্প / Government Schemes
          </h1>
          <p className="text-muted-foreground">
            কৃষকদের জন্য কেন্দ্রীয় ও রাজ্য সরকারের বিভিন্ন সুবিধা ও প্রকল্প
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary">25+</div>
              <p className="text-sm text-muted-foreground">Active Schemes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary">20 Cr+</div>
              <p className="text-sm text-muted-foreground">Beneficiaries</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary">₹2L Cr+</div>
              <p className="text-sm text-muted-foreground">Total Disbursed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="প্রকল্প খুঁজুন / Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">সব প্রকল্প / All Schemes</SelectItem>
              <SelectItem value="central">কেন্দ্রীয় / Central</SelectItem>
              <SelectItem value="state">রাজ্য / State</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
        </div>

        {/* Schemes Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => {
            const CategoryIcon = getCategoryIcon(scheme.category);
            
            return (
              <Card key={scheme.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CategoryIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-2">
                          {scheme.title}
                        </CardTitle>
                        <div className="flex gap-2 mb-2">
                          <Badge variant={scheme.type === "Central" ? "default" : "secondary"}>
                            {scheme.type}
                          </Badge>
                          <Badge variant={getStatusColor(scheme.status)}>
                            {scheme.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {scheme.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>
                        <span className="text-muted-foreground">Amount:</span>
                        <br />
                        <span className="font-medium">{scheme.amount}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        <span className="text-muted-foreground">Beneficiaries:</span>
                        <br />
                        <span className="font-medium">{scheme.beneficiaries}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>
                        <span className="text-muted-foreground">Eligibility:</span>
                        <br />
                        <span className="font-medium text-xs">{scheme.eligibility}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        <span className="text-muted-foreground">Deadline:</span>
                        <br />
                        <span className="font-medium">{scheme.deadline}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" asChild>
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply Now / আবেদন করুন
                      </a>
                    </Button>
                    <Button variant="outline">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              কোন প্রকল্প পাওয়া যায়নি / No schemes found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;