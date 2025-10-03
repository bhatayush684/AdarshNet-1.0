import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { BarChart3, Users, FolderKanban, TrendingUp, Download, CheckCircle, Clock } from 'lucide-react';
import { getAllProjects, getAllVillages, getPendingProjects } from '@/lib/dummyData';

const AdminDashboard = () => {
  const villages = getAllVillages();
  const projects = getAllProjects();
  const pendingProjects = getPendingProjects();
  
  const completionRate = Math.round(
    (projects.filter(p => p.status === 'completed' || p.progress > 90).length / projects.length) * 100
  );

  const dummyUsers = [
    { id: '1', name: 'Admin User', email: 'admin@adarsh.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Rajesh Kumar', email: 'rajesh.officer@adarsh.com', role: 'Officer', status: 'Active' },
    { id: '3', name: 'Priya Singh', email: 'priya.officer@adarsh.com', role: 'Officer', status: 'Active' },
    { id: '4', name: 'Amit Patel', email: 'amit.officer@adarsh.com', role: 'Officer', status: 'Active' },
    { id: '5', name: 'Sunita Verma', email: 'sunita.volunteer@adarsh.com', role: 'Volunteer', status: 'Active' },
    { id: '6', name: 'Vikram Sharma', email: 'vikram.volunteer@adarsh.com', role: 'Volunteer', status: 'Active' },
    { id: '7', name: 'Deepa Gupta', email: 'deepa.volunteer@adarsh.com', role: 'Volunteer', status: 'Active' },
    { id: '8', name: 'Ram Prasad', email: 'ram.head@adarsh.com', role: 'Village Head', status: 'Active' },
    { id: '9', name: 'Sita Devi', email: 'sita.head@adarsh.com', role: 'Village Head', status: 'Active' },
    { id: '10', name: 'Mohan Lal', email: 'mohan.head@adarsh.com', role: 'Village Head', status: 'Active' },
    { id: '11', name: 'Krishna Das', email: 'krishna.head@adarsh.com', role: 'Village Head', status: 'Active' },
    { id: '12', name: 'Citizen One', email: 'citizen1@adarsh.com', role: 'Citizen', status: 'Active' },
    { id: '13', name: 'Citizen Two', email: 'citizen2@adarsh.com', role: 'Citizen', status: 'Active' },
    { id: '14', name: 'Citizen Three', email: 'citizen3@adarsh.com', role: 'Citizen', status: 'Active' },
    { id: '15', name: 'Test Officer', email: 'test.officer@adarsh.com', role: 'Officer', status: 'Inactive' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive overview of PM-AJAY implementation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Villages</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{villages.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Under PM-AJAY scheme</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{projects.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Active & completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{completionRate}%</div>
              <Progress value={completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{dummyUsers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Across all roles</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>{pendingProjects.length} projects awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingProjects.slice(0, 5).map(project => (
                  <div key={project.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{project.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Budget: ₹{(project.budget / 100000).toFixed(1)}L
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Project allocation by category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { category: 'Electrification', count: projects.filter(p => p.category === 'electrification').length, color: 'bg-chart-1' },
                { category: 'Sanitation', count: projects.filter(p => p.category === 'sanitation').length, color: 'bg-chart-2' },
                { category: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length, color: 'bg-chart-3' },
                { category: 'Education', count: projects.filter(p => p.category === 'education').length, color: 'bg-chart-4' },
              ].map(item => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.category}</span>
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
              <CardTitle>User Management</CardTitle>
              <CardDescription>All registered users in the system</CardDescription>
            </div>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Reports & Analytics</CardTitle>
              <CardDescription>Download comprehensive reports</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
                <Download className="w-5 h-5 mb-2 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Village Progress Report</div>
                  <div className="text-xs text-muted-foreground">Detailed metrics per village</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
                <Download className="w-5 h-5 mb-2 text-secondary" />
                <div className="text-left">
                  <div className="font-semibold">Budget Utilization</div>
                  <div className="text-xs text-muted-foreground">Financial summary</div>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
                <Download className="w-5 h-5 mb-2 text-accent" />
                <div className="text-left">
                  <div className="font-semibold">Citizen Feedback</div>
                  <div className="text-xs text-muted-foreground">Community responses</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
