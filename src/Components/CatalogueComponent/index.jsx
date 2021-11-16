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
import { ProductComponent } from "../ProductComponent";
import { useState } from "react";

const CatalogueComponent = () => {
  const { catalogue } = useContext(CatalogueContext);
  const [selectedProduct, setSelectedProduct] = useState();
  const [active, setActive] = useState(false);

  const handleOpenModal = (product) => {
    console.log(product);
    setSelectedProduct(product);
    setActive(true);
  };

  return (
    <Container>
      {active && (
        <ProductComponent
          product={selectedProduct}
          active={active}
          setActive={setActive}
        ></ProductComponent>
      )}
      <ImageTop>
        <h1>
          PRODUTOS <br /> <span>Home &gt; Produtos</span>
        </h1>
      </ImageTop>
      <Content>
        {catalogue.map((product, index) => (
          <BoxCard key={index}>
            <img src={product.image} />
            <div>
              <h3>{product.name}</h3>
              <span>{product.category}</span>
              <p>{product.price}</p>
              <ButtonComponent
                variant="white"
                text="Vizualizar"
                onClick={() => handleOpenModal(product)}
              ></ButtonComponent>
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
