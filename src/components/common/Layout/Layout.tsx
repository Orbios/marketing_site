import {ReactNode} from 'react';

import Navigation from 'components/common/Navigation';
import Footer from 'components/common/Footer';

interface Props {
  children: ReactNode;
}

function Layout({children}: Props) {
  return (
    <div>
      <Navigation />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
