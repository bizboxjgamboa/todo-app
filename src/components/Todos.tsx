import {
  useTodosContext,
  useTodosContextUpdate,
} from '../context/TodosContext';

const Todos = (): JSX.Element => {
  const todolist = useTodosContext();
  const updateList = useTodosContextUpdate();

  const toggleTodo = (id: string | number): void => {
    updateList([
      ...todolist.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    ]);
  };

  const deleteTodo = (id: string | number): void => {
    updateList([...todolist.filter((item) => item.id !== id)]);
  };

  return (
    <div className='Todos'>
      {todolist.length === 0 ? (
        <p>empty list, good job</p>
      ) : (
        todolist.map((item) => ( 
          <div key={item.id} className='todo'>
            <button
              className='toggleCheck'
              title='toggle'
              onClick={() => toggleTodo(item.id)}
            >
              {item.done ? <>&#9989;</> : <>&#10062;</>}
            </button>
            <p className={item.done ? 'strikethrough' : ''}>{item.todo}</p>
            <button className='delete' onClick={() => deleteTodo(item.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
