import React from "react";

// Import components
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => (
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
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
        </nav>
        {/* <!-- contact --> */}
        <div class="container py-lg-5 mt-sm-5 mt-3">
            <h3 class="agile-title text-uppercase"></h3>
            <span class="w3-line"></span>
            <div class="w3ls-titles text-center mb-5">
                    <h3 class="title"><span class="hdng">Contact  </span>us</h3>
                    
                    <p class="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
                </div>
            <div class="row py-md-5 py-sm-3">
                <div class="col-md-6">
                    <form id="contact-form" name="myForm" class="form" action="#" onsubmit="return validateForm()" method="POST">
                        <div class="form-group">
                            <label class="form-label" id="nameLabel" for="name"></label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Your name" tabindex="1" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" id="emailLabel" for="email"></label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" id="subjectLabel" for="subject"></label>
                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" id="messageLabel" for="message"></label>
                            <textarea rows="6" cols="60" name="message" class="form-control" id="message" placeholder="Your message" tabindex="4"></textarea>
                        </div>
                        <div class="text-center mt-5">
                            <button type="submit" class="serv_bottom btn btn-border btn-lg w-100">Send Message</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 map mt-md-0 mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6315353655!2d144.49269953060633!3d-37.971237044864175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC%2C+Australia!5e0!3m2!1sen!2sin!4v1532474074705"  allowfullscreen title="iframe title" />
                </div>
            </div>
        </div>
    {/* <!-- //contact -->
<!--footer --> */}
        <Footer />
{/* <!-- //footer --> */}
    </>
)

export default ContactPage;