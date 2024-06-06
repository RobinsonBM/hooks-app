import PropTypes from 'prop-types';
import { UserContext } from './UserContext';

const user = {
  id: 1,
  name: 'Robinson Betancur',
  email: 'robtencur.mv@gmail.com',
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
