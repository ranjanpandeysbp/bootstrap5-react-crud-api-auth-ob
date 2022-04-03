import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-uppercase" to="/">MyPostApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/posts">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/create">Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/about">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar