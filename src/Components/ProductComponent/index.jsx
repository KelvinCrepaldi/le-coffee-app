import {
  ProductContainer,
  BackgroundTransparent,
} from "../../Styles/ComponentsStyle/ProductComponent";
import { ButtonComponent } from "../Button";
import { Counter } from "../Counter";
import { useState, useContext } from "react";
import { RatingComponent } from "../Rating/Rating";
import { UserContext } from "../../Providers/userProvider";

export const ProductComponent = ({ product, setActive }) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = parseInt(localStorage.getItem("userId"));

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
    };
    console.log(obj);
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
    };
    console.log(obj);
    console.log(token);
    addToCart(obj, token);
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
            <img src={product.image} />
          </div>
          <div className="content-container">
            <h1>{product.name}</h1>
            <label className="category">{product.category}</label>
            <label className="price">{product.price}</label>
            <label className="description">{product.description}</label>
            <Counter counter={counter} setCounter={setCounter} />
            <div className="buttons-container">
              <div class="top-buttons-container">
                <ButtonComponent
                  className="top-button unfill"
                  variant="unfill"
                  text="Adicionar ao carrinho"
                  onClick={handleAddToCart}
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
                text="Compre já!"
              />
            </div>
          </div>
          <div className="item-rating">
            <h1>Avaliações</h1>
            <RatingComponent />
          </div>
        </div>
      </ProductContainer>
    </>
  );
};
