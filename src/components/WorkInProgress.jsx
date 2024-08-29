import * as stylex from '@stylexjs/stylex';

import '../App.css';
import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';

export default function WorkInProgress() {
  const width = useWindowWidth();
  const {} = useStore();



  return (
    <>

      <section {...stylex.props(styles.container)}>
        <h4> Work In Progress...</h4>
      </section>
    </>
  );
}

const styles = stylex.create({

  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 80px - 160px)',
  },
  
});
