import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockLogin, getCurrentUser } from '@/lib/mockAuth';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      navigateByRole(user.role);
    }
  }, []);

  const navigateByRole = (role: string) => {
    const routes: Record<string, string> = {
      admin: '/admin',
      officer: '/officer',
      volunteer: '/volunteer',
      village_head: '/village-head',
      citizen: '/citizen'
    };
    navigate(routes[role] || '/');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const user = mockLogin(email, password);

    if (user) {
      toast({
        title: 'Login successful',
        description: `Welcome back, ${user.name}!`,
      });
      navigateByRole(user.role);
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password. Please try again.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  const testCredentials = [
    { email: 'admin@adarsh.com', password: 'admin123', role: 'Admin' },
    { email: 'officer@adarsh.com', password: 'officer123', role: 'Govt Officer' },
    { email: 'volunteer@adarsh.com', password: 'volunteer123', role: 'Volunteer' },
    { email: 'village@adarsh.com', password: 'village123', role: 'Village Head' },
    { email: 'citizen@adarsh.com', password: 'citizen123', role: 'Citizen' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">AdarshNet</h1>
            <p className="text-xl text-muted-foreground">PM Adarsh Gram Yojana Dashboard</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🏘️</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Village Transformation</h3>
                <p className="text-sm text-muted-foreground">Track progress across 10 villages</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground">Monitor 50+ active projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Community Engagement</h3>
                <p className="text-sm text-muted-foreground">Citizen feedback & transparency</p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login to AdarshNet</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@adarsh.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Demo Credentials:</p>
              <div className="space-y-2">
                {testCredentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="text-xs p-2 bg-muted rounded cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => {
                      setEmail(cred.email);
                      setPassword(cred.password);
                    }}
                  >
                    <div className="font-semibold text-foreground">{cred.role}</div>
                    <div className="text-muted-foreground">{cred.email} / {cred.password}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-accent/10 border border-accent/30 rounded text-xs text-muted-foreground">
              <strong>⚠️ Demo Mode:</strong> This uses client-side authentication for demonstration only. Not secure for production use.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
