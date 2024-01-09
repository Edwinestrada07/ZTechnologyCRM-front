import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import { useEffect } from "react"

function Users() {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    return (
        <>  
            <Navbar />
            <Outlet />
        </>
    )
}

export default Users


//Outlet renderiza todos los childrens que se tengan en el Component 