import { createContext, useState, useEffect, useContext } from "react";
import api from "../../Services";

export const CatalogueContext = createContext();

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  // Caso precise filtrar algum produto o State de filtro vem aqui
  const getProductsCatalogue = () => {
    api.get("products").then((response) => setCatalogue(response.data));
  };

  useEffect(() => {
    getProductsCatalogue();
  }, []);

  //Aqui viria a função de filtro

  return (
      <CatalogueContext.Provider value = {{catalogue}}>
          {children}
      </CatalogueContext.Provider>
  )
};
