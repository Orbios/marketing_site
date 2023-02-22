import commonData from 'data/common.json';
import portfolioData from 'data/portfolio.json';
import communityProjects from 'data/communityProjects.json';

const exports = {
  getCommonData,
  getPortfolioProjects,
  getCommunityProjects
};

function getCommonData() {
  return commonData;
}

function getPortfolioProjects(): Project[] {
  return portfolioData.projects;
}

function getCommunityProjects(): Project[] {
  return communityProjects.projects;
}

export default exports;
