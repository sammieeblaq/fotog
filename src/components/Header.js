import React from "react";

const Header = () => (
    <>
        <header>	
            <nav className="mnu navbar-light">
                <div className="logo" id="logo">
                    <h1><a href="index.html">Fotog</a></h1>
                </div>
                <label for="drop" className="toggle"><span className="fa fa-bars"></span></label>
                <input type="checkbox" id="drop" />
                    <ul className="menu">
                        <li className="mr-lg-4 mr-3 active"><a href="index.html">Home</a></li>
                        <li className="mr-lg-4 mr-3"><a href="about.html">About</a></li>
                        <li className="mr-lg-4 mr-3">
                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                            <a href="/">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                            <li><a href="services.html">Services</a>
                            </li>
                            
                                <li><a href="gallery.html">Gallery</a>
                                </li>
                            </ul>
                        </li>

                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
            </nav>
        </header>
    </>
)

export default Header;