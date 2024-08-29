import React from 'react';

import * as stylex from '@stylexjs/stylex';

import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';
import { navData } from '../utils/mock';

export default function MovileNav() {
  const { navIsOpen } = useStore();
  const width = useWindowWidth();
  return (
    <nav
      {...stylex.props(
        styles.nav,
        navIsOpen && (width > 600 ? styles.widthHalf : styles.widthFull),
      )}
    >
      <header {...stylex.props(styles.header)}>
        <button
          onClick={() => {
            useStore.setState(state => ({ navIsOpen: !state.navIsOpen }));
          }}
        >
          ×
        </button>
      </header>
      <ul {...stylex.props(styles.ul)}>
        {navData.map((item, index) => (
          <li {...stylex.props(styles.li)} key={index}>
            <a href={item.link} {...stylex.props(styles.link)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = stylex.create({
  nav: {
    visibility: 'hidden',
    width: '0%',
    '@media (max-width: 800px)': {},
    backgroundColor: '#f5f5f5',
    position: 'fixed',

    height: '100%',
    top: 0,
    right: 0,
    transition: 'all 0.3s',
  },
  widthHalf: {
    visibility: 'visible',
    width: '50%',
  },
  widthFull: {
    visibility: 'visible',
    width: '100%',
  },
  wideNone: {
    width: '0',
  },
  header: {
    padding: '20px',
    backgroundColor: '#9d9d9d',
    color: '#fff',
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    padding: 0,
    fontWeight: 'bold',
    zIndex: 9999,
  },
  li: {
    padding: '10px',
    borderBottom: '1px solid #fff',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#FFD601',
      color: '#4d4d4d',
    },
    zIndex: 9999,
  },
  link: {
    with: '100%',
    color: '#4d4d4d',
    textDecoration: 'none',
    zIndex: 9999,
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
