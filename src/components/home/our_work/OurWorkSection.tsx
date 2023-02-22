import Link from 'next/link';

import dataService from 'services/dataService';

import ProjectsSection from 'components/common/Projects';

function OurWorkSection() {
  const projects = dataService.getPortfolioProjects();

  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Our Portfolio</span>
            <h2 className="mb-3">Explore Our Work</h2>
            <p>
              Discover the range of innovative and creative solutions we have delivered for our clients. Get a glimpse
              of our expertise and the quality of our work.
            </p>
          </div>
        </div>

        <ProjectsSection projects={projects} carousel />

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
