import { PropTypes } from 'prop-types';
import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volví a generar :(');

  return (
    <button
      className='btn btn-dark'
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.displayName = 'ShowIncrement';

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
