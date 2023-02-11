import Carousel from 'react-multi-carousel';

import TestimonialItem from './components/TestimonialItem';

function TestimonialSection() {
  const testimonials = [
    {
      person: 'Hans Lee',
      position: 'CTO at Freedom Robotics',
      image: 'clients/hans.jpg',
      links: {
        linkedIn: 'https://www.linkedin.com/in/hansclee/'
      },
      feedback:
        'Erik from orbios has built the front-end part of our platform from a basic demo to a fully functioning and scalable MVP and then led development of many of the key features we now have in our mature version. He did a great job, where he took initiative when we were small, worked with other developers as we scaled to increase code quality and always had a good balance of development speed and quality. He is very competent in front-end development, ui/ux, react, etc.'
    },
    {
      person: 'Mike Mack',
      position: 'CEO at Fract',
      image: 'clients/mike.jpg',
      links: {
        linkedIn: 'https://www.linkedin.com/in/mikedude/'
      },
      feedback:
        "Orbios truly exceeded our expectations. Their team of experts flawlessly redesigned and rebuilt our enterprise-level stack, enabling a seamless transition to the new system with zero downtime. The project was expertly managed and the team's innovative ideas for incorporating new technologies were invaluable. We are beyond grateful for the work that Orbios has done for us and couldn't be happier with the results."
    },
    {
      person: 'Krispin Stock',
      position: 'Product Designer for OptimalShip',
      image: 'clients/krispin.jpg',
      links: {
        linkedIn: 'https://www.linkedin.com/in/krispin-stock/'
      },
      feedback:
        'As a product designer at OptimalShip, I had the pleasure to work with Erik from Orbios on our shipping services project. From the outset, Erik brought his expertise in front-end development and user-friendly design, effectively implementing complex international shipment regulations to deliver a seamless user experience. The end result was a highly functional and user-friendly application, which has been a huge success. I highly recommend Orbios for any front-end development projects.'
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1400},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1400, min: 768},
      items: 2
    },
    mobile: {
      breakpoint: {max: 768, min: 0},
      items: 1
    }
  };

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Success Stories</h2>
            <p>
              Join the ranks of satisfied clients who have trusted us to deliver their MVP vision. Our team of experts
              specializes in bringing your digital product to life with speed, quality, and affordability. Read on to
              hear what others have to say about their experience working with us.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Carousel responsive={responsive} rewindWithAnimation containerClass="testimonials-carousel">
              {testimonials.map(testimonial => {
                return <TestimonialItem key={testimonial.image} {...testimonial} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
