import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from "../Home";

test('renders the home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/adoptadiCOs/);
});
