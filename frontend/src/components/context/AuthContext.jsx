import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      // optionally decode token or fetch user profile here
      setUser({ token }); // or setUser(decodedUser)
    }
  }, []);
  const login = (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
    setUser({ token });
  };
  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
