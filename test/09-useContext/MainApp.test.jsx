import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el MainApp', () => {
  test('Debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>,
    );

    const aTag = screen.getAllByRole('link');
    expect(aTag[1].className).toContain('active');
    expect(aTag[1].innerHTML).toContain('Home');
    expect(screen.getByText('HomePage App')).toBeTruthy();
  });

  test('Debe de mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>,
    );

    const aTag = screen.getAllByRole('link');
    expect(aTag[3].className).toContain('active');
    expect(aTag[3].innerHTML).toContain('Login');
    expect(screen.getByText('LoginPage App')).toBeTruthy();
  });

  test('Debe de mostrar el AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>,
    );

    const aTag = screen.getAllByRole('link');
    expect(aTag[2].className).toContain('active');
    expect(aTag[2].innerHTML).toContain('About');
    expect(screen.getByText('AboutPage App')).toBeTruthy();
  });
});
