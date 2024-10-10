import { createBrowserRouter, redirect } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"

import Home from "./pages/home"
import Product from "./pages/product"
import User from "./pages/user"
import Client from "./pages/client"
import Quote from "./pages/quote"
import Profile from "./pages/profile"
import AuthContainer from "./AuthContainer"

// Define la función loader para las rutas protegidas
const loaderProtected = async () => {
    if (!localStorage.getItem('token')) {
        return redirect('/login');
    }
    return null;
};

const router = createBrowserRouter([ 
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/client',
                Component: Client,
                loader: loaderProtected,
            },
            {
                path: '/user',
                Component: User,
                loader: loaderProtected,
            },
            {
                path: '/product',
                Component: Product,
                loader: loaderProtected,
            },
            {
                path: '/quote',
                Component: Quote,
                loader: loaderProtected,
            },
            {
                path: '/Profile',
                Component: Profile
            }
        ]
    },
    {
        path: '/login',
        Component: AuthContainer
    },
    {
        path: '/signup',
        Component: AuthContainer
    }
])

export default router 