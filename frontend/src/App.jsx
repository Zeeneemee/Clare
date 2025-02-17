import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/NavBar";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import CameraCapture from "./pages/Camera";
import "./index.css";
import Products from "./pages/products";
import Loading from "./pages/LoadingPage";
import Result from "./pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "camera", element: <CameraCapture /> },
      { path: "products", element: <Products /> },
      { path: "loading", element: <Loading /> },
      { path: "result", element: <Result /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
