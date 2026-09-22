import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('sso_token'));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp * 1000 > Date.now()) { setUser(payload); } else { logout(); }
      } catch { logout(); }
    }
    setLoading(false);
  }, [token]);
  const login = (jwt) => { localStorage.setItem('sso_token', jwt); setToken(jwt); };
  const logout = () => { localStorage.removeItem('sso_token'); setToken(null); setUser(null); };
  return <AuthContext.Provider value={{ user, token, login, logout, loading }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);