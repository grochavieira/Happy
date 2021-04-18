import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AccessContextData {
  hasAccessed: boolean;
  appAccess: () => void;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

export const AccessProvider: React.FC = ({ children }) => {
  const [hasAccessed, setHasAccessed] = useState(false);
  useEffect(() => {}, []);

  useEffect(() => {
    async function retrieveData() {
      try {
        const value = await AsyncStorage.getItem("@HasAccessed");
        if (value !== null) {
          setHasAccessed(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    retrieveData();
  }, []);

  async function appAccess() {
    try {
      console.log("ENTROU AQU+=");
      await AsyncStorage.setItem("@HasAccessed", "true");
      setHasAccessed(true);
      console.log(hasAccessed);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AccessContext.Provider value={{ hasAccessed, appAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

export default AccessContext;
