import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

import '../App.css';
import useWindowWidth from '../helper/useWindowWidth';

export default function Footer() {
  const width = useWindowWidth();

  const linkList1 = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Menu', url: '#' },
    { name: 'Reservations', url: '#' },
    { name: 'Login', url: '#' },
  ];

  const linkList2 = [
    { name: 'Contact Us', url: '#' },
    { name: 'Support', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Careers', url: '#' },
  ];

  const linkList3 = [
    { name: 'Blog', url: '#' },
    { name: 'News', url: '#' },
    { name: 'Events', url: '#' },
    { name: 'Press', url: '#' },
    { name: 'Community', url: '#' },
    { name: 'Partners', url: '#' },
  ];

  const LinkItem = ({ name, url }) => {
    return (
      <li>
        <a href={url} {...stylex.props(styles.link)}>
          {name}
        </a>
      </li>
    );
  };

  LinkItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.container)}>
        <section {...stylex.props(styles.row)}>
          <nav {...stylex.props(styles.col)}>
            <ul {...stylex.props(styles.nav)}>
              {linkList1.map(item => (
                <LinkItem key={item.name} name={item.name} url={item.url} />
              ))}
            </ul>
          </nav>
        </section>

        <section {...stylex.props(styles.row)}>
          <nav {...stylex.props(styles.col)}>
            <ul {...stylex.props(styles.nav)}>
              {linkList2.map(item => (
                <LinkItem key={item.name} name={item.name} url={item.url} />
              ))}
            </ul>
          </nav>
        </section>

        <section {...stylex.props(styles.row)}>
          <nav {...stylex.props(styles.col)}>
            <ul {...stylex.props(styles.nav)}>
              {linkList3.map(item => (
                <LinkItem key={item.name} name={item.name} url={item.url} />
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
}

const styles = stylex.create({
  col: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyleType: 'none',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    paddingHorizontal: '16px',
    width: '100%',
  },
  hamburger: {
    display: 'none',
    '@media (max-width: 860px)': {
      display: 'block',
    },
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#495D56',
    display: 'flex',
    height: '240px',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  line: {
    backgroundColor: '#474747',
    borderRadius: '5px',
    height: '2px',
    marginVertical: '5px',
    width: '24px',
  },
  link: {
    alignItems: 'center',
    color: '#151515',
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'flex-start',
    textDecoration: 'none',
  },
  nav: {
    alignItems: 'center',
    display: 'block',
    //height: '100%',
    justifyContent: 'space-between',
    '@media (max-width: 860px)': {
      display: 'none',
    },
    paddingLeft: '32px',
  },
});
