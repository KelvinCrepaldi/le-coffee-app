import { ProductContainer } from "../../Styles/ComponentsStyle/ProductComponent";
import { ButtonComponent } from "../Button";
export const ProductComponent = () => {
  const product = {
    id: 1,
    name: "Minas Coffee",
    category: "Moido",
    image:
      "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 29.99,
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    sca: 80,
  };
  return (
    <ProductContainer>
      <div className="close-button">
        <button>X</button>
      </div>
      <div className="item-content">
        <div className="image-container">
          <img src={product.image} />
        </div>
        <div className="content-container">
          <h1>{product.name}</h1>
          <label className="category">{product.category}</label>
          <label className="price">{product.price}</label>
          <label>{product.description}</label>
          <div className="buttons-container">
            <div class="top-buttons-container">
              <ButtonComponent
                className="top-button unfill"
                variant="unfill"
                text="Adicionar ao carrinho"
              ></ButtonComponent>
              <ButtonComponent
                className="top-button unfill"
                variant="unfill"
                text="Solicitar amostra"
              ></ButtonComponent>
            </div>
            <ButtonComponent
              className="botton-button brown"
              variant="white"
              text="Fazer login"
            />
          </div>
        </div>
      </div>
      <div className="item-rating">
        <h1>Avaliações dos clientes</h1>
        <h2>Flunano</h2>
        <p>ASDKASIODK D SAOKDP SADPO SAPOD KSAOD KA POSAKPD KSAD </p>
      </div>
    </ProductContainer>
  );
};
