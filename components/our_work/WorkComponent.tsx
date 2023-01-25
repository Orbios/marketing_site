interface Props {
  title: string;
  category: string;
  imgSrc: string;
  delay: number;
}

function WorkComponent({title, category, imgSrc, delay}: Props) {
  const backgroundImage = `url(images/${imgSrc})`;

  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
      <div className="work-wrap" data-aos="flip-left" data-aos-duration="1000" data-aos-delay={delay}>
        <div className="img" style={{backgroundImage}}></div>
        <div className="text">
          <span className="category">{category}</span>
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WorkComponent;
