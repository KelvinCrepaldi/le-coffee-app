import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
import { CatalogueProvider } from "./catalogue";
import { UserProvider } from "./userProvider";
import { RatingProvider } from "./rating";
const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RatingProvider>
        <RegisterProvider>
          <LoginProvider>
            <UserProvider>
              <CatalogueProvider>{children}</CatalogueProvider>
            </UserProvider>
          </LoginProvider>
        </RegisterProvider>
      </RatingProvider>
    </>
  );
};

export default ProvidersGathered;
