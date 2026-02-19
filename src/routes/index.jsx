// router.tsx
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../views";
import { MaterialNavbar } from "../componnent";

const Contact = React.lazy(() => import("../views/contact"));
const GalerieView = React.lazy(() => import("../views/galerie/Grid"));
const Event = React.lazy(() => import("../views/events"));
const GalerieIndex = React.lazy(() => import("../views/galerie"));
const EventForms = React.lazy(() => import("../componnent"));
const DonateView = React.lazy(() => import("../views/donation/mobilePayement"));
const DonationProviderView  = React.lazy(() => import("../views/donation/dinationView"));

const RouteLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="relative flex items-center justify-center">
        {/* Anneau extérieur rotatif */}
        <div className="w-16 h-16 border-4 border-violet-100 border-t-violet-600 rounded-full animate-spin"></div>

        {/* Logo ou point central pulsant */}
        <div className="absolute w-8 h-8 bg-violet-600 rounded-full animate-pulse opacity-20"></div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-900 animate-pulse">
          Chargement
        </h2>
        <p className="text-xs text-gray-400 mt-2 font-medium">
          Préparation de votre expérience...
        </p>
      </div>

      {/* Barre de progression discrète en haut */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden bg-violet-50">
        <div className="h-full bg-violet-600 animate-[loading_2s_ease-in-out_infinite] w-full origin-left"></div>
      </div>
    </div>
  );
};

/**
 * HOC withSuspense mis à jour avec le nouveau design
 */
const withSuspense = (Component) => (
  <Suspense fallback={<RouteLoader />}>
    {Component}
  </Suspense>
);

// Création du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MaterialNavbar />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/galerie",
        element: withSuspense(<GalerieIndex />)
      },
      {
        path: "/galerie/:slug",
        element: withSuspense(<GalerieView />),
      },
      {
        path: "/event",
        element: withSuspense(<Event />)
      },
      {
        path: "/contact",
        element: withSuspense(<Contact />),
      },
      {
        path: "/event/:eventID",
        element: withSuspense(<EventForms />),
      }
    ]
  },
  {
    path: "/donate",
    children: [
      {
        index: true,
        element: withSuspense(<DonationProviderView />)
      },
      {
        path: "mobile",
        element: withSuspense(<DonateView />)
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
