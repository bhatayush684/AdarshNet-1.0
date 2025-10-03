import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { Users, Heart, Droplet, Zap } from 'lucide-react';
import { getFeedbacksByVillage, getProjectsByVillage } from '@/lib/dummyData';

const VillageHeadDashboard = () => {
  const projects = getProjectsByVillage('v1');
  const feedbacks = getFeedbacksByVillage('v1');
  const villageStats = { population: 5420, electrification: 85, sanitation: 72, healthcare: 68, education: 75 };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Village Head Dashboard - Gram Sundaram</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Population</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{villageStats.population.toLocaleString()}</div>
            </CardContent>
          </Card>
          {[
            { label: 'Electrification', value: villageStats.electrification, icon: Zap },
            { label: 'Sanitation', value: villageStats.sanitation, icon: Droplet },
            { label: 'Healthcare', value: villageStats.healthcare, icon: Heart },
          ].map(stat => (
            <Card key={stat.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">{stat.value}%</div>
                <Progress value={stat.value} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Request Form</CardTitle>
              <CardDescription>Submit new project proposals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input defaultValue="Community Sports Ground" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input defaultValue="Education & Recreation" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea defaultValue="Need a proper sports ground for youth activities and community events." rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Estimated Budget (₹)</Label>
                <Input defaultValue="850000" />
              </div>
              <Button className="w-full">Submit Request</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Citizen Feedback</CardTitle>
              <CardDescription>{feedbacks.length} recent submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {feedbacks.slice(0, 5).map(f => (
                  <div key={f.id} className="p-3 border border-border rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium text-sm">{f.citizenName}</div>
                      <div className="text-xs text-muted-foreground">{new Date(f.timestamp).toLocaleDateString()}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{f.message}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>{projects.length} ongoing initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {projects.map(p => (
                <div key={p.id} className="p-4 border border-border rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-muted-foreground">₹{(p.budget / 100000).toFixed(1)}L</div>
                  </div>
                  <Progress value={p.progress} className="mb-2" />
                  <div className="text-sm text-muted-foreground">{p.progress}% Complete</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VillageHeadDashboard;
