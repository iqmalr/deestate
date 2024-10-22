import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import TestingPage from "./pages/TestingPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/test", element: <TestingPage /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
