import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Temp from "./Temp";
import Specials from "./Specials"
import ErrorPage from "./ErrorPage";
import Team from "./Team";

const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path:"", element:<LandingPage /> },
        { path:"specials", element: <Specials />},
        { path:"gallery", element: <Temp />},
        { path:"events", element: <Temp />},
        { path:"about", element: <Team />}
      ]
    },
  ]);
  
  export default router;