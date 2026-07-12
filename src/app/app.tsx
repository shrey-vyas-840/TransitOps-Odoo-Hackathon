import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { router } from "@/app/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="transitops-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
