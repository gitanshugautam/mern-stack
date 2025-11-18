import React from 'react'

const Home = () => {
  return (
    <div>
      <>
  {/* header section strats */}
  <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Models{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-brand" href="">
                {" "}
                <span>
                  <span>OB</span>erlo
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Price
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                {" "}
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="">
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  {/* end header section */}
  {/* banner section start */}
  <div className="banner_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div
            id="banner_slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">
                    New
                    <br /> Model Cars
                  </h1>
                  <p className="banner_text">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt uolore magna aliqua. Ut enim ad minim veniam,
                    quis non
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="update_mail"
                      placeholder="Search here"
                      name="Search here"
                    />
                    <div className="subscribe_bt">
                      <a href="#">
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">
                    New
                    <br /> Model Cars
                  </h1>
                  <p className="banner_text">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt uolore magna aliqua. Ut enim ad minim veniam,
                    quis non
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="update_mail"
                      placeholder="Search here"
                      name="Search here"
                    />
                    <div className="subscribe_bt">
                      <a href="#">
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">
                    New
                    <br /> Model Cars
                  </h1>
                  <p className="banner_text">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt uolore magna aliqua. Ut enim ad minim veniam,
                    quis non
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="update_mail"
                      placeholder="Search here"
                      name="Search here"
                    />
                    <div className="subscribe_bt">
                      <a href="#">
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#banner_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#banner_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
        <div className="col-md-6 padding_right0">
          <div className="banner_img">
            <img src="assets/images/banner-img.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="about_img">
            <img src="assets/images/about-img.png" />
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="about_taital">About Shoroom</h3>
          <p className="about_text">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitationconsectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
          <div className="readmore_btn">
            <a href="#">
              Read More
              <span className="arrow_icon">
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about section end */}
  {/* models section start */}
  <div className="models_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="models_taital">Our Models Cars</h1>
        </div>
      </div>
      <div className="models_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="models_img">
              <img src="assets/images/img-1.png" />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="carolo_text">
              <span className="number_text">01</span> New Carolo car
            </h3>
            <p className="ullamco_text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur
            </p>
            <div className="price_main">
              <p className="price_text">
                <span style={{ color: "#fc9d22" }}>Price</span> $30000.00
              </p>
              <div className="read_btn">
                <a href="#">
                  Read More
                  <span className="arrow_icon">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="models_section_2">
        <div className="row">
          <div className="col-md-6">
            <h3 className="carolo_text">
              <span className="number_text">02</span> New Carolo car
            </h3>
            <p className="ullamco_text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur
            </p>
            <div className="price_main">
              <p className="price_text">
                <span style={{ color: "#fc9d22" }}>Price</span> $30000.00
              </p>
              <div className="read_btn">
                <a href="#">
                  Read More
                  <span className="arrow_icon">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="models_img">
              <img src="assets/images/img-2.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="models_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="models_img">
              <img src="assets/images/img-3.png" />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="carolo_text">
              <span className="number_text">03</span> New Carolo car
            </h3>
            <p className="ullamco_text">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur
            </p>
            <div className="price_main">
              <p className="price_text">
                <span style={{ color: "#fc9d22" }}>Price</span> $30000.00
              </p>
              <div className="read_btn">
                <a href="#">
                  Read More
                  <span className="arrow_icon">
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* models section end */}
  <div className="choose_section_2">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <h1 className="rated_text">
            <span className="padding_10">
              <img src="assets/images/icon-1.png" />
            </span>
            3700
          </h1>
          <p className="house_text">Happy Clients</p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="rated_text">
            <span className="padding_10">
              <img src="assets/images/icon-2.png" />
            </span>
            5700
          </h1>
          <p className="house_text">Vehicles In Stock</p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="rated_text">
            <span className="padding_10">
              <img src="assets/images/icon-3.png" />
            </span>
            124
          </h1>
          <p className="house_text">Awards</p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h1 className="rated_text">
            <span className="padding_10">
              <img src="assets/images/icon-4.png" />
            </span>
            704
          </h1>
          <p className="house_text">Dealer Branches</p>
        </div>
      </div>
    </div>
  </div>
  {/* blog section start */}
  <div className="blog_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="blog_taital">FEATURED VEHICLES</h1>
        </div>
      </div>
      <div className="blog_section_2">
        <div className="row">
          <div className="col-md-4">
            <div className="blog_img">
              <img src="assets/images/img-4.png" />
            </div>
            <div className="btn_main">
              <div className="date_text">
                <a href="#">Price $ 40000.0</a>
              </div>
            </div>
            <div className="blog_box">
              <h3 className="blog_text">Voluptate</h3>
              <p className="lorem_text">
                Commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum{" "}
              </p>
            </div>
            <div className="read_bt">
              <a href="#">
                Read More
                <span className="arrow_icon">
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_img">
              <img src="assets/images/img-5.png" />
            </div>
            <div className="btn_main">
              <div className="date_text active">
                <a href="#">Price $ 40000.0</a>
              </div>
            </div>
            <div className="blog_box">
              <h3 className="blog_text">Voluptate</h3>
              <p className="lorem_text">
                Commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum{" "}
              </p>
            </div>
            <div className="read_bt active">
              <a href="#">
                Read More
                <span className="arrow_icon">
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog_img">
              <img src="assets/images/img-6.png" />
            </div>
            <div className="btn_main">
              <div className="date_text">
                <a href="#">Price $ 40000.0</a>
              </div>
            </div>
            <div className="blog_box">
              <h3 className="blog_text">Voluptate</h3>
              <p className="lorem_text">
                Commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum{" "}
              </p>
            </div>
            <div className="read_bt">
              <a href="#">
                Read More
                <span className="arrow_icon">
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* blog section end */}
  {/* client section start */}
  <div className="client_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="client_taital">What Says Our Students</h1>
          <p className="client_text">
            It is a long established fact that a reader will be distracted by
            the readable c
          </p>
        </div>
      </div>
      <div className="customer_section_2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="box_main">
                <div className="customer_main">
                  <div className="customer_left">
                    <div className="customer_img">
                      <img src="assets/images/client-img.png" />
                    </div>
                  </div>
                  <div className="customer_right">
                    <h3 className="customer_name">DenoMark</h3>
                    <p className="enim_text">
                      anything embarrassing hidden in the middle of text. All
                      the Lorem Ipsum generators on the Internet tend to repeat
                      predefined chunks as necessary, making this the first true
                      generator on the Internetanything embarrassing hidden in
                      the middle of text. All the Lorem Ipsum generators on the
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet
                    </p>
                    <div className="quick_icon">
                      <img src="assets/images/quick-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* client section end */}
  {/* contact section start */}
  <div className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="contact_taital">Get In Touch</h1>
        </div>
      </div>
      <div className="contact_section_2">
        <div className="mail_section map_form_container">
          <form action="">
            <input
              type="text"
              className="mail_text"
              placeholder="Name"
              name="Name"
            />
            <input
              type="text"
              className="mail_text"
              placeholder="Phone Number"
              name="Phone Number"
            />
            <input
              type="text"
              className="mail_text"
              placeholder="Email"
              name="Email"
            />
            <textarea
              className="massage-bt"
              placeholder="Massage"
              rows={5}
              id="comment"
              name="Massage"
              defaultValue={""}
            />
            <div className="map_btn_main">
              <div className="send_bt">
                <a href="#">Send Now</a>
              </div>
              <div className="map_bt">
                <a href="#" id="showMap">
                  Map
                </a>
              </div>
            </div>
          </form>
          <div className="map_main map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={368}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
              />
              <div className="map_btn_main">
                <div className="map_bt d-flex justify-content-center w-100 map_center">
                  <a href="#" id="showForm">
                    Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location_main">
        <div className="location_text">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-phone" aria-hidden="true" />
                <span className="padding_left_15">(+71) 8522369417</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span className="padding_left_15">demo@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social_icon">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* contact section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        2020 All Rights Reserved. Design by{" "}
        <a href="https://html.design">Free Html Templates</a>. DIstributed by{" "}
        <a href="https://themewagon.com" target="_blank">
          ThemeWagon
        </a>
      </p>
    </div>
  </div>
  {/* copyright section end */}
  {/* Javascript files*/}
  {/* sidebar */}
</>

    </div>
  )
}

export default Home
