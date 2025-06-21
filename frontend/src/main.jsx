import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
