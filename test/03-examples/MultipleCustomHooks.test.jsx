import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 2,
    increment: mockIncrement,
    decrement: mockDecrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('Informacion del Pokemon'));
  });

  test('Debe de mostrar un pokemon y sus imagenes', () => {
    useFetch.mockReturnValue({
      data: {
        id: '1',
        name: 'Pikachu',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    screen.debug();
    expect(screen.getByText('"Pikachu"')).toBeTruthy();
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });

  test('Debe de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: {
        id: '1',
        name: 'Pikachu',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });

  test('Debe de llamar la funcion de decrement', () => {
    useFetch.mockReturnValue({
      data: {
        id: '2',
        name: 'Pikachu',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Anterior' });
    fireEvent.click(nextButton);

    expect(mockDecrement).toHaveBeenCalled();
  });
});
