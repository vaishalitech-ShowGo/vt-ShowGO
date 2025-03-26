// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
     const [isLoggedIn, setIsLoggedIn] = useState(() => {
          return localStorage.getItem('isLoggedIn') === 'true';
     });

     const login = () => {
          localStorage.setItem('isLoggedIn', true);
          setIsLoggedIn(true);
     };

     const logout = () => {
          localStorage.removeItem('isLoggedIn');
          setIsLoggedIn(false);
     };

     return (
          <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
               {children}
          </AuthContext.Provider>
     );
}

export function useAuth() {
     return useContext(AuthContext);
}