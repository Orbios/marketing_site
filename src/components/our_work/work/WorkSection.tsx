import config from 'config';

import WorkCard from './components/WorkCard';

function WorkSection() {
  const works = [
    {
      title: 'Movies List',
      category: 'Front End',
      image: 'movies-list.png',
      delay: 100,
      url: config.works.movieList
    },
    {
      title: 'Nabatik Map Demo',
      category: 'Full Stack',
      image: 'work-2.jpg',
      delay: 200,
      url: config.works.nabatik
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-3.jpg',
      delay: 300
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-4.jpg',
      delay: 400
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-5.jpg',
      delay: 100
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-6.jpg',
      delay: 200
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-7.jpg',
      delay: 300
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-8.jpg',
      delay: 400
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-9.jpg',
      delay: 100
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-10.jpg',
      delay: 200
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-11.jpg',
      delay: 300
    },
    {
      title: 'High Quality Design Concept',
      category: 'Web Development',
      image: 'work-12.jpg',
      delay: 400
    }
  ];

  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row">
          {works.map(work => {
            return <WorkCard key={work.title} {...work} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
