import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is/i);
  const another = screen.getAllByTestId("my-id");
  
  expect(another).toHaveTextContent();
  expect(linkElement).toBeInTheDocument();
});
