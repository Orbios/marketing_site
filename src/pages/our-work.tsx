import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import ExploreSection from 'components/our_work/ExploreSection';
import WorkSection from 'components/our_work/work/WorkSection';

const OurWork: NextPage = () => {
  return (
    <Layout>
      <ExploreSection />

      <WorkSection />
    </Layout>
  );
};

export default OurWork;
