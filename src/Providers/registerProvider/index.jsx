import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  return <RegisterContext.Provider>{children}</RegisterContext.Provider>;
};
