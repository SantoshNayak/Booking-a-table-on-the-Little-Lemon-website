import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Hero from './src/components/Hero';
import Nav from './src/components/Nav';

describe('Hero section button test', () => {
  it('check if Reserve Table button in the hero section navigate to the booking page correctly', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    );

    const link = getByText('Reserve Table');
    fireEvent.click(link);

    const url = window.location.href;
    expect(url).toBe('http://localhost:3000/booking');
  });
});

describe('Nav section button test', () => {
  it('check if the logo in the nav section navigate to the home page correctly', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );

    const logo = getByText('Booking');
    fireEvent.click(logo);

    const url = window.location.href;
    expect(url).toBe('http://localhost:3000/booking');
  });
});
