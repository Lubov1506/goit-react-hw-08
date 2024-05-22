import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁґҐ\s']+$/, "Name can only contain letters")
    .min(3, "Name too short!")
    .max(50, "Name too long!")
    .required("Please, type your name"),
  number: Yup.string()
    .matches(/^\d{7}$/, "Number must be exactly 7 digits")
    .required("Please, type a number"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Incorrect format email")
    .required("Type email!"),
  password: Yup.string()
    .required("Type password")
    .min(6, "Password must be not shorter 6 symbols")
    .max(20, "Password too long!"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯїЇіІєЄёЁґҐ\s']+$/, "Name can only contain letters")
    .min(3, "Name too short!")
    .max(50, "Name too long!")
    .required("Please, type your name"),
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Incorrect format email")
    .required("Type email!"),
  password: Yup.string()
    .required("Type password")
    .min(6, "Password ust be not shorter 6 symbols")
    .max(20, "Too long password!"),
});
