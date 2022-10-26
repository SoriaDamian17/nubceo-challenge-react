import { useRoutes } from "react-router-dom";
import GuardProvider from "./components/Template/Guard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewBand from "./pages/View";

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/Home',
            element: <GuardProvider><Home /></GuardProvider>
        },
        {
            path: '/View/:id',
            element: <GuardProvider><ViewBand /></GuardProvider>
        },
    ])
}