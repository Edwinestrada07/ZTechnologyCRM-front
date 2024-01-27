import { createBrowserRouter } from "react-router-dom"
import Users from "./layouts/users"

import Home from "./pages/home"
import Client from "./pages/client"
import User from "./pages/user"
import Product from "./pages/product"
import Login from "./pages/login"
import Cart from "./pages/cart"

const router = createBrowserRouter([ 
    {
        path: '/',
        Component: Users,
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
    }
])

export default router 