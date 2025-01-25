import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import Text from '../Text/Text';
import { selectTodos } from '../../redux/todoSlice/todoSlice';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo} counter={index + 1} />;
        })}
      </Grid>
    </>
  );
};

export default TodoList;
