import {
  ProductContainer,
  BackgroundTransparent,
} from "../../Styles/ComponentsStyle/ProductComponent";
import { GiCoffeeBeans } from "react-icons/gi";
import { RatingComponent } from "../Rating/Rating";
import { ButtonComponent } from "../Button";
import { Counter } from "../Counter";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../Providers/cartProvider";
import { SampleContainer } from "../SampleContainer";

export const ProductComponent = ({ product, setActive, indexProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [rateMedia, setRateMedia] = useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));
  const { addToCart } = useContext(CartContext);
  const history = useHistory();

  const handleCloseWindow = () => {
    setActive(false);
  };

  const handleAddToCart = () => {
    const obj = {
      userId: userId,
      productsId: product.id,
      sample: false,
      quantity: counter,
      image: product.image,
      price: product.price,
      name: product.name,
    };
    addToCart(obj, token);
  };

  const handleRequestSample = () => {
    setIsOpen(true);
  };

  const handleBuyNow = () => {
    history.push("/cart");
  };

  return (
    <>
      <BackgroundTransparent></BackgroundTransparent>
      <ProductContainer>
        {isOpen && <SampleContainer isOpen={isOpen} setIsOpen={setIsOpen} />}
        <div className="close-button">
          <button onClick={handleCloseWindow}>X</button>
        </div>
        <div className="item-content">
          <div className="image-container">
            <img src={`/coffe/${indexProduct}.png`} alt="product" />
          </div>
          <div className="content-container">
            <div className="titleContainer">
              <h1>{product.name}</h1>
              <span className="rate">
                <GiCoffeeBeans />
                <span>
                  {rateMedia
                    ? (Math.round(rateMedia * 10) / 10).toFixed(1)
                    : (0).toFixed(1)}
                </span>
              </span>
            </div>

            <span className="category">{product.category}</span>
            <span className="price">
              {Intl.NumberFormat("BRL", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
            <span className="description">{product.description}</span>
            <Counter counter={counter} setCounter={setCounter} />
            <div className="buttons-container">
              <div className="top-buttons-container">
                <ButtonComponent
                  className="top-button unfill"
                  variant="unfill"
                  text="Ir para o carrinho"
                  onClick={handleBuyNow}
                ></ButtonComponent>
                <ButtonComponent
                  className="top-button unfill"
                  variant="unfill"
                  text="Solicitar amostra"
                  onClick={handleRequestSample}
                ></ButtonComponent>
              </div>
              <ButtonComponent
                className="botton-button brown"
                variant="brown"
                text="Adicionar no carrinho"
                onClick={handleAddToCart}
              />
            </div>
          </div>
          <div className="item-rating">
            <h1>Avaliações</h1>
            <RatingComponent product={product} setRateMedia={setRateMedia} />
          </div>
        </div>
      </ProductContainer>
    </>
  );
};
