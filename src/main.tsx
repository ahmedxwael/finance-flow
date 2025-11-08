import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { DashboardPage } from "./modules/dashboard/pages";
import { HomePage } from "./modules/home/pages";
import { CommonLayout } from "./modules/layouts";
import { URLS } from "./shared/urls";

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      {
        path: URLS.home,
        element: <HomePage />,
      },
      {
        path: URLS.dashboard,
        element: <DashboardPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
