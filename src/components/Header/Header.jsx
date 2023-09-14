import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"
import logo from "../logo.png"
const Header = () => {
    return (
        <nav className='header'>

            <img src={logo} alt="logo" />
            <div>
                <Link to="/">TV Shows</Link>
                <Link to="/">Serials</Link>
                <Link to="/">Movies</Link>
                <Link to="/">Series</Link>
            </div>
            <FiSearch />


        </nav>

    )
}

export default Header
