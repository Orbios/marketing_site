import Carousel from 'react-multi-carousel';

import FEATURES from 'constants/features';

import ChooseItem from './components/ChooseItem';
import {AiOutlineTeam} from 'react-icons/ai';
import {HiOutlineTemplate} from 'react-icons/hi';
import {BsSpeedometer} from 'react-icons/bs';
import {ImStack} from 'react-icons/im';

function ChooseSection() {
  const reasons = [
    {
      title: 'Team of professionals',
      description:
        'Our experienced team has worked together for a long time, ensuring a seamless collaboration and efficient problem-solving. You can trust us to bring your MVP vision to life with expertise and dedication.',
      icon: <AiOutlineTeam />
    },
    {
      title: 'Project Templates',
      description:
        'Our pre-defined project templates come with a pre-built infrastructure, including authentication, UI framework, database access, and more. This saves time and resources in the early stages of development, allowing us to focus on customizing the project to meet your specific needs.',
      icon: <HiOutlineTemplate />
    },
    {
      title: 'Balancing Code Quality and Speed',
      description:
        'Our approach balances the need for high-quality code with a flexible and fast development cycle. We understand the importance of delivering results quickly, especially for startups, while still ensuring a robust and maintainable codebase. ',
      icon: <BsSpeedometer />
    },
    {
      title: 'Technology Stack',
      description:
        'We carefully select the right tools for each job to ensure optimal results. Our technology stack is based on common practices and industry standards, making it easy for future team members to maintain and evolve the project.',
      icon: <ImStack />
    }
  ];

  const responsive = {
    largeDesktop: {
      breakpoint: {max: 3000, min: 1400},
      items: 4
    },
    desktop: {
      breakpoint: {max: 1400, min: 1200},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1200, min: 768},
      items: 2
    },
    mobile: {
      breakpoint: {max: 768, min: 0},
      items: 1
    }
  };

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
            <h2 className="mb-4">Entrust Your MVP creation to Experienced Professionals.</h2>
            <p>
              It is essential that the initial version of the project is well-written and easy to maintain so that when
              the project grows later it stays in good shape. Our handover process to a new team ensures technical
              success as the project grows and evolves.
            </p>
          </div>
        </div>

        <Carousel responsive={responsive} rewindWithAnimation containerClass="choose-us-carousel">
          {reasons.map(reason => {
            return <ChooseItem key={reason.title} {...reason} />;
          })}
        </Carousel>

        {FEATURES.DISPLAY_CHOOSE_SECTION_FOOTER && (
          <div
            className="row justify-content-center mt-md-5 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000">
            <div className="col-md-8">
              <p>
                It is essential that the initial version of the project is well-written and easy to maintain so that
                when the project grows later it stays in good shape. Our handover process to a new team ensures
                technical success as the project grows and evolves.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChooseSection;
