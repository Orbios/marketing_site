import type {NextPage} from 'next';
import Link from 'next/link';

import Footer from 'components/common/Footer';

const Home: NextPage = () => {
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
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/our-work" passHref>
                  <a className="nav-link" href="#">
                    Our Work
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-wrap">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-between align-items-stretch">
            <div className="col-md-6 col-lg-5 text d-flex align-items-center">
              <div>
                <h1 className="">Boost Personal Productivity</h1>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p className="d-flex">
                  <a href="#" className="btn btn-primary d-flex align-items-center">
                    <span>Start A Project</span>
                  </a>
                  <a href="#" className="btn btn-secondary">
                    <span className="call">Call us for any inquiry</span> <span>+01 2345 5678 910</span>
                  </a>
                </p>

                <ul className="ftco-social">
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
                  <li>
                    <a href="#">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 svg d-flex align-items-center">
              <img src="images/bg_1.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container mb-md-4">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="row g-3 justify-content-center">
                <div
                  className="col-md-8 col-lg-4 heading-section d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <div className="pe-md-5">
                    <span className="subheading">Our Services</span>
                    <h2 className="mb-4">We Provide A Lot of Cool Services</h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                    <p>
                      <a href="#" className="btn btn-secondary">
                        Our Services
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-8">
                  <div className="row">
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-user"></span>
                        </div>
                        <div className="text">
                          <h2>Marketing</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-seo"></span>
                        </div>
                        <div className="text">
                          <h2>SEO</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-vector"></span>
                        </div>
                        <div className="text">
                          <h2>UI/UX Design</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-business"></span>
                        </div>
                        <div className="text">
                          <h2>Creative</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-search-engine"></span>
                        </div>
                        <div className="text">
                          <h2>Optimization</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1000">
                      <a href="#" className="services">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-rocket"></span>
                        </div>
                        <div className="text">
                          <h2>Business Strategy</h2>
                          <p>Even the all-powerful Pointing has no control about the blind texts </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-counter-section ftco-no-pt">
        <div className="container">
          <div className="row py-5 g-2">
            <div className="col-md-12">
              <div className="counter-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <div className="row g-0">
                  <div className="col-lg img border" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap" data-aos="fade-up" data-aos-duration="1000">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count1" className="counter" data-count="900">
                            0
                          </span>
                          +
                        </span>
                        <p>Project Done</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap even" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="500">
                            0
                          </span>
                          +
                        </span>
                        <p>Optimize Sites</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="770">
                            0
                          </span>
                          +
                        </span>
                        <p>Coffee Cups</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg d-flex align-items-stretch">
                    <div className="counter-wrap even" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="1000">
                            0
                          </span>
                          +
                        </span>
                        <p>Happy People</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-about-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-5">
            <div
              className="col-md-6 d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000">
              <img src="images/about.svg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-6 py-5 heading-section"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000">
              <div className="py-md-5">
                <span className="subheading">About Us</span>
                <h2 className="mb-4">Unbrew A Digital Agency Company</h2>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    More About us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
