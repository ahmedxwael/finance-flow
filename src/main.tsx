// Import polyfills first
import "./polyfills";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, useRouteError } from "react-router";
import { RouterProvider } from "react-router/dom";
import { SignInPage, SignUpPage } from "./modules/auth/pages";
import { DashboardPage } from "./modules/dashboard/pages";
import { HomePage } from "./modules/home/pages";
import { AuthLayout, CommonLayout } from "./modules/layouts";
import { URLS } from "./shared/urls";

export function ErrorBoundary() {
  const error = useRouteError();

  console.log("error", error);

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    errorElement: <ErrorBoundary />,
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
    errorElement: <ErrorBoundary />,
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
