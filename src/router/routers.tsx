import {createBrowserRouter} from "react-router-dom";
import CallInfoPage from "../pages/call-info-page/CallInfoPage.tsx";
import CallPage from "../pages/call-page/CallPage.tsx";

export const defaultRouter = createBrowserRouter([
    {
        path: '/',
        element: <CallInfoPage />
    },
    {
        path: '/:id',
        element: <CallPage />
    }
])

