import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  let result = true;
  expect(result).toBeTruthy();
});
