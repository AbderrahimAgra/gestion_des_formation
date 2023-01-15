import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Formations from "./pages/Formations";
import Login from "./pages/Login";
import Organismes from "./pages/Organismes";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },
    { path: "/formations", element: <Formations /> },
    { path: "/organismes", element: <Organismes /> },
    { path: "/employees", element: <Employees /> },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  export default router