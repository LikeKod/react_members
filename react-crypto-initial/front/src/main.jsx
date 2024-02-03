import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthProvider } from "./providers/AuthProvider.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
