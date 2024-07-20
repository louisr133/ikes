import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Temp from "./Temp";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path:"", element:<LandingPage /> },
        { path:"menu", element: <Temp />},
        { path:"gallery", element: <Temp />},
        { path:"events", element: <Temp />}
      ]
    },
  ]);
  
  export default router;