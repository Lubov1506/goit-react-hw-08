import {  Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { LoginSchema } from "../../helpers/validateSchema";
const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    if (values.email.trim() === "" || values.password.trim() === "") {
      toast.error("Enter email and password!");
      return;
    }

    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome back, ${res.user.name}`);
        actions.resetForm();
      })
      .catch(() => toast.error("Incorrect value!"));
  };

  return (
    <div className={s.form_wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={LoginSchema}
      >
        <Form className={s.form}>
          <h2>Login</h2>
          <Field type="email" name="email" placeholder="Enter your email" />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <label>
            <Link to="/register">Do not have an account? Register!</Link>
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
