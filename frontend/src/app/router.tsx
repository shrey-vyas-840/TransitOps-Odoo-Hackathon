import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "@/components/layout/app-layout";
import { navItems } from "@/constants/navigation";
import { ForgotPasswordPage } from "@/modules/auth/pages/forgot-password-page";
import { LoginPage } from "@/modules/auth/pages/login-page";
import { ShellPlaceholderPage } from "@/modules/shell/pages/shell-placeholder-page";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      ...navItems.map((item) => ({
        path: item.path.replace(/^\//, ""),
        element: <ShellPlaceholderPage navItem={item} />,
      })),
    ],
  },
]);
