
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

    const login = (username, password, role = "regular") => {
    const loggedInUser = {
        username,
        role,
    };

    setUser(loggedInUser);
    };

  const logout = () => {
    setUser(null);
  };

    const isAdmin = () => {
        return user?.role === 'admin';
    };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
    value={{
        user,
        login,
        logout,
        isAuthenticated,
        isAdmin
    }}
    >
    {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
