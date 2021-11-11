import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
import { CatalogueProvider } from "./catalogue";
const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <CatalogueProvider>{children}</CatalogueProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default ProvidersGathered;
