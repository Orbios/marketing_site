import TestimonialItem from './components/TestimonialItem';

function TestimonialSection() {
  const testimonials = [
    {
      person: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'person_1.jpg',
      feedback:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      person: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'person_2.jpg',
      feedback:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      person: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'person_3.jpg',
      feedback:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      person: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'person_4.jpg',
      feedback:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ];

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Happy Customers</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="carousel-testimony">
              {testimonials.map(testimonial => {
                return <TestimonialItem key={testimonial.image} {...testimonial} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
