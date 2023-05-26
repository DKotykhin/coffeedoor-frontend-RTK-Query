import { createBrowserRouter } from "react-router-dom";

import Layout from "components/layout/Layout";
import HomePage from "pages/HomePage";
import MenuPage from "pages/MenuPage";
import Page404 from "pages/Page404";
import ThanksPage from "pages/ThanksPage";
import PersonalPage from "pages/PersonalPage";
import AdminPage from "pages/AdminPage";
import UpdateItemPage from "pages/UpdateItemPage";
import CreateItemPage from "pages/CreateItemPage";

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
            {
                path: 'personal',
                element: <PersonalPage />,
            },
            {
                path: 'admin',
                element: <AdminPage />,
            },
            {
                path: 'admin/:itemId',
                element: <UpdateItemPage />,
            },
            {
                path: 'admin/create',
                element: <CreateItemPage />,
            },
        ],
    },
]);
