import Link from 'next/link';

import config from 'config';

function Footer() {
  return (
    <footer className="ftco-footer">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <Link href="/" passHref>
                  <a className="navbar-brand" href="#">
                    Orbios.
                  </a>
                </Link>
              </h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li>
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Explore</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/our-work" passHref>
                    <a href="#">
                      <span className="ion ion-ios-arrow-round-forward me-2"></span>Our Work
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled"></ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Posts</h2>
              <div className="block-21 mb-4 d-flex">
                <a className="img rounded" style={{backgroundImage: 'url(images/image_1.jpg)'}}></a>
                <div className="text">
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="fa fa-calendar"></span> Dec. 12, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="fa fa-user"></span> Admin
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Creativity and Inspiration</a>
                  </h3>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="img rounded" style={{backgroundImage: 'url(images/image_2.jpg)'}}></a>
                <div className="text">
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="fa fa-calendar"></span> Dec. 12, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="fa fa-user"></span> Admin
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Creativity and Inspiration</a>
                  </h3>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="img rounded" style={{backgroundImage: 'url(images/image_4.jpg)'}}></a>
                <div className="text">
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="fa fa-calendar"></span> Dec. 12, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="fa fa-user"></span> Admin
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Creativity and Inspiration</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane"></span>
                      <span className="text">{config.socialMedia.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-wrap">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0" style={{color: 'rgba(255,255,255,.5)', fontSize: '13px'}}>
                Copyright &copy; All rights reserved | This template is made with{' '}
                <i className="fa fa-heart color-danger" aria-hidden="true"></i> by{' '}
                <a href="https://colorlib.com" target="_blank" rel="nofollow noopener noreferrer">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
