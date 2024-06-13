import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/09-useContext/components/LoginPage';
import { UserContext } from '../../../src/09-useContext/context/UserContext';

describe('Pruebas en LoginPage', () => {
  test('Debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    const preTag = screen.getByLabelText('pre');
    const button = screen.getByRole('button');

    expect(preTag.innerHTML).toBe('null');
    expect(button.innerHTML).toBe('Establecer usuario');
    expect(screen.getByText('LoginPage App'));
  });

  test('Debe de llamar el setUser cuando se hace clic en el boton', () => {
    const setuserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setuserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setuserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'Robinson Betancur ',
      email: 'robinson@google.com',
    });
  });
});
