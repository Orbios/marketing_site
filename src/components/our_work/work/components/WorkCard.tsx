import * as styled from './WorkCard.styled';

interface Props {
  title: string;
  category: string;
  image: string;
  delay: number;
  url?: string;
}

function WorkCard({title, category, image, delay, url}: Props) {
  const backgroundImage = `url(images/our_work/${image})`;

  function openLink() {
    if (!url) return;
    window.open(url, '_blank');
  }

  return (
    <styled.wrapper className="col-md-6 col-lg-3 d-flex align-items-stretch" onClick={openLink}>
      <div className="work-wrap" data-aos="flip-left" data-aos-duration="1000" data-aos-delay={delay}>
        <div className="img" style={{backgroundImage}}></div>
        <div className="text">
          <span className="category">{category}</span>
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
      </div>
    </styled.wrapper>
  );
}

export default WorkCard;
