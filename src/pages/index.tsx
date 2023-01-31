import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import HeroSection from 'components/home/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />

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
                <h2 className="mb-4">Orbios - harmonical grows of your project.</h2>
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

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
              <span className="subheading">Team</span>
              <h2 className="mb-3">Our Digital Experts Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div className="team-wrap">
                <div className="img" style={{backgroundImage: 'url(images/team-1.jpg)'}}>
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
                <div className="text">
                  <h3>Adrian Molises</h3>
                  <span className="position">CEO, Founder &amp; Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="team-wrap">
                <div className="img" style={{backgroundImage: 'url(images/team-2.jpg)'}}>
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
                <div className="text">
                  <h3>Arthur MaGregor</h3>
                  <span className="position">CEO, Founder &amp; Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <div className="team-wrap">
                <div className="img" style={{backgroundImage: 'url(images/team-3.jpg)'}}>
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
                <div className="text">
                  <h3>Anna Hanzen</h3>
                  <span className="position">CEO, Founder &amp; Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className="team-wrap">
                <div className="img" style={{backgroundImage: 'url(images/team-4.jpg)'}}>
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
                <div className="text">
                  <h3>Brian Wooden</h3>
                  <span className="position">CEO, Founder &amp; Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Customers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div className="carousel-testimony">
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}}></div>
                        <div className="ps-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}}></div>
                        <div className="ps-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}}></div>
                        <div className="ps-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}}></div>
                        <div className="ps-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}}></div>
                        <div className="ps-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="img v-section ftco-section bg-light">
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section heading-section-white text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000">
              <span className="subheading">Why Choose Us</span>
              <h2 className="mb-4">Easy Management for Your Businesses</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="services text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-settings"></span>
                </div>
                <div className="text">
                  <h2>Easy Management</h2>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="services text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-padlock"></span>
                </div>
                <div className="text">
                  <h2>Protect Your Profile</h2>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="services text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-secret-file"></span>
                </div>
                <div className="text">
                  <h2>Private Community</h2>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="services text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-help"></span>
                </div>
                <div className="text">
                  <h2>24/7 Help Support</h2>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center mt-md-5 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000">
            <div className="col-md-8">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
