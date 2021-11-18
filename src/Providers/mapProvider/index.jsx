import { createContext, useEffect } from "react";
import api from "../../Services";
import { ErrorAlert } from "../../Components/Alerts";
import { useState } from "react";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [regionCoordinates, setRegionCoordinates] = useState();

  useEffect(() => {
    getRegionCoordinates();
  }, []);

  const getRegionCoordinates = () => {
    api
      .get("/regionCoordinates")
      .then((res) => {
        setRegionCoordinates(res.data);
      })
      .catch((err) => {});
  };

  return (
    <MapContext.Provider value={{ regionCoordinates }}>
      {children}
    </MapContext.Provider>
  );
};
