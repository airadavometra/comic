import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./reset.css";
import "./index.css";
import { AboutPage } from "@pages/AboutPage/AboutPage";
import { Comic } from "@pages/comic/Comic";
import { LinksPage } from "@pages/LinksPage/LinksPage";
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
          <AboutPage />
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
          <LinksPage />
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
