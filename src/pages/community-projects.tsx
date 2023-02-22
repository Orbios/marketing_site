import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import ExploreSection from 'components/community_projects/ExploreSection';
import CommunityProjectsSection from 'components/community_projects/CommunityProjectsSection';

const CommunityProjects: NextPage = () => {
  return (
    <Layout>
      <ExploreSection />

      <CommunityProjectsSection />
    </Layout>
  );
};

export default CommunityProjects;
