import LoginForm from "../../components/LoginForm/LoginForm"
import s from './LoginForm.module.css'
const LoginPage = () => {
  return (
    <div className={s.form_wrapper}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage