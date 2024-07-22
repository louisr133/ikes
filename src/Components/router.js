import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Specials from "./Specials"
import ErrorPage from "./ErrorPage";
import Team from "./Team";
import UnderConstruction from "./UnderConstruction";

const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path:"", element:<LandingPage /> },
        { path:"specials", element: <Specials />},
        { path:"gallery", element: <UnderConstruction/>},
        { path:"events", element: <UnderConstruction/>},
        { path:"about", element: <Team />}
      ]
    },
  ]);
  
  export default router;