import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCouter', () => {
  test('Debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Deberia de generarl el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Debe incremetar el contador', async () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test('Debe decrementar el contador', async () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test('Debe resetear el contador y establecerlo en el valor predefinido', async () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;

    act(() => {
      increment(5);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
