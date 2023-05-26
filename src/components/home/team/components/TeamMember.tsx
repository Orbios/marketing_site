interface Props {
  name: string;
  position: string;
  image: string;
  links: {linkedIn: string};
  delay: number;
}

function TeamMember({name, position, image, links, delay}: Props) {
  const backgroundImage = `url(images/${image})`;

  return (
    <div className="col-md-6 col-lg-3 w-100 p-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
      <div className="team-wrap">
        <div className="img" style={{backgroundImage}}>
          <ul className="ftco-social">
            <li>
              <a href={links.linkedIn} target="_blank" rel="noreferrer">
                <span className="fa fa-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span className="position">{position}</span>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
