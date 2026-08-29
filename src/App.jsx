import CreateThreadForm from "./components/CreateThreadForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

export default function App() {
  return (
    <div className="page">
      <h1>Threadbase</h1>
      <p className="lead">
        Try the forms below. Once you finish the toast system, each action should show a
        toast in the top-right corner.
      </p>
      <div className="grid">
        <CreateThreadForm />
        <LoginForm />
      </div>
    </div>
  );
}
