import Link from 'next/link';

import ProjectsSection from 'components/our_work/projects/ProjectsSection';

function OurWorkSection() {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Our Portfolio</span>
            <h2 className="mb-3">Our Work</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>

        <ProjectsSection carousel />

        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              <Link href="/our-work" passHref className="btn btn-custom">
                <a href="#">
                  View More Portfolio <span className="ion-ios-arrow-round-forward" />
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
