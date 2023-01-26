import Link from 'next/link';
import {useRouter} from 'next/router';

function Navigation() {
  const router = useRouter();

  function renderNavItem(path: string, title: string) {
    let className = 'nav-link';

    if (router.pathname === path) {
      className += ' active';
    }

    return (
      <li className="nav-item">
        <Link href={path} passHref>
          <a className={className} href="#">
            {title}
          </a>
        </Link>
      </li>
    );
  }

  function render() {
    return (
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <Link href="/" passHref>
            <a className="navbar-brand" href="#">
              Orbios.
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="fa fa-bars" /> Menu
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {renderNavItem('/', 'Home')}
              {renderNavItem('/our-work', 'Our Work')}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return render();
}

export default Navigation;
