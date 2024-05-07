// App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Import your main React component

test('renders app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Pi42/i);
  expect(linkElement).toBeInTheDocument();
});
