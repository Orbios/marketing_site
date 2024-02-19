import commonData from 'data/common.json';
import portfolioData from 'data/portfolio.json';
import communityProjects from 'data/communityProjects.json';
import teamMembers from 'data/teamMembers.json';

import config from 'config';

const exports = {
  getCommonData,
  getPortfolioProjects,
  getCommunityProjects,
  getTeamMembers
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

function getTeamMembers(): TeamMember[] {
  return teamMembers.team.filter(item => !config.hiddenTeamMembers.includes(item.name));
}

export default exports;
