import Text from '../Text/Text';
import { deleteTodo } from '../../redux/todoSlice/todoSlice';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import GridItem from '../GridItem/GridItem';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';

const Todo = ({ id, value, counter }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{counter}
        </Text>

        <Text>{value}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
