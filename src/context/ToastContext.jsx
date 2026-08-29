import { createContext, useContext, useState } from "react";
import ToastContainer from "../components/ToastContainer.jsx";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  // The list of active toasts. Each toast is { id, message, type, duration }.
  const [toasts, setToasts] = useState([]);

  // TODO (Task 1): implement dismissToast.
  //   - remove the toast whose id matches, using setToasts + filter
  //   - wrap it in useCallback with an empty dependency array so it stays stable
  const dismissToast = (id) => {
    // your code here
  };

  // TODO (Task 1): implement showToast.
  //   - generate a unique id with crypto.randomUUID()
  //   - add { id, message, type, duration } to the toasts array (updater form)
  //   - schedule auto-dismiss: setTimeout(() => dismissToast(id), duration)
  //   - wrap it in useCallback with [dismissToast] as the dependency
  const showToast = (message, type = "info", duration = 3000) => {
    // your code here
  };

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

// useToast lets any component grab showToast / dismissToast without prop drilling.
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside a ToastProvider");
  }
  return context;
}
