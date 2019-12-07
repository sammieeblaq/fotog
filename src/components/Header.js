import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <>
        <header>	
            <nav className="mnu navbar-light">
                <div className="logo" id="logo">
                    <h1><Link to="/">Fotog</Link></h1>
                </div>
                <label for="drop" className="toggle"><span className="fa fa-bars"></span></label>
                <input type="checkbox" id="drop" />
                    <ul className="menu">
                        <li className="mr-lg-4 mr-3 active"><Link to="/">Home</Link></li>
                        <li className="mr-lg-4 mr-3"><Link to="/AboutPage">About</Link></li>
                        <li className="mr-lg-4 mr-3">
                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                            <Link to="/">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></Link>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                            <li><Link to="/ServicesPage">Services</Link>
                            </li>
                            
                                <li><Link to="gallery.html">Gallery</Link>
                                </li>
                            </ul>
                        </li>

                        <li><Link to="/ContactPage">Contact Us</Link></li>
                    </ul>
            </nav>
        </header>
    </>
)

export default Header;