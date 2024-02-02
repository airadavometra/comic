import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./reset.css";
import "./index.css";
import { AboutPage } from "@pages/AboutPage/AboutPage";
import { ComicPage } from "@pages/ComicPage/ComicPage";
import { LinksPage } from "@pages/LinksPage/LinksPage";
import { Layout } from "@components/Layout/Layout";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ComicPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/links",
    element: (
      <Layout>
        <LinksPage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
