import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  OrphanagesContainer,
  ImageContainer,
} from "../styles/pages/dashboard";
import DashboardSidebar from "../components/DashboardSidebar";
import OrphanageItem from "../components/OrphanageItem";
import { Orphanage } from "../pages/Orphanage";
import noOrphanagesImg from "../images/no-orphanages.svg";
import api from "../services/api";

export default function Dashboard() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function getOrphanages() {
      const { data } = await api.get("/orphanages");
      setOrphanages(data);
    }

    getOrphanages();
  }, []);

  return (
    <>
      <DashboardSidebar />
      <Container>
        <Header>
          <h2>Orfanatos Cadastrados</h2>
          <p>{orphanages.length} orfanatos</p>
        </Header>
        <OrphanagesContainer>
          {orphanages.map((orphanage) => (
            <OrphanageItem orphanage={orphanage} />
          ))}
        </OrphanagesContainer>
        {orphanages.length === 0 ? (
          <ImageContainer>
            <img src={noOrphanagesImg} alt="no-orphanages" />
          </ImageContainer>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
