import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useEffect } from 'react'

function MainLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [navigate])  

    return (
        <>  
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout


//Outlet renderiza todos los childrens que se tengan en el Component 