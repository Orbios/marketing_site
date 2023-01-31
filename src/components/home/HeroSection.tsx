import FEATURES from 'constants/features';

import mailHelper from 'helpers/mailHelper';

function HeroSection() {
  function sendEmail(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    mailHelper.sendMail();
  }

  return (
    <section className="hero-wrap">
      <div className="overlay" />

      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-between align-items-stretch">
          <div className="col-md-6 col-lg-5 text d-flex align-items-center">
            <div>
              <h1 className="">Orbios - harmonical grows of your project.</h1>
              <p>Accelerating Startup Success through flexible and effective Software Solutions</p>
              <p className="d-flex">
                <a href="#" className="btn btn-primary d-flex align-items-center" onClick={sendEmail}>
                  <span>Contact Us</span>
                </a>
              </p>

              {FEATURES.DISPLAY_SOCIAL_MEDIA && (
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
              )}
            </div>
          </div>

          <div className="col-md-6 col-lg-7 svg d-flex align-items-center">
            <picture>
              <img src="images/bg_1.svg" className="img-fluid" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
