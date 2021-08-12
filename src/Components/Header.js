import React from 'react'
import logo from '../Images/breakingbad-logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="center">
            <Link to="/">
                <img src={logo} alt="Breaking Bad Logo" />
            </Link>
        </header>
    )
}

export default Header
