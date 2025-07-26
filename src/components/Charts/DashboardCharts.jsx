import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for pest damage by crop type
const pestDamageData = [
  { name: 'ধান / Rice', value: 35, color: '#4CAF50' },
  { name: 'গম / Wheat', value: 25, color: '#FBC02D' },
  { name: 'ভুট্টা / Maize', value: 20, color: '#FF9800' },
  { name: 'আলু / Potato', value: 12, color: '#8D6E63' },
  { name: 'অন্যান্য / Others', value: 8, color: '#03A9F4' }
];

// Dummy data for flood damage by district
const floodDamageData = [
  { district: 'Cooch Behar', damage: 45, recovery: 75 },
  { district: 'Jalpaiguri', damage: 38, recovery: 68 },
  { district: 'Darjeeling', damage: 22, recovery: 85 },
  { district: 'Malda', damage: 55, recovery: 60 },
  { district: 'Murshidabad', damage: 42, recovery: 72 },
  { district: 'West Tripura', damage: 35, recovery: 80 }
];

const COLORS = ['#4CAF50', '#FBC02D', '#FF9800', '#8D6E63', '#03A9F4'];

const DashboardCharts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            কৃষি পরিসংখ্যান / Agricultural Analytics
          </h2>
          <p className="text-lg text-muted-foreground">
            গত বছরের ফসলের ক্ষয়ক্ষতি ও পুনরুদ্ধারের তথ্য / Last year's crop damage and recovery data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pie Chart - Pest Damage by Crop */}
          <Card className="shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                পোকামাকড়ের ক্ষতি (ফসল অনুযায়ী)
              </CardTitle>
              <CardDescription>
                Pest Damage by Crop Type (% of total damage)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pestDamageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pestDamageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {pestDamageData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Flood Damage by District */}
          <Card className="shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                বন্যার ক্ষতি ও পুনরুদ্ধার (জেলা অনুযায়ী)
              </CardTitle>
              <CardDescription>
                Flood Damage & Recovery by District (% affected area)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={floodDamageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="district" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      `${value}%`, 
                      name === 'damage' ? 'ক্ষতি / Damage' : 'পুনরুদ্ধার / Recovery'
                    ]}
                  />
                  <Bar dataKey="damage" fill="#FF6B6B" name="damage" />
                  <Bar dataKey="recovery" fill="#4CAF50" name="recovery" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span>ক্ষতি / Damage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>পুনরুদ্ধার / Recovery</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardCharts;