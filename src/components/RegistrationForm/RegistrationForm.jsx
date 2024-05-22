import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import AuthForm from "../AuthForm/AuthForm";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => actions.resetForm())
      .catch(() => toast.error("User already exist!"));
  };

  return (
    <AuthForm
      initialValues={initialValues}
      type="register"
      handleSubmit={handleSubmit}
    />
  );
};

export default RegistrationForm;
