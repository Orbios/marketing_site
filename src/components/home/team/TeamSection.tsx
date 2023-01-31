import TeamMember from './components/TeamMember';

function TeamSection() {
  const teamMembers = [
    {
      name: 'Adrian Molises',
      position: 'CEO, Founder & Developer',
      image: 'team-1.jpg',
      delay: 100
    },
    {
      name: 'Arthur MaGregor',
      position: 'Co-Founder & Designer',
      image: 'team-2.jpg',
      delay: 200
    },
    {
      name: 'Anna Hanzen',
      position: 'CEO, Founder & Developer',
      image: 'team-3.jpg',
      delay: 300
    },
    {
      name: 'Brian Wooden',
      position: 'CEO, Founder & Developer',
      image: 'team-4.jpg',
      delay: 400
    }
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Team</span>
            <h2 className="mb-3">Our Digital Experts Team</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove.
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
