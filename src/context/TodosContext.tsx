import React, { useState, useEffect, useContext } from 'react';

interface ITodo {
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

  useEffect(() => {
    // setTodos([
    //   {
    //     id: 1,
    //     todo: 'play dota 2',
    //     done: false
    //   }
    // ]);
    const todolist = localStorage.getItem('todolist');
    if (todolist === null) {
      console.log('empty')
      // localStorage.setItem('todolist')

    }

  }, []);

  return (
    <TodosContext.Provider value={todos}>
      <TodosContextUpdate.Provider value={setTodos}>
        {children}
      </TodosContextUpdate.Provider>
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
