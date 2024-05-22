import { Field, Form, Formik } from "formik";
import s from "./AuthForm.module.css";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { LoginSchema, RegisterSchema } from "../../helpers/validateSchema";

const AuthForm = ({ initialValues, handleSubmit, type }) => {
  const handleValidationErrors = (errors) => {
    toast.error(Object.values(errors)[0]);
  };
  return (
    <div className={s.form_wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={type === "register" ? RegisterSchema : LoginSchema}
        validate={(values) => {
          try {
            (type === "register" ? RegisterSchema : LoginSchema).validateSync(
              values,
              { abortEarly: false }
            );
            return {};
          } catch (error) {
            const errors = error.inner.reduce((acc, curr) => {
              acc[curr.path] = curr.message;
              return acc;
            }, {});
            handleValidationErrors(errors);
            return errors;
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <h2>{type === "register" ? "Register now!" : "Log In"}</h2>
            {type === "register" && (
              <Field type="text" name="name" placeholder="Enter your name" />
            )}
            <Field type="text" name="email" placeholder="Enter your email" />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <label>
              <Link to={type === "register" ? "/login" : "/register"}>
                {type === "register"
                  ? "Do you already have an account? Login!"
                  : "Do not have an account? Register!"}
              </Link>
            </label>
            <button type="submit" disabled={isSubmitting}>
              {type === "login" ? "Log In" : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
