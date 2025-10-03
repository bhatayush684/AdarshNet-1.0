import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, FileText, MessageSquare, TrendingUp, Shield, Zap } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: BarChart3, title: 'Village Progress Tracking', description: 'Real-time monitoring of development projects across all villages' },
    { icon: Shield, title: 'Role-Based Transparency', description: 'Secure access control for admins, officers, volunteers, and citizens' },
    { icon: FileText, title: 'Analytics & Reports', description: 'Comprehensive reports and data visualization for informed decisions' },
    { icon: MessageSquare, title: 'Community Feedback System', description: 'Direct citizen participation and feedback channels' },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'For Government', description: 'Better monitoring & accountability across all development initiatives' },
    { icon: Zap, title: 'For Villages', description: 'Faster development project approvals and transparent tracking' },
    { icon: Users, title: 'For Citizens', description: 'Transparency & participation in local governance decisions' },
  ];

  const steps = [
    { number: '01', title: 'Login with your role', description: 'Access your personalized dashboard based on your role' },
    { number: '02', title: 'Track projects & progress', description: 'Monitor ongoing projects and their completion status' },
    { number: '03', title: 'Share feedback & download reports', description: 'Participate actively and access comprehensive reports' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
              PM-AJAY Digital Initiative
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              AdarshNet – Empowering Villages<br />through Transparency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Track, manage, and transform villages under the PM-AJAY scheme with data-driven insights and community participation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/login">Login to Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">10</div>
              <div className="text-lg text-muted-foreground">Villages Onboarded</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-secondary">50</div>
              <div className="text-lg text-muted-foreground">Projects in Progress</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-accent">65%</div>
              <div className="text-lg text-muted-foreground">Average Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for effective village transformation management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Benefits?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AdarshNet serves multiple stakeholders in the village development ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with AdarshNet in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Village?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join AdarshNet today and be part of the digital governance revolution
          </p>
          <Button asChild size="lg" className="text-lg px-12">
            <Link to="/login">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">AdarshNet</h3>
              <p className="text-sm text-muted-foreground">
                Empowering villages through transparency and digital governance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AdarshNet. All rights reserved. A PM-AJAY Digital Initiative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
