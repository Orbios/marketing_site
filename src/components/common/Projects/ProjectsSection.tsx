import Carousel from 'react-multi-carousel';

import ProjectItem from './components/ProjectItem';

interface Props {
  projects: Project[];
  carousel?: boolean;
}

function ProjectsSection({projects, carousel}: Props) {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  function renderProjects() {
    return projects.map((project, index) => {
      return <ProjectItem key={project.title} index={index} project={project} />;
    });
  }

  function render() {
    if (carousel) {
      return (
        <Carousel responsive={responsive} rewindWithAnimation>
          {renderProjects()}
        </Carousel>
      );
    }

    return <div>{renderProjects()}</div>;
  }

  return render();
}

export default ProjectsSection;
