import type {NextPage} from 'next';
import Link from 'next/link';

import Layout from 'components/common/Layout';
import WorkSection from 'components/our_work/work/WorkSection';

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

      <WorkSection />
    </Layout>
  );
};

export default OurWork;
