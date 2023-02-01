interface Props {
  index: number;
  title: string;
  slogan: string;
  description: string;
  technologies: string;
  image: string;
  url: string;
}

function ProjectItem({index, title, slogan, description, technologies, image, url}: Props) {
  const backgroundImage = `/images/projects/${image}`;
  const isEven = index % 2 === 0;

  function openLink() {
    window.open(url, '_blank');
  }

  function renderImage() {
    const delay = isEven ? 100 : 200;

    return (
      <div
        className="col-md-6 d-flex align-items-center"
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="1000"
        style={{cursor: 'pointer'}}>
        <picture style={{margin: '10px 0'}} onClick={openLink}>
          <img src={backgroundImage} className="img-fluid" alt="" />
        </picture>
      </div>
    );
  }

  function renderContent() {
    const delay = isEven ? 200 : 100;

    return (
      <div className="col-md-6 py-5 heading-section" data-aos="fade-up" data-aos-delay={delay} data-aos-duration="1000">
        <div className="py-md-5">
          <span className="subheading">{title}</span>
          <h2 className="mb-4">{slogan}</h2>
          <p dangerouslySetInnerHTML={{__html: description}} />
          <p dangerouslySetInnerHTML={{__html: technologies}} />
          <p>
            Find out more about{' '}
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </p>
        </div>
      </div>
    );
  }

  function render() {
    return (
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-5">
            {isEven ? (
              <>
                {renderImage()} {renderContent()}
              </>
            ) : (
              <>
                {renderContent()} {renderImage()}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return render();
}

export default ProjectItem;
