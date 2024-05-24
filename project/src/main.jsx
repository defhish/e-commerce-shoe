
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/productDetail",
        element: <ProductDetail />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ufg3sbrpr0btzdlb.us.auth0.com"
    clientId="ldRSFKTmSMuwJhoaWYmJVzELa2hfsob0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>

);

