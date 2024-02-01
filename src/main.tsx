import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./reset.css";
import "./index.css";
import { About } from "@pages/about/About";
import { Comic } from "@pages/comic/Comic";
import { Links } from "@pages/links/Links";
import { Layout } from "@components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout>
          <Comic />
        </Layout>
        <Analytics />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Layout>
          <About />
        </Layout>
        <Analytics />
      </>
    ),
  },
  {
    path: "/links",
    element: (
      <>
        <Layout>
          <Links />
        </Layout>
        <Analytics />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
