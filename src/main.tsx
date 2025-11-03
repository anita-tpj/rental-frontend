import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 4,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme
        appearance="light"
        accentColor="indigo"
        radius="medium"
        scaling="100%"
      >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Theme>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
