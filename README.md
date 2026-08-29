# Threadbase - Toast Notification System (Starter)

Build a toast notification system from scratch - no library. You will implement a
`useToast` hook, a fixed-position `ToastContainer`, and wire toasts into two mutations.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL. You will see a "Create a thread" form and a "Log in" form.
Right now, submitting them does nothing visible - your job is to make them show toasts.

There is **no backend to run**. `src/api/mockApi.js` fakes the network with Promises that
resolve or reject, shaped exactly like real Axios responses and errors.

## What you implement

- `src/context/ToastContext.jsx` - `showToast` and `dismissToast` (with `useCallback`), plus
  `crypto.randomUUID()` for ids and `setTimeout` for auto-dismiss. (`ToastProvider` and
  `useToast` are already scaffolded.)
- `src/components/ToastContainer.jsx` - render the toasts with type-conditional styling and
  click-to-dismiss. (Currently returns `null`.)
- `src/components/CreateThreadForm.jsx` and `src/components/LoginForm.jsx` - call `showToast`
  in each mutation's `onSuccess` and `onError`.

## What is already done

- The app is wrapped in `ToastProvider` (see `src/main.jsx`).
- TanStack Query is configured; both forms already run mutations.
- All CSS is provided in `src/index.css` (including `.toast-container`, `.toast`,
  `.toast-success`, `.toast-error`, `.toast-info`). Just apply the classes.

## Testing your work

- Post a **new** thread title -> green "Thread posted!" toast, gone in 3 seconds.
- Post the title `Welcome to Threadbase` -> red duplicate-title toast.
- Log in with `ada` / `password` -> success toast. Wrong login -> red error toast.
- Click any toast -> it dismisses immediately.
- Fire several quickly -> they stack in the top-right corner.
