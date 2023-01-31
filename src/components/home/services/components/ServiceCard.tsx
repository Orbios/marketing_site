interface Props {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function ServiceCard({title, description, icon, delay}: Props) {
  return (
    <div
      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="1000">
      <a href="#" className="services">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className={icon}></span>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default ServiceCard;