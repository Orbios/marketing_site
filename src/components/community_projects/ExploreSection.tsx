import Link from 'next/link';

function ExploreSection() {
  return (
    <section className="hero-wrap hero-wrap-2">
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 pt-5 text-center">
            <h1 className="mb-0 bread">Join Our Community Projects</h1>
            <p className="breadcrumbs">
              <span className="me-2">
                <Link href="/" passHref>
                  <span>
                    Home <i className="fa ion-ios-arrow-round-forward"></i>
                  </span>
                </Link>
              </span>{' '}
              <span>Community Projects</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
