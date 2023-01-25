import type {NextPage} from 'next';
import Link from 'next/link';

import WorkComponent from 'components/our_work/WorkComponent';

const OurWork: NextPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <Link href="/" passHref>
            <a className="navbar-brand" href="#">
              Orbios.
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" passHref>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/our-work" passHref>
                  <a className="nav-link active" href="#">
                    Our Work
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-wrap hero-wrap-2">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 pt-5 text-center">
              <h1 className="mb-0 bread">Explore Our Works</h1>
              <p className="breadcrumbs">
                <span className="me-2">
                  <Link href="/" passHref>
                    <span>
                      Home <i className="fa ion-ios-arrow-round-forward"></i>
                    </span>
                  </Link>
                </span>{' '}
                <span>
                  Works <i className="fa ion-ios-arrow-round-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container-fluid">
          <div className="row">
            <WorkComponent
              title="High Quality Design Concept"
              category="Branding, Printing"
              imgSrc="work-1.jpg"
              delay={100}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Graphic Design"
              imgSrc="work-2.jpg"
              delay={200}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-3.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-4.jpg"
              delay={400}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Branding, Printing"
              imgSrc="work-5.jpg"
              delay={100}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Graphic Design"
              imgSrc="work-6.jpg"
              delay={200}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-7.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-8.jpg"
              delay={400}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Branding, Printing"
              imgSrc="work-9.jpg"
              delay={100}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Graphic Design"
              imgSrc="work-10.jpg"
              delay={200}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-11.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-12.jpg"
              delay={400}
            />
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro py-5 bg-primary">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row g-lg-5">
                <div className="col-md-7 text-lg-right">
                  <h2 className="mb-0">Newsletter - Stay tune and get the latest update</h2>
                  <p>Far far away, behind the word mountains</p>
                </div>
                <div className="col-md-5 border-left d-flex align-items-center">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex align-items-center">
                      <input type="text" className="form-control" placeholder="Enter email address" />
                      <a href="#" className="btn-icon">
                        <span className="fa fa-paper-plane"></span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        <span className="text">info@yourdomain.com</span>
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
    </div>
  );
};

export default OurWork;
