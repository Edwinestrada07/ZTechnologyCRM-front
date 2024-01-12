import { createBrowserRouter } from "react-router-dom"
import Users from "./layouts/users"
import Home from "./pages/home"
import Client from "./pages/client"
import Login from "./pages/login"
import Product from "./pages/product"

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
                path: '/Client',
                Component: Client
            },
            {
                path: '/Product',
                Component: Product
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    }
])

export default router 