import React from 'react'

const home = () => {
  return (
    <div>
      <>
  {/* Page Preloder */}
  <div id="preloder">
    <div className="loader" />
  </div>
  {/* Header section */}
  <header className="header-section">
    <div className="header-warp">
      <div className="header-social d-flex justify-content-end">
        <p>Follow us:</p>
        <a href="#">
          <i className="fa fa-pinterest" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-behance" />
        </a>
      </div>
      <div className="header-bar-warp d-flex">
        {/* site logo */}
        <a href="home.html" className="site-logo">
          <img src="./img/logo.png" alt="" />
        </a>
        <nav className="top-nav-area w-100">
          <div className="user-panel">
            <a href="">Login</a> / <a href="">Register</a>
          </div>
          {/* Menu */}
          <ul className="main-menu primary-menu">
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="games.html">Games</a>
              <ul className="sub-menu">
                <li>
                  <a href="game-single.html">Game Singel</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="review.html">Reviews</a>
            </li>
            <li>
              <a href="blog.html">News</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  {/* Header section end */}
  {/* Hero section */}
  <section className="hero-section overflow-hidden">
    <div className="hero-slider owl-carousel">
      <div
        className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
        data-setbg="img/slider-bg-1.jpg"
      >
        <div className="container">
          <h2>Game on!</h2>
          <p>
            Fusce erat dui, venenatis et erat in, vulputate dignissim lacus.
            Donec vitae tempus dolor,
            <br />
            sit amet elementum lorem. Ut cursus tempor turpis.
          </p>
          <a href="#" className="site-btn">
            Read More <img src="img/icons/double-arrow.png" alt="#" />
          </a>
        </div>
      </div>
      <div
        className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
        data-setbg="img/slider-bg-2.jpg"
      >
        <div className="container">
          <h2>Game on!</h2>
          <p>
            Fusce erat dui, venenatis et erat in, vulputate dignissim lacus.
            Donec vitae tempus dolor,
            <br />
            sit amet elementum lorem. Ut cursus tempor turpis.
          </p>
          <a href="#" className="site-btn">
            Read More <img src="img/icons/double-arrow.png" alt="#" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Hero section end*/}
  {/* Intro section */}
  <section className="intro-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="intro-text-box text-box text-white">
            <div className="top-meta">
              11.11.18 / in <a href="">Games</a>
            </div>
            <h3>The best online game is out now!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida....
            </p>
            <a href="#" className="read-more">
              Read More <img src="img/icons/double-arrow.png" alt="#" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="intro-text-box text-box text-white">
            <div className="top-meta">
              11.11.18 / in <a href="">Playstation</a>
            </div>
            <h3>Top 5 best games in november</h3>
            <p>
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              labore suspendisse ultrices gravida....
            </p>
            <a href="#" className="read-more">
              Read More <img src="img/icons/double-arrow.png" alt="#" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="intro-text-box text-box text-white">
            <div className="top-meta">
              11.11.18 / in <a href="">Reviews</a>
            </div>
            <h3>Get this game at a promo price</h3>
            <p>
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida ncididunt ut labore ....
            </p>
            <a href="#" className="read-more">
              Read More <img src="img/icons/double-arrow.png" alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Intro section end */}
  {/* Blog section */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="section-title text-white">
            <h2>Latest News</h2>
          </div>
          <ul className="blog-filter">
            <li>
              <a href="#">Racing</a>
            </li>
            <li>
              <a href="#">Shooters</a>
            </li>
            <li>
              <a href="#">Strategy</a>
            </li>
            <li>
              <a href="#">Online</a>
            </li>
          </ul>
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/1.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h3>The best online game is out now!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius-mod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                amet, consecte-tur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.....
              </p>
              <a href="#" className="read-more">
                Read More <img src="img/icons/double-arrow.png" alt="#" />
              </a>
            </div>
          </div>
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/2.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h3>The best online game is out now!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius-mod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                amet, consecte-tur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.....
              </p>
              <a href="#" className="read-more">
                Read More <img src="img/icons/double-arrow.png" alt="#" />
              </a>
            </div>
          </div>
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/3.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">
                11.11.18 / in <a href="">Games</a>
              </div>
              <h3>The best online game is out now!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius-mod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                amet, consecte-tur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.....
              </p>
              <a href="#" className="read-more">
                Read More <img src="img/icons/double-arrow.png" alt="#" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
          <div id="stickySidebar">
            <div className="widget-item">
              <h4 className="widget-title">Trending</h4>
              <div className="trending-widget">
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/1.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">
                      11.11.18 / in <a href="">Games</a>
                    </div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/2.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">
                      11.11.18 / in <a href="">Games</a>
                    </div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/3.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">
                      11.11.18 / in <a href="">Games</a>
                    </div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/4.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">
                      11.11.18 / in <a href="">Games</a>
                    </div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-item">
              <div className="categories-widget">
                <h4 className="widget-title">categories</h4>
                <ul>
                  <li>
                    <a href="">Games</a>
                  </li>
                  <li>
                    <a href="">Gaming Tips &amp; Tricks</a>
                  </li>
                  <li>
                    <a href="">Online Games</a>
                  </li>
                  <li>
                    <a href="">Team Games</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Uncategorized</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-item">
              <a href="#" className="add">
                <img src="./img/add.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog section end */}
  {/* Intro section */}
  <section
    className="intro-video-section set-bg d-flex align-items-end "
    data-setbg="./img/promo-bg.jpg"
  >
    <a
      href="https://www.youtube.com/watch?v=uFsGy5x_fyQ"
      className="video-play-btn video-popup"
    >
      <img src="img/icons/solid-right-arrow.png" alt="#" />
    </a>
    <div className="container">
      <div className="video-text">
        <h2>Promo video of the game</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  </section>
  {/* Intro section end */}
  {/* Featured section */}
  <section className="featured-section">
    <div className="featured-bg set-bg" data-setbg="img/featured-bg.jpg" />
    <div className="featured-box">
      <div className="text-box">
        <div className="top-meta">
          11.11.18 / in <a href="">Games</a>
        </div>
        <h3>The game you’ve been waiting for is out now</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Vestibulum posuere
          porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat
          sit amet, commodo ipsum. Donec pellentesque vestibulum metus...
        </p>
        <a href="#" className="read-more">
          Read More <img src="img/icons/double-arrow.png" alt="#" />
        </a>
      </div>
    </div>
  </section>
  {/* Featured section end*/}
  {/* Newsletter section */}
  <section className="newsletter-section">
    <div className="container">
      <h2>Subscribe to our newsletter</h2>
      <form className="newsletter-form">
        <input type="text" placeholder="ENTER YOUR E-MAIL" />
        <button className="site-btn">
          subscribe <img src="img/icons/double-arrow.png" alt="#" />
        </button>
      </form>
    </div>
  </section>
  {/* Newsletter section end */}
  {/* Footer section */}
  <footer className="footer-section">
    <div className="container">
      <div className="footer-left-pic">
        <img src="img/footer-left-pic.png" alt="" />
      </div>
      <div className="footer-right-pic">
        <img src="img/footer-right-pic.png" alt="" />
      </div>
      <a href="#" className="footer-logo">
        <img src="./img/logo.png" alt="" />
      </a>
      <ul className="main-menu footer-menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Games</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="footer-social d-flex justify-content-center">
        <a href="#">
          <i className="fa fa-pinterest" />
        </a>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
        <a href="#">
          <i className="fa fa-behance" />
        </a>
      </div>
      <div className="copyright">
        <a href="">Colorlib</a> 2018 @ All rights reserved
      </div>
    </div>
  </footer>
  {/* Footer section end */}
  {/*====== Javascripts & Jquery ======*/}
</>

    </div>
  )
}

export default home
