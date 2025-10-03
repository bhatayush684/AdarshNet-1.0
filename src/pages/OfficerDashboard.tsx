import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import { MapPin, FolderKanban, PlusCircle, Download, BarChart3 } from 'lucide-react';
import { getProjectsByOfficer, getAllVillages } from '@/lib/dummyData';
import { useState } from 'react';

const OfficerDashboard = () => {
  const projects = getProjectsByOfficer('2');
  const villages = getAllVillages().slice(0, 3);
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Government Officer Dashboard</h1>
          <p className="text-muted-foreground">Project management and village oversight</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Assigned Villages</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{villages.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Under supervision</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">My Projects</CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{projects.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Currently managing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
              </div>
              <Progress value={Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Villages</CardTitle>
              <CardDescription>Villages under your supervision</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {villages.map(village => (
                  <div key={village.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-semibold text-foreground">{village.name}</div>
                        <div className="text-sm text-muted-foreground">Population: {village.population.toLocaleString()}</div>
                      </div>
                      <Badge variant="secondary">{getProjectsByOfficer('2').filter(p => p.villageId === village.id).length} projects</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="text-muted-foreground">Electrification</div>
                        <Progress value={village.electrification} className="mt-1" />
                      </div>
                      <div>
                        <div className="text-muted-foreground">Sanitation</div>
                        <Progress value={village.sanitation} className="mt-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Charts</CardTitle>
              <CardDescription>Project completion overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { status: 'Completed (>90%)', count: projects.filter(p => p.progress > 90).length, color: 'bg-primary' },
                { status: 'In Progress (50-90%)', count: projects.filter(p => p.progress >= 50 && p.progress <= 90).length, color: 'bg-secondary' },
                { status: 'Early Stage (<50%)', count: projects.filter(p => p.progress < 50).length, color: 'bg-accent' },
              ].map(item => (
                <div key={item.status} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.status}</span>
                    <span className="text-muted-foreground">{item.count} projects</span>
                  </div>
                  <Progress value={(item.count / projects.length) * 100} className={item.color} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Project Management</CardTitle>
              <CardDescription>All projects assigned to you</CardDescription>
            </div>
            <Button onClick={() => setShowProjectForm(!showProjectForm)}>
              <PlusCircle className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </CardHeader>
          <CardContent>
            {showProjectForm && (
              <div className="mb-6 p-4 border border-border rounded-lg bg-muted/50">
                <h3 className="font-semibold mb-4">Create New Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project Name</Label>
                    <Input placeholder="Solar Panel Installation" defaultValue="Community Water Tank" />
                  </div>
                  <div className="space-y-2">
                    <Label>Village</Label>
                    <Select defaultValue="v1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {villages.map(v => (
                          <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select defaultValue="sanitation">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electrification">Electrification</SelectItem>
                        <SelectItem value="sanitation">Sanitation</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget (₹)</Label>
                    <Input type="number" placeholder="500000" defaultValue="750000" />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input type="date" defaultValue="2024-06-01" />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input type="date" defaultValue="2024-12-31" />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button>Submit Proposal</Button>
                  <Button variant="outline" onClick={() => setShowProjectForm(false)}>Cancel</Button>
                </div>
              </div>
            )}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map(project => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{project.category}</Badge>
                    </TableCell>
                    <TableCell>₹{(project.budget / 100000).toFixed(1)}L</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={project.progress} className="w-20" />
                        <span className="text-sm text-muted-foreground">{project.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                        {project.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Reports</CardTitle>
            <CardDescription>Download project reports and analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
                <Download className="w-5 h-5 mb-2 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Monthly Progress Report</div>
                  <div className="text-xs text-muted-foreground">All assigned projects</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
                <Download className="w-5 h-5 mb-2 text-secondary" />
                <div className="text-left">
                  <div className="font-semibold">Budget Utilization Report</div>
                  <div className="text-xs text-muted-foreground">Financial overview</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OfficerDashboard;
