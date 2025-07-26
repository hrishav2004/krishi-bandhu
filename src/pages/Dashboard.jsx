import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  MessageCircle, 
  TrendingUp, 
  Package, 
  Users, 
  BarChart3,
  Leaf,
  Bell,
  Settings
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  // Mock user data - in real app this would come from auth context
  const [user] = useState({
    name: "রহিম উদ্দিন",
    role: "farmer",
    location: "Agartala, Tripura"
  });

  const farmerStats = [
    { label: "মোট অর্ডার / Orders", value: "12", icon: ShoppingCart },
    { label: "AI পরামর্শ / AI Consultations", value: "8", icon: MessageCircle },
    { label: "সক্রিয় স্কিম / Active Schemes", value: "3", icon: TrendingUp },
  ];

  const recentOrders = [
    { id: "1", product: "জৈব সার / Organic Fertilizer", status: "Delivered", amount: "₹850" },
    { id: "2", product: "বীজ / Seeds", status: "Shipped", amount: "₹450" },
    { id: "3", product: "কীটনাশক / Pesticide", status: "Pending", amount: "₹620" },
  ];

  const notifications = [
    { id: "1", message: "আপনার অর্ডার #1234 ডেলিভার হয়েছে", time: "2 hours ago" },
    { id: "2", message: "নতুন সরকারি স্কিম উপলব্ধ", time: "1 day ago" },
    { id: "3", message: "বৃষ্টির পূর্ভাভাস - আগামী 3 দিন", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              স্বাগতম, {user.name}
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome to your dashboard • {user.location}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {farmerStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="schemes">Schemes</TabsTrigger>
            <TabsTrigger value="advice">AI Advice</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    সাম্প্রতিক অর্ডার / Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <Badge variant={order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Orders
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    বিজ্ঞপ্তি / Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border rounded-lg">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>দ্রুত কার্যক্রম / Quick Actions</CardTitle>
                <CardDescription>
                  Commonly used features for your farming needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="h-20 flex-col gap-2">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="text-xs">Buy Products</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-xs">AI Advisor</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-xs">Market Prices</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Leaf className="h-6 w-6" />
                    <span className="text-xs">Schemes</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Track all your purchases and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Order management interface will be built here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schemes">
            <Card>
              <CardHeader>
                <CardTitle>My Schemes</CardTitle>
                <CardDescription>Government schemes you're enrolled in</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Scheme management interface will be built here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advice">
            <Card>
              <CardHeader>
                <CardTitle>AI Agricultural Advisor</CardTitle>
                <CardDescription>Get personalized farming advice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI chat interface will be built here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;