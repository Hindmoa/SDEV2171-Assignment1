import { createContext, useContext, useState, ReactNode } from "react";
import { loginUser } from "../services/api";

// Define the authenticated user's information
type User = {
  id: string;
  name: string;
  email: string;
};

// Define the authentication context
type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provide authentication state to the application
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Authenticate the user and store the token
  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);

    setUser(data.user);
    setToken(data.token);
  };

  // Clear authentication state
  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for accessing authentication state
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}