import type {NextPage} from 'next';
import Link from 'next/link';

import config from 'config';

import Layout from 'components/common/Layout';
import WorkComponent from 'components/our_work/WorkComponent';

const OurWork: NextPage = () => {
  return (
    <Layout>
      <section className="hero-wrap hero-wrap-2">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 pt-5 text-center">
              <h1 className="mb-0 bread">Explore Our Works</h1>
              <p className="breadcrumbs">
                <span className="me-2">
                  <Link href="/" passHref>
                    <span>
                      Home <i className="fa ion-ios-arrow-round-forward"></i>
                    </span>
                  </Link>
                </span>{' '}
                <span>
                  Works <i className="fa ion-ios-arrow-round-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container-fluid">
          <div className="row">
            <WorkComponent
              title="Movies List"
              category="Front End"
              imgSrc="movies-list.png"
              delay={100}
              url={config.works.movieList}
            />

            <WorkComponent
              title="Nabatik Map Demo"
              category="Full Stack"
              imgSrc="work-2.jpg"
              delay={200}
              url={config.works.nabatik}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-3.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-4.jpg"
              delay={400}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Branding, Printing"
              imgSrc="work-5.jpg"
              delay={100}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Graphic Design"
              imgSrc="work-6.jpg"
              delay={200}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-7.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-8.jpg"
              delay={400}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Branding, Printing"
              imgSrc="work-9.jpg"
              delay={100}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Graphic Design"
              imgSrc="work-10.jpg"
              delay={200}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-11.jpg"
              delay={300}
            />

            <WorkComponent
              title="High Quality Design Concept"
              category="Web Development"
              imgSrc="work-12.jpg"
              delay={400}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
