import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

it('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, Istari/i);
  expect(linkElement).toBeInTheDocument();
});
