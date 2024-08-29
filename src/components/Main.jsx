import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

import '../App.css';
import Hero from '../components/Hero';
import useWindowWidth from '../helper/useWindowWidth';
import { useStore } from '../store';

export default function Main() {
  const width = useWindowWidth();
  const {} = useStore();

  const foodList = [
    {
      name: 'Burger',
      description:
        'A delicious and juicy burger made with fresh ingredients, including a beef patty, lettuce, tomato, cheese, and a special sauce.',
      price: 10,
      imageUrl:
        'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Pizza',
      description:
        'A classic Italian pizza topped with mozzarella cheese, fresh basil, tomatoes, and a rich tomato sauce, baked to perfection.',
      price: 15,
      imageUrl:
        'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Steak',
      description:
        'A succulent and tender steak, grilled to your liking and served with a side of garlic butter and seasonal vegetables.',
      price: 20,
      imageUrl:
        'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Salad',
      description:
        'A fresh and healthy salad made with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette dressing.',
      price: 5,
      imageUrl:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Pasta',
      description:
        'A delicious pasta dish made with al dente spaghetti, a rich and creamy Alfredo sauce, and topped with grated Parmesan cheese.',
      price: 12,
      imageUrl:
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      name: 'Soup',
      description:
        'A warm and comforting bowl of soup, made with fresh vegetables, tender chicken, and a flavorful broth.',
      price: 7,
      imageUrl:
        'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ];

  const FoodItem = ({ name, description, price, imageUrl }) => {
    return (
      <div {...stylex.props(styles.row, styles.gridItem)}>
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: '100%',
            height: '200px',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
        />
        <div {...stylex.props(styles.cardPadding)}>
          <h3 {...stylex.props(styles.cardTitle)}>{name}</h3>
          <div {...stylex.props(styles.paragraphContainer)}>
          <p {...stylex.props(styles.paragraph)}>{description}</p>
          </div>
        </div>
        <div {...stylex.props(styles.cardPadding)}>
          <p {...stylex.props(styles.price)}>${price}</p>
        </div>
      </div>
    );
  };
  FoodItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  return (
    <>
      <Hero />
      <section {...stylex.props(styles.container)}>
        <div
          {...stylex.props(
            styles.row,
            styles.grid,
            width < 1220 && styles.grid2,
            width < 620 && styles.grid3,
            { paddingBottom: 20 },
          )}
        >
          {foodList.map(item => (
            <FoodItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
          {foodList.map(item => (
            <FoodItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const styles = stylex.create({
  base: {
    width: {
      default: 1200,
      '@media (max-width: 800px)': '100%',
    },
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
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
  },
  cardPadding: {
    paddingHorizontal: '8px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: 0,
    textAlign: 'left',
    margin: 0,
  },
  col: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  dynamicStyle: value => ({
    opacity: value,
  }),
  grid: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    maxWidth: '1200px',
    paddingHorizontal: '20px',
    transition: 'all 0.3s',
    width: '100%',
  },
  grid2: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  grid3: {
    gap: '8px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    paddingHorizontal: '8px',
  },
  gridItem: {
    backgroundColor: '#f2f0f0',
    color: '#484848',
    display: 'flex',
    alignItems: 'space-between',
    height: '360px',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: '14px',
    padding: 0,
    textAlign: 'left',
    margin: 0
  },
  paragraphContainer: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    //whiteSpace: 'nowrap',
    //height: 'auto',
    maxHeight: '60px',
    padding: 0.
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: 0,
    marginBottom: '8px',
    marginTop: 'auto',
    textAlign: 'right',
  },
});
