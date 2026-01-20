import React from "react";
import { Event, Galerie, Home, NotFound } from "../views";
// import ArticlesView from "../views/Articles";
const Contact = React.lazy(() => import('../views/contact'));
// const Galerie = React.lazy(() => import('../views/galerie'));
// const Event = React.lazy(() => import('../views/events'));
// const Services = React.lazy(() => import('../views/services'));
const EventForms = React.lazy(() => import('../componnent'));

const RoutePath = [
  {
    path: "/",
    element: <Home />,
    name: "home",
  },
  {
    path: "/galerie",
    element: <Galerie />,
    name: "galerie",
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
