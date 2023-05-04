import { createBrowserRouter } from "react-router-dom";

import Layout from "components/layout/Layout";
import HomePage from "pages/HomePage";
import MenuPage from "pages/MenuPage";
import Page404 from "pages/Page404";
import ThanksPage from "pages/ThanksPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Page404 />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'menu',
                element: <MenuPage />,
            },
            {
                path: 'thanks',
                element: <ThanksPage />,
            },
        ],
    },
]);
