import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, TrendingUp } from "lucide-react";

const mspData = [
  {
    crop: "ধান / Paddy (Common)",
    rate: "₹2,183",
    increase: "+₹83",
    season: "খরিফ / Kharif 2024"
  },
  {
    crop: "গম / Wheat",
    rate: "₹2,275", 
    increase: "+₹115",
    season: "রবি / Rabi 2024"
  },
  {
    crop: "যব / Barley",
    rate: "₹1,850",
    increase: "+₹75",
    season: "রবি / Rabi 2024"
  },
  {
    crop: "ভুট্টা / Maize",
    rate: "₹2,090",
    increase: "+₹92",
    season: "খরিফ / Kharif 2024"
  },
  {
    crop: "তুলা / Cotton",
    rate: "₹6,620",
    increase: "+₹320",
    season: "খরিফ / Kharif 2024"
  },
  {
    crop: "সরিষা / Mustard",
    rate: "₹5,650",
    increase: "+₹400",
    season: "রবি / Rabi 2024"
  }
];

const MSPPanel = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-cream to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-border">
          <CardHeader className="text-center bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              ন্যূনতম সহায়ক মূল্য / Minimum Support Price (MSP)
            </CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg">
              কেন্দ্রীয় সরকার কর্তৃক নির্ধারিত ২০২৪-২৫ মৌসুমের MSP হার
              <br />
              Central Government MSP Rates for 2024-25 Season
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold text-primary">
                      ফসল / Crop
                    </TableHead>
                    <TableHead className="font-semibold text-primary text-center">
                      MSP (প্রতি কুইন্টাল)
                    </TableHead>
                    <TableHead className="font-semibold text-primary text-center">
                      বৃদ্ধি / Increase
                    </TableHead>
                    <TableHead className="font-semibold text-primary text-center">
                      মৌসুম / Season
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mspData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{item.crop}</TableCell>
                      <TableCell className="text-center font-bold text-primary">
                        {item.rate}
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                          <TrendingUp className="h-4 w-4" />
                          {item.increase}
                        </span>
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {item.season}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="farm" 
                size="lg"
                onClick={() => window.open('https://farmer.gov.in/MSP.aspx', '_blank')}
              >
                সম্পূর্ণ MSP তালিকা / Complete MSP List
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://pmfby.gov.in', '_blank')}
              >
                ফসল বীমা / Crop Insurance
              </Button>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-sm text-muted-foreground text-center">
                <strong>দ্রষ্টব্য:</strong> MSP হার কেন্দ্রীয় সরকার কর্তৃক নির্ধারিত এবং নিয়মিত আপডেট করা হয়।
                <br />
                <em>Note: MSP rates are set by the Central Government and updated regularly.</em>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MSPPanel;