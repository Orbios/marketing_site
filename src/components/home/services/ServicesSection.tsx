import ServiceCard from './components/ServiceCard';

function ServicesSection() {
  const services = [
    {
      title: 'Marketing',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-user',
      delay: 100
    },
    {
      title: 'SEO',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-seo',
      delay: 200
    },
    {
      title: 'UI/UX Design',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-vector',
      delay: 300
    },
    {
      title: 'Creative',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-business',
      delay: 400
    },
    {
      title: 'Optimization',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-search-engine',
      delay: 400
    },
    {
      title: 'Business Strategy',
      description: 'Even the all-powerful Pointing has no control about the blind texts',
      icon: 'flaticon-rocket',
      delay: 400
    }
  ];

  return (
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
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
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
                  {services.map(service => {
                    return <ServiceCard key={service.title} {...service} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
