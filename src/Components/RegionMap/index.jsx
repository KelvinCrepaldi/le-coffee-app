import {
  LeafletContainer,
  Container,
  Content,
  ImageTop,
  Footer,
} from "../../Styles/ComponentsStyle/RegionMap";
import logoNavbar from "../../assets/Logo-main-black 4.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContext } from "../../Providers/mapProvider";
import { SelectionContainer } from "../../Styles/PagesStyles/MapPage";
import { useContext, useState } from "react";
import { CatalogueContext } from "../../Providers/catalogue";

export const RegionMapComponent = () => {
  const { catalogue } = useContext(CatalogueContext);
  const [onMap, setOnMap] = useState(catalogue);
  const [onRegion, setOnRegion] = useState([-13, -50]);

  const regionsCoodinates = {
    Norte: [-4.1980208, -64.339829],
    Nordeste: [-5.8649465, -40.5746692],
    "Centro-Oeste": [-16.7181934, -53.2924268],
    Sudeste: [-21.0378141, -45.7110132],
    Sul: [-27.2944101, -51.4119555, 8],
  };

  const setRegion = (selectedRegion) => {
    if (selectedRegion === "all") {
      setOnMap(catalogue);
      setOnRegion([-13, -50]);
    } else {
      const filterList = catalogue.filter((e) => e.region === selectedRegion);
      setOnMap(filterList);
      setOnRegion(regionsCoodinates[selectedRegion]);
      console.log(regionsCoodinates[selectedRegion]);
    }
  };

  return (
    <Container>
      <ImageTop>
        <h1>
          Mapa <br /> <span>Home &gt; Mapa</span>
        </h1>
      </ImageTop>
      <Content>
        <SelectionContainer>
          <section className="btts">
            <button onClick={() => setRegion("all")}>Todas as regiões</button>
            <button onClick={() => setRegion("Norte")}>Norte</button>
            <button onClick={() => setRegion("Nordeste")}>Nordeste</button>
            <button onClick={() => setRegion("Centro-Oeste")}>
              Centro-Oeste
            </button>
            <button onClick={() => setRegion("Sudeste")}>Sudeste</button>
            <button onClick={() => setRegion("Sul")}>Sul</button>
          </section>

          <section className="slct">
            <select
              defaultValue="default"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="default" disabled>
                Escolher uma região
              </option>
              <option value="all">Todas as regiões</option>
              <option value="Norte">Norte</option>
              <option value="Nordeste">Nordeste</option>
              <option value="Centro-Oeste">Centro-Oeste</option>
              <option value="Sudeste">Sudeste</option>
              <option value="Sul">Sul</option>
            </select>
          </section>
        </SelectionContainer>

        <LeafletContainer>
          <MapContainer
            center={onRegion}
            zoom={4}
            scrollWheelZoom={true}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "30px",
              border: "3px solid #AA6655",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {onMap.map((e) => (
              <Marker position={e.position}>
                <Popup>{e.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </LeafletContainer>
      </Content>
      <Footer>
        <img src={logoNavbar}></img>
        <p>
          © Copyright 2021 Todos os direitos reservados <br /> Le Coffe 2021{" "}
        </p>
      </Footer>
    </Container>
  );
};
