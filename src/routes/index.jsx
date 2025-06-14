import { About, Conatct, Event, Galerie, Home, NotFound, Services } from "../views"

const RoutePath =  [
    {
        path: '/',
        element: <Home />,
        name: "home",
    },
    {
        path: '/about',
        element: <About />,
        name: "about",
    },
    {
        path: '/services',
        element: <Services />,
        name: "services",
    },
    {
        path: '/galerie',
        element: <Galerie />,
        name: "galerie",
    },
    {
        path: '/event',
        element: <Event />,
        name: "events",
    },
    {
        path: '/contact',
        element: <Conatct />,
        name: "contact",
    },
    {
        path: "*",
        element: <NotFound />,
    }
]

export default RoutePath;