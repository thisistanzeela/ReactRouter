import ReactDOM from "react-dom/client";
import Body from "./Components/Body.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRouter} />);
