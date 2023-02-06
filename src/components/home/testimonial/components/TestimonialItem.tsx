import * as styled from './TestimonialItem.styled';

interface Props {
  person: string;
  position: string;
  image: string;
  links: {linkedIn: string};
  feedback: string;
}

function TestimonialItem({person, position, image, links, feedback}: Props) {
  const backgroundImage = `url(images/${image})`;

  function openLinkedIn() {
    window.open(links.linkedIn, '_blank');
  }

  return (
    <styled.wrapper>
      <div className="testimony-wrap">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-quote-left" />
        </div>
        <div className="text">
          <p className="mb-4 msg">{feedback}</p>
          <div className="d-flex align-items-center">
            <styled.clientImage className="user-img" style={{backgroundImage}} onClick={openLinkedIn} />

            <div className="ps-3 tx">
              <styled.clientName className="name" onClick={openLinkedIn}>
                {person}
              </styled.clientName>
              <span className="position">{position}</span>
            </div>
          </div>
        </div>
      </div>
    </styled.wrapper>
  );
}

export default TestimonialItem;
