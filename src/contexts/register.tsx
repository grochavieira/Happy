import React, { createContext, useEffect, useState, useContext } from "react";

import api from "../services/api";

interface Position {
  longitude: number;
  latitude: number;
}

interface RegisterContextData {
  position: Position;
  name: string;
  about: string;
  whatsapp: string;
  images: string[];
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  setPosition: ({ latitude, longitude }: Position) => void;
  setName: (name: string) => void;
  setAbout: (about: string) => void;
  setWhatsapp: (whatsapp: string) => void;
  setImages: (images: string[]) => void;
  setInstructions: (instructions: string) => void;
  setOpeningHours: (opening_hours: string) => void;
  setOpenOnWeekends: (open_on_weekends: boolean) => void;
  handleCreateOrphanage: () => Promise<boolean>;
  resetData: () => void;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData
);

export const RegisterProvider: React.FC = ({ children }) => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(false);

  function resetData() {
    setPosition({
      latitude: 0,
      longitude: 0,
    });
    setName("");
    setAbout("");
    setWhatsapp("");
    setImages([]);
    setInstructions("");
    setOpeningHours("");
    setOpenOnWeekends(false);
  }

  async function handleCreateOrphanage() {
    try {
      const { latitude, longitude } = position;

      console.log({
        name,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        latitude,
        longitude,
      });

      const data = new FormData();

      data.append("name", name);
      data.append("about", about);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));
      data.append("instructions", instructions);
      data.append("opening_hours", opening_hours);
      data.append("open_on_weekends", String(open_on_weekends));
      data.append("whatsapp", whatsapp);

      images.forEach((image, index) => {
        data.append("images", {
          name: `image_${index}.jpg`,
          type: "image/jpg",
          uri: image,
        } as any);
      });

      await api.post("/orphanages", data);
      resetData();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        position,
        setPosition,
        name,
        setName,
        about,
        setAbout,
        whatsapp,
        setWhatsapp,
        images,
        setImages,
        instructions,
        setInstructions,
        opening_hours,
        setOpeningHours,
        open_on_weekends,
        setOpenOnWeekends,
        handleCreateOrphanage,
        resetData,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}
