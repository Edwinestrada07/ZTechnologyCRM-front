import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"

import Home from "./pages/home"
import Client from "./pages/client"
import User from "./pages/user"
import Product from "./pages/product"
import Login from "./pages/login"
import Cart from "./pages/cart"
import Signup from "./pages/signup"

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
                path: '/cart',
                Component: Cart
            },
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