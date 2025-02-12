import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import CameraCapture from "./components/Camera";
import './App.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "camera", element: <CameraCapture /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
