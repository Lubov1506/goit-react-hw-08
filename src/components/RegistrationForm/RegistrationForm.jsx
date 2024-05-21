import { Field, Form, Formik } from "formik";
import s from './RegistrationForm.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
const RegistrationForm = () => {
  const dispatch = useDispatch()
  const initialValues = {
    name: '',
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(registerThunk(values));
  };
  return (
      <div className={s.form_wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h2>Register now!</h2>
            <Field type='text' name="name" placeholder="Enter your name" />
          <Field type='email' name="email" placeholder="Enter your email" />
          <Field type='password' name="password" placeholder="Enter your password" />
          <label>
            <Link to='/login'>Do you already have an account? Login!</Link>
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
