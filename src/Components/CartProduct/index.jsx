import { CartCard } from "../../Styles/ComponentsStyle/CartProduct";
import { ButtonComponent } from "../Button";
import { useContext, useState } from "react";
import { CartContext } from "../../Providers/cartProvider";
import { AddRemovePdt } from "../../Styles/ComponentsStyle/CartProduct";
import api from "../../Services";

export const CartProduct = ({ product, index }) => {
  const [userToken] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { removeFromCart, removeIDLocal } = useContext(CartContext);

  const handleRemove = () => {
    removeIDLocal(product.productsId);
    removeFromCart(product.id, userToken);
  };

  const removeOnePdt = () => {
    const newQtd = product.quantity - 1;
    if (newQtd < 1) {
      removeFromCart(product.id, userToken);
    } else {
      api.patch(
        `userCart/${product.id}`,
        { quantity: newQtd },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
    }
  };

  const addOnePdt = () => {
    const newQtd = product.quantity + 1;
    api.patch(
      `userCart/${product.id}`,
      { quantity: newQtd },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  };

  return (
    <CartCard>
      <img src={`/coffe/${index}.png`} alt="coffee" />
      <div className="info">
        <p>{product.name}</p>
        <p className="price">R$: {product.price}</p>
      </div>

      <AddRemovePdt>
        <button className="sub-add" onClick={removeOnePdt}>
          -
        </button>
        <div className="qtd">
          <p>{product.quantity}</p>
        </div>
        <button className="sub-add" onClick={addOnePdt}>
          +
        </button>
      </AddRemovePdt>

      <ButtonComponent variant="brown" text="Remover" onClick={handleRemove} />
    </CartCard>
  );
};
