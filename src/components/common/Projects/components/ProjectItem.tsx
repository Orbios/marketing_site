interface Props {
  index: number;
  project: Project;
}

function ProjectItem({index, project}: Props) {
  const {title, slogan, description, technologies, sourceCodeUrl: url, downloadUrl, imageSrc} = project;

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
          <img src={imageSrc} className="img-fluid" alt="" />
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
            <b>Links: </b>
            <a href={url} target="_blank" rel="noreferrer">
              Source Code
            </a>
            {downloadUrl && (
              <>
                {' | '}
                <a href={downloadUrl} target="_blank" rel="noreferrer">
                  Download
                </a>
              </>
            )}
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
