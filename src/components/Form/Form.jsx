import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();

  const collectData = e => {
    e.preventDefault();
    const { elements } = e.target;

    const todo = {
      id: nanoid(6),
      value: elements.search.value,
    };

    dispatch(addTodo(todo));
    e.target.reset();
  };

  return (
    <form className={style.form} onSubmit={collectData}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
