import type {NextPage} from 'next';
import {useRouter} from 'next/router';

import Layout from 'components/common/Layout';
import HeroSection from 'components/home/HeroSection';
import ServicesSection from 'components/home/services/ServicesSection';
import AboutSection from 'components/home/AboutSection';
import TeamSection from 'components/home/team/TeamSection';
import TestimonialSection from 'components/home/testimonial/TestimonialSection';
import ChooseSection from 'components/home/choose_us/ChooseSection';

const Home: NextPage = () => {
  const router = useRouter();

  const {team, testimonial} = router.query;

  const displayMembersSection = team !== undefined;
  const displayTestimonialSection = testimonial !== undefined;

  return (
    <Layout>
      <HeroSection />

      <ServicesSection />

      <AboutSection />

      {displayMembersSection && <TeamSection />}

      {displayTestimonialSection && <TestimonialSection />}

      <ChooseSection />
    </Layout>
  );
};

export default Home;
