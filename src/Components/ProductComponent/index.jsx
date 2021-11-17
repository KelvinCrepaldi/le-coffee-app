import { GiCoffeeBeans } from "react-icons/gi";
import {
  ProductContainer,
  BackgroundTransparent,
} from "../../Styles/ComponentsStyle/ProductComponent";
import { ButtonComponent } from "../Button";
import { Counter } from "../Counter";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { RatingComponent } from "../Rating/Rating";
import { CartContext } from "../../Providers/cartProvider";

export const ProductComponent = ({ product, setActive }) => {
  const history = useHistory();
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(CartContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));
  const [rateMedia, setRateMedia] = useState(0);

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
    const obj = {
      userId: userId,
      productsId: product.id,
      sample: true,
      quantity: 1,
      image: product.image,
      price: product.price,
      name: product.name,
    };
    addToCart(obj, token);
  };

  const handleBuyNow = () => {
    history.push("/cart");
  };

  return (
    <>
      <BackgroundTransparent></BackgroundTransparent>
      <ProductContainer>
        <div className="close-button">
          <button onClick={handleCloseWindow}>X</button>
        </div>
        <div className="item-content">
          <div className="image-container">
            <img src={product.image} alt="product"/>
          </div>
          <div className="content-container">
            <div className="titleContainer">
              <h1>{product.name}</h1>
              <span className="rate">
                <GiCoffeeBeans />
                {Math.round(rateMedia * 10) / 10}
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
              <div class="top-buttons-container">
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
