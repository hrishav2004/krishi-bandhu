import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Leaf, AlertTriangle } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    state: "",
    district: "",
    village: ""
  });

  const [showWarning, setShowWarning] = useState(false);

  const states = [
    { value: "tripura", label: "Tripura / ত্রিপুরা" },
    { value: "west-bengal", label: "West Bengal / পশ্চিমবঙ্গ" },
    { value: "other", label: "Other State / অন্য রাজ্য" }
  ];

  const handleStateChange = (value: string) => {
    setFormData({...formData, state: value});
    setShowWarning(value === "other");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl text-primary">
            কৃষি<span className="text-accent">বন্ধু</span>
          </CardTitle>
          <CardDescription>
            নতুন অ্যাকাউন্ট তৈরি করুন / Create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">নাম / Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">ভূমিকা / Role</Label>
                <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">কৃষক / Farmer</SelectItem>
                    <SelectItem value="supplier">সরবরাহকারী / Supplier</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">ইমেইল / Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">ফোন / Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">পাসওয়ার্ড / Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">রাজ্য / State</Label>
              <Select onValueChange={handleStateChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {showWarning && (
              <Alert className="border-orange-200 bg-orange-50">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  এই অঞ্চলের তথ্য শীঘ্রই আসছে / Data for this region coming soon
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="district">জেলা / District</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">গ্রাম / Village</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => setFormData({...formData, village: e.target.value})}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              নিবন্ধন করুন / Sign Up
            </Button>
          </form>
          
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              ইতিমধ্যে অ্যাকাউন্ট আছে? / Already have an account?
            </p>
            <Link to="/auth/login">
              <Button variant="outline" className="w-full">
                লগইন / Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;