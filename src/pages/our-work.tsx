import type {NextPage} from 'next';

import dataService from 'services/dataService';

import Layout from 'components/common/Layout';
import ExploreSection from 'components/our_work/ExploreSection';
import ProjectsSection from 'components/common/Projects';

const OurWork: NextPage = () => {
  const projects = dataService.getPortfolioProjects();

  return (
    <Layout>
      <ExploreSection />

      <ProjectsSection projects={projects} />
    </Layout>
  );
};

export default OurWork;
