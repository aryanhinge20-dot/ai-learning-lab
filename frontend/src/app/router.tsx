import { createBrowserRouter } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import ExperimentPage from "@/pages/ExperimentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/experiment",
    element: <ExperimentPage />,
  },
]);