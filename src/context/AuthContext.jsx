import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../api/appwriteConfig";
import { ID } from "appwrite"; // Unique ID generator import karo

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

     // 🔹 Check if user is already logged in
     useEffect(() => {
          const checkUser = async () => {
               try {
                    const currentUser = await account.get();
                    setUser(currentUser);
               } catch (error) {
                    setUser(null);
               }
          };
          checkUser();
     }, []);

     // 🔹 Register function
     const register = async (email, password, fullName) => {
          try {
               const newUser = await account.create(ID.unique(), email, password, fullName); // Auto-login after signup
               return newUser;
          } catch (error) {
               console.error("Signup Error:", error.message);
               throw new Error(error.message);
          }
     };

     // 🔹 Login function
     const login = async (email, password) => {
          try {
               
               await account.createEmailPasswordSession(email, password);
               const currentUser = await account.get();
               setUser(currentUser);
          } catch (error) {
               console.error("Login Error:", error.message);
               throw new Error(error.message);
          }
     };

     // 🔹 Logout function
     const logout = async () => {
          try {
               await account.deleteSession("current");
               setUser(null);
          } catch (error) {
               console.error("Logout Error:", error.message);
          }
     };

     return (
          <AuthContext.Provider value={{ user, register, login, logout }}>
               {children}
          </AuthContext.Provider>
     );
};

// Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
