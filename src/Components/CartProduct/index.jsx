import { CartCard } from "../../Styles/ComponentsStyle/CartProduct";
import { ButtonComponent } from "../Button";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/userProvider";
import { AddRemovePdt } from "../../Styles/ComponentsStyle/CartProduct";
export const CartProduct = ({ product }) => {
  const [qtd, setQtd] = useState(0);
  const [userToken] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  });

  const { removeFromCart } = useContext(UserContext);

  const handleRemove = () => {
    removeFromCart(product.id, userToken);
  };

  return (
    <CartCard>
      <img src={product.image} alt="coffee" />
      <div className="info">
        <p>{product.name}</p>
        <p className="price">R$: {product.price}</p>
      </div>

      <AddRemovePdt>
        <button className="sub-add">
          -
        </button>
        <div className="qtd">
          <p>{product.quantity}</p>
        </div>
        <button className="sub-add">
          +
        </button>
      </AddRemovePdt>

      <ButtonComponent variant="brown" text="Remover" onClick={handleRemove} />
    </CartCard>
  );
};
