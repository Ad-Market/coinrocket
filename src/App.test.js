import { render } from '@testing-library/react';
import App from './App';

const AppWrapper = () => {
  return (
    <App />
  )
}

test('renders name and slogan', () => {
  render(<AppWrapper />);
});
