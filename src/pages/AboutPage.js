import React from "react";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
    <>
        <div class="inner-banner">
        {/* <!-- header --> */}
            <div class="top-head py-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 callnumber text-left">
                            </div>
                            <div class="col-md-6 callnumber text-right">
                                <li class="mr-3">Australia : +5687567890</li>
                                <li>Newyork : +4584567890</li>
                            </div>
                        </div>
                    </div>
            </div>
        <Header />
        {/* <!-- //header --> */}
        </div>
        {/* <!-- //banner --> */}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
        </nav>
        {/* <!-- about --> */}
        <section class="welcome py-5">
            <div class="container py-md-4 mt-md-3">
                <div class="w3ls-titles text-center">
                    <h3 class="title"><span class="hdng">About </span>Us</h3>
                    <p class="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
                <div class="row about-tp mt-md-5 pt-5">
                    <div class="col-lg-6 welcome-left">
                        <h3>Welcome</h3>
                        <h4>We are committed to offering travel services of the highest quality, combining our energy and enthusiasm, with our years
                            of experience. Our greatest satisfaction comes in serving large numbers of satisfied clients who have experienced the
                            joys and inspiration of travel.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros sagittis, quis hendrerit
                            libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
                    </div>
                    <div class="col-lg-6 welcome-right">
                        <div class="welcome-right-top">
                            <img src="images/g1.jpg" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- //about -->
        <!-- banner bottom --> */}
        <div class="banner-bottom py-5">
            <div class="container py-xl-3 py-lg-3">
                <div class="row">
                    <div class="col-md-9 banner-left-bottom-w3ls">
                        <h3 class="text-white my-3">How to Make Great Wedding Photos</h3>
                    </div>
                    <div class="col-md-3 button">
                        <a href="about.html" class="w3ls-button-agile">Read More
                            <span class="fa fa-hand-o-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //banner bottom -->
        <!-- about-team --> */}
        <section class="team py-5">
            <div class="container py-md-4 mt-md-3">
                <div class="w3ls-titles text-center">
                    <h3 class="title"><span class="hdng">Our </span>Photographers</h3>
                    <p class="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
                <div class="row team-row-agileinfo mt-md-5 pt-5">
                    <div class="col-lg-3 col-md-6 col-sm-6 team-grids">
                        <div class="thumbnail team-agileits">
                            <img src="images/te1.jpg" class="img-fluid" alt="" />
                            <div class="effectd-caption">
                                <h4 class="mb-3">Tegsner</h4>
                                <div class="social-lsicon">
                                    <a href="/" class="social-button twitter">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                    <a href="/" class="social-button facebook">
                                        <span class="fa fa-facebook"></span>
                                    </a>
                                    <a href="/" class="social-button google">
                                        <span class="fa fa-google-plus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 team-grids">
                        <div class="thumbnail team-agileits">
                            <img src="images/te2.jpg" class="img-fluid" alt="" />
                            <div class="effectd-caption">
                                <h4 class="mb-3">John</h4>
                                <div class="social-lsicon">
                                    <a href="/" class="social-button twitter">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                    <a href="/" class="social-button facebook">
                                        <span class="fa fa-facebook"></span>
                                    </a>
                                    <a href="/" class="social-button google">
                                        <span class="fa fa-google-plus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 team-grids">
                        <div class="thumbnail team-agileits">
                            <img src="images/te3.jpg" class="img-fluid" alt="" />
                            <div class="effectd-caption">
                                <h4 class="mb-3">Erison</h4>
                                <div class="social-lsicon">
                                    <a href="/" class="social-button twitter">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                    <a href="/" class="social-button facebook">
                                        <span class="fa fa-facebook"></span>
                                    </a>
                                    <a href="/" class="social-button google">
                                        <span class="fa fa-google-plus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 team-grids">
                        <div class="thumbnail team-agileits">
                            <img src="images/te4.jpg" class="img-fluid" alt="" />
                            <div class="effectd-caption">
                                <h4 class="mb-3">Roger</h4>
                                <div class="social-lsicon">
                                    <a href="/" class="social-button twitter">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                    <a href="/" class="social-button facebook">
                                        <span class="fa fa-facebook"></span>
                                    </a>
                                    <a href="/" class="social-button google">
                                        <span class="fa fa-google-plus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <!-- //about-team -->
        <!--footer --> */}
        <Footer />
    </>
)