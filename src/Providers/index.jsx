import { RegisterProvider } from "./registerProvider";
import { LoginProvider } from "./loginProvider";
import { UserProvider } from "./userProvider";

const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserProvider>
          {children}
          </UserProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};

export default ProvidersGathered;
