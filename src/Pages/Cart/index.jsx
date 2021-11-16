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

  // const testList = [
  //   {
  //     id: 1,
  //     name: "Minas Coffee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.99,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  //   {
  //     id: 2,
  //     name: "Minas Coffee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.99,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  //   {
  //     id: 3,
  //     name: "Minas Coffee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.99,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  //   {
  //     id: 4,
  //     name: "Minas Coffee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.99,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  //   {
  //     id: 5,
  //     name: "Minas Coffee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.99,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  //   {
  //     id: 6,
  //     name: "Minas Coffeeeeee",
  //     category: "Moido",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //     price: 29.39,
  //     description:
  //       "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
  //     sca: 80,
  //   },
  // ]
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
                {cartList.reduce((acc, pdt) => pdt.price + acc, 0).toFixed(2)}
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
