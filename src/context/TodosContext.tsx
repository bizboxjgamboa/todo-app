import React, { useState, useEffect, useContext } from 'react';

export interface ITodo {
  id: string | number;
  todo: string;
  done: boolean;
}

const TodosContext = React.createContext<ITodo[]>([]);
const TodosContextUpdate = React.createContext<
  React.Dispatch<React.SetStateAction<ITodo[] | []>>
>(() => {});

export const useTodosContext = (): ITodo[] | [] => useContext(TodosContext);

export const useTodosContextUpdate = (): React.Dispatch<
  React.SetStateAction<ITodo[] | []>
> => useContext(TodosContextUpdate);

interface Props {
  children?: React.ReactNode;
}

const TodosContextProvider = ({ children }: Props): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isUpdatingLocal, setIsUpdatingLocal] = useState<boolean>(false);
console.log(todos);
  useEffect(() => {
    const todolist = localStorage.getItem('todolist');
    if (todolist === null) {
      console.log('empty');
      localStorage.setItem('todolist', JSON.stringify([]));
    } else {
      console.log('getting local');
      setTodos([...JSON.parse(todolist)]);
    }
  }, []);

  useEffect(() => {
    console.log('list state got updated');
    setIsUpdatingLocal(true);
  }, [todos]);

  useEffect(() => {
    if (isUpdatingLocal) {
      localStorage.setItem('todolist', JSON.stringify(todos));
      setIsUpdatingLocal(false);
    }
  }, [isUpdatingLocal, todos]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosContextUpdate.Provider value={setTodos}>
        {children}
      </TodosContextUpdate.Provider>
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
