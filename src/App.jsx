import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from './redux/todoSlice/todoSlice';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
