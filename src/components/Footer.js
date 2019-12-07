import React from "react";


const Footer = () => (
    <>
        <footer>
            <section className="footer footer_w3layouts_section_1its py-5">
                <div className="container py-md-4">
                    <div className="row footer-top">
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-grid_section_1its_w3">
                            <div className="footer-title">
                                <h3>About Us</h3>
                            </div>
                            <div className="footer-text">
                                <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus.
                                    Nulla porttitor accumsana tincidunt. Vestibulum ante ipsum primis tempus convallis.</p>
                                
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-3 footer-grid_section_1its_w3">
                            <div className="footer-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul className="links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 footer-grid_section_1its_w3">
                            <div className="footer-title">
                                <h2>Subscribe</h2>
                            </div>
                            <div className="footer-text">
                                <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                                <form action="#" method="post">
                                    <input type="email" name="Email" placeholder="Enter your email..." required="" />
                                    <button className="btn1"><span className="fa fa-envelope" aria-hidden="true"></span></button>
                                    <div className="clearfix"> </div>
                                </form>
                            </div>
                            <ul className="social_section_1info">
                                    <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="/"><span className="fa fa-google-plus"></span></a></li>
                                    <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                                </ul>
                        </div>
                    </div>
                    <div className="row mt-md-5">
                        <div className="col-md-4 phn_w3l">
                            <h6 className="text-btm text-white">Phone : +2534894364</h6>
                        </div>
                        <div className="col-md-4 fax_w3l">
                            <h6 className="text-btm text-white">Fax : +2534894364</h6>
                        </div>
                        <div className="col-md-4 ema-w3l">
                            <h6 className="text-btm text-white">Email : <a href="mailto:info@example.com">info@example.com</a></h6>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>
);

export default Footer;