export default function ToastContainer({ toasts, onDismiss }) {
  // TODO (Task 2): render the toasts.
  //   - wrap them in a <div className="toast-container"> (already fixed-position in index.css)
  //   - map over `toasts`; for each toast render a <div>:
  //       key   = toast.id
  //       class = `toast toast-${toast.type}`   (so success/error/info look different)
  //       onClick = () => onDismiss(toast.id)    (click to dismiss early)
  //       text  = toast.message
  //   - add role="status" for accessibility
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => onDismiss(toast.id)}
          role="status"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
