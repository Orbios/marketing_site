import ChooseItem from './components/ChooseItem';

function ChooseSection() {
  const reasons = [
    {
      title: 'Easy Management',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      icon: 'flaticon-settings'
    },
    {
      title: 'Protect Your Profile',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      icon: 'flaticon-padlock'
    },
    {
      title: 'Private Community',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      icon: 'flaticon-secret-file'
    },
    {
      title: '24/7 Help Support',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      icon: 'flaticon-help'
    }
  ];

  return (
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
          {reasons.map(reason => {
            return <ChooseItem key={reason.title} {...reason} />;
          })}
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
  );
}

export default ChooseSection;
