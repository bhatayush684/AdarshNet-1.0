// Mock authentication system - CLIENT-SIDE ONLY
// WARNING: This is for demo purposes only. NOT secure for production.

export type UserRole = 'admin' | 'officer' | 'volunteer' | 'village_head' | 'citizen';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'admin@adarsh.com': {
    password: 'admin123',
    user: {
      id: '1',
      email: 'admin@adarsh.com',
      name: 'Admin User',
      role: 'admin'
    }
  },
  'officer@adarsh.com': {
    password: 'officer123',
    user: {
      id: '2',
      email: 'officer@adarsh.com',
      name: 'Government Officer',
      role: 'officer'
    }
  },
  'volunteer@adarsh.com': {
    password: 'volunteer123',
    user: {
      id: '3',
      email: 'volunteer@adarsh.com',
      name: 'Volunteer Worker',
      role: 'volunteer'
    }
  },
  'village@adarsh.com': {
    password: 'village123',
    user: {
      id: '4',
      email: 'village@adarsh.com',
      name: 'Village Head',
      role: 'village_head'
    }
  },
  'citizen@adarsh.com': {
    password: 'citizen123',
    user: {
      id: '5',
      email: 'citizen@adarsh.com',
      name: 'Citizen User',
      role: 'citizen'
    }
  }
};

export const mockLogin = (email: string, password: string): User | null => {
  const userData = MOCK_USERS[email.toLowerCase()];
  if (userData && userData.password === password) {
    localStorage.setItem('mockUser', JSON.stringify(userData.user));
    return userData.user;
  }
  return null;
};

export const mockLogout = () => {
  localStorage.removeItem('mockUser');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('mockUser');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};
