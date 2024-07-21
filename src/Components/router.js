import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Temp from "./Temp";
import ErrorPage from "./ErrorPage";
import Team from "./Team";

const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path:"", element:<LandingPage /> },
        { path:"menu", element: <Temp />},
        { path:"gallery", element: <Temp />},
        { path:"events", element: <Temp />},
        { path:"about", element: <Team />}
      ]
    },
  ]);
  
  export default router;