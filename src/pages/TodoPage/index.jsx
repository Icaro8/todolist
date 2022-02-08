import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { v4 as isUuid } from 'uuid';

import { Container, Form, Input, Button, ContainerHeader, ContainerContent, TodoContainer } from './styles';
import { TodoComponent } from '../../components/TodoComponent';
import { DeleteTodoComponent } from '../../components/DeleteTodo';
import { CompletTodoComponent } from '../../components/CompletTodo';

const schema = yup.object().shape({
  Todo: yup.string().min(5).required(),
});

export function TodoPage() {
  const { register, handleSubmit } = useForm();
  const [notify, setNotify] = useState(true);
  const [todos, setTodos] = useState([]);

  function handleAddNewToDo(data) {
    schema.isValid(data).then((result) => {
      const Todo = data.Todo;
      if (result) {
        const newTodo = {
          id: isUuid(),
          data: Todo,
          isComplet: false,
        };
        if (notify === true) {
          toast.success('todo adcionada com sucesso 🥰');
        }
        setTodos([...todos, newTodo]);
      } else toast.error('Precisa ter no minimo 5 caracteres 🥺');
    });
  }
  function handleTodoComplet(id) {
    const teste = todos.map((element) =>
      element.id === id
        ? {
            ...element,
            isComplet: !element.isComplet,
          }
        : element,
    );
    setTodos(teste);
  }

  function handleRemoveTodo(id) {
    const result = todos.filter((element) => element.id !== id);
    setTodos(result);
  }
  return (
    <Container>
      <button className="btn" onClick={() => setNotify(!notify)}>
        {notify ? 'Desativar Notificação' : 'Ativar Notificação'}
      </button>
      <ContainerContent>
        <ContainerHeader>
          <h1>New Todo By Icaro</h1>

          <Form onSubmit={handleSubmit(handleAddNewToDo)}>
            <Input type="text" {...register('Todo')} id="" />
            <Button type="submit">Criar</Button>
          </Form>
        </ContainerHeader>
        <div>
          {todos?.map((element) => (
            <TodoContainer key={element.id}>
              <CompletTodoComponent isComplet={element.isComplet} onClick={() => handleTodoComplet(element.id)} />
              <TodoComponent newTodo={element.data} isComplet={element.isComplet} />
              <DeleteTodoComponent onClick={() => handleRemoveTodo(element.id)} />
            </TodoContainer>
          ))}
        </div>
      </ContainerContent>
    </Container>
  );
}
