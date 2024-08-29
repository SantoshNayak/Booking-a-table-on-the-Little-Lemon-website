import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

import '../App.css';
import logo from '../assets/logo.jpg';
import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';
import { navData } from '../utils/mock';
import MovileNav from './MovileNav';
import { Link } from 'react-router-dom';

export default function Nav() {
  const width = useWindowWidth();
  const NaveItem = ({ name, link }) => {
    return (
      <li>
        {/* <a href={link} {...stylex.props(styles.link)}>
          {name}
        </a> */}
        <Link to={link} {...stylex.props(styles.link)}>
          {name}
        </Link>

      </li>
    );
  };

  NaveItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <header {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.container)}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '200px',
            height: '48px',
            backgroundColor: 'white',
          }}
        />
        <button
          onClick={() => {
            console.log('click');
            useStore.setState(state => ({ navIsOpen: !state.navIsOpen }));
          }}
          {...stylex.props(styles.hamburger)}
        >
          <div {...stylex.props(styles.line)} />
          <div {...stylex.props(styles.line)} />
          <div {...stylex.props(styles.line)} />
        </button>
        <nav {...stylex.props(styles.nav)}>
          <ul {...stylex.props(styles.col)}>
            {navData.map(
              item =>
                width >= 860 && (
                  <NaveItem key={item.name} name={item.name} link={item.link} />
                ),
            )}
          </ul>
        </nav>
        {width < 860 && <MovileNav />}
      </div>
    </header>
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
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    paddingHorizontal: '16px',
    width: '100%',
  },
  hamburger: {
    cursor: 'pointer',
    backgroundColor: 'white',
    display: 'none',
    '@media (max-width: 860px)': {
      display: 'block',
    },
    border: 'none',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    height: '80px',
    justifyContent: 'center',
    marginBottom: '1rem',
    position: 'fixed',
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
    color: '#474747',
    display: 'flex',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '40px',
    justifyContent: 'center',
    marginHorizontal: '8px',
    padding: '0 8px',
    textDecoration: 'none',
  },
  nav: {
    alignItems: 'center',
    display: 'block',
    height: '100%',
    justifyContent: 'space-between',
    '@media (max-width: 860px)': {
      display: 'none',
    },
  },
  mobileNav: {
    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '80px',
    zIndex: 100,
    backgroundColor: '#ce2323',
    width: '300px',
  },
});
