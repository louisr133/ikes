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
        { path:"ikes/", element:<LandingPage /> },
        { path:"ikes/menu", element: <Temp />},
        { path:"ikes/gallery", element: <Temp />},
        { path:"ikes/events", element: <Temp />}
      ]
    },
  ]);
  
  export default router;