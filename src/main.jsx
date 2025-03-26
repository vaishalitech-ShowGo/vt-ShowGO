import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Import Provider from Redux
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/Store"; // ✅ Import Redux Store
import { EventProvider } from "./components/EventContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <EventProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
        </EventProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
