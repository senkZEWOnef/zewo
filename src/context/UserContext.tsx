import { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  aud: string;
  role: string;
  email_confirmed_at: string;
  app_metadata: {
    provider: string;
    role: string;
  };
  user_metadata: {
    username: string;
  };
  created_at: string;
  updated_at: string;
}

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
  loadingUser: boolean;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    // Check for stored user session in localStorage
    const storedUser = localStorage.getItem('zewo-admin-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('zewo-admin-user');
      }
    }
    setLoadingUser(false);
  }, []);

  // Store user in localStorage when set
  const setUserWithStorage = (user: User | null) => {
    setUser(user);
    if (user) {
      localStorage.setItem('zewo-admin-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('zewo-admin-user');
    }
  };

  const signOut = async () => {
    localStorage.removeItem('zewo-admin-user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserWithStorage, signOut, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
