import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);
const USERS_KEY = 'mold-muse-users';
const SESSION_KEY = 'mold-muse-user';

function readUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
  catch { return []; }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  });

  const signup = (profile, password) => {
    const users = readUsers();
    if (users.some(account => account.email.toLowerCase() === profile.email.toLowerCase())) {
      return { error: 'An account with this email already exists.' };
    }
    const account = { ...profile, email: profile.email.toLowerCase(), password };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, account]));
    const session = { ...profile, email: account.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { user: session };
  };

  const login = (email, password) => {
    const account = readUsers().find(item => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password);
    if (!account) return { error: 'We couldn’t find an account with those details. Please check and try again.' };
    const session = { ...account };
    delete session.password;
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { user: session };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const value = useMemo(() => ({ user, signup, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
