import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTodosContextUpdate, ITodo } from '../context/TodosContext';

const NewTodoForm = (): JSX.Element => {
  const updateTodos = useTodosContextUpdate();
  const addNewTodo = (text: string): void => {
    updateTodos((prev: ITodo[] | []) => {
      return [
        ...prev,
        {
          id: Date.now(),
          todo: text,
          done: false,
        },
      ];
    });
  };

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    validationSchema: Yup.object({
      todo: Yup.string()
        .max(40, 'Error: Must be 40 characters or less')
        .required('Error: Text input is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addNewTodo(values.todo);
      resetForm();
    },
  });

  return (
    <div className='NewTodoForm'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='newTodo'>Add New Todo</label>
        <input
          type='text'
          name='todo'
          id='newTodo'
          value={formik.values.todo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.todo === true && formik.errors.todo && (
          <small>{formik.errors.todo}</small>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
