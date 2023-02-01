import FEATURES from 'constants/features';

import mailHelper from 'helpers/mailHelper';

import commonData from 'data/common.json';

function HeroSection() {
  console.log('Test ENV variable', process.env.NEXT_PUBLIC_EXAMPLE_KEY);
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
              <p>{commonData.orbiosMission}</p>
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
            <picture id="hero-image-wrapper">
              <img src="images/hero.svg" className="img-fluid" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
