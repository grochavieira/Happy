import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AccessContextData {
  hasAccessed: boolean;
  hasUsedMapSelection: boolean;
  appAccess: () => void;
  cursorAccess: () => void;
}

const AccessContext = createContext<AccessContextData>({} as AccessContextData);

export const AccessProvider: React.FC = ({ children }) => {
  const [hasAccessed, setHasAccessed] = useState(false);
  const [hasUsedMapSelection, setHasUsedMapSelection] = useState(false);

  useEffect(() => {
    async function retrieveData() {
      try {
        const appValue = await AsyncStorage.getItem("@HasAccessed");
        const cursorValue = await AsyncStorage.getItem("@HasUsedMapSelection");
        if (appValue !== null) {
          setHasAccessed(true);
        }
        if (cursorValue !== null) {
          setHasUsedMapSelection(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    retrieveData();
  }, []);

  async function appAccess() {
    try {
      await AsyncStorage.setItem("@HasAccessed", "true");
      setHasAccessed(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function cursorAccess() {
    try {
      await AsyncStorage.setItem("@HasUsedMapSelection", "true");
      setHasUsedMapSelection(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AccessContext.Provider
      value={{ hasAccessed, appAccess, hasUsedMapSelection, cursorAccess }}
    >
      {children}
    </AccessContext.Provider>
  );
};

export default AccessContext;

export function useAccess() {
  const context = useContext(AccessContext);
  return context;
}
