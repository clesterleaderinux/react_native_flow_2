export interface User {
  username: string;
  isAuthenticated: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface ThemeState {
  theme: string;
}

export interface DashboardItem {
  id: string;
  title: string;
  description: string;
  value: string;
  color: string;
  icon?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description?: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning' | 'error';
}