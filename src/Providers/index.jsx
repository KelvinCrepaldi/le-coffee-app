import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
import { CatalogueProvider } from "./catalogue";
import { UserProvider } from "./userProvider";
import { RatingProvider } from "./rating";
import { CartProvider } from "./cartProvider";
const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RatingProvider>
        <RegisterProvider>
          <LoginProvider>
            <UserProvider>
              <CartProvider>
              <CatalogueProvider>{children}</CatalogueProvider>
              </CartProvider>
            </UserProvider>
          </LoginProvider>
        </RegisterProvider>
      </RatingProvider>
    </>
  );
};

export default ProvidersGathered;
