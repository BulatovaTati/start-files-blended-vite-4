import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeFilter,
  selectFilter,
} from '../../redux/filterSlice/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <input
      className={style.input}
      placeholder="Find it"
      value={filter}
      name="filter"
      onChange={handleChange}
    />
  );
};

export default Filter;
