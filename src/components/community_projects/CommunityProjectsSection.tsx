import dataService from 'services/dataService';

import ProjectsSection from 'components/common/Projects';

function CommunityProjectsSection() {
  const projects = dataService.getCommunityProjects();

  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Our Projects</span>
            <h2 className="mb-3">Discover Our Community Projects</h2>
            <p>
              Welcome to our community section, where we showcase our open source and non-commercial projects. At our
              agency, we believe that technology has the power to bring people together and make a positive impact.
              That&apos;s why we&apos;re proud to contribute to the open source community and work on non-commercial
              projects that benefit others, while also providing a great way for our team members to try out new
              technologies and improve their skills.
            </p>
          </div>
        </div>

        <ProjectsSection projects={projects} carousel />
      </div>
    </section>
  );
}

export default CommunityProjectsSection;
