import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet } from 'react-router-dom'
import GlobalStyles from "../styles/Global"

function Layout() {
    return (
        <div>
            <GlobalStyles />
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout