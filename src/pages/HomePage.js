import React from "react";

//  Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => (
    <>
        <div className="banner" id="home">
        {/* <!-- header --> */}
            <div className="top-head py-3">
                    <div className="container">
                        <div classNameName="row">
                            <div className="col-md-6 callnumber text-left">
                            </div>
                            <div className="col-md-6 callnumber text-right">
                                <li className="mr-3">Australia : +5687567890</li>
                                <li>Newyork : +4584567890</li>
                            </div>
                        </div>
                    </div>
            </div>
            <Header />
            {/* <!-- //header --> */}
            <div className="container">
                {/* <!-- banner-text --> */}
                <div className="banner-text">
                <div className="slider-info">
                        <h3>We Provide Best Photographer</h3>
                        <a className="btn btn-primary mt-3" href="services.html" role="button">Read more</a>
                    </div>
                </div>
            </div>
            {/* <!-- //container --> */}
        </div>
        {/* <!-- //banner --> */}
        <div className="agileits-services py-md-5 py-4" id="services">
            <div className="container py-lg-5">
            <div className="w3ls-titles text-center mb-5">
                    <h3 className="title"><span className="hdng">Services </span>We Provide</h3>
                    <p className="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
                <div className="agileits-services-row row py-lg-5 pb-5 text-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="agileits-services-grids">
                        <span className="fa fa-camera-retro"></span>
                            <h4>Wildlife Photographer
                            </h4>
                        
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur. </p>
                            <a href="about.html" className="service-btn">read more</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
                        <span className="fa fa-video-camera"></span>
                            <h4>Fashion Photographer
                            </h4>
                        
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur. </p>
                            <a href="about.html" className="service-btn">read more</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="agileits-services-grids mt-lg-0 mt-5">
                            <span className="fa fa-camera"></span>
                            <h4>Event Photographer
                            </h4>
                        
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur.</p>
                            <a href="about.html" className="service-btn">read more</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  mt-lg-0 mt-5">
                        <div className="agileits-services-grids">
                        <span className="fa fa-film"></span>
                            <h4>Landscape Photographer
                            </h4>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur.</p>
                            <a href="about.html" className="service-btn">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        {/* <!-- banner bottom --> */}
        <div className="banner-bottom py-5">
            <div className="container py-xl-3 py-lg-3">
                <div className="row">
                    <div className="col-md-9 banner-left-bottom-w3ls">
                        <h3 className="text-white my-3">How to Make Great Wedding Photos</h3>

                    </div>
                    <div className="col-md-3 button">
                        <a href="about.html" className="w3ls-button-agile">Read More
                            <span className="fa fa-hand-o-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- //banner bottom --> */}
    
        {/* <!-- blog --> */}
        <section className="blog_w3ls py-lg-5">
            <div className="container">
            <div className="w3ls-titles text-center mb-5">
                    <h3 className="title"><span className="hdng">Recent </span>Post</h3>
                    
                    <p className="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
                <div className="row py-5">
                    
                    {/* <!-- //blog grid -->
                    <!-- blog grid --> */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                        
                            <div className="card-body text-center">
                                <img src="images/g2.jpg" alt="" className="img-fluid" />
                                <h5 className="blog-title card-title mt-3 mb-3">
                                    <a href="services.html">Birthday Photos</a>
                                </h5>
                                <p> Vivamus magna justo,
                                    lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit.</p>
                                <a href="services.html" className="service-btn">Read more</a>
                            </div>
                            <div className="card-footer blog_w3icon border-top pt-2 mt-3 d-flex justify-content-between">
                                <small>
                                    <b>By <a href="/">admin</a></b>
                                </small>
                                <span><span className="fa fa-calendar-o"></span>
                                12/01/19 <span className="fa fa-comments"></span> <a href="/">02</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //blog grid -->
                    <!-- blog grid --> */}
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div className="card">
                        
                            <div className="card-body text-center">
                            <img src="images/g3.jpg" alt="" className="img-fluid" />
                            <h5 className="blog-title card-title mt-3 mb-3">
                                    <a href="services.html">Wedding Photos</a>
                                </h5>
                                <p>Vivamus magna justo,
                                    lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit.</p>
                                <a href="services.html" className="service-btn">Read more</a>
                            </div>
                            <div className="card-footer blog_w3icon border-top pt-2 mt-3 d-flex justify-content-between">
                                <small>
                                    <b>By <a href="/">admin</a></b>
                                </small>
                            <span><span className="fa fa-calendar-o"></span>
                                16/01/19 <span className="fa fa-comments"></span> <a href="/">02</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //blog grid -->
                    <!-- blog grid --> */}
                    <div className="col-lg-4 col-md-6 blog-3 mt-md-0 mt-5">
                        <div className="card">
                            
                            <div className="card-body text-center">
                                <img src="images/g6.jpg" alt="" className="img-fluid" />
                                <h5 className="blog-title card-title mt-3 mb-3">
                                    <a href="services.html">Event Photos</a>
                                </h5>
                                <p> Vivamus magna justo,
                                    lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit.</p>
                                <a href="services.html" className="service-btn">Read more</a>
                            </div>
                            <div className="card-footer blog_w3icon border-top pt-2 mt-3 d-flex justify-content-between">
                                <small>
                                    <b>By <a href="/">admin</a></b>
                                </small>
                            <span><span className="fa fa-calendar-o"></span>
                                22/01/19 <span className="fa fa-comments"></span> <a href="/">02</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //blog grid --> */}
                </div>
            </div>
        </section>
        {/* <!-- //blog -->
        <!-- stats --> */}
        <section className="stat_w3l py-5">
            <div className="container">
            <div className="w3ls-titles text-center mb-5">
                    <h3 className="title text-white"><span className="hdng">Services </span>Fact</h3>
                    
                    <p className="mt-3 mx-auto text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
                <div className="row py-lg-5 stats-con">
                        <div className="col-lg-3 col-md-6 stats_info counter_grid">
                            <div className="stats_info1">
                                <span className="fa fa-users"></span>
                                <p className="counter">25,000</p>
                                <h4>Happy Clients</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 stats_info counter_grid">
                            <div className="stats_info1">
                                <span className="fa fa-camera"></span>
                                <p className="counter">120</p>
                                <h4>Amazing Photos</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 stats_info counter_grid1">
                            <div className="stats_info1">
                                <span className="fa fa-briefcase"></span>
                                <p className="counter">486</p>
                                <h4>Partners</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 stats_info counter_grid2">
                            <div className="stats_info1">
                                <span className="fa fa-comments"></span>
                                <p className="counter">6,812</p>
                                <h4>Questions Answered</h4>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    {/* <!-- //stats --> */}
        {/* <!-- branches --> */}
        <section className="branches py-md-5 pt-4">
            <div className="container">
            <div className="w3ls-titles text-center mb-5">
                    <h3 className="title"><span className="hdng">Best </span>Offers</h3>
                    
                    <p className="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>

                <div className="row py-5 branches-position">
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- team-img --> */}
                        <div className="team-block">
                            <div className="team-img">
                                <img src="images/h1.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.team-img --> */}
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- team-img --> */}
                        <div className="team-block">
                            <div className="team-img">
                                <img src="images/h2.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.team-img --> */}
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- team-img --> */}
                        <div className="team-block">
                            <div className="team-img">
                                <img src="images/h3.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.team-img --> */}
                    <div className="col-lg-3 col-md-6">
                        {/* <!-- team-img --> */}
                        <div className="team-block">
                            <div className="team-img">
                                <img src="images/h4.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- //branches -->
    <!--footer --> */}
    <Footer />
    
    {/* <!-- //footer --> */}
        {/* <div className="cpy-right text-center  py-3">
            <p className="text-white">© 2019 Fotog. All rights reserved | Design by
                <a href="http://w3layouts.com" className="text-white"> W3layouts.</a>
            </p>
        </div> */}
    </>
)

export default HomePage;