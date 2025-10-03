import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import { getCurrentUser, mockLogout } from '@/lib/mockAuth';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = getCurrentUser();

  const handleLogout = () => {
    mockLogout();
    toast({
      title: 'Logged out successfully',
      description: 'You have been logged out of your account.',
    });
    navigate('/login');
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AdarshNet</h1>
              <p className="text-xs text-muted-foreground">PM-AJAY Dashboard</p>
            </div>
          </Link>

          {user && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{user.name}</span>
                <span className="text-muted-foreground">({user.role.replace('_', ' ')})</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
