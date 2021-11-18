import { useContext, useEffect, useState } from "react";
import { ButtonComponent } from "../../Components/Button";
import { CartContext } from "../../Providers/cartProvider";
import { CardTop } from "../../Styles/PagesStyles/CartPage";
import { CartContainer } from "../../Styles/PagesStyles/CartPage";
import { Page } from "../../Styles/PagesStyles/CartPage";
import Navbar from "../../Components/Navbar";
import { CartProduct } from "../../Components/CartProduct";

const CartPage = () => {
  const [userID] = useState(()=>{
    const current = localStorage.getItem("userId") || "";
    return parseInt(current)
  })
  const { getCartList, cartList } = useContext(CartContext);
  
  useEffect(() => {
    getCartList(userID);
  }, [getCartList, userID]);
  
  const  total = cartList.reduce((acc, pdt) => (pdt.price * pdt.quantity) + acc,0)
    
  return (
    <Page>
      <div className="navBar">
        <Navbar className="nv" />
      </div>
      <div className="content">
        <div>
          <div className="card card--address">
            <CardTop>
              <p>Selecionar endereço</p>
            </CardTop>

            <div className="addressList"></div>
          </div>

          <div className="card card--total">
            <CardTop>
              <p>Total a pagar:</p>
              <p className="total">
                R$:
                {total.toFixed(2)}
              </p>
            </CardTop>
            <div className="chosenAddress">
              <p>Enviar para:</p>
              <p>Casa*</p>
            </div>
            <ButtonComponent variant="brown" text="Finalizar compra" />
          </div>
        </div>
        <CartContainer>
          <CardTop>
            <h3>Seu carrinho:</h3>
          </CardTop>
          <div className="listContainer">
            {cartList.map((item) => (
              <CartProduct key={item.id} product={item} />
            ))}
          </div>
        </CartContainer>
      </div>
    </Page>
  );
};

export default CartPage;
