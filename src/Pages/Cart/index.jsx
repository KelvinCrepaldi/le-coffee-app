import { useContext } from "react";
import { ButtonComponent } from "../../Components/Button";
import { CartContext } from "../../Providers/cartProvider";
import { CardTop } from "../../Styles/PagesStyles/CartPage";
import { CartContainer } from "../../Styles/PagesStyles/CartPage";
import { Page } from "../../Styles/PagesStyles/CartPage";
import Navbar from "../../Components/Navbar";
import { CartProduct } from "../../Components/CartProduct";
import React from "react";
import ModalOrder from "../../Components/Order/index";
import { UserContext } from "../../Providers/userProvider";
import { AddresCard } from "../../Components/AddresCard";

const CartPage = () => {
  /* const [userId] = useState(() => {
    const current = localStorage.getItem("userId") || "";
    return parseInt(current);
  }); */
  /* const [userToken] = useState(() => {
    const current = localStorage.getItem("token") || "";
    return JSON.parse(current);
  }); */
  const { cartList } = useContext(CartContext);
  const { modalIsOpen, openModal, closeModal, userAddress } =
    useContext(UserContext);

  /*   useEffect(() => {
    getCartList(userId);
  }, [getCartList, userId]);

  useEffect(() => {
    getUserAddress(userId, userToken);
  }, [getUserAddress, userId, userToken]); */

  const total = cartList.reduce(
    (acc, pdt) => pdt.price * pdt.quantity + acc,
    0
  );

  return (
    <Page>
      <div className="navBar">
        <Navbar className="nv" />
      </div>
      <div className="content">
        <div>
          <div className="card card--total">
            <CardTop>
              <p>Resumo</p>
              <p className="total"></p>
            </CardTop>
            <div className="summary">
              <p>
                Valor dos produtos: <span>R$ {total.toFixed(2)}</span>{" "}
              </p>
              <p>
                Desconto:<span>R$ 00,00</span>
              </p>
              <p>
                Total a prazo: <span>R$ {total.toFixed(2)}</span>
              </p>
              <div>
                Valor total do <strong>pagamento</strong> <br />
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <ButtonComponent
                onClick={openModal}
                variant="brown"
                text="Finalizar compra"
              />
            </div>
          </div>

          <div className="card card--address">
            <CardTop>
              <p>Selecionar endereço</p>
            </CardTop>

            <div className="addressList">
              {userAddress.map((item) => (
                <AddresCard key={item.id} address={item} />
              ))}
            </div>
          </div>
        </div>
        <CartContainer>
          <CardTop>
            <h3>Seu carrinho:</h3>
          </CardTop>
          <div className="listContainer">
            {cartList.map((item, index) => (
              <CartProduct key={item.id} product={item} index={index} />
            ))}
          </div>
        </CartContainer>
      </div>

      <ModalOrder modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Page>
  );
};

export default CartPage;
