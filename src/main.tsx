import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import { About } from "@pages/about/About";
import { Comic } from "@pages/comic/Comic";
import { Links } from "@pages/links/Links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Comic />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/links",
    element: <Links />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
