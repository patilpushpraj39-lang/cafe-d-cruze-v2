import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--parchment)] px-4">
      <div className="max-w-md text-center">
        <h1 className="display-text text-[var(--espresso)]">404</h1>
        <p className="mt-4 text-[var(--fog)]">This page wandered off for a coffee.</p>
        <Link to="/" className="btn-amber mt-8">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--parchment)] px-4">
      <div className="max-w-md text-center">
        <h1 className="h2-text text-[var(--espresso)]">Something spilled.</h1>
        <p className="mt-3 text-[var(--fog)]">Try again — we'll get it cleaned up.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-amber mt-6">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Café D Cruzé | Premium Café in Fernwood City | Open 8 AM – 1 AM" },
      { name: "description", content: "Dine-in café in Fernwood City. Open daily 8 AM – 1 AM. Crafted food, hand-pulled coffee, and warm conversation." },
      { property: "og:site_name", content: "Café D Cruzé" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Café D Cruzé | Premium Café in Fernwood City | Open 8 AM – 1 AM" },
      { name: "twitter:title", content: "Café D Cruzé | Premium Café in Fernwood City | Open 8 AM – 1 AM" },
      { property: "og:description", content: "Dine-in café in Fernwood City. Open daily 8 AM – 1 AM. Crafted food, hand-pulled coffee, and warm conversation." },
      { name: "twitter:description", content: "Dine-in café in Fernwood City. Open daily 8 AM – 1 AM. Crafted food, hand-pulled coffee, and warm conversation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/33d6b982-c018-4d1b-9066-c58f6d6b4e23/id-preview-44c0c8a9--430a3ac3-3a9d-4745-a086-83e1e1928bc0.lovable.app-1782408604031.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/33d6b982-c018-4d1b-9066-c58f6d6b4e23/id-preview-44c0c8a9--430a3ac3-3a9d-4745-a086-83e1e1928bc0.lovable.app-1782408604031.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
