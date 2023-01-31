import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import HeroSection from 'components/home/HeroSection';
import ServicesSection from 'components/home/services/ServicesSection';
import AboutSection from 'components/home/AboutSection';
import TeamSection from 'components/home/team/TeamSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />

      <ServicesSection />

      <AboutSection />

      <TeamSection />

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
