import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import { suburbs } from "./data/suburbs";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SuburbPage from "./pages/SuburbPage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="bottom-right" />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});

// Suburb routes
const surferParadiseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-surfers-paradise",
  component: () => <SuburbPage suburb={suburbs[0]} />,
});

const broadbeachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-broadbeach",
  component: () => <SuburbPage suburb={suburbs[1]} />,
});

const southportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-southport",
  component: () => <SuburbPage suburb={suburbs[2]} />,
});

const robinaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-robina",
  component: () => <SuburbPage suburb={suburbs[3]} />,
});

const burleighHeadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-burleigh-heads",
  component: () => <SuburbPage suburb={suburbs[4]} />,
});

const palmBeachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-palm-beach",
  component: () => <SuburbPage suburb={suburbs[5]} />,
});

const varsityLakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-varsity-lakes",
  component: () => <SuburbPage suburb={suburbs[6]} />,
});

const hopeIslandRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-hope-island",
  component: () => <SuburbPage suburb={suburbs[7]} />,
});

const coomeraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-coomera",
  component: () => <SuburbPage suburb={suburbs[8]} />,
});

const nerangRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bond-cleaning-nerang",
  component: () => <SuburbPage suburb={suburbs[9]} />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  faqRoute,
  surferParadiseRoute,
  broadbeachRoute,
  southportRoute,
  robinaRoute,
  burleighHeadsRoute,
  palmBeachRoute,
  varsityLakesRoute,
  hopeIslandRoute,
  coomeraRoute,
  nerangRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
