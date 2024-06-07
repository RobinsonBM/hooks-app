import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage App</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className='btn btn-dark'
        onClick={() =>
          setUser({
            id: 123,
            name: 'Robinson Betancur ',
            email: 'robinson@google.com',
          })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
