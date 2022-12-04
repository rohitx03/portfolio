import React from 'react';
import './css/Navbar.css';
const Navbar = () => {
    return (
        <>
        <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-dark">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
            </nav>
            </div>

            </header>

        </>
    )
}

export default Navbar
