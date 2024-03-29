import React from "react";

const ServicePage = () => (
    <>
           {/* <!-- banner --> */}
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
            <header>	
	<nav class="mnu navbar-light">
            <div class="logo" id="logo">
                <h1><a href="index.html">Fotog</a></h1>
            </div>
				<label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
                <input type="checkbox" id="drop" />
                    <ul class="menu">
                        <li class="mr-lg-4 mr-3"><a href="index.html">Home</a></li>
						<li class="mr-lg-4 mr-3"><a href="about.html">About</a></li>
						<li class="mr-lg-4 mr-3 active">
                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" class="toggle">Drop Down <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
                            <a href="/">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
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
        {/* <!-- //header --> */}
    </div>
    {/* <!-- //banner --> */}
     <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Services</li>
        </ol>
    </nav>
		{/* <!-- promotions --> */}
	<section class="wthree-row w3-about  py-5">
		<div class="container py-md-4 mt-md-3">
			  <div class="w3ls-titles text-center mb-5">
				<h3 class="title"><span class="hdng">Our </span>Services</h3>
				<p class="mt-3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
			</div>
			<div class="card-deck mt-md-5 pt-4">
				  <div class="card">
					<img src="images/g1.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Urban Exploration</h5>
					   <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					 </div>
				  </div>
				  <div class="card">
					<img src="images/g2.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Shoot Amazing Films</h5>
					   <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					  </div>
				  </div>
				  <div class="card">
					<img src="images/g3.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Best Photographer</h5>
					   <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					 </div>
				  </div>
				</div>
				<div class="card-deck mt-md-5 pt-3">
				  <div class="card">
					<img src="images/g4.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Image Processing</h5>
					  <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					 </div>
				  </div>
				  <div class="card">
					<img src="images/g5.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Photography</h5>
					   <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					  </div>
				  </div>
				  <div class="card">
					<img src="images/g6.jpg" class="img-fluid" alt="Card cap" />
					<div class="card-body w3ls-card">
					  <h5 class="card-title">Photo Shoot Technique</h5>
					  <p class="card-text mb-3"> Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
					  </div>
				  </div>
				</div>
            </div>
        </section>
{/* <!-- //promotions -->
<!--footer --> */}
<footer>
<section class="footer footer_w3layouts_section_1its py-5">
	<div class="container py-md-4">
		<div class="row footer-top">
			<div class="col-lg-4 col-md-6 col-sm-6 footer-grid_section_1its_w3">
				<div class="footer-title">
					<h3>About Us</h3>
				</div>
				<div class="footer-text">
					<p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus.
						Nulla porttitor accumsana tincidunt. Vestibulum ante ipsum primis tempus convallis.</p>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-3 footer-grid_section_1its_w3">
				<div class="footer-title">
					<h3>Useful Links</h3>
				</div>
				<ul class="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="services.html">Services</a></li>
					<li><a href="gallery.html">Gallery</a></li>
					<li><a href="contact.html">Contact Us</a></li>
				</ul>
			</div>
			<div class="col-lg-5 col-md-12 col-sm-12 footer-grid_section_1its_w3">
				<div class="footer-title">
					<h2>Subscribe</h2>
				</div>
				<div class="footer-text">
					<p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
					<form action="#" method="post">
						<input type="email" name="Email" placeholder="Enter your email..." required="" />
						<button class="btn1"><span class="fa fa-envelope" aria-hidden="true"></span></button>
						<div class="clearfix"> </div>
					</form>
				</div>
				<ul class="social_section_1info">
						<li><a href="/"><span class="fa fa-facebook"></span></a></li>
						<li><a href="/"><span class="fa fa-twitter"></span></a></li>
						<li><a href="/"><span class="fa fa-google-plus"></span></a></li>
						<li><a href="/"><span class="fa fa-linkedin"></span></a></li>
					</ul>
			</div>
		</div>
		<div class="row mt-md-5">
			<div class="col-md-4 phn_w3l">
				<h6 class="text-btm text-white">Phone : +2534894364</h6>
			</div>
			<div class="col-md-4 fax_w3l">
				<h6 class="text-btm text-white">Fax : +2534894364</h6>
			</div>
			<div class="col-md-4 ema-w3l">
				<h6 class="text-btm text-white">Email : <a href="mailto:info@example.com">info@example.com</a></h6>
			</div>
		</div>
	</div>
</section>
</footer>
    </>
)

export default ServicePage;