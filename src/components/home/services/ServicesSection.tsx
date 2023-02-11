import {GrNode} from 'react-icons/gr';
import {FaReact} from 'react-icons/fa';
import {GiTeamIdea} from 'react-icons/gi';
import {RiSlideshowLine} from 'react-icons/ri';
import {BsGearWideConnected} from 'react-icons/bs';

import ServiceCard from './components/ServiceCard';

function ServicesSection() {
  const services = [
    {
      title: 'Back-end Development',
      description: '<b>NodeJS</b> with <b>PostgreSQL</b>, <b>MongoDB</b> storage with cloud deployment',
      icon: <GrNode />,
      delay: 100
    },
    {
      title: 'Front-end Development',
      description: 'We use <b>ReactJS</b> with <b>TypeScript</b> and <b>NextJS</b>, optionally can use VueJS',
      icon: <FaReact />,
      delay: 200
    },
    {
      title: 'UI/UX Design',
      description: 'Deliver custom <b>Figma</b> designs for your project',
      icon: <RiSlideshowLine />,
      delay: 300
    },
    {
      title: 'Deliver a MVP',
      description: 'Have an idea? We can help you to deliver a <b>Minimum Viable Product</b>',
      icon: 'flaticon-business',
      delay: 400
    },
    {
      title: 'Rewrite existing project',
      description: 'We can help you to <b>rewrite</b> your existing project to <b>modern stack</b>',
      icon: <BsGearWideConnected />,
      delay: 400
    },
    {
      title: 'Consulting',
      description: 'Help to <b>choose</b> the best <b>tech stack</b> for your project and organize development process',
      icon: <GiTeamIdea />,
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
                  <h2 className="mb-4">Using the best tech stack to deliver robust and reliable solutions</h2>
                  <p>
                    Our digital agency specializes in delivering MVPs using React and Node. With extensive experience in
                    developing new projects, we ensure exceptional quality and a flexible architecture to accommodate
                    frequent changes in requirements during the early stages of development. Our focus on quick
                    development speed makes us a top choice for startups seeking to launch their projects efficiently.
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
