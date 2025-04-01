import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CategoryProvider } from "./context/CategoriesContext.jsx";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/configStore.js";

import LoadingOverlay from "./components/loading/LoadingOverlay.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProductProvider>
          <CategoryProvider>
            <LoadingOverlay />
            <ToastContainer />
            <App />
          </CategoryProvider>
        </ProductProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
