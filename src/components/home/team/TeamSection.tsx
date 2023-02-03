import TeamMember from './components/TeamMember';

function TeamSection() {
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
      name: 'Tetyana Yaburova',
      position: 'Sales & Marketing',
      image: 'team/tanya.jpg',
      links: {
        linkedIn: 'https://www.linkedin.com/in/tetyana-yaburova-ovcharenko-971b1062/'
      },
      delay: 300
    }
  ];

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
          {teamMembers.map(member => {
            return <TeamMember key={member.name} {...member} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
