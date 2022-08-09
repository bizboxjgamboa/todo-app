import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewTodoForm = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    validationSchema: Yup.object({
      todo: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Text input is required'),
    }),
    onSubmit: (values, { resetForm} ) => {
      console.log(values);
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
