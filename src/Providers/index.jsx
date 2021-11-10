import { RegisterProvider } from "./registerProvider";

const ProvidersGathered = ({ children }) => {
  return (
    <>
      <RegisterProvider>{children}</RegisterProvider>
    </>
  );
};

export default ProvidersGathered;
