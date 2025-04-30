"use client";

import { IUserSession } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export interface IAuthContextProps {
  userData: IUserSession | null;
  setUserData: (userData: IUserSession | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>({
  userData: null,
  setUserData: () => {},
  logout: () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserSession | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userSession");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(
        "userSession",
        JSON.stringify({ token: userData.token, user: userData.user })
      );
      Cookies.set(
        "userSession",
        JSON.stringify({ token: userData.token, user: userData.user })
      );
    }
  }, [userData]);

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
