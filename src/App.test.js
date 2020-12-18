import { render, screen } from '@testing-library/react';
//import App from './App';
import Welcome from './Components/Welcome';

test('renders the Welcome Header', () => {
    render(<Welcome />);
    const h1Element = screen.getByText(/Welcome/i);
    expect(h1Element).toBeInTheDocument();
});
