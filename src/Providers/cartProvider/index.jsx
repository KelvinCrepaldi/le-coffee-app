import { createContext, useState } from "react";
import { ErrorAlert, SuccessAlert } from "../../Components/Alerts";
import api from "../../Services";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);
  
  const getCartList = (usrID) => {
    if (usrID !== "") {
      api
        .get(`users/${usrID}?_embed=userCart`)
        .then((res) => {
          setCartList(res.data.userCart);
        })
        .catch((err) => console.log(err));
    }
  }

  const findRepeated = (id) =>{
    const idList = JSON.parse(localStorage.getItem("idList")) || [];

    if(!idList.includes(id)){
      idList.push(id)
    }
    else{
      return true
    }

    localStorage.setItem("idList",JSON.stringify([...idList]))
    return false
  }

  const removeIDLocal = (id) => {
    const idList = JSON.parse(localStorage.getItem("idList")) || [];

   const newList = idList.filter((item)=> item !== id);
   localStorage.setItem("idList",JSON.stringify([...newList]))
  }

  const addToCart = (newPdt, usrToken) => {
    const isRepeated = findRepeated(newPdt.productsId);
    if(!isRepeated){
      api
        .post("userCart", newPdt, {
          headers: {
            Authorization: `Bearer ${usrToken}`,
          },
        })
        .then((res) => SuccessAlert("Adicionado", "top-right"))
        .catch((err) =>
          ErrorAlert("Não foi possível adicionar o produto", "top-right")
        );
    }
    else{
      ErrorAlert("Produto já adicionado", "top-right")
    }
  };

  const removeFromCart = (pdtID, usrToken) => {
    
    api
      .delete(`userCart/${pdtID}`, {
        headers: {
          Authorization: `Bearer ${usrToken}`,
        },
      })
      .catch(() =>
        ErrorAlert("Não foi possível remover o produto", "top-right")
      );
  };

  const clearCart = (usrToken) => {
    cartList.forEach(element => {
      removeFromCart(element.id,usrToken)
    });
  };
  

  return (
    <CartContext.Provider
      value={{
        removeIDLocal,
        cartList,
        getCartList,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
