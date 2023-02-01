import ProjectItem from './components/ProjectItem';

function ProjectsSection() {
  const projects = [
    {
      title: 'Fract',
      slogan: 'Simple to use territory analytics and mapping software',
      description:
        '<b>Fract</b> is a startup based in San Francisco that assists companies in defining territories for either selling to franchisees or for their sales team. It provides a platform for collaboration on maps and rendered data such as territories (based on zip codes or block-level areas) and places (geolocations with custom data) as well as demographic and statistical reports. The platform is built on Google Maps and is implemented as a single-page application with a Node.js backend. The company provides remote consulting services, aiming to improve code structure for easier maintenance and scalability.',
      technologies:
        '<b>Technologies</b>: Node.js, Express, MongoDb, PostgreSQL, Mongoose, Google Maps API, LESS, HTML 5, Jquery, Vue.js.',
      image: 'fract.png',
      url: 'https://www.fract.com/'
    },
    {
      title: 'Freedom Robotics',
      slogan: 'Lead the robot revolution',
      description:
        '<b>Freedom Robotics</b> is a control and monitoring system for robots that offers real-time data visualization, WebRTC-enabled video piloting, robot control, and fleet management. The system consists of a thin layer of APIs that provide raw data, and a front-end system that is rich in business logic and real-time data processing. The initial structure and overall architecture of the front-end system was designed as a lead front-end developer. The project evolved from an initial prototype to a finished minimum viable product and became a successful live product.',
      technologies: '<b>Technologies</b>: React, Redux, JS Canvas, WebRTC D3, Data Graphing / Visualisation.',
      image: 'freedom_robotics.png',
      url: 'https://www.freedomrobotics.com/'
    },
    {
      title: 'OptimalShip',
      slogan: 'Intelligent Supply Chain Solutions',
      description:
        '<b>OptimalShip</b> offers shipping services worldwide utilizing major providers such as DHL Express to provide their customers with the best shipping rates. Our company was responsible for the architecture and development of the front-end application, which streamlines the process of collecting information for international and domestic shipments, managing shipment pickups, and creating shipments automatically through external APIs.',
      technologies: '<b>Technologies</b>: React, Redux, TypeScript, Rest/GraphQL',
      image: 'optimal_ship.png',
      url: 'https://us.optimalship.com/'
    }
  ];

  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectItem key={project.title} index={index} {...project} />;
      })}
    </div>
  );
}

export default ProjectsSection;
