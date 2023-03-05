import { type FC, lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { DefaultLayout } from "../components/layout";

const Home = lazy<FC>(async () => await import("./home"));
const NotFound = lazy<FC>(async () => await import("./not-found"));

const routes: RouteObject[] = [
  {
    path: "/0144/",
    element: <DefaultLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export { routes as default };
