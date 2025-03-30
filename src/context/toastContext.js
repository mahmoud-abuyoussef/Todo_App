import { createContext, useState } from "react";
import SimpleSnackbar from "../components/SimpleSnackbar";

export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <ToastContext.Provider value={{ handleHideToast }}>
      <SimpleSnackbar open={open} message={message} />
      {children}
    </ToastContext.Provider>
  );
};
