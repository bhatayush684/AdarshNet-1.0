import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import { getAllProjects, getAllAnnouncements, getAllFeedbacks } from '@/lib/dummyData';
import { useMemo, useState } from 'react';
import { addFeedback, getPersistedFeedbacks } from '@/lib/persistence';

const CitizenPortal = () => {
  const projects = getAllProjects().slice(0, 15);
  const announcements = getAllAnnouncements();
  const [message, setMessage] = useState('The street lighting project has greatly improved safety in our area. Thank you!');
  const persistedFeedbacks = useMemo(() => getPersistedFeedbacks(getAllFeedbacks()), []);
  const feedbacks = persistedFeedbacks.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Citizen Portal - Transparency Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>All Village Projects</CardTitle>
              <CardDescription>Transparent view of ongoing initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map(p => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell><Badge variant="outline">{p.category}</Badge></TableCell>
                      <TableCell>₹{(p.budget / 100000).toFixed(1)}L</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={p.progress} className="w-16" />
                          <span className="text-sm">{p.progress}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Feedback</CardTitle>
              <CardDescription>Share your thoughts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Your feedback about village development..." rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button className="w-full" onClick={() => {
                const id = `f${Date.now()}`;
                addFeedback({ id, citizenName: 'Citizen', villageId: 'v1', message, timestamp: new Date().toISOString(), rating: 5 });
                // naive reload of page state
                window.location.reload();
              }}>Submit Feedback</Button>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3 text-sm">Recent Feedback</h4>
                <div className="space-y-2">
                  {feedbacks.map(f => (
                    <div key={f.id} className="text-xs p-2 bg-muted rounded">
                      <div className="font-medium">{f.citizenName}</div>
                      <div className="text-muted-foreground line-clamp-2">{f.message}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Announcements & Events</CardTitle>
            <CardDescription>Latest updates from administration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map(a => (
                <div key={a.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{a.title}</h3>
                    <Badge>{a.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{a.description}</p>
                  <div className="text-xs text-muted-foreground">{new Date(a.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenPortal;
