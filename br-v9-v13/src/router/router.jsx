import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Company from "../pages/Company";
import StocksAndA from "../pages/StocksAndAnalyses";
/**
 * this is the routing component that faccilitates the different pages the application has
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "StocksAndA",
        element: <StocksAndA />,
      },
      {
        path: "Company",
        element: <Company />,
      },
    ],
  },
]);

export default router;
