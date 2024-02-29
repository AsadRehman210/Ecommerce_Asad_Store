import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from '../Context/CartContext';





const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const {total_item} = useCart()

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <NavLink className="navbar-brand nav_brand" to="/">
                        <span className='text-white'>Asad</span> Store
                    </NavLink>
                    <button className="navbar-toggler toggle_btn" type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span ><RiMenu3Line /> </span>
                    </button>
                    <div className={`offcanvas offcanvas-end w-50 ${menuOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Asad Rehman</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-5">
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={closeMenu} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={closeMenu} to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={closeMenu} to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={closeMenu} to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={closeMenu} to="/cart"><IoCartOutline />
                                        <span>{total_item}</span>
                                    </NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
