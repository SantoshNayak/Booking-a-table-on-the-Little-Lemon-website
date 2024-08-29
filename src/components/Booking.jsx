import * as stylex from '@stylexjs/stylex';

import '../App.css';
import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';
import BookingForm from './BookingForm';

export default function Booking() {
  const width = useWindowWidth();
  const {} = useStore();

  return (
    <>
      <section {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.row, styles.grid)}>
          <h2>Book a Table</h2>
          <BookingForm />
        </div>
        <div {...stylex.props(styles.gridItem)}></div>
      </section>
    </>
  );
}

const styles = stylex.create({
  container: {
    paddingTop: 100,
    width: '100%',
    backgroundColor: '#eeeeee',
    alignItems: 'flex-start',
    display: 'flex',
    minHeight: 'calc(100vh - 80px - 160px)',
    justifyContent: 'center',

  },
  base: {
    width: {
      default: 1200,
      '@media (max-width: 800px)': '100%',
    },
  },
  grid: {
    maxWidth: '1200px',
    transition: 'all 0.3s',
    width: '100%',
    margin: '20px',
    padding: '20px',

    alignItems: 'center',
    justifyItems: 'center',
    display: 'grid',
  },
  book: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  btn: {
    color: '#000000',
    backgroundColor: '#ffb700',
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    justifyContent: 'center',
    border: 0,
    borderRadius: 8,
    width: '260px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
