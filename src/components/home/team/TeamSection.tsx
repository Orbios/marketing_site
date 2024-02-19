import Carousel from 'react-multi-carousel';

import dataService from 'services/dataService';

import TeamMember from './components/TeamMember';

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
  const teamMembers = dataService.getTeamMembers();

  return teamMembers.map(member => {
    return <TeamMember key={member.name} member={member} />;
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
