import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User,
  Leaf,
  Lightbulb,
  TrendingUp,
  Cloud
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      content: "নমস্কার! আমি আপনার কৃষি পরামর্শদাতা। আপনার ফসল, মাটি বা চাষাবাদ সম্পর্কে যেকোনো প্রশ্ন করুন। / Hello! I'm your agricultural advisor. Ask me anything about crops, soil, or farming.",
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      sender: "user",
      content: "আমার ধান ক্ষেতে পোকার আক্রমণ হয়েছে। কী করব?",
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      sender: "bot",
      content: "ধান ক্ষেতে পোকার আক্রমণের জন্য:\n\n1. প্রাকৃতিক কীটনাশক (নিম তেল) ব্যবহার করুন\n2. জৈবিক নিয়ন্ত্রণের জন্য ট্রাইকোগ্রামা কার্ড ব্যবহার করুন\n3. ক্ষেতে পর্যাপ্ত আলো-বাতাসের ব্যবস্থা রাখুন\n4. নিয়মিত ক্ষেত পরিদর্শন করুন\n\nকোন ধরনের পোকা দেখছেন? লেদা পোকা নাকি মাজরা পোকা?",
      timestamp: new Date(Date.now() - 180000)
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const quickSuggestions = [
    "মাটির pH কেমন হওয়া উচিত?",
    "সরিষার বীজ কখন বপন করব?",
    "জৈব সার কীভাবে তৈরি করব?",
    "বর্ষার আগে কী প্রস্তুতি নেব?"
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      content: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: "bot" as const,
        content: "ধন্যবাদ আপনার প্রশ্নের জন্য। আমি এই বিষয়ে বিস্তারিত তথ্য খুঁজে দিচ্ছি... / Thank you for your question. I'm finding detailed information on this topic...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            AI কৃষি পরামর্শদাতা / AI Agricultural Advisor
          </h1>
          <p className="text-muted-foreground">
            ফসল, মাটি, এবং চাষাবাদ সম্পর্কে বিশেষজ্ঞ পরামর্শ নিন
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <p className="text-sm text-muted-foreground">Farmers Helped</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-primary">100K+</div>
              <p className="text-sm text-muted-foreground">Solutions Provided</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Chat with AI Advisor
                </CardTitle>
                <CardDescription>
                  Get instant answers to your farming questions
                </CardDescription>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : ''}`}>
                      <div
                        className={`rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    
                    {message.sender === 'user' && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-accent/10">
                          <User className="h-4 w-4 text-accent" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </CardContent>
              
              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="আপনার প্রশ্ন লিখুন... / Type your question..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
                <CardDescription>
                  Click on these common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-3"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="text-sm leading-relaxed">{suggestion}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Weather Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cloud className="h-5 w-5" />
                  Weather Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Temperature</span>
                    <Badge variant="secondary">28°C</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Humidity</span>
                    <Badge variant="secondary">75%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Rain Forecast</span>
                    <Badge>Light Rain</Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  আগামী ৩ দিন হালকা বৃষ্টির সম্ভাবনা
                </p>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5" />
                  Today's Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  বর্ষার আগে ক্ষেতের জল নিষ্কাশনের ব্যবস্থা করুন। এতে ফসলের শিকড় পচন থেকে রক্ষা পাবে।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;