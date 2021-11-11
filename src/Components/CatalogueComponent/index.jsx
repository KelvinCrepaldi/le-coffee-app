import {
  BoxCard,
  Container,
  Content,
  ImageTop,
  Footer,
} from "../../Styles/ComponentsStyle/CatalogueComponent";
import logoNavbar from "../../assets/Logo-main-black 4.png";
import { useContext } from "react";
import { CatalogueContext } from "../../Providers/catalogue";
import { ButtonComponent } from "../Button";
const CatalogueComponent = () => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      <ImageTop>
        <h1>PRODUTOS <br/> <span>Home &gt; Produtos</span></h1>
      </ImageTop>
      <Content>
        {catalogue.map((product, index) => (
          <BoxCard key={index}>
            <img src={product.image} />
            <div>
              <h3>{product.name}</h3>
              <span>{product.category}</span>
              <p>{product.price}</p>
              <ButtonComponent variant="white" text = "Vizualizar"></ButtonComponent>
            </div>
          </BoxCard>
        ))}
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
export default CatalogueComponent;
