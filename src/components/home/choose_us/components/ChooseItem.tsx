interface Props {
  title: string;
  description: string;
  icon: string;
}

function ChooseItem({title, description, icon}: Props) {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
      <div className="services text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className={icon} />
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseItem;
