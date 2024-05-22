import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import AuthForm from "../AuthForm/AuthForm";

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
    actions.setSubmitting(false);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome back, ${res.user.name}`);
        actions.resetForm();
      })
      .catch(() => toast.error("Incorrect value!"));
  };

  return (
    <AuthForm
      initialValues={initialValues}
      type="login"
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
