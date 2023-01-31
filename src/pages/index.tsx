import type {NextPage} from 'next';

import Layout from 'components/common/Layout';
import HeroSection from 'components/home/HeroSection';
import ServicesSection from 'components/home/services/ServicesSection';
import AboutSection from 'components/home/AboutSection';
import TeamSection from 'components/home/team/TeamSection';
import TestimonialSection from 'components/home/testimonial/TestimonialSection';
import ChooseSection from 'components/home/choose_us/ChooseSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />

      <ServicesSection />

      <AboutSection />

      <TeamSection />

      <TestimonialSection />

      <ChooseSection />
    </Layout>
  );
};

export default Home;
