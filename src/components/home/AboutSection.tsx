function AboutSection() {
  return (
    <section className="ftco-section ftco-about-section ftco-no-pt ftco-no-pb">
      <div className="container-xl">
        <div className="row g-xl-5">
          <div
            className="col-md-6 d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000">
            <picture id="about-image-wrapper">
              <img src="images/about.svg" className="img-fluid" alt="" />
            </picture>
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
                With years of experience in a diverse range of projects, we have sharpened our ability to choose the
                best tools for the job. Our approach strikes a balance between code quality and a flexible, fast
                development cycle. We utilize pre-defined project templates and basic infrastructure to ensure an
                efficient start to every project.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
