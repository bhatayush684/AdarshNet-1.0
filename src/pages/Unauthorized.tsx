import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <ShieldAlert className="w-24 h-24 mx-auto text-destructive" />
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-xl text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/">Go to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Login Again</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
