interface Props {
  person: string;
  position: string;
  image: string;
  feedback: string;
}

function TestimonialItem({person, position, image, feedback}: Props) {
  const backgroundImage = `url(images/${image})`;

  return (
    <div className="item">
      <div className="testimony-wrap">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-quote-left" />
        </div>
        <div className="text">
          <p className="mb-4 msg">{feedback}</p>
          <div className="d-flex align-items-center">
            <div className="user-img" style={{backgroundImage}}></div>
            <div className="ps-3 tx">
              <p className="name">{person}</p>
              <span className="position">{position}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
