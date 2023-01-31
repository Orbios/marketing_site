import Link from 'next/link';

import FEATURES from 'constants/features';

import commonData from 'data/common.json';

import config from 'config';
import mailHelper from 'helpers/mailHelper';

function Footer() {
  function sendEmail(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    mailHelper.sendMail();
  }

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
              <p>{commonData.orbiosMission}</p>

              {FEATURES.DISPLAY_SOCIAL_MEDIA && (
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
              )}
            </div>
          </div>

          <div className="col-md-6 col-lg-2" />

          <div className="col-md-6 col-lg" />

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

          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <a href="#" onClick={sendEmail}>
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
    </footer>
  );
}

export default Footer;
