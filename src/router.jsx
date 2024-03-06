import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"

import Home from "./pages/home"
import Product from "./pages/product"
import User from "./pages/user"
import Client from "./pages/client"
import Quote from "./pages/quote"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Profile from "./pages/profile"

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
                Component: Client
            },
            {
                path: '/user',
                Component: User
            },
            {
                path: '/product',
                Component: Product
            },
            {
                path: '/quote',
                Component: Quote
            },
            {
                path: '/passwordChange',
                Component: Profile
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/signup',
        Component: Signup
    }
])

export default router 