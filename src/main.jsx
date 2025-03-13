// Removed StrictMode import as it's no longer used
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./components/common/GlobalStyle.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
