import FEATURES from 'constants/features';

interface Props {
  name: string;
  position: string;
  image: string;
  delay: number;
}

function TeamMember({name, position, image, delay}: Props) {
  const backgroundImage = `url(images/${image})`;

  return (
    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
      <div className="team-wrap">
        <div className="img" style={{backgroundImage}}>
          {FEATURES.DISPLAY_MEMBERS_SOCIAL_MEDIA && (
            <ul className="ftco-social">
              <li>
                <a href="#">
                  <span className="fa fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-google-plus"></span>
                </a>
              </li>
            </ul>
          )}
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
