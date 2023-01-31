import type {NextPage} from 'next';

import FEATURES from 'constants/features';

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

      {FEATURES.DISPLAY_MEMBERS_SECTION && <TeamSection />}

      {FEATURES.DISPLAY_TESTIMONIAL_SECTION && <TestimonialSection />}

      <ChooseSection />
    </Layout>
  );
};

export default Home;
