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
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro py-5 bg-primary">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row g-lg-5">
                <div className="col-md-7 text-lg-right">
                  <h2 className="mb-0">Newsletter - Stay tune and get the latest update</h2>
                  <p>Far far away, behind the word mountains</p>
                </div>
                <div className="col-md-5 border-left d-flex align-items-center">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex align-items-center">
                      <input type="text" className="form-control" placeholder="Enter email address" />
                      <a href="#" className="btn-icon">
                        <span className="fa fa-paper-plane"></span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
