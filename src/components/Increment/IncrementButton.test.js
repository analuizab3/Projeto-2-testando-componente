import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IncrementButton from './IncrementButton';

test('Deve mostrar o número 1 ao ser clicado', () => {
    render(<IncrementButton />);
    const buttonIncrement = screen.getByText('Incrementar');
    fireEvent.click(buttonIncrement);
    expect(screen.getByText('Contagem: 1')).toBeInTheDocument();
});