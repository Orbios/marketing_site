import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import ExploreSection from 'components/our_work/ExploreSection';
import ProjectsSection from 'components/our_work/projects/ProjectsSection';

const OurWork: NextPage = () => {
  return (
    <Layout>
      <ExploreSection />

      <ProjectsSection />
    </Layout>
  );
};

export default OurWork;
