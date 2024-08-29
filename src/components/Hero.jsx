import * as stylex from '@stylexjs/stylex';

import '../App.css';
import hero from '../assets/hero.jpg';
import useWindowWidth from '../helper/useWindowWidth';
import { Link } from 'react-router-dom';

export default function Hero() {
  const width = useWindowWidth();

  return (
    <>
      <header {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.container)}>
                    <div {...stylex.props(styles.left)}>
                      <h1 className={`red blue bold red`}
                      >Little Lemon</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        quas, quia, quos, quod dolorum quibusdam voluptas quae
                        necessitatibus quidem repellendus voluptate doloremque
                      </p>
                      <Link {...stylex.props(styles.btn)} to="/booking">Reserve Table</Link>

                    </div>
          {width > 860 && (
            <div {...stylex.props(styles.right)}>
              <img
                src={hero}
                alt="hero"
                style={{
                  width: '360px',
                  height: '360px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

const styles = stylex.create({
  btn: {
    height: '40px',
    marginTop: '20px',
    maxWidth: '200px',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    color: '#434343',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    height: '100%',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    paddingHorizontal: '16px',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#495D56',
    display: 'flex',
    height: '400px',
    justifyContent: 'center',
    marginBottom: '7rem',
    paddingTop: '80px',
  },
  left: {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    //backgroundColor: 'red',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#474747',
    borderRadius: '5px',
    height: '2px',
    marginVertical: '5px',
    width: '24px',
  },
  nav: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    paddingTop: '120px',
  },
});
