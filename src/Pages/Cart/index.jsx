import { useContext, useEffect, useState } from "react";
import { ButtonComponent } from "../../Components/Button";
import { UserContext } from "../../Providers/userProvider";
import { CardTop } from "../../Styles/PagesStyles/CartPage";
import { CartContainer } from "../../Styles/PagesStyles/CartPage";
import { Page } from "../../Styles/PagesStyles/CartPage";
import Navbar from "../../Components/Navbar";
import { CartProduct } from "../../Components/CartProduct";
const CartPage = () => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  });

  const { cartList, getCartList } = useContext(UserContext);

  useEffect(() => {
    getCartList(userId);
  }, [getCartList, userId]);

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
                R$:{" "}
                {cartList.reduce((acc, pdt) => pdt.price + acc, 0).toFixed()}{" "}
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
            {/* {cartList.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))} */}
            <CartProduct/>
          </div>
        </CartContainer>
      </div>
    </Page>
  );
};

export default CartPage;
