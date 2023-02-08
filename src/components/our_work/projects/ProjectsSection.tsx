import Carousel from 'react-multi-carousel';

import ProjectItem from './components/ProjectItem';

interface Props {
  carousel?: boolean;
}

function ProjectsSection({carousel}: Props) {
  const projects = [
    {
      title: 'Freedom Robotics',
      slogan: 'Robots Control and Monitoring',
      description:
        '<b>Freedom Robotics</b> is a control and monitoring system for robots that offers real-time data visualization, WebRTC-enabled video piloting, robot control, and fleet management. The system consists of a thin layer of APIs that provide raw data, and a front-end system that is rich in business logic and real-time data processing. We were involved in creating the initial structure and overall architecture of the front-end system. During the initial phase, the project evolved from a prototype to a finished MVP launched for production.',
      technologies: '<b>Technologies</b>: React, Redux, JS Canvas, WebRTC D3, Data Graphing / Visualisation.',
      image: 'freedom_robotics.png',
      url: 'https://www.freedomrobotics.com/'
    },
    {
      title: 'OptimalShip',
      slogan: 'International Shipment System',
      description:
        '<b>OptimalShip</b> offers shipping services worldwide utilizing major providers such as DHL Express to provide their customers with the best shipping rates. We were responsible for the architecture and development of the front-end application, focusing on user-friendly shipment input while taking into account complex international shipment regulations. The project was started from scratch and successfully launched into production.',
      technologies: '<b>Technologies</b>: React, Redux, TypeScript, Rest/GraphQL',
      image: 'optimal_ship.png',
      url: 'https://us.optimalship.com/'
    },
    {
      title: 'Fract',
      slogan: 'Territory analytics and mapping solution',
      description:
        'This project helps companies define sales territories for franchisees or sales teams by providing a collaborative platform for mapping and analyzing territories, geolocations, and demographic data. Built using Google Maps, the platform allows for defining territories using zip codes or block-level areas and generating demographic and statistical reports. ',
      technologies:
        '<b>Technologies</b>: Node.js, Express, MongoDb, PostgreSQL, Mongoose, Google Maps API, LESS, HTML 5, Jquery, Vue.js.',
      image: 'fract.png',
      url: 'https://www.fract.com/'
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  function renderProjects() {
    return projects.map((project, index) => {
      return <ProjectItem key={project.title} index={index} {...project} />;
    });
  }

  function render() {
    if (carousel) {
      return (
        <Carousel responsive={responsive} rewindWithAnimation>
          {renderProjects()}
        </Carousel>
      );
    }

    return <div>{renderProjects()}</div>;
  }

  return render();
}

export default ProjectsSection;
