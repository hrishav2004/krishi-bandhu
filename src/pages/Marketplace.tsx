import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star,
  Package,
  Truck,
  Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "সব পণ্য / All Products" },
    { value: "seeds", label: "বীজ / Seeds" },
    { value: "fertilizers", label: "সার / Fertilizers" },
    { value: "pesticides", label: "কীটনাশক / Pesticides" },
    { value: "tools", label: "যন্ত্রপাতি / Tools" },
  ];

  const products = [
    {
      id: 1,
      name: "জৈব সার / Organic Fertilizer",
      description: "উচ্চ মানের জৈব সার, সব ধরনের ফসলের জন্য উপযুক্ত",
      price: 850,
      originalPrice: 1000,
      rating: 4.5,
      reviews: 128,
      category: "fertilizers",
      seller: "কৃষি ভবন",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "ধানের বীজ / Rice Seeds",
      description: "উচ্চ ফলনশীল ধানের বীজ, বর্ষা মৌসুমের জন্য",
      price: 450,
      originalPrice: 500,
      rating: 4.8,
      reviews: 89,
      category: "seeds",
      seller: "বাংলা কৃষি",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "কীটনাশক / Pesticide",
      description: "প্রাকৃতিক কীটনাশক, নিরাপদ ও কার্যকর",
      price: 620,
      originalPrice: 620,
      rating: 4.3,
      reviews: 56,
      category: "pesticides",
      seller: "সবুজ সমাধান",
      inStock: false,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "কৃষি যন্ত্র / Farm Tool",
      description: "টেকসই লোহার তৈরি কৃষি যন্ত্র",
      price: 1200,
      originalPrice: 1350,
      rating: 4.6,
      reviews: 34,
      category: "tools",
      seller: "যন্ত্র বিতান",
      inStock: true,
      image: "/placeholder.svg"
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            কৃষি বাজার / Agricultural Marketplace
          </h1>
          <p className="text-muted-foreground">
            বীজ, সার, কৃষি যন্ত্রপাতি কিনুন সহজেই / Buy seeds, fertilizers, and equipment easily
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="পণ্য খুঁজুন / Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            ফিল্টার / Filter
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gray-100 rounded-t-lg relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {product.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{product.seller}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Package className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              কোন পণ্য পাওয়া যায়নি / No products found
            </p>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">
              ৫০০ টাকার উপরে অর্ডারে বিনামূল্যে ডেলিভারি
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-sm text-muted-foreground">
              সকল পণ্য গুণগতমান নিশ্চিত ও সরকার অনুমোদিত
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">
              ৭ দিনের মধ্যে সহজ পণ্য ফেরত নীতি
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;