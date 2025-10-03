import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { MapPin, Camera, FileText } from 'lucide-react';
import { getAllVillages } from '@/lib/dummyData';

const VolunteerDashboard = () => {
  const villages = getAllVillages().slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Volunteer Dashboard</h1>
          <p className="text-muted-foreground">Field data collection and survey submissions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Villages</CardTitle>
              <CardDescription>Your survey locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {villages.map(v => (
                  <div key={v.id} className="p-3 border border-border rounded flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{v.name}</div>
                        <div className="text-xs text-muted-foreground">Pop: {v.population.toLocaleString()}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">View Map</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Survey</CardTitle>
              <CardDescription>Field data collection form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Village</Label>
                  <Input defaultValue="Gram Sundaram" />
                </div>
                <div className="space-y-2">
                  <Label>Survey Type</Label>
                  <Input defaultValue="Sanitation Assessment" />
                </div>
                <div className="space-y-2">
                  <Label>Observations</Label>
                  <Textarea defaultValue="90% households have proper toilets. Waste collection needs improvement." rows={4} />
                </div>
                <div className="space-y-2">
                  <Label>Photos (3 uploaded)</Label>
                  <Button variant="outline" className="w-full">
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
                <Button className="w-full">Submit Survey</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Photos</CardTitle>
            <CardDescription>Recent field documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
