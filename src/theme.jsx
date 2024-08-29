import * as stylex from '@stylexjs/stylex';

export const theme = stylex.create({
  grid: {
    display: 'grid',
    transition: 'all 0.3s',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    width: '100%',
    paddingHorizontal: '20px',
  },
  grid2: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    //paddingHorizontal: '20px',
  },
  grid3: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    paddingHorizontal: '8px',
    gap: '8px',
  },
  gridItem: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    height: '120px',
    //width: 200,
    //flex: 1,
    //width: '100%',
  },
  base: {
    width: {
      default: 1200,
      '@media (max-width: 800px)': '100%',
      //'@media (min-width: 1540px)': 1366,
      //'@media (min-width: 1920px)': 1920,
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: {
      default: '#213663',
      ':hover': '#316FF6',
      ':active': '#DC31F6',
    },
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
  },
  dynamicStyle: value => ({
    opacity: value,
  }),
});
