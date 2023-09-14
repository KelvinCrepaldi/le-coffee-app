import { CartCard } from "../../Styles/ComponentsStyle/CartProduct";
import { ButtonComponent } from "../Button";
import { AddRemovePdt } from "../../Styles/ComponentsStyle/CartProduct";

export const CartProduct = ({ product, index }) => {
  return (
    <CartCard>
      <img src={`/coffe/${index}.png`} alt="coffee" />
      <div className="info">
        <p>{product.name}</p>
        <p className="price">R$: {product.price}</p>
      </div>

      <AddRemovePdt>
        <button className="sub-add">-</button>
        <div className="qtd">
          <p>{product.quantity}</p>
        </div>
        <button className="sub-add">+</button>
      </AddRemovePdt>

      <ButtonComponent variant="brown" text="Remover" />
    </CartCard>
  );
};
