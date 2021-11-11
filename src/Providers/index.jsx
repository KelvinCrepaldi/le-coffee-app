import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>{children}</LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default ProvidersGathered;
