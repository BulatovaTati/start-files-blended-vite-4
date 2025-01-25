import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import Text from '../Text/Text';
import { selectTodos } from '../../redux/todoSlice/todoSlice';
import Todo from '../Todo/Todo';
import { selectFilter } from '../../redux/filterSlice/filterSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodo = todos.filter(todo =>
    todo.value.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {filteredTodo.map((todo, index) => {
          return <Todo key={todo.id} {...todo} counter={index + 1} />;
        })}
      </Grid>
    </>
  );
};

export default TodoList;
