import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCurrentTodo,
  selectCurrentTodo,
  updateTodo,
} from '../../redux/todoSlice/todoSlice';

const EditForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value;
    dispatch(updateTodo(value));
  };

  const dispatch = useDispatch();
  const todo = useSelector(selectCurrentTodo);
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.value}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(changeCurrentTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
