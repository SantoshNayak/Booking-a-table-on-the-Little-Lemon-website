import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import * as stylex from '@stylexjs/stylex';

import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import WorkInProgress from './components/WorkInProgress';
import useWindowWidth from './helper/useWindowWidth';
import { useStore } from './store';

function App() {
  const width = useWindowWidth();
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<WorkInProgress />} />
          <Route path="/about-us" element={<WorkInProgress />} />
          <Route path="/contact" element={<WorkInProgress />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

const styles = stylex.create({});
