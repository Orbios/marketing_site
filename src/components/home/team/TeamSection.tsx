import Carousel from 'react-multi-carousel';
import TeamMember from './components/TeamMember';

const teamMembers = [
  {
    name: 'Erik Sytnyk',
    position: 'Founder & Lead Developer',
    image: 'team/erik.jpg',
    links: {
      linkedIn: 'https://www.linkedin.com/in/erik-sytnyk/'
    },
    delay: 100
  },
  {
    name: 'Andrey Temchenko',
    position: 'Lead Full Stack Developer',
    image: 'team/andrey.jpg',
    links: {
      linkedIn: 'https://www.linkedin.com/in/andrew-temchenko-75b8941a2/'
    },
    delay: 200
  },
  {
    name: 'Leonid Stryzhevskyi',
    position: 'Back-end developer & Cloud Architect',
    image: 'team/leo.jpg',
    links: {
      linkedIn: 'https://www.linkedin.com/in/lganzzzo/'
    },
    delay: 300
  },
  {
    name: 'Volodymyr Shchukin',
    position: 'Front-end developer',
    image: 'team/oerbyy.jpg',
    links: {
      linkedIn: 'https://www.linkedin.com/in/oerbyy/'
    },
    delay: 300
  },
  {
    name: 'Tetyana Yaburova',
    position: 'Sales & Marketing',
    image: 'team/tanya.jpg',
    links: {
      linkedIn: 'https://www.linkedin.com/in/tetyana-yaburova-ovcharenko-971b1062/'
    },
    delay: 300
  }
];

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 4
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 3
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
};

function renderTeammates() {
  return teamMembers.map(member => {
    return <TeamMember key={member.name} {...member} />;
  });
}

function TeamSection() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Team</span>
            <h2 className="mb-3">Our Team</h2>
            <p>
              Our core team is composed of experienced and dedicated professionals who have a strong working
              relationship, resulting in effective collaboration.
            </p>
          </div>
        </div>

        <div className="row">
          <Carousel responsive={responsive} rewindWithAnimation>
            {renderTeammates()}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
