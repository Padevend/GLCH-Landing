import React from "react";
import { Home, NotFound } from "../views";
const Contact = React.lazy(() => import('../views/contact'));
const GalerieView = React.lazy(() => import('../views/galerie/Grid'));
const Event = React.lazy(() => import('../views/events'));
const GalerieIndex = React.lazy(() => import('../views/galerie'));
const EventForms = React.lazy(() => import('../componnent'));

const RoutePath = [
  {
    path: "/",
    element: <Home />,
    name: "home",
  },
  {
    path: "/galerie",
    element: <GalerieIndex />,
    name: "galerie",
  },
  {
    path: "/galerie/:slug",
    element: <GalerieView />
  },
  {
    path: "/event",
    element: <Event />,
    name: "events",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "contact",
  },
  {
    path: "/event/:eventID",
    element: <EventForms />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default RoutePath;
