interface Props {
  title: string;
  description: string;
  icon: string | JSX.Element;
  delay: number;
}

function ServiceCard({title, description, icon, delay}: Props) {
  const iconToRender = typeof icon === 'string' ? <span className={icon} /> : icon;

  return (
    <div
      className="col-md-4 col-lg-4 text-center d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="1000">
      <a href="#" className="services">
        <div className="icon d-flex align-items-center justify-content-center">{iconToRender}</div>
        <div className="text">
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
      </a>
    </div>
  );
}

export default ServiceCard;
