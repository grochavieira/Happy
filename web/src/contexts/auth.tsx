import { AsyncLocalStorage } from "async_hooks";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn({ email, password }: any): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("@happy-user");

      if (storagedUser) {
        console.log(storagedUser);
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStoragedData();
  }, []);

  async function signIn({ email, password }: any) {
    console.log({ email, password });
    const { data } = await api.post("/users/login", { email, password });

    console.log(data);
    if (data.error) {
      toast.warn(data.error);
    } else {
      toast.success("Login efetuado com sucesso!");
      setUser(data);
      localStorage.setItem("@happy-user", JSON.stringify(data));
    }
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem("@happy-user");
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: {}, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
