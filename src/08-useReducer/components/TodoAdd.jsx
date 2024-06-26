import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        name='description'
        onChange={onInputChange}
        value={description}
      />
      <button type='submit' className='btn btn-outline-dark mt-1'>
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
