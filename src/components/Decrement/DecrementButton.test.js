import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DecrementButton from './DecrementButton';

test('Deve mostrar o número -1 ao ser clicado', () => {
    render(<DecrementButton />);
    const buttonDecrement = screen.getByText('Decrementar');
    fireEvent.click(buttonDecrement);
    expect(screen.getByText('Contagem: -1')).toBeInTheDocument();
});