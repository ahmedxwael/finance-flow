import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { SignInPage, SignUpPage } from "./modules/auth/pages";
import { DashboardPage } from "./modules/dashboard/pages";
import { HomePage } from "./modules/home/pages";
import { AuthLayout, CommonLayout } from "./modules/layouts";
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
  {
    element: <AuthLayout />,
    children: [
      {
        path: URLS.auth.signIn,
        element: <SignInPage />,
      },
      {
        path: URLS.auth.signUp,
        element: <SignUpPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
